import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { motion } from "framer-motion";

export default function DataCard() {
  const [hideHome, setHideHome] = useState(false);

  const dataTable = [
    {name: "ADMIN", totalPopulation: "--", actualAttendance: "--", attandanceRate: "--"},
    {name: "FFP", totalPopulation: "--", actualAttendance: "--", attandanceRate: "--"},
    {name: "CON", totalPopulation: "--", actualAttendance: "--", attandanceRate: "--"},
    {name: "CSITE", totalPopulation: "--", actualAttendance: "--", attandanceRate: "--"},
    {name: "SED", totalPopulation: "--", actualAttendance: "--", attandanceRate: "--"},
    {name: "SLA", totalPopulation: "--", actualAttendance: "--", attandanceRate: "--"},
    {name: "SMA", totalPopulation: "--", actualAttendance: "--", attandanceRate: "--"},
    {name: "Total", totalPopulation: "--", actualAttendance: "--", attandanceRate: "--"},
  ]

  const yearRecord = ["2023-2024", "2024-2025", "2025-2026"];

  return (
    <>
      {/* CARD */}
      <div className="card border-0 border-top border-cyan border-3 rounded-1 shadow-sm">
        {/* CARD HEADER */}
        <div className="text-gray1 border-bottom p-2 px-3 fs-6 d-flex justify-content-between align-items-center">
          <div>
            <FontAwesomeIcon
              icon="fa-solid fa-database"
              className="fs-6 me-1"
            />
            Data
          </div>
          <span
            className="cursor-pointer"
            onClick={() => setHideHome((prev) => (prev ? false : true))}
          >
            <small className="text-lightgray">
              {!hideHome ? (
                <FontAwesomeIcon icon="fa-solid fa-minus" />
              ) : (
                <FontAwesomeIcon icon="fa-solid fa-plus" />
              )}
            </small>
          </span>
        </div>

        {/* CARD BODY */}
        <motion.div
          initial={{ height: "auto", opacity: 1 }}
          animate={hideHome ? { height: 0 } : { height: "auto" }}
          transition={{ duration: 0.5 }}
          style={{ overflow: "hidden" }}
          className="overflow-auto"
        >
          <div className="p-3">
            <div className="text-center py-2 fw-bold fs-6 text-black mb-2">
              Days with God Profile
            </div>
            <div className="text-center fw-bold fs-6 text-black mb-4">
              School Year: 2025-2026
            </div>
            {/* BUTTONS */}
            <div className="d-flex gap-2">
              <div className="dropdown py-2 text-gray1">
              <button
                className="btn btn-sm border dropdown-toggle rounded-0 gradient-button"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                School Year
              </button>
              <ul className="dropdown-menu rounded-0 fs-6">
                {yearRecord && yearRecord.reverse().map((data,index) => {
                  if(index === 0){
                    return (<li key={index} className="small">
                              <a className="dropdown-item" href="#">
                                {data}
                                <span className="badge text-bg-green ms-4">Current S.Y.</span>
                              </a>
                            </li>);
                  }
                  return(
                    <li key={index} className="small">
                      <a className="dropdown-item" href="#">
                        {data}
                      </a>
                    </li>
                  )
                })}
              </ul>
            </div>
            <div className="dropdown py-2 text-gray1">
              <button
                className="btn btn-sm border dropdown-toggle rounded-0 gradient-button"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Department
              </button>
              <ul className="dropdown-menu rounded-0 fs-6">
                <li className="small">
                  <a className="dropdown-item" href="#">
                    All
                  </a>
                </li>
                {dataTable && dataTable.filter((data,index) => index !== dataTable.length - 1).map((data, index) => (
                  <li key={index} className="small">
                    <a className="dropdown-item" href="#">
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            </div>

            {/* TABLE */}
            <table className="table table-bordered table-striped table-hover">
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
                  </tr>
              </thead>
              <tbody className="">
                {dataTable && dataTable.map((data, index) => {
                  if (index !== 7){
                    return(
                      <tr key={index}>
                        <td className="text-start" style={{color: "#3c8dbc"}}>{data.name}</td>
                        <td className="text-center">{data.totalPopulation}</td>
                        <td className="text-center">{data.actualAttendance}</td>
                        <td className="text-center">{data.attandanceRate}</td>
                      </tr>
                    )
                  }
                  return(
                    <tr key={index}>
                      <th className="text-start" style={{color: "#3c8dbc"}}>{data.name}</th>
                      <th className="text-center">{data.totalPopulation}</th>
                      <th className="text-center">{data.actualAttendance}</th>
                      <th className="text-center">{data.attandanceRate}</th>
                    </tr>
                  )
                })}
              </tbody>
             </table>
          </div>
        </motion.div>
      </div>
    </>
  );
}
