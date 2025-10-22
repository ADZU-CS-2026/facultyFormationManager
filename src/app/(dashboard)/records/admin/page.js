"use client";

import { useState } from "react";
import rawData from "@/data/dayswithgod.json";

export default function AdminPage() {
  const adminData = rawData["ADMIN"];
  const office = adminData?.[0]?.["Ateneo de Zamboanga University"];
  const profileTitle = adminData?.[1]?.["Ateneo de Zamboanga University"];
  const schoolYear = adminData?.[2]?.["Ateneo de Zamboanga University"];
  const tableRows = adminData?.filter(
    (row) => row?.["Column2"] && row?.["Column2"] !== "Last Name "
  );

  const retreatYears = [
    { label: "3D Retreat School Year 2023–2024", key: "Column9" },
    { label: "3D Retreat School Year 2024–2025", key: "Column10" },
    { label: "3D Retreat School Year 2025–2026", key: "Column11" },
    { label: "3D Retreat School Year 2026–2027", key: "Column12" },
    { label: "3D Retreat School Year 2027–2028", key: "Column13" },
    { label: "3D Retreat School Year 2028–2029", key: "Column14" },
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
          <div className="card border-0 border-top border-secondary border-opacity-50 border-3 rounded-1 shadow-sm">
            <div className="text-gray1 border-bottom p-2 px-3 fs-6 d-flex justify-content-between align-items-center">
              <div>Admin Records</div>
            </div>

            <div className="p-4">
              <div className="text-center overflow-auto">
                <div className="matura-script fs-6 text-center">
                  Ateneo de Zamboanga University
                </div>
                <div className="mt-2 small">{office}</div>
                <div className="mt-2 small">{profileTitle}</div>
                <div className="mt-2 mb-5 small">{schoolYear}</div>
              </div>

              {/* SEARCH + DROPDOWN CONTROLS */}
              <div className="d-flex justify-content-end align-items-center gap-2 mb-3 flex-wrap">
                {/* Search box */}
                <input
                    type="text"
                    placeholder="Search by name..."
                    className="form-control form-control-sm rounded-0"
                    style={{ width: "200px" }}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                
                {/* Dropdown */}
                <div className="dropdown">
                    <button
                        className="btn btn-sm dropdown-toggle rounded-0 gradient-button"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        style={{ border: "1px solid #999" }}
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
            </div>

              {/* TABLE */}
              <div className="table-responsive" style={{ overflowX: "auto" }}>
                <table className="table table-bordered table-striped table-hover small align-middle">
                  <thead className="border">
                    <tr className="text-start">
                      <th className="bg-tableheadergray">Last Name</th>
                      <th className="bg-tableheadergray">First Name</th>
                      <th className="bg-tableheadergray">Middle Initial</th>
                      <th className="bg-tableheadergray">Position</th>
                      <th className="bg-tableheadergray">Office</th>
                      <th className="bg-tableheadergray">DGY2</th>
                      <th className="bg-tableheadergray">DGY3</th>
                      <th className="bg-tableheadergray">{selectedRetreat.label}</th>
                    </tr>
                  </thead>

                  <tbody>
                    {filteredRows?.map((row, index) => (
                      <tr key={index}>
                        <td>{row["Column2"]}</td>
                        <td>{row["Column3"]}</td>
                        <td>{row["Column4"]}</td>
                        <td>{row["Column5"]}</td>
                        <td>{row["Column6"]}</td>
                        <td>{row["Column7"] || ""}</td>
                        <td>{row["Column8"] || ""}</td>
                        <td>{row[selectedRetreat.key] || ""}</td>
                      </tr>
                    ))}
                    {filteredRows?.length === 0 && (
                      <tr>
                        <td colSpan="8" className="text-center text-muted">
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