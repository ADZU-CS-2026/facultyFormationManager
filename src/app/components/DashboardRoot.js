"use client";
import { motion } from "framer-motion";

export default function Dashboard({ children, sidebar }) {
  return (
    <>
      <div className="d-flex overflow-x-hidden flex-column min-vh-100">
        {/* ROOT */}
        {children}
      </div>
      {/* FOOTER */}
      <div className="d-flex" style={{ height: "51px" }}>
        <motion.div
          animate={{
            width: sidebar ? "230px" : "0px",
            flex: sidebar ? "0 0 230px" : "0 0 0px",
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="d-lg-none d-block bg-gray2"
        ></motion.div>
        <motion.div
          animate={{
            width: sidebar ? "50px" : "230px",
            flex: sidebar ? "0 0 50px" : "0 0 230px",
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="d-lg-block d-none bg-gray2"
        ></motion.div>
        <div
          className={`flex-grow-1 text-gray1 overflow-x-hidden mainpage-mobile bg-white1 border-0 border-top d-flex justify-content-between align-items-center px-3`}
        >
          <div className="fs-6 text-nowrap">
            <small>
              <span className="fw-bold">
                Copyright © 2025 Ateneo de Zamboanga University.
              </span>{" "}
              All rights reserved.
            </small>
          </div>
          <div className="fs-6 d-lg-block d-none text-nowrap">
            <small>
              <span className="fw-bold">Version</span> 1.0.0 BETA.
            </small>
          </div>
        </div>
      </div>
    </>
  );
}
