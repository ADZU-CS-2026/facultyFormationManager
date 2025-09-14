import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { motion } from "framer-motion";

export default function DataCard() {
  const [hideHome, setHideHome] = useState(false);

  return (
    <>
      {/* CARD */}
      <div className="card border-0 border-top border-cyan border-3 rounded-1 shadow-sm mt-4">
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
            <div className="text-center py-2 fs-5 text-black mb-2">
              Days with God Profile
            </div>

            <div className="text-center fw-bold fs-6 text-black">
              School Year: 2025-2026
            </div>
            <div className="dropdown py-2 text-gray1">
              <button
                className="btn btn-white1 btn-sm border rounded-0 dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                School Year
              </button>
              <ul className="dropdown-menu rounded-0 fs-6">
                <li>
                  <a className="dropdown-item" href="#">
                    2025-2026
                    <span className="badge text-bg-green ms-4">present</span>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    2024-2025
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    2023-2024
                  </a>
                </li>
              </ul>
            </div>

            {/* TABLE */}
            <table className="table table-bordered table-striped table-hover small">
              <thead className="border">
                <tr className="">
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
                <tr>
                  <td>ADMIN</td>
                  <td>99</td>
                  <td>99</td>
                  <td>99</td>
                </tr>
                <tr>
                  <td>FFP</td>
                  <td>99</td>
                  <td>99</td>
                  <td>99</td>
                </tr>
                <tr>
                  <td>CON</td>
                  <td>99</td>
                  <td>99</td>
                  <td>99</td>
                </tr>
                <tr>
                  <td>CSITE</td>
                  <td>99</td>
                  <td>99</td>
                  <td>99</td>
                </tr>
                <tr>
                  <td>SED</td>
                  <td>99</td>
                  <td>99</td>
                  <td>99</td>
                </tr>
                <tr>
                  <td>SLA</td>
                  <td>99</td>
                  <td>99</td>
                  <td>99</td>
                </tr>
                <tr>
                  <td>SMA</td>
                  <td>99</td>
                  <td>99</td>
                  <td>99</td>
                </tr>
                <tr>
                  <th>Total</th>
                  <th>99</th>
                  <th>99</th>
                  <th>99</th>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </>
  );
}
