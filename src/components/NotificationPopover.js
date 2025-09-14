"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function NotificationPopover({ notifPopup, notifPop }) {
  return (
    <>
      {/* NOTIFICATION BUTTON */}
      <div
        className={`h-100 px-3 d-flex justify-center align-items-center notification-hover cursor-pointer ${notifPopup && "bg-semidarkblue"}`}
        onClick={notifPop}
      >
        <FontAwesomeIcon icon="fa-solid fa-bell" className="fs-5" />
      </div>
      {/* NOTIFICATION POPUP */}
      <div
        className={`bg-white position-absolute card top-100 end-50 rounded-bottom-1 rounded-0 ${!notifPopup && "d-none"}`}
        style={{ width: "276px", zIndex: "99999" }}
      >
        <div className="border-bottom p-2 d-flex">
          <FontAwesomeIcon
            icon="fa-solid fa-earth-asia"
            className="text-red fs-3 mt-1"
          />
          <div className="text-gray1 d-flex flex-column ms-3">
            <div className="fs-6 small">
              <small>Project Started!</small>
            </div>
            <div className="fs-6 small text-lightgray">
              <small>
                <small>Started At: Sep, 2025</small>
              </small>
            </div>
          </div>
        </div>
        <div className="fs-6 small text-gray1 pt-5 d-flex justify-content-center">
          <small className="text-center">Notification Section</small>
        </div>
      </div>
    </>
  );
}
