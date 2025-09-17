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

            <div className="pt-3 pb-1 px-3 small g-0">
                <div className="fs-6 text-center mb-2"><small>Days with God Administrators Profile</small></div>

                <table className="table table-bordered table-striped table-hover small">
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

             <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex gap-2 align-items-center">
                <div className="dropdown py-2 text-gray1">
              <button
                className="btn btn-sm border dropdown-toggle rounded-0 gradient-button"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Filter
              </button>
              <ul className="dropdown-menu rounded-0 fs-6 p-0">
                <li className="small">
                  <a className="dropdown-item" href="#">
                    Default
                  </a>
                </li>
              </ul>
            </div>
            <div className="dropdown py-2 text-gray1">
              <button
                className="btn btn-sm border dropdown-toggle rounded-0 gradient-button"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                School Year
              </button>
              <ul className="dropdown-menu rounded-0 fs-6 p-0">
                <li className="small">
                  <a className="dropdown-item" href="#">
                    Default
                  </a>
                </li>
              </ul>
            </div>
            <div className="dropdown py-2 text-gray1">
              <button
                className="btn btn-sm border dropdown-toggle rounded-0 gradient-button"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Retreat Type
              </button>
              <ul className="dropdown-menu rounded-0 fs-6 p-0">
                <li className="small">
                  <a className="dropdown-item" href="#">
                    Default
                  </a>
                </li>
              </ul>
            </div>
            <div className="dropdown py-2 text-gray1">
              <button
                className="btn btn-sm border dropdown-toggle rounded-0 gradient-button"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Edit
              </button>
              <ul className="dropdown-menu rounded-0 fs-6 p-0">
                <li className="small">
                  <a className="dropdown-item" href="#">
                    Add
                  </a>
                </li>
                <li className="small">
                  <a className="dropdown-item" href="#">
                    Delete
                  </a>
                </li>
              </ul>
            </div>
            </div>
            <input type="text" className="form-control form-control-sm rounded-0" placeholder="Search here..." style={{width: "300px"}}/> 
             </div>
              <table className="table table-bordered table-striped table-hover small">
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