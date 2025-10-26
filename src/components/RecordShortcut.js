import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function RecordShortcut() {
  const [hideShortcut, setHideShortcut] = useState(false);

  return (
    <div className="card border-0 border-top border-lightblue border-3 rounded-1 shadow-sm">
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
        animate={hideShortcut ? { height: 0 } : { height: "auto" }}
        transition={{ duration: 0.5 }}
        style={{ overflow: "hidden" }}
      >
<<<<<<< HEAD
        <div className="p-2 fs-5 d-flex flex-column gap-2 bg-light rounded-bottom">
=======
        <div className="p-2 fs-5 d-flex flex-column gap-2">
>>>>>>> main
          <Link href="/records/all" className="btn btn-white1 rounded-1 border w-100 text-lightblue fw-bold text-start recordshortcut-hover d-flex align-items-center gap-2"><Image src="/Images/adzu-logo.png" alt="logo" height={30} width={30} className="rounded-pill" style={{objectFit:"cover"}}/>All Records</Link>
          <Link href="/records/admin" className="btn btn-white1 rounded-1 border w-100 text-lightblue fw-bold text-start recordshortcut-hover d-flex align-items-center gap-2"><Image src="/Images/adzu-logo.png" alt="logo" height={30} width={30} className="rounded-pill" style={{objectFit:"cover"}}/>Administrators</Link>
          <Link href="/records/ffp" className="btn btn-white1 rounded-1 border w-100 text-lightblue fw-bold text-start recordshortcut-hover d-flex align-items-center gap-2"><Image src="/Images/adzu-logo.png" alt="logo" height={30} width={30} className="rounded-pill" style={{objectFit:"cover"}}/>Freshmen Formation Program</Link>
          <Link href="/records/conn" className="btn btn-white1 rounded-1 border w-100 text-lightblue fw-bold text-start recordshortcut-hover d-flex align-items-center gap-2"><Image src="/Images/nursing.png" alt="logo" height={30} width={30} className="rounded-pill" style={{objectFit:"cover"}}/>College of Nursing</Link>
<<<<<<< HEAD
          <Link href="/records/csite" className="btn btn-white1 rounded-1 border w-100 text-lightblue fw-bold text-start recordshortcut-hover d-flex align-items-center gap-2 overflow-x-hidden"><Image alt="logo" src="/Images/csite.jpg" height={30} width={30} className="rounded-pill" style={{objectFit:"cover"}}/><span className="d-xl-inline d-none">College of Science and Information...</span><span className="d-lg-none d-md-inline d-none">College of Science and Information Technology and Engineering</span><span className="d-inline d-md-none d-lg-inline d-xl-none">College of Science and Information Tech...</span></Link>
          <Link href="/records/sed" className="btn btn-white1 rounded-1 border w-100 text-lightblue fw-bold text-start recordshortcut-hover d-flex align-items-center gap-2"><Image src="/Images/education.png" alt="logo" height={30} width={30} className="rounded-pill" style={{objectFit:"cover"}}/>School of Education</Link>
          <Link href="/records/sla" className="btn btn-white1 rounded-1 border w-100 text-lightblue fw-bold text-start recordshortcut-hover d-flex align-items-center gap-2"><Image src="/Images/liberalarts.jpg" alt="logo" height={30} width={30} className="rounded-pill" style={{objectFit:"cover"}}/>School of Liberal Arts Retreat</Link>
          <Link href="/records/sma" className="btn btn-white1 rounded-1 border w-100 text-lightblue fw-bold text-start recordshortcut-hover d-flex align-items-center gap-2 overflow-x-hidden"><Image src="/Images/managementacc.jpg" alt="logo" height={30} width={30} className="rounded-pill" style={{objectFit:"cover"}}/>School of Management and Accountancy</Link>
=======
          <Link href="/records/csite" className="btn btn-white1 rounded-1 border w-100 text-lightblue fw-bold text-start recordshortcut-hover d-flex align-items-center gap-2 overflow-x-hidden"><Image alt="logo" src="/Images/csite.jpg" height={30} width={30} className="rounded-pill" style={{objectFit:"cover"}}/><span className="d-xxl-inline d-none">College of Science and Information...</span><span className="d-lg-none d-md-inline d-none">College of Science and Information Technology and Engineering</span><span className="d-inline d-md-none d-lg-none">College of Science and Information Tech...</span></Link>
          <Link href="/records/sed" className="btn btn-white1 rounded-1 border w-100 text-lightblue fw-bold text-start recordshortcut-hover d-flex align-items-center gap-2"><Image src="/Images/education.png" alt="logo" height={30} width={30} className="rounded-pill" style={{objectFit:"cover"}}/>School of Education</Link>
          <Link href="/records/sla" className="btn btn-white1 rounded-1 border w-100 text-lightblue fw-bold text-start recordshortcut-hover d-flex align-items-center gap-2"><Image src="/Images/liberalarts.jpg" alt="logo" height={30} width={30} className="rounded-pill" style={{objectFit:"cover"}}/>School of Liberal Arts Retreat</Link>
          <Link href="/records/sma" className="btn btn-white1 rounded-1 border w-100 text-lightblue fw-bold text-start recordshortcut-hover d-flex align-items-center gap-2"><Image src="/Images/adzu-logo.png" alt="logo" height={30} width={30} className="rounded-pill" style={{objectFit:"cover"}}/>School of Management and Accountancy</Link>
>>>>>>> main
          <Link href="/records/cs" className="btn btn-white1 rounded-1 border w-100 text-lightblue fw-bold text-start recordshortcut-hover d-flex align-items-center gap-2"><Image src="/Images/adzu-logo.png" alt="logo" height={30} width={30} className="rounded-pill" style={{objectFit:"cover"}}/>Central Services</Link>
          <Link href="/records/ppo" className="btn btn-white1 rounded-1 border w-100 text-lightblue fw-bold text-start recordshortcut-hover d-flex align-items-center gap-2"><Image src="/Images/adzu-logo.png" alt="logo" height={30} width={30} className="rounded-pill" style={{objectFit:"cover"}}/>Physical Plant Personnel Profile</Link>
        </div>
      </motion.div>
    </div>
  );
}
