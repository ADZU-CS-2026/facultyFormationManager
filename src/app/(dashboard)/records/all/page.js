<<<<<<< HEAD
"use client";
import { useState } from "react";
import AllRecords from "@/data/allrecord.json";

export default function DataCard() {

  // Dropdown Selection Vaue Stores
  const [sySelection, setSySelection] = useState(AllRecords[0].schoolYear);
  const [dpSelection, setDpSelection] = useState("all");

  // All School Year
  const schoolYear = AllRecords.map(prev => prev.schoolYear);

  // All Record Department Names
  const departments = AllRecords[0].data.map(prev => prev.name);

  const filteredTable = AllRecords.find(prev => prev.schoolYear === sySelection).data.filter(prev => {
    if("all".includes(dpSelection)){
      return true;
    }
    return prev.name === dpSelection;
  });  

  // All Total Population
  const allTotalPopulation = AllRecords.find(prev => prev.schoolYear === sySelection).data.map(prev => prev.totalPopulation).reduce((a, c) => a + c, 0);

  // All Total Actual Attendance
  const allActualAttendance = AllRecords.find(prev => prev.schoolYear === sySelection).data.map(prev => prev.actualAttendance).reduce((a, c) => a + c, 0);

  // All Attendance Rate
  const allAttendanceRate = `${(allActualAttendance / allTotalPopulation * 100).toFixed(0)}%`;


  return (
    <>
      <div className="w-100">
        <div className="row g-0">
          <div className="col-12 py-4 px-3">
            {/* CARD */}
            <div className="card border-0 border-top border-secondary border-opacity-50 border-3 rounded-1 shadow-sm">
              {/* CARD HEADER */}
              <div className="text-gray1 fs-6 border-bottom p-2 px-3 d-flex justify-content-between align-items-center">
                <div style={{fontSize: "18px"}}>All Records</div>
              </div>

              {/* CARD BODY */}
              <div className="p-3 py-2">
                <div className="fw-bold text-center" style={{fontSize: "18px"}}>All Records</div>
                  <div className="fw-bold text-center" style={{fontSize: "18px"}}>School Year: {sySelection}</div>
                  {/* BIG BADGE */}
                  <div className={`py-3 fs-6 mb-2 rounded-1 text-white text-center fw-bold w-100 ${sySelection === AllRecords.find(prev => prev.status === "active").schoolYear ? "bg-cyan" : "bg-lightgray"}`}>{sySelection === AllRecords.find(prev => prev.status === "active").schoolYear ? "ACTIVE SCHOOL YEAR" : "PAST SCHOOL YEAR"}</div>
                  
                    {/* BUTTONS */}
                    <div className="d-flex gap-2">
                      <div className="dropdown py-2 text-gray1">
                        <button
                          className="btn btn-sm dropdown-toggle gradient-button"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                          style={{ border: "1px solid #999", borderRadius: "2px", fontSize: "15.84px" }}
                        >
                          School Year
                        </button>
                        <ul className="dropdown-menu rounded-0 fs-6 p-0">
                          {schoolYear && schoolYear.map((prev, index) => {
                            return(
                              <li key={index} className="small">
                                  <a className="dropdown-item" onClick={() => {setSySelection(prev)}} style={{fontSize: "15.84px"}}>
                                    SY{" "}{prev}
                                  </a>
                              </li>
                            )
                          })}
                          
                        </ul>
                      </div>
                      <div className="dropdown py-2 text-gray1">
                        <button
                          className="btn btn-sm dropdown-toggle gradient-button"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                          style={{ border: "1px solid #999", borderRadius: "2px", fontSize: "15.84px" }}
                        >
                          Department
                        </button>
                        <ul className="dropdown-menu rounded-0 fs-6 p-0">
                          <li className="small">
                            <a className="dropdown-item" onClick={() => setDpSelection("all")} style={{fontSize: "15.84px"}}>
                              All
                            </a>
                          </li>
                          {
                            departments && departments.map((prev, index) => (
                              <li key={index} className="small">
                                <a className="dropdown-item" onClick={() => setDpSelection(prev)} style={{fontSize: "15.84px"}}> 
                                  {prev}
                                </a>
                              </li>
                            ))   
                          }
                        </ul>
                      </div>
                    </div>
                  {/* TABLE */}
                  <div className="overflow-auto">
                  <table className="table table-bordered table-striped table-hover" style={{fontSize: "18px"}}>
                    <thead className="border">
                      <tr className="text-start">
                        <th scope="col" className="bg-tableheadergray">
                          Department
                        </th>
                        <th scope="col" className="bg-tableheadergray">
                          Total Population
                        </th>
                        <th scope="col" className="bg-tableheadergray">
                          Actual Attendance
                        </th>
                        <th scope="col" className="bg-tableheadergray">
                          Attendance Rate
                        </th>
                        <th scope="col" className="bg-tableheadergray">
                          School Year
                        </th>
                      </tr>
                    </thead>
                    <tbody className="">
                      {filteredTable && filteredTable.map((prev, index) => (
                            <tr key={index}>
                                <td className="text-start text-lightblue">
                                  {prev.name}
                                </td>
                                <td className="text-center">
                                  {prev.totalPopulation}
                                </td>
                                <td className="text-center">
                                  {prev.actualAttendance}
                                </td>
                                <td className="text-center">
                                  {isNaN((prev.actualAttendance / prev.totalPopulation * 100).toFixed(0)) ? "0%" : (prev.actualAttendance / prev.totalPopulation * 100).toFixed(0) + "%"}
                                </td>
                                <td className="text-center">
                                  {sySelection}
                                </td>
                            </tr>
                      ))}
                      { dpSelection === "all" && (
                      <tr>
                          <th className="text-start text-lightblue">
                            Total
                          </th>
                          <th className="text-center">
                            {allTotalPopulation}
                          </th>
                          <th className="text-center">
                            {allActualAttendance}
                          </th>
                          <th className="text-center">
                            {allAttendanceRate}
                          </th>
                          <th className="text-center"></th>
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
    </>
  );
}
