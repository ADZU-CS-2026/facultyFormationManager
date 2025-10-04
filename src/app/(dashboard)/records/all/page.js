"use client"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function DataCard() {

  const dataTable = [
    {name: "ADMIN", totalPopulation: 41, actualAttendance: 0, attandanceRate: 0 + "%"},
    {name: "FFP", totalPopulation: 6, actualAttendance: 6, attandanceRate: 100 + "%"},
    {name: "CON", totalPopulation: 96, actualAttendance: 32, attandanceRate: 33 + "%"},
    {name: "CSITE", totalPopulation: 67, actualAttendance: 18, attandanceRate: 27 + "%"},
    {name: "SED", totalPopulation: 17, actualAttendance: 11, attandanceRate: 65 + "%"},
    {name: "SLA", totalPopulation: 67, actualAttendance: 9, attandanceRate: 13 + "%"},
    {name: "SMA", totalPopulation: 40, actualAttendance: 10, attandanceRate: 25 + "%"},
    {name: "CS", totalPopulation: 0, actualAttendance: 0, attandanceRate: "None"},
    {name: "PPO", totalPopulation: 0, actualAttendance: 0, attandanceRate: "None"},
    {name: "Total", totalPopulation: 334, actualAttendance: 86, attandanceRate: 26 + "%"},
  ]

  const yearRecord = ["2023-2024", "2024-2025", "2025-2026"];

  return (
    <>
    <div className="w-100">
      <div className="row g-0">
        <div className="col-12 py-4 px-3">
      {/* CARD */}
      <div className="card border-0 border-top border-secondary border-opacity-50 border-3 rounded-1 shadow-sm">
        {/* CARD HEADER */}
        <div className="text-gray1 border-bottom p-2 px-3 fs-6 d-flex justify-content-between align-items-center">
          <div>
            All Records
          </div>
        </div>

        {/* CARD BODY */}
        <div
          className="p-3"
        >
          <div className="overflow-auto">
            <div className="matura-script fs-6 text-center">Ateneo de Zamboanga University</div>
            <div className="text-center mt-2 small">Office of the Unit Director for Formation</div>
            <div className="text-center mt-2 small">Days with God Profile</div>
            <div className="text-center mt-2 mb-5 small">School Year: 2025 - 2026</div>
            {/* BUTTONS */}
            <div className="d-flex gap-2">
              <div className="dropdown py-2 text-gray1">
              <button
                className="btn btn-sm dropdown-toggle rounded-0 gradient-button"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{border: "1px solid #999"}}
              >
                School Year
              </button>
              <ul className="dropdown-menu rounded-0 fs-6 p-0">
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
                className="btn btn-sm dropdown-toggle rounded-0 gradient-button"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{border: "1px solid #999"}}
              >
                Department
              </button>
              <ul className="dropdown-menu rounded-0 fs-6 p-0">
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
                  <th scope="col" className="bg-tableheadergray">
                      School Year
                  </th>
                  </tr>
              </thead>
              <tbody className="">
                {dataTable && dataTable.map((data, index) => {
                  if (index !== dataTable.length - 1){
                    return(
                      <tr key={index}>
                        <td className="text-start" style={{color: "#3c8dbc"}}>{data.name}</td>
                        <td className="text-center">{data.totalPopulation}</td>
                        <td className="text-center">{data.actualAttendance}</td>
                        <td className="text-center">{data.attandanceRate}</td>
                        <td className="text-center">{yearRecord[0]}</td>
                      </tr>
                    )
                  }
                  return(
                    <tr key={index}>
                      <th className="text-start" style={{color: "#3c8dbc"}}>{data.name}</th>
                      <th className="text-center">{data.totalPopulation}</th>
                      <th className="text-center">{data.actualAttendance}</th>
                      <th className="text-center">{data.attandanceRate}</th>
                      <th className="text-center"></th>
                    </tr>
                  )
                })}
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
