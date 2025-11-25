"use client";

import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import fetchSearchRecords from "@/app/fetch/fetchSearchRecords";

// dependencies
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

export default function RecordSearch() {
  const [start, setStart] = useState(false);
  const [searched, setsearch] = useState(false);
  const [departmentU, setDepartment] = useState("");
  const [school_yearU, setSchoolYear] = useState("");
  const [work_statusU, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [makeFilter, setMakeFilter] = useState("");

  let startYear = 2023;
  let currentYear = new Date().getFullYear();
  const setSearchSchoolYears = [];

  for (let y = currentYear; y >= startYear; y--) {
    let year = y;
    let nextYear = year + 1;
    setSearchSchoolYears.push(`${year}-${nextYear}`);
  }

  const mutationSearch = useMutation({
    mutationFn: fetchSearchRecords,
    onSuccess: () => {
      setLoading(() => false);
      setsearch(() => true);
    },
    onError: () => {
      setLoading(() => false);
      setsearch(() => true);
    },
  });

  const { mutate, data: result, isError, error } = mutationSearch;

  const filteredRows = result?.filter((data) => {
    if (
      String(data.id).includes(makeFilter) ||
      data?.last_name?.toLowerCase().includes(makeFilter.toLowerCase()) ||
      data?.first_name?.toLowerCase().includes(makeFilter.toLowerCase()) ||
      data?.middle_initial?.toLowerCase().includes(makeFilter.toLowerCase())
    ) {
      return true;
    }
  });

  async function setSearch(e) {
    e.preventDefault();
    setLoading(() => true);
    setsearch(() => false);
    setStart(true);
    const formData = new FormData(e.target);

    const department = formData.get("department");
    const school_year = formData.get("school_year");
    const work_status = formData.get("work_status");

    mutate({ department, school_year, work_status });

    setDepartment(department);
    setSchoolYear(school_year);
    setStatus(work_status);
  }

  function downloadExcel() {
    if (!result || result.length === 0) {
      alert("No data to export!");
      return;
    }

    // Format rows (optional clean column names)
    const rows = result.map((r) => ({
      ID: r.id,
      First_Name: r.first_name,
      Last_Name: r.last_name,
      Middle_Initial: r.middle_initial,
    }));

    // Create worksheet
    const worksheet = XLSX.utils.json_to_sheet(rows);

    // Create workbook
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Records");

    // Write to buffer
    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });

    // Create Blob and download
    const file = new Blob([excelBuffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });

    saveAs(file, `records-${departmentU}-${school_yearU}.xlsx`);
  }

  return (
    <>
      {/* SEARCH BAR */}
      <form onSubmit={setSearch}>
        <div className="row mt-2 d-flex gap-0 justify-content-center align-items-center">
          <div className="col-md-3 col-12 d-flex gap-2 align-items-center">
            <div className="fw-bold">Departments</div>
            <select
              className="form-select form-select-sm"
              required
              name="department"
            >
              <option value="" hidden>
                Choose
              </option>
              <option value="Admin">Administrator</option>
              <option value="FFP">Freshmen Formation Office</option>
              <option value="CON">College of Nursing</option>
              <option value="CSITE">
                College of Science and Information Technology and Engineering
              </option>
              <option value="SED">School of Education</option>
              <option value="SLA">School of Liberal Arts</option>
              <option value="SMA">School of Management and Accountancy</option>
              <option value="CS">Central Services</option>
              <option value="PPO">Physical Plant Personnel</option>
            </select>
          </div>

          <div className="mt-md-0 mt-3 col-md-3 col-12 d-flex gap-2 align-items-center">
            <div className="fw-bold">School Year</div>
            <select
              className="form-select form-select-sm"
              required
              name="school_year"
            >
              <option value="" hidden>
                Choose
              </option>
              {setSearchSchoolYears.map((data, index) => (
                <option key={index} value={data}>
                  SY {data}
                </option>
              ))}
            </select>
          </div>

          <div className="mt-md-0 mt-3 col-md-3 col-12 d-flex gap-2 align-items-center">
            <div className="fw-bold">Status</div>
            <select
              className="form-select form-select-sm"
              required
              name="work_status"
            >
              <option value="" hidden>
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

      <div className={`${searched ? "d-block" : "d-none"}`}>
        <div className="row d-flex p-0 align-items-center my-4">
          <div className="col-md-4 col-6 d-flex flex-column gap-3">
            <div className="text-start">
              <span>Department: </span>
              <span className="fw-bold">{departmentU}</span>
            </div>
            <div className="text-start">
              <span>School Year: </span>
              <span className="fw-bold">{school_yearU}</span>
            </div>
          </div>
          <div className="col-md-4 col-6 d-flex flex-column gap-3">
            <div className="text-start">
              <span>Status: </span>
              <span className="fw-bold">{work_statusU}</span>
            </div>
            <div className="text-start">
              <span>Total Accounts: </span>
              <span className="fw-bold">{result?.length || 0}</span>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-between align-items-center">
          {/* EXCEL + PRINT BUTTONS */}
          <div className="d-flex gap-2">
            <button
              onClick={downloadExcel}
              className="btn btn-sm gradient-button text-black"
              style={{ borderRadius: "2px", border: "0.8px solid black" }}
            >
              Excel
            </button>

            <button
              className="btn btn-sm gradient-button text-black"
              style={{ borderRadius: "2px", border: "0.8px solid black" }}
            >
              Print
            </button>
          </div>

          <div className="d-flex gap-2 align-items-center">
            <div>Search: </div>
            <input
              className="form-control form-control-sm rounded-0"
              value={makeFilter}
              onChange={(e) => setMakeFilter(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* TABLE */}
      <div className={`${!start && "mt-4"}`}>
        <table
          className={`${
            !loading ? "mt-2" : "mt-4"
          } table table-bordered table-striped table-hover`}
        >
          <thead className="border">
            <tr className="text-start">
              <th className="bg-tableheadergray">ID</th>
              <th className="bg-tableheadergray">First Name</th>
              <th className="bg-tableheadergray">Last Name</th>
              <th className="bg-tableheadergray">Middle Initial</th>
            </tr>
          </thead>

          <tbody>
            {!start ? (
              <tr>
                <td colSpan="4" className="text-center text-muted">
                  Search now!
                </td>
              </tr>
            ) : loading ? (
              <tr>
                <td colSpan="4" className="text-center text-muted">
                  Loading...
                </td>
              </tr>
            ) : isError ? (
              <>
                {error?.response?.status === 404 ? (
                  <tr>
                    <td colSpan="4" className="text-center text-muted">
                      Empty List!
                    </td>
                  </tr>
                ) : (
                  <tr>
                    <td colSpan="4" className="text-center text-muted fs-6">
                      Error
                    </td>
                  </tr>
                )}
              </>
            ) : (
              <>
                {filteredRows?.length > 0 ? (
                  filteredRows.map((data, index) => (
                    <tr key={index}>
                      <td className="text-start text-muted">{data.id}</td>
                      <td className="text-start text-muted">
                        {data.last_name}
                      </td>
                      <td className="text-start text-muted">
                        {data.first_name}
                      </td>
                      <td className="text-center text-muted">
                        {data.middle_initial}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4" className="text-center text-muted">
                      Search not found!
                    </td>
                  </tr>
                )}
              </>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}
