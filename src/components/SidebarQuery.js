"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import SideBarOnRecordAccordion from "./SideBarOnRecordAccordion";

export default function SidebarQuery({ query }) {
  return (
    <>
      {query === "" && (
        <>
          {/* MAIN NAVIGATION BAR */}
          <div className="bg-gray3 p-2">
            <span className="text-lightgray small fw-light">
              <small>MAIN NAVIGATION</small>
            </span>
          </div>
          {/* HOME BUTTON */}
          <Link href="/" className="text-decoration-none">
            <button
              className={`ps-1 text-decoration-none navigation-hover accordion-button py-2 ps-3 bg-gray2 gap-2`}
            >
              <FontAwesomeIcon
                icon="fa-solid fa-house"
                className="text-yellow small"
              />
              <span className="small text-light">Home</span>
            </button>
          </Link>
          {/* RECORDS ACCORDION */}
          <SideBarOnRecordAccordion />
          {/* SETTINGS BAR */}
          <div className="bg-gray3 p-2">
            <span className="text-lightgray small fw-light">
              <small>SETTINGS</small>
            </span>
          </div>
          {/* ACCOUNG INFORMATION BUTTON */}
          <Link href="/account-information" className="text-decoration-none">
            <button
              className={`ps-1 text-decoration-none navigation-hover accordion-button ps-3 py-2 bg-gray2 gap-2`}
            >
              <FontAwesomeIcon
                icon="fa-solid fa-sliders"
                className="text-yellow small"
              />
              <span className="small text-light">Account Information</span>
            </button>
          </Link>
        </>
      )}

      {query === "home" || query === "HOME" || query === "Home" ? (
        <>
          {/* MAIN NAVIGATION BAR */}
          <div className="bg-gray3 p-2">
            <span className="text-lightgray small fw-light">
              <small>MAIN NAVIGATION</small>
            </span>
          </div>
          {/* HOME BUTTON */}
          <Link href="/" className="text-decoration-none">
            <button
              className={`ps-1 text-decoration-none navigation-hover accordion-button py-2 ps-3 bg-gray2 gap-2`}
            >
              <FontAwesomeIcon
                icon="fa-solid fa-house"
                className="text-yellow small"
              />
              <span className="small text-light">Home</span>
            </button>
          </Link>
        </>
      ) : (
        ""
      )}

      {query === "record" ||
      query === "Record" ||
      query === "RECORD" ||
      query === "records" ||
      query === "Records" ||
      query === "RECORDS" ? (
        <>
          {/* MAIN NAVIGATION BAR */}
          <div className="bg-gray3 p-2">
            <span className="text-lightgray small fw-light">
              <small>MAIN NAVIGATION</small>
            </span>
          </div>
          {/* RECORDS ACCORDION */}
          <SideBarOnRecordAccordion />
        </>
      ) : (
        ""
      )}

      {query === "account information" ||
      query === "Account Information" ||
      query === "ACCOUNT INFORMATION" ||
      query === "account" ||
      query === "Account" ||
      query === "ACCOUNT" ||
      query === "information" ||
      query === "Information" ||
      query === "INFORMATION" ? (
        <>
          {/* SETTINGS BAR */}
          <div className="bg-gray3 p-2">
            <span className="text-lightgray small fw-light">
              <small>SETTINGS</small>
            </span>
          </div>
          {/* ACCOUNG INFORMATION BUTTON */}
          <Link href="/account-information" className="text-decoration-none">
            <button
              className={`ps-1 text-decoration-none navigation-hover accordion-button ps-3 py-2 bg-gray2 gap-2`}
            >
              <FontAwesomeIcon
                icon="fa-solid fa-sliders"
                className="text-yellow small"
              />
              <span className="small text-light">Account Information</span>
            </button>
          </Link>
        </>
      ) : (
        ""
      )}

      {query !== "" &&
      query !== "home" &&
      query !== "HOME" &&
      query !== "Home" &&
      query !== "record" &&
      query !== "Record" &&
      query !== "RECORD" &&
      query !== "records" &&
      query !== "Records" &&
      query !== "RECORDS" &&
      query !== "account information" &&
      query !== "Account Information" &&
      query !== "ACCOUNT INFORMATION" &&
      query !== "account" &&
      query !== "Account" &&
      query !== "ACCOUNT" &&
      query !== "information" &&
      query !== "Information" &&
      query !== "INFORMATION" &&
      query !== "main" && query !== "Main" && query !== "MAIN" &&
       query !== "main navigation" && query !== "Main Navigation" && query !== "MAIN NAVIGATION" &&
       query !== "setting" && query !== "Setting" && query !== "SETTING"
      && query !== "settings" && query !== "Settings" && query !== "SETTINGS" ? (
        <>
          <div className="p-5 text-center fs-6">Search Not Found : {"\("}</div>
        </>
      ) : (
        ""
      )}

      {query === "main" || query === "Main" || query === "MAIN" ||
       query === "main navigation" || query === "Main Navigation" || query === "MAIN NAVIGATION" ? (<>
        {/* MAIN NAVIGATION BAR */}
          <div className="bg-gray3 p-2">
            <span className="text-lightgray small fw-light">
              <small>MAIN NAVIGATION</small>
            </span>
          </div>
          {/* HOME BUTTON */}
          <Link href="/" className="text-decoration-none">
            <button
              className={`ps-1 text-decoration-none navigation-hover accordion-button py-2 ps-3 bg-gray2 gap-2`}
            >
              <FontAwesomeIcon
                icon="fa-solid fa-house"
                className="text-yellow small"
              />
              <span className="small text-light">Home</span>
            </button>
          </Link>
          {/* RECORDS ACCORDION */}
          <SideBarOnRecordAccordion />
      </>) : "" }


      {query === "setting" || query === "Setting" || query === "SETTING"
      || query === "settings" || query === "Settings" || query === "SETTINGS" ? (<>
        {/* SETTINGS BAR */}
          <div className="bg-gray3 p-2">
            <span className="text-lightgray small fw-light">
              <small>SETTINGS</small>
            </span>
          </div>
          {/* ACCOUNG INFORMATION BUTTON */}
          <Link href="/account-information" className="text-decoration-none">
            <button
              className={`ps-1 text-decoration-none navigation-hover accordion-button ps-3 py-2 bg-gray2 gap-2`}
            >
              <FontAwesomeIcon
                icon="fa-solid fa-sliders"
                className="text-yellow small"
              />
              <span className="small text-light">Account Information</span>
            </button>
          </Link>
      </>) : "" }


    </>
  );
}
