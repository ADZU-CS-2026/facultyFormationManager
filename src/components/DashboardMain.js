"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import SideBarOffRecordAccordion from "./SideBarOffRecordAccordion";
import { motion } from "framer-motion";
import { useState } from "react";
import SideQuery from "./SidebarQuery";

export default function Dashboard({ children, sidebar }) {

  const [query, setQuery] = useState("");

  return (
    <>
      <div className="flex-grow-1 overflow-x-hidden d-flex g-0 text-nowrap">
        {/* SIDEBAR */}
        <motion.div
          animate={{width: `${sidebar ? "50px" : "230px"}`, flex: `${sidebar ? "0 0 50px" : "0 0 230px"}`}}
          transition={{duration: 0.3}}
          className={`bg-gray2 text-white2 d-flex flex-column justify-content-start d-lg-block d-none align-items-center`}
        >
          {!sidebar && (
            <>
              {/* SEARCH BAR */}
              <div className="bg-gray2 p-3 position-relative">
                <input
                  type="text"
                  placeholder="Search menu..."
                  className="w-100 bg-gray1 border-0 text-white pe-5 rounded-1 py-2 px-3 search-input"
                  style={{height: "35px"}}
                  value={query}
                  onChange={e => setQuery(e.target.value)}
                />
                <small>
                <FontAwesomeIcon
                  icon="fa-solid fa-search"
                  className="position-absolute text-yellowgray fs-6"
                  style={{ right: "30px", top: "50%", transform: "translateY(-50%)" }}
                />
                </small>
              </div>
              <SideQuery query={query}/>
            </>
          )}
          
          {/* SHOW ICONS IF HIDE SIDEBAR*/}
          {sidebar && (
            <div className="d-flex flex-column align-items-center">
              {/* HOME BUTTON */}
              <Link className="w-100 text-decoration-none" href="/">
                <div className="border-0 w-100 py-2 bg-gray2 navigation-hover position-relative d-flex justify-content-center">
                  <FontAwesomeIcon
                    icon="fa-solid fa-house"
                    className="text-yellow fs-6"
                  />
                  <div className="position-absolute start-100 top-50 translate-middle-y">
                    <div
                      className="tooltip-show d-none bg-gray2 text-white fs-6 py-2 rounded-end text-start"
                      style={{ width: "170px", paddingLeft: "20px" }}
                    >
                      Home
                    </div>
                  </div>
                </div>
              </Link>
              {/* RECORDS BUTTON */}
              <SideBarOffRecordAccordion />
              {/* ACCOUNT INFORMATION BUTTON */}
              <Link className="w-100 text-decoration-none" href="/account-information">
                <div className="border-0 w-100 py-2 bg-gray2 navigation-hover position-relative  d-flex justify-content-center">
                  <FontAwesomeIcon
                    icon="fa-solid fa-sliders"
                    className="text-yellow fs-6"
                  />
                  <div className="position-absolute start-100 top-50 translate-middle-y">
                    <div
                      className="tooltip-show d-none bg-gray2 text-white fs-6 py-2 rounded-end text-start"
                      style={{ width: "170px", paddingLeft: "20px" }}
                    >
                      Account Information
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          )}
        </motion.div>

        {/* MOBILE VIEW SIDEBAR */}
        <motion.div
          animate={{flex: `${sidebar ? "0 0 230px" : "0 0 0px"}`}}
          transition={{ duration: 0.3 }}
          className={`bg-gray2 text-white2 d-flex flex-column justify-content-start d-lg-none d-block overflow-x-hidden`}
        >
          {/* SEARCH BAR */}
              <div className="bg-gray2 p-3 position-relative">
                <input
                  type="text"
                  placeholder="Search menu..."
                  className="w-100 bg-gray1 border-0 text-white pe-5 rounded-1 py-2 px-3 search-input"
                  style={{height: "35px"}}
                  value={query}
                  onChange={e => setQuery(e.target.value)}
                />
                <small>
                <FontAwesomeIcon
                  icon="fa-solid fa-search"
                  className="position-absolute text-yellowgray fs-6"
                  style={{ right: "30px", top: "50%", transform: "translateY(-50%)" }}
                />
                </small>
              </div>
              <SideQuery query={query}/>
        </motion.div>
        {/* MAIN PAGE */}
        <div
          className={`flex-grow-1 mainpage-mobile sidebar-animation bg-white2 pb-5`}
        >
          {children}
        </div>
      </div>
    </>
  );
}
