"use client";

import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import fetchSearchRecords from "@/app/fetch/fetchSearchRecords";
import axios from "axios";
import { useToast } from "./Toast";

export default function DeleteUser() {
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

  // Step 2: Confirmation
  const [confirmText, setConfirmText] = useState("");

  // Submission state
  const [submitting, setSubmitting] = useState(false);

  // Generate school years for search
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

  // Toggle user selection
  function toggleUserSelection(user) {
    const newSelected = new Map(selectedUsers);
    if (newSelected.has(user.id)) {
      newSelected.delete(user.id);
    } else {
      newSelected.set(user.id, user);
    }
    setSelectedUsers(newSelected);
  }

  // Select/deselect all
  function toggleSelectAll() {
    if (searchResults.every((u) => selectedUsers.has(u.id))) {
      // Deselect all from current search results
      const newSelected = new Map(selectedUsers);
      searchResults.forEach((u) => newSelected.delete(u.id));
      setSelectedUsers(newSelected);
    } else {
      // Add all from current search results
      const newSelected = new Map(selectedUsers);
      searchResults.forEach((u) => newSelected.set(u.id, u));
      setSelectedUsers(newSelected);
    }
  }

  // Submit delete
  async function handleSubmit() {
    if (confirmText !== "DELETE") {
      addToast("Please type DELETE to confirm", "warning");
      return;
    }

    setSubmitting(true);

    try {
      const payload = {
        user_ids: Array.from(selectedUsers.keys()),
      };

      const res = await axios.delete("/api/user/delete", { data: payload });

      if (res.data.success) {
        addToast(res.data.message, "success");
        // Reset form
        setStep(1);
        setSelectedUsers(new Map());
        setSearchResults([]);
        setHasSearched(false);
        setConfirmText("");
      }
    } catch (error) {
      addToast(error.response?.data?.message || "Failed to delete users", "danger");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="p-3">
      {/* Warning Banner */}
      <div className="alert alert-danger py-2 mb-4">
        <i className="bi bi-exclamation-triangle-fill me-2"></i>
        <strong>Warning:</strong> Deleting a user will permanently remove the user and ALL their retreat records. This action cannot be undone.
      </div>

      {/* Progress Steps */}
      <div className="d-flex justify-content-center mb-4">
        <div className="d-flex align-items-center gap-2">
          <span
            className={`badge rounded-pill ${step >= 1 ? "bg-danger" : "bg-secondary"}`}
            style={{ width: "30px", height: "30px", lineHeight: "22px" }}
          >
            1
          </span>
          <span className={step >= 1 ? "fw-bold" : "text-muted"}>Select Users</span>
          <i className="bi bi-chevron-right mx-2"></i>
          <span
            className={`badge rounded-pill ${step >= 2 ? "bg-danger" : "bg-secondary"}`}
            style={{ width: "30px", height: "30px", lineHeight: "22px" }}
          >
            2
          </span>
          <span className={step >= 2 ? "fw-bold" : "text-muted"}>Confirm & Delete</span>
        </div>
      </div>

      {/* Step 1: Select Users */}
      {step === 1 && (
        <div>
          <h6 className="fw-bold mb-3">Step 1: Search and Select Users to Delete</h6>

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
                    {searchResults.every((u) => selectedUsers.has(u.id)) ? "Deselect All" : "Select All"}
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
                          checked={searchResults.length > 0 && searchResults.every((u) => selectedUsers.has(u.id))}
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
                          className={selectedUsers.has(user.id) ? "table-danger" : ""}
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
                          <td>
                            <span className="badge bg-secondary">{user.department}</span>
                          </td>
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
              className="btn btn-danger"
              disabled={selectedUsers.size === 0}
              onClick={() => setStep(2)}
            >
              Next: Review & Delete <i className="bi bi-arrow-right ms-1"></i>
            </button>
          </div>
        </div>
      )}

      {/* Step 2: Confirm & Delete */}
      {step === 2 && (
        <div>
          <h6 className="fw-bold mb-3">Step 2: Confirm Deletion</h6>

          {/* Danger Warning */}
          <div className="alert alert-danger">
            <h6 className="alert-heading">
              <i className="bi bi-exclamation-triangle-fill me-2"></i>
              You are about to permanently delete {selectedUsers.size} user(s)
            </h6>
            <hr />
            <p className="mb-0">
              This will delete:
            </p>
            <ul className="mb-0">
              <li><strong>{selectedUsers.size}</strong> user record(s)</li>
              <li><strong>All</strong> retreat records associated with these users</li>
            </ul>
          </div>

          {/* Selected Users Preview */}
          <div className="card mb-3">
            <div className="card-header bg-danger text-white py-2">
              <strong>Users to be Deleted ({selectedUsers.size})</strong>
            </div>
            <div className="card-body p-0" style={{ maxHeight: "200px", overflowY: "auto" }}>
              <table className="table table-sm mb-0">
                <thead className="table-light sticky-top">
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Department</th>
                  </tr>
                </thead>
                <tbody>
                  {Array.from(selectedUsers.values()).map((user) => (
                    <tr key={user.id}>
                      <td>{user.id}</td>
                      <td>
                        {user.last_name}, {user.first_name} {user.middle_initial}
                      </td>
                      <td>
                        <span className="badge bg-secondary">{user.department}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Confirmation Input */}
          <div className="card border-danger mb-3">
            <div className="card-body">
              <label className="form-label fw-bold">
                Type <span className="text-danger">DELETE</span> to confirm:
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Type DELETE here"
                value={confirmText}
                onChange={(e) => setConfirmText(e.target.value)}
              />
            </div>
          </div>

          {/* Navigation */}
          <div className="d-flex justify-content-between mt-4">
            <button className="btn btn-outline-secondary" onClick={() => setStep(1)} disabled={submitting}>
              <i className="bi bi-arrow-left me-1"></i> Back
            </button>
            <button
              className="btn btn-danger"
              onClick={handleSubmit}
              disabled={submitting || confirmText !== "DELETE"}
            >
              {submitting ? (
                <>
                  <span className="spinner-border spinner-border-sm me-1"></span>
                  Deleting...
                </>
              ) : (
                <>
                  <i className="bi bi-trash me-1"></i> Delete {selectedUsers.size} User(s)
                </>
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
