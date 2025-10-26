"use client";

import { useState } from "react";
import rawData from "@/data/dayswithgod.json";

export default function CSPage() {
  const csData = rawData["CS"];

  // Header information
  const office = csData?.[0]?.["Ateneo de Zamboanga University"];
  const profileTitle = csData?.[1]?.["Ateneo de Zamboanga University"];
  const schoolYear = csData?.[2]?.["Ateneo de Zamboanga University"];

  // Identify the header and data rows
  const tableHeaderRow = csData?.find((row) => row?.["Column2"] === "Last Name ");
  const tableRows = csData?.filter(
    (row) => row?.["Column2"] && row?.["Column2"] !== "Last Name "
  );

  // Dropdown options (matches the columns from the JSON file)
  const dgyOptions = [
    { label: "DGY1", key: "Column7" },
    { label: "DGY2", key: "Column8" },
    { label: "DGY3", key: "Column9" },
    { label: "DGY4.1 IMC", key: "Column10" },
    { label: "DGY4.2 3D Retreat", key: "Column11" },
    { label: "DGY5.1 IPC", key: "Column12" },
    { label: "DGY5.2 3D Retreat", key: "Column13" },
    { label: "SD", key: "Column14" },
  ];

  const [selectedDGY, setSelectedDGY] = useState(dgyOptions[0]);
  const [searchTerm, setSearchTerm] = useState("");

  // Filtered data based on search
  const filteredRows = tableRows?.filter((row) => {
    const lastName = row["Column2"]?.toLowerCase() || "";
    const firstName = row["Column3"]?.toLowerCase() || "";
    const middleInitial = row["Column4"]?.toLowerCase() || "";
    const position = row["Column5"]?.toLowerCase() || "";
    const office = row["Column6"]?.toLowerCase() || "";
    const activity = row[selectedDGY.key]?.toLowerCase() || "";
    const search = searchTerm.toLowerCase();

    return (
      lastName.includes(search) ||
      firstName.includes(search) ||
      middleInitial.includes(search) ||
      position.includes(search) ||
      office.includes(search) ||
      activity.includes(search)
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
              <div>Central Services Records</div>
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

                {/* Dropdown */}
                <div className="dropdown">
                  <button
                    className="btn btn-sm dropdown-toggle rounded-0 gradient-button"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    style={{ border: "1px solid #999" }}
                  >
                    Formation Activity
                  </button>
                  <ul className="dropdown-menu rounded-0 fs-6 p-0">
                    {dgyOptions.map((option, index) => (
                      <li key={index}>
                        <a
                          className="dropdown-item small"
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            setSelectedDGY(option);
                          }}
                        >
                          {option.label}
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
                      <th className="bg-tableheadergray">{selectedDGY.label}</th>
                    </tr>
                  </thead>

                  <tbody>
                    {filteredRows?.length > 0 ? (
                      filteredRows.map((row, index) => (
                        <tr key={index}>
                          <td>{row["Column2"]}</td>
                          <td>{row["Column3"]}</td>
                          <td>{row["Column4"] || ""}</td>
                          <td>{row["Column5"] || ""}</td>
                          <td>{row["Column6"] || ""}</td>
                          <td>{row[selectedDGY.key] || ""}</td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="6" className="text-center text-muted small">
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