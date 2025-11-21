"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import rawData from "@/data/dayswithgod.json";

export default function AdminPage() {
  const router = useRouter();
  const adminData = rawData["ADMIN"];

  // Header information
  const office = adminData?.[0]?.["Ateneo de Zamboanga University"];
  const profileTitle = adminData?.[1]?.["Ateneo de Zamboanga University"];
  const schoolYear = adminData?.[2]?.["Ateneo de Zamboanga University"];

  // Identify the header and data rows
  const tableRows = adminData?.filter(
    (row) => row?.["Column2"] && row?.["Column2"] !== "Last Name "
  );

  // Dropdown options (matches the columns from the JSON file)
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
            {/* CARD */}
            <div className="card border-0 border-top border-secondary border-opacity-50 border-3 rounded-1 shadow-sm">
                {/* HEADER */}
                <div className="text-gray1 border-bottom p-2 px-3 fs-6 d-flex justify-content-between align-items-center">
                    <div style={{fontSize: "18px"}}>Admin Records</div>
                </div>

            {/* BODY */}
            <div className="p-3 py-2">
              {/* SEARCH & DROPDOWN CONTROLS */}
              <div className="d-flex justify-content-between align-items-center gap-2 my-2 mt-1 flex-wrap">
                <div className="d-flex gap-2">
                {/* Dropdown */}
                <div className="dropdown">
                    
                    <button
                        className="btn btn-sm dropdown-toggle gradient-button"
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
                                <Link
                                    className="dropdown-item small"
                                    href="/admin/id"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setSelectedRetreat(year);
                                    }}
                                >
                                    {year.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
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
                        <tr className="cursor-pointer" key={index} onClick={() => router.push("/records/admin/id")}>
                            <td style={{ whiteSpace: "normal", wordBreak: "break-word", maxWidth: "200px" }}>
                                {row["Column2"]}
                            </td>
                            <td style={{ whiteSpace: "normal", wordBreak: "break-word", maxWidth: "200px" }}>
                                {row["Column3"]}
                            </td>
                            <td style={{ whiteSpace: "normal", wordBreak: "break-word", maxWidth: "100px" }}>
                                {row["Column4"]}
                            </td>
                            <td style={{ whiteSpace: "normal", wordBreak: "break-word", maxWidth: "180px" }}>
                                {row["Column5"]}
                            </td>
                            <td style={{ whiteSpace: "normal", wordBreak: "break-word", maxWidth: "200px" }}>
                                {row["Column6"]}
                            </td>
                            <td style={{ whiteSpace: "normal", wordBreak: "break-word", maxWidth: "100px" }}>
                                {row["Column7"] || ""}
                            </td>
                            <td style={{ whiteSpace: "normal", wordBreak: "break-word", maxWidth: "100px" }}>
                                {row["Column8"] || ""}
                            </td>
                            <td style={{ whiteSpace: "normal", wordBreak: "break-word", maxWidth: "200px" }}>
                                {row[selectedRetreat.key] || ""}
                            </td>
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
