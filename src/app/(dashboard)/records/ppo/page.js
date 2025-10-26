"use client";

import { useState } from "react";
import rawData from "@/data/dayswithgod.json";

export default function PPOPage() {
  const ppoData = rawData["PPO"];

  // Header information
  const office = ppoData?.[0]?.["Ateneo de Zamboanga University"];
  const profileTitle = ppoData?.[1]?.["Ateneo de Zamboanga University"];
  const schoolYear = ppoData?.[2]?.["Ateneo de Zamboanga University"];

  // Identify the header and data rows
  const tableHeaderRow = ppoData?.find((row) => row?.["Column2"] === "Last Name ");
  const tableRows = ppoData?.filter(
    (row) => row?.["Column2"] && row?.["Column2"] !== "Last Name "
  );

  // Dropdown options (matches the columns from the JSON file)
  const retreatYears = [
    { label: "School Year 2024–2025", key: "Column5" },
    { label: "School Year 2025–2026", key: "Column6" },
    { label: "School Year 2026–2027", key: "Column7" },
    { label: "School Year 2027–2028", key: "Column8" },
    { label: "School Year 2028–2029", key: "Column9" },
  ];

  const [selectedYear, setSelectedYear] = useState(retreatYears[1]);
  const [searchTerm, setSearchTerm] = useState("");

  // Filtered data based on search
  const filteredRows = tableRows?.filter((row) => {
    const lastName = row["Column2"]?.toLowerCase() || "";
    const firstName = row["Column3"]?.toLowerCase() || "";
    const status = row["Column4"]?.toLowerCase() || "";
    const yearValue = row[selectedYear.key]?.toLowerCase() || "";
    const search = searchTerm.toLowerCase();
    return (
      lastName.includes(search) ||
      firstName.includes(search) ||
      status.includes(search) ||
      yearValue.includes(search)
    );
  });

  return (
    <div className="w-100">
      <div className="row g-0">
        <div className="col-12 py-4 px-3">
          {/* CARD */}
          <div className="card border-0 border-top border-secondary border-opacity-50 border-3 rounded-1 shadow-sm">
            {/* HEADER */}
            <div className="text-gray1 border-bottom p-2 px-3 fs-6 d-flex justify-content-between align-items-center">
              <div style={{fontSize: "18px"}}>PPO Records</div>
            </div>

            {/* BODY */}
            <div className="p-3 py-2">

              {/* SEARCH & DROPDOWN CONTROLS */}
              <div className="d-flex justify-content-between align-items-center gap-2 my-2 mt-1 flex-wrap">
                <div className="d-flex gap-2 align-items-center">
                {/* Dropdown */}
                <div className="dropdown">
                  <button
                    className="btn btn-sm dropdown-toggle rounded-0 gradient-button"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    style={{ border: "1px solid #999", borderRadius: "2px" }}
                  >
                    School Year
                  </button>
                  <ul className="dropdown-menu rounded-0 fs-6 p-0">
                    {retreatYears.map((year, index) => (
                      <li key={index}>
                        <a
                          className="dropdown-item small"
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            setSelectedRetreat(year);
=======
                            setSelectedYear(year);
>>>>>>> main
                          }}
                        >
                          {year.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
<<<<<<< HEAD
                </div>
                <div className="d-flex gap-2 align-items-center">
                  <small>Search:</small>
                  {/* Search box */}
                  <input
                    type="text"
                    className="form-control form-control-sm rounded-0"
                    style={{ width: "142.5px" }}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                
                
=======
>>>>>>> main
              </div>

              {/* TABLE */}
              <div className="table-responsive" style={{ overflowX: "auto" }}>
                <table className="table table-bordered table-striped table-hover small align-middle">
                  <thead className="border">
                    <tr className="text-start">
                      <th className="bg-tableheadergray">Last Name</th>
                      <th className="bg-tableheadergray">First Name</th>
                      <th className="bg-tableheadergray">Status</th>
                      <th className="bg-tableheadergray">{selectedYear.label}</th>
                    </tr>
                  </thead>

                  <tbody>
                    {filteredRows?.length > 0 ? (
                      filteredRows.map((row, index) => (
                        <tr key={index}>
                          <td>{row["Column2"]}</td>
                          <td>{row["Column3"]}</td>
                          <td>{row["Column4"] || ""}</td>
                          <td>{row[selectedYear.key] || ""}</td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="4" className="text-center text-muted small">
                          No matching records found.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}