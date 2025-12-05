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

  // Fetch data on mount
  useEffect(() => {
    const fetchStats = async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get("/api/stats/school-year");
        console.log("API Response:", data); // Debug log
        setStats(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Failed to fetch school year stats:", error);
        setStats([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchStats();
  }, []);

  // Current active school year
  const CURRENT_YEAR = "2025-2026";

  // Static data for previous years
  const previousYearsData = [
    { school_year: "2024-2025", total_population: 332, actual_attendance: 96 },
    { school_year: "2023-2024", total_population: 330, actual_attendance: 53 },
  ];

  // Calculate percentage helper
  const getPercentage = (attendance, population) => {
    if (!population || population === 0) return 0;
    const pct = Math.round((attendance / population) * 100);
    return pct > 100 ? 100 : pct;
  };

  // Get current year data from API
  const currentYearData = stats.find((s) => s.school_year === CURRENT_YEAR);

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
          {isLoading ? (
            <div className="text-center text-muted py-3">
              <span className="spinner-border spinner-border-sm me-2"></span>
              Loading...
            </div>
          ) : !currentYearData ? (
            <div className="text-center text-muted py-3">
              No current school year data available.
            </div>
          ) : (
            <>
              {/* Current Year */}
              <div className="card rounded-1 d-flex flex-column gap-1 p-3">
                <div className="d-flex gap-3">
                  <div className="fw-bold text-gray1 d-flex align-items-center gap-3">
                    SY {currentYearData.school_year}
                    <span className="badge bg-green rounded-pill fw-normal p-0 px-1">
                      active
                    </span>
                  </div>
                </div>
                <div className="d-flex gap-3">
                  <div className="small">
                    Total Population: {currentYearData.total_population}
                  </div>
                  <div className="small">
                    Actual Attendance: {currentYearData.actual_attendance}
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
                    style={{ width: `${getPercentage(currentYearData.actual_attendance, currentYearData.total_population)}%` }}
                  >
                    {getPercentage(currentYearData.actual_attendance, currentYearData.total_population)}%
                  </div>
                </div>
              </div>

              {/* Toggle Previous Years */}
              <button
                className="btn btn-sm btn-outline-secondary w-100"
                onClick={() => setShowPreviousYears((prev) => !prev)}
              >
                <FontAwesomeIcon
                  icon={showPreviousYears ? "fa-solid fa-chevron-up" : "fa-solid fa-chevron-down"}
                  className="me-2"
                />
                {showPreviousYears ? "Hide Previous Years" : "Show Previous Years"}
              </button>

              {/* Previous Years */}
              {showPreviousYears && previousYearsData.map((yearData) => {
                const { school_year, total_population, actual_attendance } = yearData;
                const percentage = getPercentage(actual_attendance, total_population);

                return (
                  <div
                    key={school_year}
                    className="card rounded-1 d-flex flex-column gap-1 p-3"
                  >
                    <div className="d-flex gap-3">
                      <div className="fw-bold text-gray1 d-flex align-items-center gap-3">
                        SY {school_year}
                      </div>
                    </div>
                    <div className="d-flex gap-3">
                      <div className="small">
                        Total Population: {total_population}
                      </div>
                      <div className="small">
                        Actual Attendance: {actual_attendance}
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
                        style={{ width: `${percentage}%` }}
                      >
                        {percentage}%
                      </div>
                    </div>
                  </div>
                );
              })}
            </>
          )}
        </div>
      </motion.div>
    </div>
  );
}