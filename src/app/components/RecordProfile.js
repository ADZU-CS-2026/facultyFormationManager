"use client";

import { useState } from "react";
import fetchUserId from "@/app/fetch/fetchUserId";
import fetchRecordRetreatId from "@/app/fetch/fetchRecordRetreatId";
import fetchAccountData from "@/app/fetch/fetchAccountData";
import { fetchUpdateRecord } from "@/app/fetch/fetchUpdateRecord";
import { fetchUpdateRetreat } from "@/app/fetch/fetchUpdateRetreat";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useToast } from "./Toast";

export default function RecordProfile({ id }) {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { addToast } = useToast();

  // Edit mode state
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState({});
  const [retreatEditForm, setRetreatEditForm] = useState({});
  const [saving, setSaving] = useState(false);

  // Fetch current user account for role
  const { data: account } = useQuery({
    queryKey: ["account"],
    queryFn: fetchAccountData,
  });

  const isAdmin = account?.[0]?.role === "ADMINISTRATOR";

  const {
    data: user,
    isFetching: userFetching,
    isError: userError,
  } = useQuery({
    queryKey: ["recordid", id],
    queryFn: async () => await fetchUserId(id),
  });

  const {
    data: retreat,
    isFetching: retreatFetching,
    isError: retreatError,
  } = useQuery({
    queryKey: ["recordretreatid", id],
    queryFn: async () => await fetchRecordRetreatId(id),
  });

  const DGY1 = retreat?.find((data) => data.retreat_type === "DGY1");
  const DGY2 = retreat?.find((data) => data.retreat_type === "DGY2");
  const DGY3 = retreat?.find((data) => data.retreat_type === "DGY3");
  const DGY41 = retreat?.find((data) => data.retreat_type === "DGY4.1_IMC");
  const DGY42 = retreat?.find(
    (data) => data.retreat_type === "DGY4.2_3D_Retreat"
  );
  const DGY51 = retreat?.find((data) => data.retreat_type === "DGY5.1_IPC");
  const DGY52 = retreat?.find(
    (data) => data.retreat_type === "DGY5.2_3D_Retreat"
  );
  const SD = retreat?.find((data) => data.retreat_type === "SD");

  // School years for 3D Retreat display
  const schoolYears = [
    "2023-2024",
    "2024-2025",
    "2025-2026",
    "2026-2027",
    "2027-2028",
    "2028-2029",
  ];

  // Helper to find 3D Retreat data for a specific school year
  const get3DRetreatForYear = (year) => {
    return retreat?.find(
      (data) => data.retreat_type === "3D_Retreat" && data.school_year === year
    );
  };

  // Helper to find PPO school year data
  const getPPOForYear = (year) => {
    return retreat?.find(
      (data) => data.school_year === year
    );
  };

  // Initialize edit form when user data loads
  const initEditForm = () => {
    if (user?.[0]) {
      setEditForm({
        first_name: user[0].first_name || "",
        last_name: user[0].last_name || "",
        middle_initial: user[0].middle_initial || "",
        department: user[0].department || "",
        position: user[0].position || "",
        office: user[0].office || "",
        status: user[0].status || "",
        work_status: user[0].work_status || "Active",
      });
    }
    // Initialize retreat edit form with existing retreat data
    if (retreat && Array.isArray(retreat)) {
      const retreatEdits = {};
      retreat.forEach((r) => {
        retreatEdits[r.id] = {
          start_date: r.start_date ? r.start_date.split("T")[0] : "",
          completion_date: r.completion_date ? r.completion_date.split("T")[0] : "",
          attendance_status: r.attendance_status || "",
        };
      });
      setRetreatEditForm(retreatEdits);
    }
  };

  // Handle retreat form changes
  const handleRetreatChange = (retreatId, field, value) => {
    setRetreatEditForm((prev) => ({
      ...prev,
      [retreatId]: {
        ...prev[retreatId],
        [field]: value,
      },
    }));
  };

  // Get original retreat data for comparison
  const getOriginalRetreat = (retreatId) => {
    return retreat?.find((r) => r.id === retreatId);
  };

  // Check if a specific retreat has changes
  const hasRetreatChanges = (retreatId) => {
    const original = getOriginalRetreat(retreatId);
    const edited = retreatEditForm[retreatId];
    if (!original || !edited) return false;

    const origStart = original.start_date ? original.start_date.split("T")[0] : "";
    const origEnd = original.completion_date ? original.completion_date.split("T")[0] : "";
    const origStatus = original.attendance_status || "";

    return (
      edited.start_date !== origStart ||
      edited.completion_date !== origEnd ||
      edited.attendance_status !== origStatus
    );
  };

  // Handle edit button click
  const handleEditClick = () => {
    initEditForm();
    setIsEditing(true);
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle cancel edit
  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditForm({});
    setRetreatEditForm({});
  };

  // Handle save - user data and retreat data
  const handleSave = async () => {
    setSaving(true);

    try {
      // Check if there are actual user data changes
      const originalUser = user[0];
      const hasUserChanges =
        editForm.first_name !== (originalUser.first_name || "") ||
        editForm.last_name !== (originalUser.last_name || "") ||
        editForm.middle_initial !== (originalUser.middle_initial || "") ||
        editForm.department !== (originalUser.department || "") ||
        editForm.position !== (originalUser.position || "") ||
        editForm.office !== (originalUser.office || "") ||
        editForm.status !== (originalUser.status || "") ||
        editForm.work_status !== (originalUser.work_status || "Active");

      // Find retreat records with changes
      const retreatChanges = [];
      Object.keys(retreatEditForm).forEach((retreatId) => {
        if (hasRetreatChanges(parseInt(retreatId))) {
          retreatChanges.push({
            id: parseInt(retreatId),
            ...retreatEditForm[retreatId],
          });
        }
      });

      const hasAnyChanges = hasUserChanges || retreatChanges.length > 0;

      if (!hasAnyChanges) {
        addToast("No changes to save.", "warning");
        setIsEditing(false);
        setEditForm({});
        setRetreatEditForm({});
        setSaving(false);
        return;
      }

      let userSaveResult = null;
      let retreatSaveResults = [];
      let hasDirectSave = false;
      let hasPendingSave = false;

      // Save user data changes if any
      if (hasUserChanges) {
        userSaveResult = await fetchUpdateRecord({
          id: user[0].id,
          ...editForm,
        });

        if (userSaveResult.success) {
          if (userSaveResult.isDirectSave) {
            hasDirectSave = true;
          } else {
            hasPendingSave = true;
          }
        }
      }

      // Save retreat data changes if any
      for (const retreatChange of retreatChanges) {
        try {
          const result = await fetchUpdateRetreat(retreatChange);
          retreatSaveResults.push({ id: retreatChange.id, result });
          if (result.success) {
            if (result.isDirectSave) {
              hasDirectSave = true;
            } else {
              hasPendingSave = true;
            }
          }
        } catch (err) {
          console.error(`Error saving retreat ${retreatChange.id}:`, err);
          retreatSaveResults.push({ id: retreatChange.id, error: err });
        }
      }

      // Invalidate queries to refresh data
      queryClient.invalidateQueries(["recordid", id]);
      queryClient.invalidateQueries(["recordretreatid", id]);

      // Show appropriate toast messages
      if (hasDirectSave && hasPendingSave) {
        addToast("Some changes saved directly, others pending admin approval.", "info");
      } else if (hasDirectSave) {
        addToast("All changes saved successfully!", "success");
      } else if (hasPendingSave) {
        addToast("Changes saved as pending. Submit for admin approval in My Changes.", "info");
      } else {
        addToast("Failed to save changes. Please try again.", "danger");
      }
    } catch (error) {
      console.error("Save error:", error);
      addToast("An error occurred while saving.", "danger");
    }

    setIsEditing(false);
    setEditForm({});
    setRetreatEditForm({});
    setSaving(false);
  };

  // Department options
  const departmentOptions = [
    "CS",
    "Admin",
    "CONN",
    "FFP",
    "PPO",
    "SED",
    "SLA",
    "SMA",
    "CSITE",
  ];

  // Attendance status options
  const attendanceStatusOptions = ["Present", "Absent"];

  // Render retreat row - with editing support
  const renderRetreatRow = (retreatData, label) => {
    // No data exists - show empty row (no editing for non-existent records)
    if (!retreatData) {
      return (
        <tr>
          <td className="text-start text-muted">{label}</td>
          <td className="text-center text-muted">-</td>
          <td className="text-center text-muted">-</td>
        </tr>
      );
    }

    const retreatId = retreatData.id;
    const editData = retreatEditForm[retreatId] || {};

    // Editing mode
    if (isEditing) {
      return (
        <tr>
          <td className="text-start text-muted">{label}</td>
          <td className="text-center">
            <div className="d-flex gap-1 justify-content-center align-items-center">
              <input
                type="date"
                value={editData.start_date || ""}
                onChange={(e) => handleRetreatChange(retreatId, "start_date", e.target.value)}
                className="form-control form-control-sm"
                style={{ width: "130px" }}
              />
              <span>-</span>
              <input
                type="date"
                value={editData.completion_date || ""}
                onChange={(e) => handleRetreatChange(retreatId, "completion_date", e.target.value)}
                className="form-control form-control-sm"
                style={{ width: "130px" }}
              />
            </div>
          </td>
          <td className="text-center">
            <select
              value={editData.attendance_status || ""}
              onChange={(e) => handleRetreatChange(retreatId, "attendance_status", e.target.value)}
              className="form-select form-select-sm"
              style={{ width: "120px", margin: "0 auto" }}
            >
              <option value="">-</option>
              {attendanceStatusOptions.map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>
          </td>
        </tr>
      );
    }

    // Display mode
    return (
      <tr>
        <td className="text-start text-muted">{label}</td>
        <td className="text-center text-muted">
          {retreatData?.start_date && retreatData?.completion_date
            ? `${retreatData.start_date.split("T")[0]} - ${retreatData.completion_date.split("T")[0]}`
            : "-"}
        </td>
        <td className="text-center text-muted">
          {retreatData?.attendance_status || "-"}
        </td>
      </tr>
    );
  };

  // Render school year retreat row (for 3D Retreat/PPO by year) - with editing support
  const renderSchoolYearRetreatRow = (year, label, getDataFn) => {
    const retreatData = getDataFn(year);

    // No data exists - show empty row (no editing for non-existent records)
    if (!retreatData) {
      return (
        <tr key={year}>
          <td className="text-start text-muted">{label}</td>
          <td className="text-center text-muted">-</td>
          <td className="text-center text-muted">-</td>
        </tr>
      );
    }

    const retreatId = retreatData.id;
    const editData = retreatEditForm[retreatId] || {};

    // Editing mode
    if (isEditing) {
      return (
        <tr key={year}>
          <td className="text-start text-muted">{label}</td>
          <td className="text-center">
            <div className="d-flex gap-1 justify-content-center align-items-center">
              <input
                type="date"
                value={editData.start_date || ""}
                onChange={(e) => handleRetreatChange(retreatId, "start_date", e.target.value)}
                className="form-control form-control-sm"
                style={{ width: "130px" }}
              />
              <span>-</span>
              <input
                type="date"
                value={editData.completion_date || ""}
                onChange={(e) => handleRetreatChange(retreatId, "completion_date", e.target.value)}
                className="form-control form-control-sm"
                style={{ width: "130px" }}
              />
            </div>
          </td>
          <td className="text-center">
            <select
              value={editData.attendance_status || ""}
              onChange={(e) => handleRetreatChange(retreatId, "attendance_status", e.target.value)}
              className="form-select form-select-sm"
              style={{ width: "120px", margin: "0 auto" }}
            >
              <option value="">-</option>
              {attendanceStatusOptions.map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>
          </td>
        </tr>
      );
    }

    // Display mode
    return (
      <tr key={year}>
        <td className="text-start text-muted">{label}</td>
        <td className="text-center text-muted">
          {retreatData?.start_date && retreatData?.completion_date
            ? `${retreatData.start_date.split("T")[0]} - ${retreatData.completion_date.split("T")[0]}`
            : "-"}
        </td>
        <td className="text-center text-muted">
          {retreatData?.attendance_status || "-"}
        </td>
      </tr>
    );
  };

  return (
    <>
      <>
        {/* Back Button and Edit Button */}
        <div className="mb-3 d-flex justify-content-between align-items-center">
          <button
            onClick={() => router.back()}
            className="btn btn-sm bg-gray2 text-light d-flex align-items-center gap-2"
            style={{ border: "1px solid #444" }}
          >
            <FontAwesomeIcon icon="fa-solid fa-arrow-left" className="small" />
            <span>Back</span>
          </button>

          {!isEditing && (
            <button
              onClick={handleEditClick}
              className="btn btn-sm btn-warning d-flex align-items-center gap-2"
            >
              <FontAwesomeIcon
                icon="fa-solid fa-pen-to-square"
                className="small"
              />
              <span>Edit</span>
            </button>
          )}
        </div>

        {/* Edit Mode Banner */}
        {isEditing && (
          <div className="alert alert-warning py-2 mb-3 d-flex justify-content-between align-items-center">
            <div>
              <FontAwesomeIcon icon="fa-solid fa-edit" className="me-2" />
              <strong>Edit Mode</strong>
              {!isAdmin && (
                <span className="ms-2 small">
                  (Changes will be saved as pending for admin approval)
                </span>
              )}
            </div>
            <div className="d-flex gap-2">
              <button
                onClick={handleCancelEdit}
                className="btn btn-sm btn-outline-secondary"
                disabled={saving}
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="btn btn-sm btn-success"
                disabled={saving}
              >
                {saving ? (
                  <>
                    <span className="spinner-border spinner-border-sm me-1"></span>
                    Saving...
                  </>
                ) : (
                  <>
                    <FontAwesomeIcon icon="fa-solid fa-save" className="me-1" />
                    Save Changes
                  </>
                )}
              </button>
            </div>
          </div>
        )}

        <div className="row fs-5 d-flex align-items-center justify-content-end">
          <div className="col-md-4 col-12 d-flex justify-content-center">
            {isEditing ? (
              <div className="d-flex gap-2 align-items-center">
                <input
                  type="text"
                  name="first_name"
                  value={editForm.first_name}
                  onChange={handleInputChange}
                  className="form-control form-control-sm"
                  placeholder="First Name"
                  style={{ width: "120px" }}
                />
                <input
                  type="text"
                  name="last_name"
                  value={editForm.last_name}
                  onChange={handleInputChange}
                  className="form-control form-control-sm"
                  placeholder="Last Name"
                  style={{ width: "120px" }}
                />
                <input
                  type="text"
                  name="middle_initial"
                  value={editForm.middle_initial}
                  onChange={handleInputChange}
                  className="form-control form-control-sm"
                  placeholder="M.I."
                  style={{ width: "50px" }}
                />
              </div>
            ) : (
              `${user?.[0]?.id} - ${user?.[0]?.last_name}, ${user?.[0]?.first_name
              } ${user?.[0]?.middle_initial || ""}`
            )}
          </div>
          <div className="col-md-4 col-12 fs-6 d-flex justify-content-md-end justify-content-center align-items-center gap-2">
            {isEditing ? (
              <select
                name="work_status"
                value={editForm.work_status}
                onChange={handleInputChange}
                className="form-select form-select-sm"
                style={{ width: "120px" }}
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
                <option value="On Leave">On Leave</option>
                <option value="Retired">Retired</option>
              </select>
            ) : (
              <>
                <div
                  className={`${user?.[0]?.work_status === "Active" ? "bg-green" : "bg-red"
                    } rounded-pill`}
                  style={{ width: "10px", height: "10px" }}
                ></div>
                {user?.[0]?.work_status}
              </>
            )}
          </div>
        </div>

        <div className="row text-wrap g-4 mt-4">
          <div className="col-12 col-md-3">
            <div className="table-responsive">
              <table className="table small table-bordered table-striped table-hover align-middle">
                <thead className="border">
                  <tr className="text-start">
                    <th className="bg-tableheadergray" colSpan="2">
                      Title
                    </th>
                  </tr>
                </thead>
                {user?.[0]?.department === "Admin" ||
                  user?.[0]?.department === "CS" ? (
                  <tbody>
                    <tr>
                      <td className="text-start text-muted">Department</td>
                      <td className="text-center text-muted">
                        {isEditing ? (
                          <select
                            name="department"
                            value={editForm.department}
                            onChange={handleInputChange}
                            className="form-select form-select-sm"
                          >
                            {departmentOptions.map((dept) => (
                              <option key={dept} value={dept}>
                                {dept}
                              </option>
                            ))}
                          </select>
                        ) : (
                          user?.[0]?.department
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td className="text-start text-muted">Position</td>
                      <td className="text-center text-muted">
                        {isEditing ? (
                          <input
                            type="text"
                            name="position"
                            value={editForm.position}
                            onChange={handleInputChange}
                            className="form-control form-control-sm"
                            placeholder="Position"
                          />
                        ) : (
                          user?.[0]?.position
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td className="text-start text-muted">Office</td>
                      <td className="text-center text-muted">
                        {isEditing ? (
                          <input
                            type="text"
                            name="office"
                            value={editForm.office}
                            onChange={handleInputChange}
                            className="form-control form-control-sm"
                            placeholder="Office"
                          />
                        ) : (
                          user?.[0]?.office
                        )}
                      </td>
                    </tr>
                  </tbody>
                ) : (
                  ""
                )}
                {user?.[0]?.department === "PPO" && (
                  <tbody>
                    <tr>
                      <td className="text-start text-muted">Department</td>
                      <td className="text-center text-muted">
                        {isEditing ? (
                          <select
                            name="department"
                            value={editForm.department}
                            onChange={handleInputChange}
                            className="form-select form-select-sm"
                          >
                            {departmentOptions.map((dept) => (
                              <option key={dept} value={dept}>
                                {dept}
                              </option>
                            ))}
                          </select>
                        ) : (
                          user?.[0]?.department
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td className="text-start text-muted">Status</td>
                      <td className="text-center text-muted">
                        {isEditing ? (
                          <input
                            type="text"
                            name="status"
                            value={editForm.status}
                            onChange={handleInputChange}
                            className="form-control form-control-sm"
                            placeholder="Status"
                          />
                        ) : (
                          user?.[0]?.status
                        )}
                      </td>
                    </tr>
                  </tbody>
                )}
                {user?.[0]?.department !== "PPO" &&
                  user?.[0]?.department !== "Admin" &&
                  user?.[0]?.department !== "CS" && (
                    <tbody>
                      <tr>
                        <td className="text-start text-muted">Department</td>
                        <td className="text-center text-muted">
                          {isEditing ? (
                            <select
                              name="department"
                              value={editForm.department}
                              onChange={handleInputChange}
                              className="form-select form-select-sm"
                            >
                              {departmentOptions.map((dept) => (
                                <option key={dept} value={dept}>
                                  {dept}
                                </option>
                              ))}
                            </select>
                          ) : (
                            user?.[0]?.department
                          )}
                        </td>
                      </tr>
                    </tbody>
                  )}
              </table>
            </div>
          </div>

          <div className="col-12 col-md-9">
            <div className="table-responsive">
              <table className="table small table-bordered table-striped table-hover align-middle">
                <thead className="border">
                  <tr className="text-start">
                    <th className="bg-tableheadergray">Retreat Type</th>
                    <th className="bg-tableheadergray">Attendance Date</th>
                    <th className="bg-tableheadergray">Attendance Status</th>
                  </tr>
                </thead>
                <tbody>
                  {/* CS Department - DGY progression + SD */}
                  {user?.[0]?.department === "CS" && (
                    <>
                      {renderRetreatRow(DGY1, "DGY1")}
                      {renderRetreatRow(DGY2, "DGY2")}
                      {renderRetreatRow(DGY3, "DGY3")}
                      {renderRetreatRow(DGY41, "DGY4.1 IMC")}
                      {renderRetreatRow(DGY42, "DGY4.2 3D Retreat")}
                      {renderRetreatRow(DGY51, "DGY5.1 IPC")}
                      {renderRetreatRow(DGY52, "DGY5.2 3D Retreat")}
                      {renderRetreatRow(SD, "SD")}
                    </>
                  )}

                  {/* Admin Department - DGY2, DGY3 + 3D Retreats by school year */}
                  {user?.[0]?.department === "Admin" && (
                    <>
                      {renderRetreatRow(DGY2, "DGY2")}
                      {renderRetreatRow(DGY3, "DGY3")}
                      {schoolYears.map((year) =>
                        renderSchoolYearRetreatRow(year, `3D Retreat SY ${year}`, get3DRetreatForYear)
                      )}
                    </>
                  )}

                  {/* PPO Department - School Year entries */}
                  {user?.[0]?.department === "PPO" && (
                    <>
                      {schoolYears.filter(y => y !== "2023-2024").map((year) =>
                        renderSchoolYearRetreatRow(year, `School Year ${year}`, getPPOForYear)
                      )}
                    </>
                  )}

                  {/* FFP, CONN, CSITE, SED, SLA, SMA - 3D Retreats by school year only */}
                  {(user?.[0]?.department === "FFP" ||
                    user?.[0]?.department === "CONN" ||
                    user?.[0]?.department === "CON" ||
                    user?.[0]?.department === "CSITE" ||
                    user?.[0]?.department === "SED" ||
                    user?.[0]?.department === "SLA" ||
                    user?.[0]?.department === "SMA") && (
                      <>
                        {schoolYears.map((year) =>
                          renderSchoolYearRetreatRow(year, `3D Retreat SY ${year}`, get3DRetreatForYear)
                        )}
                      </>
                    )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </>
    </>
  );
}
