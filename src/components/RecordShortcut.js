import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function RecordShortcut() {
  const [hideShortcut, setHideShortcut] = useState(false);

  return (
    <div className="card border-0 border-top border-cyan border-3 rounded-1 shadow-sm">
      <div className="text-gray1 border-bottom p-2 px-3 fs-6 d-flex justify-content-between align-items-center">
        <div>
          <FontAwesomeIcon icon="fa-solid fa-arrow-up-right-from-square" className="fs-6 me-1" />
          Record Shortcuts
        </div>
        <span
          className="cursor-pointer"
          onClick={() => setHideShortcut((prev) => (prev ? false : true))}
        >
          <small className="text-lightgray">
            {!hideShortcut ? (
              <FontAwesomeIcon icon="fa-solid fa-minus" />
            ) : (
              <FontAwesomeIcon icon="fa-solid fa-plus" />
            )}
          </small>
        </span>
      </div>
      <motion.div
        initial={{ height: "auto", opacity: 1 }}
        animate={hideShortcut ? { height: 0 } : { height: "auto" }}
        transition={{ duration: 0.5 }}
        style={{ overflow: "hidden" }}
      >
        <div className="p-2 fs-5 d-flex flex-column gap-2">
          <Link href="/records/all" className="btn btn-white1 border w-100 text-lightblue fw-bold fs-6 text-start shadow-sm"><FontAwesomeIcon icon="fa-solid fa-table-list" className="fs-6 me-1" />All Records</Link>
          <Link href="/records/admin" className="btn btn-white1 border w-100 text-lightblue fw-bold fs-6 text-start shadow-sm"><FontAwesomeIcon icon="fa-solid fa-user-tie" className="fs-6 me-1" />Administrators</Link>
          <Link href="/records/ffp" className="btn btn-white1 border w-100 text-lightblue fw-bold fs-6 text-start shadow-sm"><FontAwesomeIcon icon="fa-solid fa-person" className="fs-6 me-1"/>Freshmen Formation Program</Link>
          <Link href="/records/conn" className="btn btn-white1 border w-100 text-lightblue fw-bold fs-6 text-start shadow-sm"><FontAwesomeIcon icon="fa-solid fa-user-nurse" className="fs-6 me-1"/>College of Nursing</Link>
          <Link href="/records/csite" className="btn btn-white1 border w-100 text-lightblue fw-bold fs-6 text-start shadow-sm"><FontAwesomeIcon icon="fa-solid fa-microchip" className="fs-6 me-1"/>College of Science and Information Technology and Engineering</Link>
          <Link href="/records/sed" className="btn btn-white1 border w-100 text-lightblue fw-bold fs-6 text-start shadow-sm"><FontAwesomeIcon icon="fa-solid fa-user-graduate" className="fs-6 me-1"/>School of Education</Link>
          <Link href="/records/sla" className="btn btn-white1 border w-100 text-lightblue fw-bold fs-6 text-start shadow-sm"><FontAwesomeIcon icon="fa-solid fa-palette" className="fs-6 me-1"/>School of Liberal Arts Retreat</Link>
          <Link href="/records/sma" className="btn btn-white1 border w-100 text-lightblue fw-bold fs-6 text-start shadow-sm"><FontAwesomeIcon icon="fa-solid fa-receipt" className="fs-6 me-1"/>School of Management and Accountancy</Link>
          <Link href="/records/cs" className="btn btn-white1 border w-100 text-lightblue fw-bold fs-6 text-start shadow-sm"><FontAwesomeIcon icon="fa-solid fa-handshake-angle" className="fs-6 me-1"/>Central Services</Link>
          <Link href="/records/ppo" className="btn btn-white1 border w-100 text-lightblue fw-bold fs-6 text-start shadow-sm"><FontAwesomeIcon icon="fa-solid fa-person-military-pointing" className="fs-6 me-1"/>Physical Plant Personnel Profile</Link>
        </div>
      </motion.div>
    </div>
  );
}
