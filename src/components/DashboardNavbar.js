"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import UserPopover from "./UserPopover";
import NotifPopover from "./NotificationPopover";
import { motion } from "framer-motion"

export default function Dashboard({ sidebar, hoverSideBar, userPopup, setUserPopup, notifPopup, setNotifPopup }) {

  {
    /* ON-OFF USER POP-UP */
  }
  function userPop() {
    if (!userPopup && !notifPopup) {
      setUserPopup(true);
    } else if (!userPopup && notifPopup) {
      setUserPopup(true);
      setNotifPopup(false);
    } else {
      setUserPopup(false);
    }
  }

  {
    /* ON-OFF NOTIFICATION POP-UP*/
  }
  function notifPop() {
    if (!userPopup && !notifPopup) {
      setNotifPopup(true);
    } else if (userPopup && !notifPopup) {
      setNotifPopup(true);
      setUserPopup(false);
    } else {
      setNotifPopup(false);
    }
  }

  return (
    <>
      {/* NAVBAR */}
      <div className="d-flex flex-lg-row flex-column p-0">
        <motion.div
          animate={{ width: `${sidebar ? "50px" : "230px"}` }}
          transition={{ duration: 0.3 }}
          className={`logo-font bg-darkblue text-white fs-4 fw-bold d-flex justify-content-center align-items-center navbar-mobile navbar-animation`}
          style={{height: "50px"}}
        >
          {sidebar ? (
            <FontAwesomeIcon
              icon="fa-solid fa-graduation-cap"
              className="fs-4 d-lg-block d-none py-3"
              style={{ fontSize: "20px" }}
            />
          ) : (
            <span
              className="py-3 text-white d-lg-block d-none text-nowrap"
              style={{ fontSize: "20px" }}
            >
              ADZU F. SYS.
            </span>
          )}
          <span
            className="text-white d-lg-none d-block py-3 text-nowrap"
            style={{ fontSize: "20px" }}
          >
            ADZU FORMATION SYSTEM
          </span>
        </motion.div>
        <div
          className={`flex-grow-1 navbar-animation bg-blue d-flex justify-content-between align-items-center`}
          style={{ height: "50px" }}
        >
          {/* HIDE SIDEBAR BUTTON */}
          <button
            className="bar-hover border-0 h-100 px-3 d-flex justify-content-between align-items-center cursor-pointer"
            role="button"
            onClick={hoverSideBar}
          >
            <FontAwesomeIcon
              icon="fa-solid fa-bars"
              className="text-white1 fs-6"
            />
          </button>
          <div className="text-white1 fs-6 d-flex h-100 d-flex align-items-center position-relative">
            {/* NOTIFICAITON BUTTON */}
            <NotifPopover notifPopup={notifPopup} notifPop={notifPop} />
            {/* USER BUTTON */}
            <UserPopover userPopup={userPopup} userPop={userPop} />
          </div>
        </div>
      </div>
    </>
  );
}
