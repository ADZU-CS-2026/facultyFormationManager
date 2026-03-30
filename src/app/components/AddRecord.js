"use client";
import { useQuery } from "@tanstack/react-query";
import { queryClient } from "@/app/react-query";
import { useState } from "react";
import fetchCreateRecord from "@/app/fetch/fetchCreateRecord";
import fetchAccountData from "@/app/fetch/fetchAccountData";

const createEmptyRow = () => ({
  first_name: "",
  last_name: "",
  middle_initial: "",
  department: "",
  position: "",
  office: "",
  status: "",
  school_year: "",
});

const DEPARTMENT_OPTIONS = [
  { value: "Admin", label: "Administrator" },
  { value: "FFP", label: "Freshmen Formation Office" },
  { value: "CON", label: "College of Nursing" },
  {
    value: "CSITE",
    label: "College of Science and Information Technology and Engineering",
  },
  { value: "SED", label: "School of Education" },
  { value: "SLA", label: "School of Liberal Arts" },
  { value: "SMA", label: "School of Management and Accountancy" },
  { value: "CS", label: "Central Services" },
  { value: "PPO", label: "Physical Plant Personnel" },
];

export default function AddRecord() {
  const [rows, setRows] = useState(Array.from({ length: 5 }, () => createEmptyRow()));
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Get user role
  const { data: accountData } = useQuery({
    queryKey: ["account"],
    queryFn: fetchAccountData,
  });

  const isStaff = accountData?.[0]?.role === "STAFF";

  let currentYear = new Date().getFullYear();
  const setAddRecordSchoolYears = [];
  let current = currentYear;

  for (let y = 0; y < 3; y++) {
    let year = current;
    let nextYear = year + 1;
    setAddRecordSchoolYears.push(`${year}-${nextYear}`);
    --current;
  }

  const isRowEmpty = (row) => {
    return !Object.values(row).some((value) => `${value ?? ""}`.trim() !== "");
  };

  const updateRow = (rowIndex, field, value) => {
    setRows((prev) => {
      const nextRows = prev.map((row, index) => {
        if (index !== rowIndex) return row;
        const nextValue = field === "middle_initial" ? value.toUpperCase().slice(0, 1) : value;
        return { ...row, [field]: nextValue };
      });

      const isEditingLastRow = rowIndex === prev.length - 1;
      const shouldGrow = prev.length >= 5 && isEditingLastRow && !isRowEmpty(nextRows[rowIndex]);

      if (shouldGrow) {
        nextRows.push(createEmptyRow());
      }

      return nextRows;
    });
  };

  const addRow = () => {
    setRows((prev) => [...prev, createEmptyRow()]);
  };

  const removeRow = (rowIndex) => {
    setRows((prev) => prev.filter((_, index) => index !== rowIndex));
  };

  const validateRow = (row, rowNumber) => {
    if (!row.first_name.trim()) return `Row ${rowNumber}: First Name is required.`;
    if (!row.last_name.trim()) return `Row ${rowNumber}: Last Name is required.`;
    if (!row.middle_initial.trim()) return `Row ${rowNumber}: Middle Initial is required.`;
    if (!row.department) return `Row ${rowNumber}: Department is required.`;
    if (!row.school_year) return `Row ${rowNumber}: School Year is required.`;

    if ((row.department === "Admin" || row.department === "CS") && !row.position.trim()) {
      return `Row ${rowNumber}: Position is required for ${row.department}.`;
    }

    if ((row.department === "Admin" || row.department === "CS") && !row.office.trim()) {
      return `Row ${rowNumber}: Office is required for ${row.department}.`;
    }

    if (row.department === "PPO" && !row.status.trim()) {
      return `Row ${rowNumber}: Status is required for PPO.`;
    }

    return null;
  };

  async function addRecord(e) {
    e.preventDefault();
    setIsError(false);
    setIsDone(false);
    setIsPending(false);

    const activeRows = rows
      .map((row, index) => ({ ...row, rowNumber: index + 1 }))
      .filter((row) => !isRowEmpty(row));

    if (activeRows.length === 0) {
      setIsError(true);
      setIsDone(true);
      setMessage("Please fill in at least one row before submitting.");
      return;
    }

    for (const row of activeRows) {
      const rowError = validateRow(row, row.rowNumber);
      if (rowError) {
        setIsError(true);
        setIsDone(true);
        setMessage(rowError);
        return;
      }
    }

    setIsSubmitting(true);

    let successCount = 0;
    let pendingCount = 0;
    const failedRows = [];

    for (const row of activeRows) {
      try {
        const res = await fetchCreateRecord({
          first_name: row.first_name.trim(),
          last_name: row.last_name.trim(),
          middle_initial: row.middle_initial.trim(),
          department: row.department,
          position: row.position.trim(),
          office: row.office.trim(),
          status: row.status.trim(),
          school_year: row.school_year,
        });

        if (res.isDirectSave) {
          successCount += 1;
        } else {
          pendingCount += 1;
        }
      } catch (error) {
        const errorMessage =
          error?.response?.data?.message || error?.message || "Error creating record";
        failedRows.push(`Row ${row.rowNumber}: ${errorMessage}`);
      }
    }

    queryClient.refetchQueries();
    queryClient.invalidateQueries({ queryKey: ["myDrafts"] });

    setIsSubmitting(false);
    setIsDone(true);

    if (failedRows.length === 0) {
      setIsError(false);
      setIsPending(pendingCount > 0);
      if (pendingCount > 0 && successCount > 0) {
        setMessage(
          `${successCount} record(s) created directly and ${pendingCount} saved to draft.`
        );
      } else if (pendingCount > 0) {
        setMessage(
          `${pendingCount} record(s) saved to draft! Go to 'My Changes' to submit for approval.`
        );
      } else {
        setMessage(`${successCount} record(s) created successfully!`);
      }
      setRows(Array.from({ length: 5 }, () => createEmptyRow()));
      return;
    }

    setIsError(true);
    setIsPending(pendingCount > 0);
    setMessage(
      `Completed with ${failedRows.length} error(s). ${failedRows.slice(0, 3).join(" ")}`
    );
  }

  return (
    <>
      <div className="p-3">
        <form onSubmit={addRecord}>
          <div className="row justify-content-center py-4">
            <div className="col-12 d-flex flex-column gap-3">
              <div className="d-flex justify-content-between align-items-center">
                <div className="fw-semibold">Batch Add Records</div>
                <button
                  type="button"
                  className="btn btn-sm btn-outline-primary"
                  onClick={addRow}
                  disabled={isSubmitting}
                >
                  <i className="fa-solid fa-plus me-1"></i>
                  Add Row
                </button>
              </div>

              <div className="table-responsive">
                <table className="table table-sm table-bordered align-middle">
                  <thead>
                    <tr>
                      <th style={{ minWidth: "50px" }}>#</th>
                      <th style={{ minWidth: "140px" }}>First Name</th>
                      <th style={{ minWidth: "140px" }}>Last Name</th>
                      <th style={{ minWidth: "90px" }}>M.I.</th>
                      <th style={{ minWidth: "180px" }}>Department</th>
                      <th style={{ minWidth: "150px" }}>School Year</th>
                      <th style={{ minWidth: "140px" }}>Position</th>
                      <th style={{ minWidth: "140px" }}>Office</th>
                      <th style={{ minWidth: "140px" }}>Status</th>
                      <th style={{ minWidth: "80px" }}>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rows.map((row, index) => {
                      const needsPositionOffice =
                        row.department === "Admin" || row.department === "CS";
                      const needsStatus = row.department === "PPO";

                      return (
                        <tr key={`add-record-row-${index}`}>
                          <td className="text-center">{index + 1}</td>
                          <td>
                            <input
                              type="text"
                              className="form-control form-control-sm"
                              value={row.first_name}
                              onChange={(e) => updateRow(index, "first_name", e.target.value)}
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              className="form-control form-control-sm"
                              value={row.last_name}
                              onChange={(e) => updateRow(index, "last_name", e.target.value)}
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              className="form-control form-control-sm"
                              maxLength={1}
                              value={row.middle_initial}
                              onChange={(e) => updateRow(index, "middle_initial", e.target.value)}
                            />
                          </td>
                          <td>
                            <select
                              className="form-select form-select-sm"
                              value={row.department}
                              onChange={(e) => updateRow(index, "department", e.target.value)}
                            >
                              <option value="">Choose</option>
                              {DEPARTMENT_OPTIONS.map((option) => (
                                <option key={option.value} value={option.value}>
                                  {option.label}
                                </option>
                              ))}
                            </select>
                          </td>
                          <td>
                            <select
                              className="form-select form-select-sm"
                              value={row.school_year}
                              onChange={(e) => updateRow(index, "school_year", e.target.value)}
                            >
                              <option value="">Choose</option>
                              {setAddRecordSchoolYears.map((data) => (
                                <option key={data} value={data}>
                                  SY {data}
                                </option>
                              ))}
                            </select>
                          </td>
                          <td>
                            <input
                              type="text"
                              className="form-control form-control-sm"
                              value={row.position}
                              onChange={(e) => updateRow(index, "position", e.target.value)}
                              disabled={!needsPositionOffice}
                              placeholder={needsPositionOffice ? "Required" : "N/A"}
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              className="form-control form-control-sm"
                              value={row.office}
                              onChange={(e) => updateRow(index, "office", e.target.value)}
                              disabled={!needsPositionOffice}
                              placeholder={needsPositionOffice ? "Required" : "N/A"}
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              className="form-control form-control-sm"
                              value={row.status}
                              onChange={(e) => updateRow(index, "status", e.target.value)}
                              disabled={!needsStatus}
                              placeholder={needsStatus ? "Required" : "N/A"}
                            />
                          </td>
                          <td className="text-center">
                            <button
                              type="button"
                              className="btn btn-sm btn-outline-danger"
                              onClick={() => removeRow(index)}
                              disabled={rows.length === 1 || isSubmitting}
                              title="Remove row"
                            >
                              <i className="fa-solid fa-trash"></i>
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              {/* Staff info banner */}
              {isStaff && (
                <div className="alert alert-info py-2 small">
                  <i className="fa-solid fa-info-circle me-2"></i>
                  As a Staff member, your changes will be saved as a draft and
                  require admin approval.
                </div>
              )}

              {isDone && (
                <div
                  className={`py-2 ${isError
                    ? "text-red"
                    : isPending
                      ? "text-info"
                      : "text-green"
                    } text-center fw-bold fs-6`}
                >
                  {isPending && <i className="fa-solid fa-clock me-2"></i>}
                  {!isError && !isPending && (
                    <i className="fa-solid fa-check-circle me-2"></i>
                  )}
                  {isError && <i className="fa-solid fa-times-circle me-2"></i>}
                  {message}
                  {isPending && (
                    <div className="mt-2">
                      <a
                        href="/my-changes"
                        className="btn btn-sm btn-info text-white"
                      >
                        <i className="fa-solid fa-arrow-right me-1"></i>
                        Go to My Changes
                      </a>
                    </div>
                  )}
                </div>
              )}
              <button
                type="submit"
                className="btn fw-semibold btn-sm btn-green text-white"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="spinner-border spinner-border-sm me-1"></span>
                    Submitting Rows...
                  </>
                ) : (
                  "Submit All"
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
