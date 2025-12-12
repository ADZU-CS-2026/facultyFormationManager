"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";

export default function AllProgress() {
  const [hideCard, setHideCard] = useState(false);
  const [showPreviousYears, setShowPreviousYears] = useState(false);
  const [stats, setStats] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showHistory, setShowHistory] = useState(false);

  // Dynamic current school year calculation
  const getCurrentSchoolYear = () => {
    const now = new Date();
    const currentYear = now.getFullYear();
    const currentMonth = now.getMonth() + 1; // 1-12

    // If current month is June (6) or later, school year is current-next
    // Otherwise, it's previous-current
    if (currentMonth >= 6) {
      return `${currentYear}-${currentYear + 1}`;
    } else {
      return `${currentYear - 1}-${currentYear}`;
    }
  };

  const CURRENT_YEAR = getCurrentSchoolYear();

  // Hardcoded History (Static Data from excel)
  const HISTORY_DATA = [
    { school_year: "2024-2025", total_population: 332, actual_attendance: 96 },
    { school_year: "2023-2024", total_population: 330, actual_attendance: 53 },
  ];

  // Fetch Live Data
  useEffect(() => {
    const fetchStats = async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get("/api/stats/school-year");
        setStats(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Failed to fetch stats:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchStats();
  }, []);

  // Helper: Get Percentage
  const getPercentage = (attendance, population) => {
    if (!population || population === 0) return 0;
    const pct = Math.round((attendance / population) * 100);
    return pct > 100 ? 100 : pct;
  };

  // Extract Current Year Data from Live Fetch
  const liveCurrentData = stats.find(s => s.school_year === CURRENT_YEAR) || {
    total_population: 0,
    actual_attendance: 0
  };

  return (
    <div className="card border-0 border-top border-cyan border-3 rounded-1 shadow-sm mt-4">
      {/* HEADER */}
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

      {/* BODY */}
      <motion.div
        animate={hideCard ? { height: 0 } : { height: "auto" }}
        transition={{ duration: 0.5 }}
        style={{ overflow: "hidden" }}
        className="rounded-bottom"
      >
        <div className="d-flex flex-column gap-3 p-3 pt-3 bg-light">

          {/* CURRENT YEAR (DYNAMIC / LIVE) */}
          <div className="card rounded-1 d-flex flex-column gap-1 p-3 border-start border-4 border-success">
            <div className="d-flex gap-3">
              <div className="fw-bold text-gray1 d-flex align-items-center gap-3">
                SY {CURRENT_YEAR}
                <span className="badge bg-green rounded-pill fw-normal p-0 px-1">
                  active
                </span>
              </div>
            </div>

            {isLoading ? (
              <div className="text-muted small">Loading live data...</div>
            ) : (
              <>
                <div className="d-flex gap-3">
                  <div className="small">
                    Total Population: {liveCurrentData.total_population}
                  </div>
                  <div className="small">
                    Actual Attendance: {liveCurrentData.actual_attendance}
                  </div>
                </div>
                <div className="small fw-semibold">Attendance Rate:</div>
                <div className="progress rounded-1" style={{ height: "25px" }}>
                  <div
                    className="progress-bar bg-blue fw-bold"
                    style={{
                      width: `${getPercentage(liveCurrentData.actual_attendance, liveCurrentData.total_population)}%`
                    }}
                  >
                    {getPercentage(liveCurrentData.actual_attendance, liveCurrentData.total_population)}%
                  </div>
                </div>
              </>
            )}
          </div>

          {/* TOGGLE BUTTON FOR HISTORY */}
          <div className="text-center">
            <button
              className="btn btn-sm btn-link text-decoration-none text-muted"
              onClick={() => setShowHistory(!showHistory)}
            >
              {showHistory ? "Hide Previous Years" : "View Previous Years"}
              <FontAwesomeIcon icon={showHistory ? "fa-solid fa-chevron-up" : "fa-solid fa-chevron-down"} className="ms-2" />
            </button>
          </div>

          {/* HISTORY YEARS (STATIC / HIDDEN BY DEFAULT) */}
          {showHistory && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="d-flex flex-column gap-3"
            >
              {HISTORY_DATA.map((year, idx) => (
                <div key={idx} className="card rounded-1 d-flex flex-column gap-1 p-3 opacity-75">
                  <div className="fw-bold text-gray1 text-muted">SY {year.school_year}</div>
                  <div className="d-flex gap-3 text-muted">
                    <div className="small">Total Population: {year.total_population}</div>
                    <div className="small">Actual Attendance: {year.actual_attendance}</div>
                  </div>
                  <div className="small fw-semibold text-muted">Attendance Rate:</div>
                  <div className="progress rounded-1" style={{ height: "25px" }}>
                    <div
                      className="progress-bar bg-secondary fw-bold"
                      style={{
                        width: `${getPercentage(year.actual_attendance, year.total_population)}%`
                      }}
                    >
                      {getPercentage(year.actual_attendance, year.total_population)}%
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          )}

        </div>
      </motion.div>
    </div>
  );
}