"use client";

import { useState } from "react";
import rawData from "@/data/dayswithgod.json";

export default function SLAPage() {
  const slaData = rawData["SLA"];

  // Header information
  const office = slaData?.[0]?.["Ateneo de Zamboanga University"];
  const profileTitle = slaData?.[1]?.["Ateneo de Zamboanga University"];
  const schoolYear = slaData?.[2]?.["Ateneo de Zamboanga University"];
  const department =
    slaData?.find(
      (row) =>
        row?.["Ateneo de Zamboanga University"] ===
        "School of Liberal Arts"
    )?.["Ateneo de Zamboanga University"];

  // Identify the header and data rows
  const tableHeaderRow = slaData?.find((row) => row?.["Column2"] === "Last Name ");
  const tableRows = slaData?.filter(
    (row) => row?.["Column2"] && row?.["Column2"] !== "Last Name "
  );

  // Dropdown options (matches the columns from the JSON file)
  const retreatYears = [
    { label: "3D Retreat School Year 2023–2024", key: "Column5" },
    { label: "3D Retreat School Year 2024–2025", key: "Column6" },
    { label: "3D Retreat School Year 2025–2026", key: "Column7" },
    { label: "3D Retreat School Year 2026–2027", key: "Column8" },
    { label: "3D Retreat School Year 2027–2028", key: "Column9" },
    { label: "3D Retreat School Year 2028–2029", key: "Column10" },
  ];

  const [selectedRetreat, setSelectedRetreat] = useState(retreatYears[2]);
  const [searchTerm, setSearchTerm] = useState("");

  // Filtered data based on search
  const filteredRows = tableRows?.filter((row) => {
    const fullName = `${row["Column2"]} ${row["Column3"]} ${row["Column4"]}`.toLowerCase();
    return fullName.includes(searchTerm.toLowerCase());
  });

  return (
    <div className="w-100">
      <div className="row g-0">
        <div className="col-12 py-4 px-3">
          {/* CARD */}
          <div className="card border-0 border-top border-secondary border-opacity-50 border-3 rounded-1 shadow-sm">
            {/* HEADER */}
            <div className="text-gray1 border-bottom p-2 px-3 fs-6 d-flex justify-content-between align-items-center">
<<<<<<< HEAD
              <div style={{fontSize: "18px"}}>School of Liberal Arts Records</div>
            </div>

            {/* BODY */}
            <div className="p-3 py-2">

              {/* SEARCH & DROPDOWN CONTROLS */}
              <div className="d-flex justify-content-between align-items-center gap-2 my-2 mt-1 flex-wrap">
                <div className="d-flex gap-2 align-items-center">
=======
              <div>School of Liberal Arts Records</div>
            </div>

            {/* BODY */}
            <div className="p-4">
              {/* UNIVERSITY INFO */}
              <div className="text-center overflow-auto">
                <div className="matura-script fs-6 text-center">
                  Ateneo de Zamboanga University
                </div>
                <div className="mt-2 small">{office}</div>
                <div className="mt-2 small">{profileTitle}</div>
                <div className="mt-2 small">{department}</div>
                <div className="mt-2 mb-5 small">{schoolYear}</div>
              </div>

              {/* SEARCH & DROPDOWN CONTROLS */}
              <div className="d-flex justify-content-end align-items-center gap-2 mb-3 flex-wrap">
                {/* Search box */}
                <input
                  type="text"
                  placeholder="Search..."
                  className="form-control form-control-sm rounded-0"
                  style={{ width: "200px" }}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />

>>>>>>> main
                {/* Dropdown */}
                <div className="dropdown">
                  <button
                    className="btn btn-sm dropdown-toggle rounded-0 gradient-button"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
<<<<<<< HEAD
                    style={{ border: "1px solid #999", borderRadius: "2px" }}
=======
                    style={{ border: "1px solid #999" }}
>>>>>>> main
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
                      <th className="bg-tableheadergray">Middle Initial</th>
                      <th className="bg-tableheadergray">{selectedRetreat.label}</th>
                    </tr>
                  </thead>
                  
                  <tbody>
                    {filteredRows?.map((row, index) => (
                      <tr key={index}>
                        <td>{row["Column2"]}</td>
                        <td>{row["Column3"]}</td>
                        <td>{row["Column4"] || ""}</td>
                        <td>{row[selectedRetreat.key] || ""}</td>
                      </tr>
                    ))}

                    {filteredRows?.length === 0 && (
                      <tr>
                        <td colSpan="4" className="text-center text-muted">
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