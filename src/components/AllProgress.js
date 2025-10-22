import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { motion } from "framer-motion";

export default function AllProgress() {
  const [hideCard, setHideCard] = useState(false);

  return (
    <div className="card border-0 border-top border-cyan border-3 rounded-1 shadow-sm mt-4">
      <div className="text-gray1 border-bottom p-2 px-3 fs-6 d-flex justify-content-between align-items-center">
        <div className="d-flex gap-1 align-items-center">
          <FontAwesomeIcon icon="fa-solid fa-clipboard-user" />
          Attendance Progress - S.Y 2025-2026
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
        style={{ overflow: "hidden" }}
      >
        <div className="d-flex flex-column gap-2 p-4 pt-3">
            <div className="d-flex flex-column gap-1">
            <div className="fw-bold text-gray1">Administrator</div>
                <div className="progress rounded-1" role="progressbar" aria-label="Basic example" aria-valuemin="0" aria-valuemax="100" style={{height: "25px"}}>
                    <div className="progress-bar bg-darkblue fw-bold" style={{width: "0%"}}>0%</div>
                </div>
            </div>
            <div className="d-flex flex-column gap-1">
                <div className="fw-bold text-gray1">Freshmen Formation Program</div>
                <div className="progress rounded-1" role="progressbar" aria-label="Basic example" aria-valuemin="0" aria-valuemax="100" style={{height: "25px"}}>
                    <div className="progress-bar bg-blue fw-bold" style={{width: "100%"}}>100%</div>
                </div>
             </div>
             <div className="d-flex flex-column gap-1">
                <div className="fw-bold text-gray1">College of Nursing</div>
                <div className="progress rounded-1" role="progressbar" aria-label="Basic example" aria-valuemin="0" aria-valuemax="100" style={{height: "25px"}}>
                    <div className="progress-bar bg-red fw-bold" style={{width: "33%"}}>33%</div>
                </div>
             </div>
            <div className="d-flex flex-column gap-1">
                <div className="fw-bold text-gray1">College of Science and Information Technology and Engineering</div>
                <div className="progress rounded-1" role="progressbar" aria-label="Basic example" aria-valuemin="0" aria-valuemax="100" style={{height: "25px"}}>
                    <div className="progress-bar bg-orangee fw-bold" style={{width: "27%"}}>27%</div>
                </div>
            </div>
            <div className="d-flex flex-column gap-1">
                <div className="fw-bold text-gray1">School of Education</div>
                <div className="progress rounded-1" role="progressbar" aria-label="Basic example" aria-valuemin="0" aria-valuemax="100" style={{height: "25px"}}>
                    <div className="progress-bar bg-lightblue fw-bold" style={{width: "65%"}}>65%</div>
                </div>
            </div>
            <div className="d-flex flex-column gap-1">
                <div className="fw-bold text-gray1">School of Liberal Arts</div>
                <div className="progress rounded-1" role="progressbar" aria-label="Basic example" aria-valuemin="0" aria-valuemax="100" style={{height: "25px"}}>
                    <div className="progress-bar bg-green fw-bold" style={{width: "13%"}}>13%</div>
                </div>
            </div>
            <div className="d-flex flex-column gap-1">
                <div className="fw-bold text-gray1">School of Management and Accountancy</div>
                <div className="progress rounded-1" role="progressbar" aria-label="Basic example" aria-valuemin="0" aria-valuemax="100" style={{height: "25px"}}>
                    <div className="progress-bar bg-yellow fw-bold" style={{width: "25%"}}>25%</div>
                </div>
            </div>
            <div className="d-flex flex-column gap-1">
                <div className="fw-bold text-gray1">Central Services</div>
                <div className="progress rounded-1" role="progressbar" aria-label="Basic example" aria-valuemin="0" aria-valuemax="100" style={{height: "25px"}}>
                <div className="progress-bar bg-cyan fw-bold" style={{width: "0%"}}>0%</div>
            </div>
            </div>
            <div className="d-flex flex-column gap-1">
            <div className="fw-bold text-gray1">Physical Plant Personnnel Profile</div>
            <div className="progress rounded-1" role="progressbar" aria-label="Basic example" aria-valuemin="0" aria-valuemax="100" style={{height: "25px"}}> 
                <div className="progress-bar bg-semidarkblue fw-bold" style={{width: "0%"}}>0%</div>
            </div>
            </div>
        </div>
      </motion.div>
    </div>
  );
}
