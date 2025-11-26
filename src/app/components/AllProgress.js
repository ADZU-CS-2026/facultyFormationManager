"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import fetchSchoolYearStats from "@/app/fetch/fetchSchoolYearStats";

export default function AllProgress() {
  const [hideCard, setHideCard] = useState(false);

  // 1. FETCH DATA (We will only use it for the current year)
  const { data: stats, isLoading } = useQuery({
    queryKey: ["schoolYearStats"],
    queryFn: fetchSchoolYearStats,
  });

  // --- CONFIGURATION ---
  const CURRENT_YEAR = "2025-2026";

  // 2. EXTRACT LIVE NUMBERS FOR CURRENT YEAR
  // We search the database results for "2025-2026". 
  // If not found (loading or no data yet), we default to 0.
  const currentData = stats?.find((s) => s.school_year === CURRENT_YEAR) || {
    total_population: 0,
    actual_attendance: 0,
  };

  const { total_population, actual_attendance } = currentData;

  // Calculate % for the live card
  const getPercentage = (att, total) => {
    if (!total || total === 0) return 0;
    const pct = Math.round((att / total) * 100);
    return pct > 100 ? 100 : pct;
  };

  const livePercentage = getPercentage(actual_attendance, total_population);

  return (
    <div className="card border-0 border-top border-cyan border-3 rounded-1 shadow-sm mt-4">
      <div className="text-gray1 border-bottom p-2 px-3 fs-6 d-flex justify-content-between align-items-center">
        <div className="d-flex gap-2 align-items-center">
          <FontAwesomeIcon icon="fa-solid fa-school" />
          School Year Records
        </div>
        <span
          className="cursor-pointer"
          onClick={() => setHideCard((prev) => !prev)}
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
        className="rounded-bottom"
      >
        <div className="d-flex flex-column gap-3 p-3 pt-3 bg-light">

          {/* ================================================== */}
          {/* CARD 1: DYNAMIC (LIVE DATA FROM DATABASE)          */}
          {/* ================================================== */}
          <div className="card rounded-1 d-flex flex-column gap-1 p-3">
            <div className="d-flex gap-3">
              <div className="fw-bold text-gray1 d-flex align-items-center gap-3">
                SY {CURRENT_YEAR}
                <span className="badge bg-green rounded-pill fw-normal p-0 px-1">
                  active
                </span>
              </div>
            </div>
            <div className="d-flex gap-3">
              <div className="small">
                {/* DYNAMIC POPULATION */}
                Total Population: {isLoading ? "..." : total_population}
              </div>
              <div className="small">
                {/* DYNAMIC ATTENDANCE */}
                Actual Attendance: {isLoading ? "..." : actual_attendance}
              </div>
            </div>
            <div className="small fw-semibold">Attendance Rate:</div>
            <div
              className="progress rounded-1"
              role="progressbar"
              style={{ height: "25px" }}
            >
              <div
                className="progress-bar bg-blue fw-bold"
                style={{ width: `${livePercentage}%` }}
              >
                {livePercentage}%
              </div>
            </div>
          </div>

          {/* ================================================== */}
          {/* CARD 2: STATIC (HISTORY)                           */}
          {/* ================================================== */}
          <div className="card rounded-1 d-flex flex-column gap-1 p-3">
            <div className="fw-bold text-gray1">SY 2024-2025</div>
            <div className="d-flex gap-3">
              <div className="small">Total Population: 332</div>
              <div className="small">Actual Attendance: 98</div>
            </div>
            <div className="small fw-semibold">Attendance Rate:</div>
            <div
              className="progress rounded-1"
              role="progressbar"
              style={{ height: "25px" }}
            >
              <div
                className="progress-bar bg-blue fw-bold"
                style={{ width: "30%" }}
              >
                30%
              </div>
            </div>
          </div>

          {/* ================================================== */}
          {/* CARD 3: STATIC (HISTORY)                           */}
          {/* ================================================== */}
          <div className="card rounded-1 d-flex flex-column gap-1 p-3">
            <div className="fw-bold text-gray1">SY 2023-2024</div>
            <div className="d-flex gap-3">
              <div className="small">Total Population: 330</div>
              <div className="small">Actual Attendance: 53</div>
            </div>
            <div className="small fw-semibold">Attendance Rate:</div>
            <div
              className="progress rounded-1"
              role="progressbar"
              style={{ height: "25px" }}
            >
              <div
                className="progress-bar bg-blue fw-bold"
                style={{ width: "16%" }}
              >
                16%
              </div>
            </div>
          </div>

        </div>
      </motion.div>
    </div>
  );
}