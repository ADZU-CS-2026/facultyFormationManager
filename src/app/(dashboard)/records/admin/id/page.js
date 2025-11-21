export default function AdminProfile(){
    return(
    <>
      <div className="w-100">
        <div className="row g-0">
          <div className="col-12 py-4 px-3">
            {/* CARD */}
            <div className="card border-0 border-top border-secondary border-opacity-50 border-3 rounded-1 shadow-sm">
              {/* CARD HEADER */}
              <div className="text-gray1 fs-6 border-bottom p-2 px-3 d-flex justify-content-between align-items-center">
                <div style={{fontSize: "18px"}}>Admin Records</div>
              </div>

              {/* CARD BODY */}
              <div className="p-3">
                <div className="text-center pb-3" style={{fontSize: "18px"}}>230676 - BALATBAT, CONRADO Z.</div>
                <div className="d-flex justify-content-lg-end justify-content-center align-items-center gap-2 pb-lg-2 pb-3">
                    <button
                        className="btn btn-sm gradient-button"
                        style={{ border: "1px solid #999", borderRadius: "2px", width: "55px" }}
                    >
                        Print
                    </button>
                    <button
                        className="btn btn-sm gradient-button"
                        style={{ border: "1px solid #999", borderRadius: "2px", width: "55px"}}
                    >
                        Edit
                    </button>
                    <button
                        className="btn btn-sm gradient-button"
                        style={{ border: "1px solid #999", borderRadius: "2px", width: "55px"}}
                    >
                        Delete
                    </button>
                </div>
                <div className="row">
                {/* TABLE */}
              <div className="col-lg-4 col-6 overflow-x-hidden">
                <table className="table table-bordered table-striped table-hover small align-middle">
                  <thead className="border">
                    <tr className="text-start">
                      <th colSpan="2" className="bg-tableheadergray">Position and Office</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                        <td style={{backgroundColor: "#d9edf7"}}>
                            Position
                        </td>
                        <td style={{backgroundColor: "#d9edf7"}}>
                            Director
                        </td>
                    </tr>
                    <tr>
                        <td style={{backgroundColor: "#f2dede"}}>
                            Office
                        </td>
                        <td className="overflow-x-hidden" style={{backgroundColor: "#f2dede"}}>
                            Alumni and Career Excellence Office
                        </td>
                    </tr>
                </tbody>
                </table>
              </div>
              <div className="col-lg-8 col-12 overflow-x-hidden">
                <table className="table table-bordered table-striped table-hover small align-middle">
                  <thead className="border">
                    <tr className="text-start">
                      <th className="bg-tableheadergray">Retreat Type</th>
                      <th className="bg-tableheadergray">Attendance</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                        <td>
                            DGY2
                        </td>
                        <td className="text-center">
                            03/13-14/24
                        </td>
                    </tr>
                    <tr>
                        <td>
                            DGY3
                        </td>
                        <td className="text-center">
                            
                        </td>
                    </tr>
                    <tr>
                        <td>
                            3D Retreat School Year 2023–2024
                        </td>
                        <td className="text-center">
                            
                        </td>
                    </tr>
                    <tr>
                        <td>
                            3D Retreat School Year 2024–2025
                        </td>
                        <td className="text-center">
                            
                        </td>
                    </tr>
                    <tr>
                        <td>
                            3D Retreat School Year 2025–2026
                        </td>
                        <td className="text-center">
                            
                        </td>
                    </tr>
                    <tr>
                        <td>
                            3D Retreat School Year 2026–2027
                        </td>
                        <td className="text-center">
                            
                        </td>
                    </tr>
                    <tr>
                        <td>
                            3D Retreat School Year 2027–2028
                        </td>
                        <td className="text-center">
                            
                        </td>
                    </tr>
                    <tr>
                        <td>
                            3D Retreat School Year 2028–2029
                        </td>
                        <td className="text-center">
                            
                        </td>
                    </tr>
                </tbody>
                </table>
              </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
    );  
}