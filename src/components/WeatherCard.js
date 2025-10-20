"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { motion } from "framer-motion";

export default function WeatherCard() {
  const [hideWeather, setHideWeather] = useState(false);

  return (
    <div className="card border-0 border-top border-lightblue border-3 rounded-1 shadow-sm">
      {/* CARD */}
      {/* CARD HEADER */}
      <div className="text-gray1 border-bottom p-2 px-3 fs-6 d-flex justify-content-between align-items-center">
        <div>
          <FontAwesomeIcon icon="fa-solid fa-cloud" className="fs-6 me-1" />
          Weather
        </div>
        <span
          className="cursor-pointer"
          onClick={() => setHideWeather((prev) => (prev ? false : true))}
        >
          <small className="text-lightgray">
            {!hideWeather ? (
              <FontAwesomeIcon icon="fa-solid fa-minus" />
            ) : (
              <FontAwesomeIcon icon="fa-solid fa-plus" />
            )}
          </small>
        </span>
      </div>
      {/* CARD BODY */}
      <motion.div
        animate={hideWeather ? { height: 0 } : { height: "auto" }}
        transition={{ duration: 0.5 }}
        style={{ overflow: "hidden" }}
      >
        <div className="p-3 px-2">
          <div className="windy-widget">
            <iframe
              width="100%"
              height="184"
              src="https://embed.windy.com/embed2.html?lat=14.5995&lon=120.9842&detailLat=14.5995&detailLon=120.9842&width=650&height=450&zoom=6&level=surface&overlay=wind&product=ecmwf&menu=&message=&marker=&calendar=now&pressure=true&type=map&location=coordinates&detail=true&metricWind=default&metricTemp=default&radarRange=-1"
            ></iframe>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
