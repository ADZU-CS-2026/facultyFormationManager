import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { motion } from "framer-motion";

export default function AllProgress() {
  const [hideCard, setHideCard] = useState(false);

  return (
    <div className="card border-0 border-top border-cyan border-3 rounded-1 shadow-sm mt-4">
      <div className="text-gray1 border-bottom p-2 px-3 fs-6 d-flex justify-content-between align-items-center">
        <div className="d-flex gap-2 align-items-center">
        <FontAwesomeIcon icon="fa-solid fa-school" />
        School Year Records
        </div>
        <span
          className="cursor-pointer"
          onClick={() => setHideCard((prev) => (prev ? false : true))}
        >
          <small className="text-lightgray">
            {!hideCard ? (
              <FontAwesomeIcon icon="fa-solid fa-minus" />
            ) : (
              <FontAwesomeIcon icon="fa-solid fa-plus" />
            )}
          </small>
        </span>
      </div>
      <motion.div
        animate={hideCard ? { height: 0 } : { height: "auto" }}
        transition={{ duration: 0.5 }}
        style={{ overflow: "hidden"}}
        className="rounded-bottom"
      >
        <div className="d-flex flex-column gap-3 p-3 pt-3 bg-light">  
            <div className="card rounded-1 d-flex flex-column gap-1 p-3">
            <div className="d-flex gap-3">
              <div className="fw-bold text-gray1 d-flex align-items-center gap-3">SY 2025-2026<span className="badge bg-green rounded-pill fw-normal p-0 px-1">active</span></div>
            </div>
            <div className="d-flex gap-3">
              <div className="small">Total Population: 334</div>
              <div className="small">Actual Attendance: 86</div>
            </div>
            <div className="small fw-semibold">Attendance Rate:</div>
                <div className="progress rounded-1" role="progressbar" aria-label="Basic example" aria-valuemin="0" aria-valuemax="100" style={{height: "25px"}}>
                    <div className="progress-bar bg-blue fw-bold" style={{width: "26%"}}>26%</div>
                </div>
            </div>
            <div className="card rounded-1 d-flex flex-column gap-1 p-3">
                <div className="fw-bold text-gray1">SY 2024-2025</div>
                <div className="d-flex gap-3">
                <div className="small">Total Population: 332</div>
                <div className="small">Actual Attendance: 98</div>
                </div>
                <div className="small fw-semibold">Attendance Rate:</div>
                <div className="progress rounded-1" role="progressbar" aria-label="Basic example" aria-valuemin="0" aria-valuemax="100" style={{height: "25px"}}>
                    <div className="progress-bar bg-blue fw-bold" style={{width: "30%"}}>30%</div>
                </div>
             </div>
             <div className="card rounded-1 d-flex flex-column gap-1 p-3">
                <div className="fw-bold text-gray1">SY 2023-2024</div>
                <div className="d-flex gap-3">
                <div className="small">Total Population: 330</div>
            <div className="small">Actual Attendance: 53</div>
            </div>
            <div className="small fw-semibold">Attendance Rate:</div>
                <div className="progress rounded-1" role="progressbar" aria-label="Basic example" aria-valuemin="0" aria-valuemax="100" style={{height: "25px"}}>
                    <div className="progress-bar bg-blue fw-bold" style={{width: "16%"}}>16%</div>
                </div>
             </div>
        </div>
      </motion.div>
    </div>
  );
}
