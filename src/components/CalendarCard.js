import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { motion } from "framer-motion";

export default function CalendarCard() {
  const [hideCalendar, setHideCalendar] = useState(false);

  return (
    <div className="card border-0 border-top border-blue border-3 rounded-1 shadow-sm">
      <div className="text-gray1 border-bottom p-2 px-3 fs-6 d-flex justify-content-between align-items-center">
        <div>
          <FontAwesomeIcon icon="fa-solid fa-calendar" className="fs-6 me-1" />
          Calendar
        </div>
        <span
          className="cursor-pointer"
          onClick={() => setHideCalendar((prev) => (prev ? false : true))}
        >
          <small className="text-lightgray">
            {!hideCalendar ? (
              <FontAwesomeIcon icon="fa-solid fa-minus" />
            ) : (
              <FontAwesomeIcon icon="fa-solid fa-plus" />
            )}
          </small>
        </span>
      </div>
      <motion.div
        initial={{ height: "auto", opacity: 1 }}
        animate={hideCalendar ? { height: 0 } : { height: "auto" }}
        transition={{ duration: 0.5 }}
        style={{ overflow: "hidden" }}
      >
        <div>
          <iframe
            src="https://calendar.google.com/calendar/embed?src=your_calendar_id&ctz=Asia%2FManila"
            style={{ border: 0 }}
            width="100%"
            height="350"
          ></iframe>
        </div>
      </motion.div>
    </div>
  );
}
