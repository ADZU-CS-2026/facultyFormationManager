"use client";

import { useState, useMemo } from "react";
import { useMutation } from "@tanstack/react-query";
import fetchSearchRecords from "@/app/fetch/fetchSearchRecords";
import axios from "axios";
import { useToast } from "./Toast";

// Retreat types configuration with department availability
const RETREAT_TYPES = [
  { value: "DGY1", label: "DGY1", hasSchoolYear: false },
  { value: "DGY2", label: "DGY2", hasSchoolYear: false },
  { value: "DGY3", label: "DGY3", hasSchoolYear: false },
  { value: "DGY4.1_IMC", label: "DGY4.1 IMC", hasSchoolYear: false },
  { value: "DGY4.2_3D_Retreat", label: "DGY4.2 3D Retreat", hasSchoolYear: false },
  { value: "DGY5.1_IPC", label: "DGY5.1 IPC", hasSchoolYear: false },
  { value: "DGY5.2_3D_Retreat", label: "DGY5.2 3D Retreat", hasSchoolYear: false },
  { value: "SD", label: "Spiritual Direction", hasSchoolYear: false },
  { value: "3D_Retreat", label: "3D Retreat", hasSchoolYear: true },
  { value: "Recollection", label: "Recollection", hasSchoolYear: true },
];

// Department to available retreat types mapping
const DEPARTMENT_RETREATS = {
  Admin: ["DGY2", "DGY3", "3D_Retreat"],
  FFP: ["3D_Retreat"],
  CON: ["3D_Retreat"],
  CSITE: ["3D_Retreat"],
  SED: ["3D_Retreat"],
  SLA: ["3D_Retreat"],
  SMA: ["3D_Retreat"],
  CS: ["DGY1", "DGY2", "DGY3", "DGY4.1_IMC", "DGY4.2_3D_Retreat", "DGY5.1_IPC", "DGY5.2_3D_Retreat", "SD"],
  PPO: ["Recollection"],
};

