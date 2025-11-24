"use client";

import { useState, useEffect } from "react";

export default function Records() {
  const [department, setDepartment] = useState("");
  const [schoolYear, setSchoolYear] = useState("");
  const [status, setStatus] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hasSearched, setHasSearched] = useState(false);

  // Fetch users from API
  const fetchUsers = async () => {
    if (!department || !schoolYear || !status) {
      return;
    }

    setLoading(true);
    setError(null);
    setHasSearched(true);

    try {
      const response = await fetch("/api/user/fetchuser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          department,
          school_year: schoolYear,
          work_status: status === "All" ? "Active" : status,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to fetch users");
      }

      setUsers(data.data || []);
    } catch (err) {
      setError(err.message);
      setUsers([]);
    } finally {
      setLoading(false);
    }
  };

  function setSearch(e) {
    e.preventDefault();
    fetchUsers();
  }

  return (
    <>
      <div className="w-100">
        <div className="row g-0">
          <div className="col-12 py-4 px-3">
            {/* CARD */}
            <div className="card border-0 border-top border-secondary border-opacity-50 border-3 rounded-1 shadow-sm">
              {/* HEADER */}
              <div className="fw-bold fs-6 text-primary border-bottom border-primary p-2 px-3 d-flex align-items-center border-opacity-25" style={{ color: "#0c2461" }}> 
                <i className="bi bi-journal-text me-2" style={{ fontSize: "18px" }}></i>
                <span style={{ fontSize: "18px" }}>Records</span>
              </div>

              {/* CARD BODY */}
              <div className="p-3 py-2">
                {/* SEARCH BAR */}
                <form onSubmit={setSearch}>
                  <div className="row mt-2 d-flex gap-0 justify-content-center align-items-center">
                    <div className="col-md-3 col-12 d-flex gap-2 align-items-center">
                      <div className="fw-bold fs-6">Departments</div>
                      <select
                        className="form-select form-select-sm"
                        required
                        value={department}
                        onChange={(e) => setDepartment(e.target.value)}
                      >
                        <option value="" disabled hidden>
                          Choose
                        </option>
                        <option value="Admin">Administrator</option>
                        <option value="FFP">Freshmen Formation Office</option>
                        <option value="CON">College of Nursing</option>
                        <option value="CSITE">
                          College of Science and Information Technology and
                          Engineering
                        </option>
                        <option value="SED">School of Education</option>
                        <option value="SLA">School of Liberal Arts</option>
                        <option value="SMA">
                          School of Management and Accountancy
                        </option>
                        <option value="CS">Central Services</option>
                        <option value="PPO">Physical Plant Personnel</option>
                      </select>
                    </div>

                    <div className="mt-md-0 mt-3 col-md-3 col-12 d-flex gap-2 align-items-center">
                      <div className="fw-bold fs-6">School Year</div>
                      <select
                        className="form-select form-select-sm"
                        required
                        value={schoolYear}
                        onChange={(e) => setSchoolYear(e.target.value)}
                      >
                        <option value="" disabled hidden>
                          Choose
                        </option>
                        <option value="2023-2024">School Year 2023-2024</option>
                        <option value="2024-2025">School Year 2024-2025</option>
                        <option value="2025-2026">School Year 2025-2026</option>
                        <option value="2026-2027">School Year 2026-2027</option>
                        <option value="2027-2028">School Year 2027-2028</option>
                        <option value="2028-2029">School Year 2028-2029</option>
                      </select>
                    </div>

                    <div className="mt-md-0 mt-3 col-md-3 col-12 d-flex gap-2 align-items-center">
                      <div className="fw-bold fs-6">Status</div>
                      <select
                        className="form-select form-select-sm"
                        required
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                      >
                        <option value="" disabled hidden>
                          Choose
                        </option>
                        <option value="All">All</option>
                        <option value="Active">Active</option>
                        <option value="Inactive">Inactive</option>
                      </select>
                    </div>

                    <div className="col-1 mt-md-0 mt-3 d-flex justify-content-center">
                      <button
                        type="submit"
                        className="btn fw-semibold btn-lightblue text-white ms-md-3"
                      >
                        Search
                      </button>
                    </div>
                  </div>
                </form>

                {/* TABLE */}
                <div className="small">
                  <table className="mt-5 table table-bordered table-striped table-hover sm">
                    <thead className="border">
                      <tr className="text-start">
                        <th className="bg-tableheadergray">ID</th>
                        <th className="bg-tableheadergray">Full Name</th>
                        <th className="bg-tableheadergray">Department</th>
                        <th className="bg-tableheadergray">Work Status</th>
                        <th className="bg-tableheadergray">School Year</th>
                      </tr>
                    </thead>
                    <tbody>
                      {loading && (
                        <tr>
                          <td colSpan="5" className="text-center text-muted fs-6">
                            <div className="spinner-border spinner-border-sm me-2" role="status">
                              <span className="visually-hidden">Loading...</span>
                            </div>
                            Loading...
                          </td>
                        </tr>
                      )}

                      {error && !loading && (
                        <tr>
                          <td colSpan="5" className="text-center text-danger fs-6">
                            Error: {error}
                          </td>
                        </tr>
                      )}

                      {!loading && !error && !hasSearched && (
                        <tr>
                          <td colSpan="5" className="text-center text-muted fs-6">
                            Search to see records!
                          </td>
                        </tr>
                      )}

                      {!loading && !error && hasSearched && users.length === 0 && (
                        <tr>
                          <td colSpan="5" className="text-center text-muted fs-6">
                            No records found for the selected criteria.
                          </td>
                        </tr>
                      )}

                      {!loading && !error && users.length > 0 && users.map((user) => (
                        <tr key={user.id}>
                          <td>{user.id}</td>
                          <td>{user.full_name}</td>
                          <td>{user.department}</td>
                          <td>
                            <span className={`badge ${user.work_status === 'Active' ? 'bg-success' :
                                user.work_status === 'Retired' ? 'bg-secondary' :
                                  user.work_status === 'Resigned' ? 'bg-warning' :
                                    user.work_status === 'On Leave' ? 'bg-info' :
                                      'bg-dark'
                              }`}>
                              {user.work_status}
                            </span>
                          </td>
                          <td>{user.school_year}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>

                  {!loading && !error && users.length > 0 && (
                    <div className="text-muted small mt-2">
                      Found {users.length} record{users.length !== 1 ? 's' : ''}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
