import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function RecordShortcut() {
  const [hideShortcut, setHideShortcut] = useState(false);

  return (
    <div className="card border-0 border-top border-lightblue border-3 rounded-1 shadow-sm mt-4">
      <div className="text-gray1 border-bottom p-2 px-3 fs-6 d-flex justify-content-between align-items-center">
        <div>
          <FontAwesomeIcon
            icon="fa-solid fa-arrow-up-right-from-square"
            className="fs-6 me-1"
          />
          Shortcuts
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
        <div className="p-2 fs-5 d-flex flex-column gap-2 bg-light">
          <Link
            href="https://www.facebook.com/ateneodezamboangauniversity"
            className="btn btn-white1 rounded-1 border w-100 text-lightblue fs-5 fw-bold text-start recordshortcut-hover d-flex align-items-center gap-2 overflow-x-hidden"
            target="_blank"
          >
            <FontAwesomeIcon
              icon="fa-brands fa-facebook"
              style={{ width: "27px", height: "27px", color: "#1877F2" }}
            />
            Facebook Page
          </Link>
          <Link
            href="https://sites.google.com/adzu.edu.ph/unit-director-for-formation/events?authuser=1&fbclid=IwY2xjawOPt_9leHRuA2FlbQIxMQBzcnRjBmFwcF9pZA80Mzc2MjYzMTY5NzM3ODgAAR4aU97Qs9nIAZmWjz0uXYmzVyermDSGXwtmA86-93l6DL83ikFnAxr9fZ8yyw_aem_nyFFNTUOL75qVZdXSEfe0A&pli=1"
            className="btn btn-white1 rounded-1 border w-100 text-lightblue fs-5 fw-bold text-start recordshortcut-hover d-flex align-items-center gap-2 overflow-x-hidden"
            target="_blank"
          >
            <Image
              src="/Images/google-sites-logo.png"
              alt="logo"
              height={27}
              width={27}
              className="rounded-pill"
              style={{ objectFit: "cover" }}
            />
            Google Sites
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
