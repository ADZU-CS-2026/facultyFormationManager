"use client"

export default function admin(){

    return(
    <div className="w-100">
      <div className="row g-0">
        <div className="col-12 py-4 px-3">
            <div className="card border-0 border-top border-topgray border-3 rounded-1 shadow-sm">
            <div className="text-gray1 border-bottom p-2 px-3 fs-6 d-flex justify-content-between align-items-center">
                Administrators
            </div>
            <div className="py-4 px-3 small g-0">
                <div className="fs-5 text-center mb-4">Days with God Administrators Profile</div>
                
                <div className="border fs-6 text-center py-2">Percentage of Attendance</div>
                <table className="table table-bordered table-striped table-hover">
              <thead className="border">
                  <tr className="text-start">
                    <th scope="col" className="bg-tableheadergray">
                        Retreat Type
                    </th>
                    <th scope="col" className="bg-tableheadergray">
                        Participants
                    </th>
                    <th scope="col" className="bg-tableheadergray">
                        Percentage
                    </th>
                  </tr>
              </thead>
              <tbody className="">
                {[1,2,3].map((data, index) => (
                <tr key={index}>
                  <td className="text-start" >--</td>
                  <td className="text-center">--</td>
                  <td className="text-center">--</td>
                </tr>
                ))}
              </tbody>
             </table>
             <div className="dropdown py-2 text-gray1">
              <button
                className="btn btn-sm border dropdown-toggle rounded-0 gradient-button"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Filter
              </button>
              <ul className="dropdown-menu rounded-0 fs-6">
                <li className="small">
                  <a className="dropdown-item" href="#">
                    Default
                  </a>
                </li>
                <li className="small">
                  <a className="dropdown-item" href="#">
                    A - Z
                  </a>
                </li>
                <li className="small">
                  <a className="dropdown-item" href="#">
                    Z - A
                  </a>
                </li>
                <li className="small">
                  <a className="dropdown-item" href="#">
                    Newest - Oldest
                  </a>
                </li>
                <li className="small">
                  <a className="dropdown-item" href="#">
                    Oldest - Newest
                  </a>
                </li>
                <li className="small">
                  <a className="dropdown-item" href="#">
                    Attendance
                  </a>
                </li>
                <li className="small">
                  <a className="dropdown-item" href="#">
                    No Attendance
                  </a>
                </li>
              </ul>
            </div>
             <div className="border fs-6 text-center py-2">Administrators</div>
             
                <table className="table table-bordered table-striped table-hover">
              <thead className="border">
                  <tr className="text-start">
                    <th scope="col" className="bg-tableheadergray">
                        Last Name
                    </th>
                    <th scope="col" className="bg-tableheadergray">
                        First Name
                    </th>
                    <th scope="col" className="bg-tableheadergray">
                        Middle Initial
                    </th>
                    <th scope="col" className="bg-tableheadergray">
                        Position
                    </th>
                    <th scope="col" className="bg-tableheadergray">
                        Office
                    </th>
                    <th scope="col" className="bg-tableheadergray">
                        DGY3
                    </th>
                    <th scope="col" className="bg-tableheadergray">
                        3D Retreat School Year 2023 - 2024
                    </th>
                    <th scope="col" className="bg-tableheadergray">
                        3D Retreat School Year 2024 - 2025
                    </th>
                  </tr>
              </thead>
              <tbody className="">
                {[1,2,3,4,5,6,7,8,9].map((data, index) => (
                        <tr key={index}>
                  <td className="text-start" >--</td>
                  <td className="text-start">--</td>
                  <td className="text-center">--</td>
                  <td className="text-start">--</td>
                  <td className="text-start">--</td>
                  <td className="text-center">--</td>
                  <td className="text-center">--</td>
                  <td className="text-center">--</td>
                </tr>
                ))}
              </tbody>
             </table>
            </div>
            </div>
          </div>
        </div>
    </div>
    )
}