export default function BatchUpdate() {
  const { addToast } = useToast();
  
  // Step state
  const [step, setStep] = useState(1);

  // Step 1: Search users
  const [searchParams, setSearchParams] = useState({
    department: "",
    school_year: "",
    work_status: "",
    name: "",
  });
  const [searchResults, setSearchResults] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState(new Map()); // Map of userId -> user data
  const [searchLoading, setSearchLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  // Step 2: Select retreat types
  const [selectedRetreats, setSelectedRetreats] = useState([]);

  // Step 3: Set values for each retreat
  const [retreatValues, setRetreatValues] = useState({});

  // Submission state
  const [submitting, setSubmitting] = useState(false);

  // Compute available retreat types based on selected users' departments
  const { availableRetreats, selectedDepartments } = useMemo(() => {
    const users = Array.from(selectedUsers.values());
    if (users.length === 0) {
      return { availableRetreats: [], selectedDepartments: [] };
    }

    // Get unique departments from selected users
    const departments = [...new Set(users.map(u => u.department))];
    
    // Find intersection of retreat types available to all departments
    const retreatSets = departments.map(dept => new Set(DEPARTMENT_RETREATS[dept] || []));
    
    // Start with first department's retreats, then intersect with others
    let commonRetreats = retreatSets[0] ? [...retreatSets[0]] : [];
    for (let i = 1; i < retreatSets.length; i++) {
      commonRetreats = commonRetreats.filter(r => retreatSets[i].has(r));
    }

    // Filter RETREAT_TYPES to only include available ones
    const available = RETREAT_TYPES.filter(r => commonRetreats.includes(r.value));
    
    return { availableRetreats: available, selectedDepartments: departments };
  }, [selectedUsers]);

  // Generate school years
  let startYear = 2023;
  let currentYear = new Date().getFullYear();
  const schoolYears = [];
  for (let y = currentYear; y >= startYear; y--) {
    schoolYears.push(`${y}-${y + 1}`);
  }

  // Search mutation
  const searchMutation = useMutation({
    mutationFn: fetchSearchRecords,
    onSuccess: (data) => {
      setSearchResults(data || []);
      setSearchLoading(false);
      setHasSearched(true);
    },
    onError: (error) => {
      if (error?.response?.status === 404) {
        setSearchResults([]);
      }
      setSearchLoading(false);
      setHasSearched(true);
    },
  });

  // Handle search
  function handleSearch(e) {
    e.preventDefault();
    setSearchLoading(true);
    setHasSearched(false);
    searchMutation.mutate(searchParams);
  }

  // Toggle user selection - also clear selected retreats if user selection changes
  function toggleUserSelection(user) {
    const newSelected = new Map(selectedUsers);
    if (newSelected.has(user.id)) {
      newSelected.delete(user.id);
    } else {
      newSelected.set(user.id, user);
    }
    setSelectedUsers(newSelected);
    // Clear selected retreats since available retreats may change
    setSelectedRetreats([]);
    setRetreatValues({});
  }

  // Select/deselect all - also clear selected retreats
  function toggleSelectAll() {
    if (selectedUsers.size === searchResults.length && searchResults.every(u => selectedUsers.has(u.id))) {
      // Deselect all from current search results
      const newSelected = new Map(selectedUsers);
      searchResults.forEach(u => newSelected.delete(u.id));
      setSelectedUsers(newSelected);
    } else {
      // Add all from current search results
      const newSelected = new Map(selectedUsers);
      searchResults.forEach(u => newSelected.set(u.id, u));
      setSelectedUsers(newSelected);
    }
    // Clear selected retreats since available retreats may change
    setSelectedRetreats([]);
    setRetreatValues({});
  }

  // Toggle retreat selection
  function toggleRetreatSelection(retreatType) {
    if (selectedRetreats.includes(retreatType)) {
      setSelectedRetreats(selectedRetreats.filter((r) => r !== retreatType));
      // Remove values for this retreat
      const newValues = { ...retreatValues };
      delete newValues[retreatType];
      setRetreatValues(newValues);
    } else {
      setSelectedRetreats([...selectedRetreats, retreatType]);
      // Initialize values for this retreat
      setRetreatValues({
        ...retreatValues,
        [retreatType]: {
          start_date: "",
          completion_date: "",
          attendance_status: "Present",
          school_year: schoolYears[0], // Default to current year for school year retreats
        },
      });
    }
  }

  // Update retreat values
  function updateRetreatValue(retreatType, field, value) {
    setRetreatValues({
      ...retreatValues,
      [retreatType]: {
        ...retreatValues[retreatType],
        [field]: value,
      },
    });
  }

  // Submit batch update
  async function handleSubmit() {
    setSubmitting(true);

    try {
      const payload = {
        user_ids: Array.from(selectedUsers.keys()),
        retreats: selectedRetreats.map((retreatType) => {
          const retreatConfig = RETREAT_TYPES.find((r) => r.value === retreatType);
          const values = retreatValues[retreatType];
          return {
            retreat_type: retreatType,
            school_year: retreatConfig.hasSchoolYear ? values.school_year : "N/A",
            start_date: values.start_date || null,
            completion_date: values.completion_date || null,
            attendance_status: values.attendance_status,
          };
        }),
      };

      const res = await axios.post("/api/records/retreat/batch", payload);

      if (res.data.success) {
        addToast(res.data.message, "success");
        // Reset form
        setStep(1);
        setSelectedUsers(new Map());
        setSelectedRetreats([]);
        setRetreatValues({});
        setSearchResults([]);
        setHasSearched(false);
      }
    } catch (error) {
      addToast(error.response?.data?.message || "Failed to submit batch update", "danger");
    } finally {
      setSubmitting(false);
    }
  }

  // Get retreat type label
  function getRetreatLabel(value) {
    return RETREAT_TYPES.find((r) => r.value === value)?.label || value;
  }

  // Check if retreat has school year
  function retreatHasSchoolYear(value) {
    return RETREAT_TYPES.find((r) => r.value === value)?.hasSchoolYear || false;
  }

  return (
    <div className="p-3">
      {/* Progress Steps */}
      <div className="d-flex justify-content-center mb-4">
        <div className="d-flex align-items-center gap-2">
          <span
            className={`badge rounded-pill ${step >= 1 ? "bg-primary" : "bg-secondary"}`}
            style={{ width: "30px", height: "30px", lineHeight: "22px" }}
          >
            1
          </span>
          <span className={step >= 1 ? "fw-bold" : "text-muted"}>Select Users</span>
          <i className="bi bi-chevron-right mx-2"></i>
          <span
            className={`badge rounded-pill ${step >= 2 ? "bg-primary" : "bg-secondary"}`}
            style={{ width: "30px", height: "30px", lineHeight: "22px" }}
          >
            2
          </span>
          <span className={step >= 2 ? "fw-bold" : "text-muted"}>Select Retreats</span>
          <i className="bi bi-chevron-right mx-2"></i>
          <span
            className={`badge rounded-pill ${step >= 3 ? "bg-primary" : "bg-secondary"}`}
            style={{ width: "30px", height: "30px", lineHeight: "22px" }}
          >
            3
          </span>
          <span className={step >= 3 ? "fw-bold" : "text-muted"}>Set Values</span>
          <i className="bi bi-chevron-right mx-2"></i>
          <span
            className={`badge rounded-pill ${step >= 4 ? "bg-primary" : "bg-secondary"}`}
            style={{ width: "30px", height: "30px", lineHeight: "22px" }}
          >
            4
          </span>
          <span className={step >= 4 ? "fw-bold" : "text-muted"}>Review</span>
        </div>
      </div>

      {/* Step 1: Select Users */}
      {step === 1 && (
        <div>
          <h6 className="fw-bold mb-3">Step 1: Search and Select Users</h6>

          {/* Search Form */}
          <form onSubmit={handleSearch}>
            <div className="row g-2 mb-3">
              <div className="col-md-3">
                <label className="form-label small fw-bold">Department</label>
                <select
                  className="form-select form-select-sm"
                  value={searchParams.department}
                  onChange={(e) => setSearchParams({ ...searchParams, department: e.target.value })}
                >
                  <option value="">All</option>
                  <option value="Admin">Administrator</option>
                  <option value="FFP">Freshmen Formation Office</option>
                  <option value="CON">College of Nursing</option>
                  <option value="CSITE">CSITE</option>
                  <option value="SED">School of Education</option>
                  <option value="SLA">School of Liberal Arts</option>
                  <option value="SMA">School of Management and Accountancy</option>
                  <option value="CS">Central Services</option>
                  <option value="PPO">Physical Plant Personnel</option>
                </select>
              </div>
              <div className="col-md-3">
                <label className="form-label small fw-bold">School Year</label>
                <select
                  className="form-select form-select-sm"
                  value={searchParams.school_year}
                  onChange={(e) => setSearchParams({ ...searchParams, school_year: e.target.value })}
                >
                  <option value="">All</option>
                  {schoolYears.map((sy) => (
                    <option key={sy} value={sy}>
                      SY {sy}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-md-2">
                <label className="form-label small fw-bold">Status</label>
                <select
                  className="form-select form-select-sm"
                  value={searchParams.work_status}
                  onChange={(e) => setSearchParams({ ...searchParams, work_status: e.target.value })}
                >
                  <option value="">All</option>
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>
              <div className="col-md-2">
                <label className="form-label small fw-bold">Name</label>
                <input
                  type="text"
                  className="form-control form-control-sm"
                  placeholder="Search name"
                  value={searchParams.name}
                  onChange={(e) => setSearchParams({ ...searchParams, name: e.target.value })}
                />
              </div>
              <div className="col-md-2 d-flex align-items-end">
                <button type="submit" className="btn btn-sm btn-primary w-100" disabled={searchLoading}>
                  {searchLoading ? "Searching..." : "Search"}
                </button>
              </div>
            </div>
          </form>

          {/* Results Table */}
          {hasSearched && (
            <div className="mt-3">
              <div className="d-flex justify-content-between align-items-center mb-2">
                <span className="text-muted small">
                  {searchResults.length} user(s) found, {selectedUsers.size} total selected
                </span>
                {searchResults.length > 0 && (
                  <button className="btn btn-sm btn-outline-secondary" onClick={toggleSelectAll}>
                    {searchResults.every(u => selectedUsers.has(u.id)) ? "Deselect All" : "Select All"}
                  </button>
                )}
              </div>

              <div style={{ maxHeight: "300px", overflowY: "auto" }}>
                <table className="table table-bordered table-hover table-sm">
                  <thead className="table-light sticky-top">
                    <tr>
                      <th style={{ width: "40px" }}>
                        <input
                          type="checkbox"
                          checked={searchResults.length > 0 && searchResults.every(u => selectedUsers.has(u.id))}
                          onChange={toggleSelectAll}
                        />
                      </th>
                      <th>ID</th>
                      <th>Last Name</th>
                      <th>First Name</th>
                      <th>M.I.</th>
                      <th>Dept</th>
                    </tr>
                  </thead>
                  <tbody>
                    {searchResults.length === 0 ? (
                      <tr>
                        <td colSpan="6" className="text-center text-muted">
                          No users found
                        </td>
                      </tr>
                    ) : (
                      searchResults.map((user) => (
                        <tr
                          key={user.id}
                          className={selectedUsers.has(user.id) ? "table-primary" : ""}
                          style={{ cursor: "pointer" }}
                          onClick={() => toggleUserSelection(user)}
                        >
                          <td onClick={(e) => e.stopPropagation()}>
                            <input
                              type="checkbox"
                              checked={selectedUsers.has(user.id)}
                              onChange={() => toggleUserSelection(user)}
                            />
                          </td>
                          <td>{user.id}</td>
                          <td>{user.last_name}</td>
                          <td>{user.first_name}</td>
                          <td>{user.middle_initial}</td>
                          <td><span className="badge bg-secondary">{user.department}</span></td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Next Button */}
          <div className="d-flex justify-content-end mt-3">
            <button
              className="btn btn-primary"
              disabled={selectedUsers.size === 0}
              onClick={() => setStep(2)}
            >
              Next: Select Retreats <i className="bi bi-arrow-right ms-1"></i>
            </button>
          </div>
        </div>
      )}

      {/* Step 2: Select Retreat Types */}
      {step === 2 && (
        <div>
          <h6 className="fw-bold mb-3">Step 2: Select Retreat Types to Update</h6>
          
          {/* Department Info */}
          <div className="alert alert-info py-2 mb-3">
            <small>
              <i className="bi bi-info-circle me-1"></i>
              <strong>Selected Departments:</strong> {selectedDepartments.join(", ") || "None"}
              {selectedDepartments.length > 1 && (
                <span className="ms-2 text-muted">
                  (Showing retreat types available to all selected departments)
                </span>
              )}
            </small>
          </div>

          <p className="text-muted small mb-3">
            Select which retreat types you want to update for the {selectedUsers.size} selected user(s).
            If a user does not have a record for the selected retreat type, it will be created.
          </p>

          {availableRetreats.length === 0 ? (
            <div className="alert alert-warning">
              <i className="bi bi-exclamation-triangle me-2"></i>
              No common retreat types available for the selected users. 
              This may happen when users from incompatible departments are selected together.
            </div>
          ) : (
            <div className="row g-2">
              {availableRetreats.map((retreat) => (
                <div key={retreat.value} className="col-md-4">
                  <div
                    className={`card ${selectedRetreats.includes(retreat.value) ? "border-primary bg-primary bg-opacity-10" : ""}`}
                    style={{ cursor: "pointer" }}
                    onClick={() => toggleRetreatSelection(retreat.value)}
                  >
                    <div className="card-body py-2 d-flex align-items-center">
                      <input
                        type="checkbox"
                        className="form-check-input me-2"
                        checked={selectedRetreats.includes(retreat.value)}
                        onChange={() => toggleRetreatSelection(retreat.value)}
                      />
                      <span>{retreat.label}</span>
                      {retreat.hasSchoolYear && (
                        <span className="badge bg-secondary ms-auto">Per School Year</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Navigation */}
          <div className="d-flex justify-content-between mt-4">
            <button className="btn btn-outline-secondary" onClick={() => setStep(1)}>
              <i className="bi bi-arrow-left me-1"></i> Back
            </button>
            <button
              className="btn btn-primary"
              disabled={selectedRetreats.length === 0 || availableRetreats.length === 0}
              onClick={() => setStep(3)}
            >
              Next: Set Values <i className="bi bi-arrow-right ms-1"></i>
            </button>
          </div>
        </div>
      )}

      {/* Step 3: Set Values */}
      {step === 3 && (
        <div>
          <h6 className="fw-bold mb-3">Step 3: Set Attendance Details</h6>
          <p className="text-muted small mb-3">
            Set the attendance date and status for each selected retreat type.
          </p>

          {selectedRetreats.map((retreatType) => (
            <div key={retreatType} className="card mb-3">
              <div className="card-header bg-light py-2">
                <strong>{getRetreatLabel(retreatType)}</strong>
              </div>
              <div className="card-body">
                <div className="row g-3">
                  {retreatHasSchoolYear(retreatType) && (
                    <div className="col-md-3">
                      <label className="form-label small fw-bold">School Year</label>
                      <select
                        className="form-select form-select-sm"
                        value={retreatValues[retreatType]?.school_year || ""}
                        onChange={(e) => updateRetreatValue(retreatType, "school_year", e.target.value)}
                      >
                        {schoolYears.map((sy) => (
                          <option key={sy} value={sy}>
                            SY {sy}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}
                  <div className="col-md-3">
                    <label className="form-label small fw-bold">Start Date</label>
                    <input
                      type="date"
                      className="form-control form-control-sm"
                      value={retreatValues[retreatType]?.start_date || ""}
                      onChange={(e) => updateRetreatValue(retreatType, "start_date", e.target.value)}
                    />
                  </div>
                  <div className="col-md-3">
                    <label className="form-label small fw-bold">Completion Date</label>
                    <input
                      type="date"
                      className="form-control form-control-sm"
                      value={retreatValues[retreatType]?.completion_date || ""}
                      onChange={(e) => updateRetreatValue(retreatType, "completion_date", e.target.value)}
                    />
                  </div>
                  <div className="col-md-3">
                    <label className="form-label small fw-bold">Attendance Status</label>
                    <select
                      className="form-select form-select-sm"
                      value={retreatValues[retreatType]?.attendance_status || "Present"}
                      onChange={(e) => updateRetreatValue(retreatType, "attendance_status", e.target.value)}
                    >
                      <option value="Present">Present</option>
                      <option value="Absent">Absent</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Navigation */}
          <div className="d-flex justify-content-between mt-4">
            <button className="btn btn-outline-secondary" onClick={() => setStep(2)}>
              <i className="bi bi-arrow-left me-1"></i> Back
            </button>
            <button className="btn btn-primary" onClick={() => setStep(4)}>
              Next: Review <i className="bi bi-arrow-right ms-1"></i>
            </button>
          </div>
        </div>
      )}

      {/* Step 4: Review */}
      {step === 4 && (
        <div>
          <h6 className="fw-bold mb-3">Step 4: Review and Submit</h6>

          {/* Summary */}
          <div className="card mb-3">
            <div className="card-header bg-light py-2">
              <strong>Summary</strong>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-6">
                  <p className="mb-2">
                    <strong>Users Selected:</strong> {selectedUsers.size}
                  </p>
                  <p className="mb-2">
                    <strong>Retreat Types:</strong> {selectedRetreats.length}
                  </p>
                  <p className="mb-0">
                    <strong>Total Records to Create/Update:</strong>{" "}
                    {selectedUsers.size * selectedRetreats.length}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Retreat Details */}
          <div className="card mb-3">
            <div className="card-header bg-light py-2">
              <strong>Retreat Updates</strong>
            </div>
            <div className="card-body p-0">
              <table className="table table-sm mb-0">
                <thead className="table-light">
                  <tr>
                    <th>Retreat Type</th>
                    <th>School Year</th>
                    <th>Start Date</th>
                    <th>Completion Date</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {selectedRetreats.map((retreatType) => (
                    <tr key={retreatType}>
                      <td>{getRetreatLabel(retreatType)}</td>
                      <td>
                        {retreatHasSchoolYear(retreatType)
                          ? retreatValues[retreatType]?.school_year
                          : "N/A"}
                      </td>
                      <td>{retreatValues[retreatType]?.start_date || "-"}</td>
                      <td>{retreatValues[retreatType]?.completion_date || "-"}</td>
                      <td>
                        <span
                          className={`badge ${
                            retreatValues[retreatType]?.attendance_status === "Present"
                              ? "bg-success"
                              : "bg-danger"
                          }`}
                        >
                          {retreatValues[retreatType]?.attendance_status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Selected Users Preview */}
          <div className="card mb-3">
            <div className="card-header bg-light py-2">
              <strong>Selected Users ({selectedUsers.size})</strong>
            </div>
            <div className="card-body p-0" style={{ maxHeight: "200px", overflowY: "auto" }}>
              <table className="table table-sm mb-0">
                <thead className="table-light sticky-top">
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                  </tr>
                </thead>
                <tbody>
                  {Array.from(selectedUsers.values()).map((user) => (
                      <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>
                          {user.last_name}, {user.first_name} {user.middle_initial}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Navigation */}
          <div className="d-flex justify-content-between mt-4">
            <button className="btn btn-outline-secondary" onClick={() => setStep(3)} disabled={submitting}>
              <i className="bi bi-arrow-left me-1"></i> Back
            </button>
            <button className="btn btn-success" onClick={handleSubmit} disabled={submitting}>
              {submitting ? (
                <>
                  <span className="spinner-border spinner-border-sm me-1"></span>
                  Submitting...
                </>
              ) : (
                <>
                  <i className="bi bi-check-lg me-1"></i> Submit Batch Update
                </>
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
