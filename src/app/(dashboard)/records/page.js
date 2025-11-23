"use client";

import { useState } from "react";

export default function Records() {
  function setSearch(e) {
    e.preventDefault();
    console.log("Submit worked!");
  }

  const [department, setDepartment] = useState("");
  const [schoolYear, setSchoolYear] = useState("");
  const [status, setStatus] = useState("");

  return (
    <>
      <div className="w-100">
        <div className="row g-0">
          <div className="col-12 py-4 px-3">
            {/* CARD */}
            <div className="card border-0 border-top border-secondary border-opacity-50 border-3 rounded-1 shadow-sm">
              {/* CARD HEADER */}
              <div className="text-gray1 fs-6 border-bottom p-2 px-3 d-flex justify-content-between align-items-center">
                <div style={{ fontSize: "18px" }}>Records</div>
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
                        <th className="bg-tableheadergray">First Name</th>
                        <th className="bg-tableheadergray">Last Name</th>
                        <th className="bg-tableheadergray">Middle Initial</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td colSpan="3" className="text-center text-muted fs-6">
                          Search to see records!
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
