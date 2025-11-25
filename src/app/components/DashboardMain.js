"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import fetchAccountData from "@/app/fetch/fetchAccountData";

export default function Dashboard({ children, sidebar }) {
  const [query, setQuery] = useState("");

  const { data } = useQuery({
    queryKey: ["account"],
    queryFn: fetchAccountData,
  });

  return (
    <>
      <div className="flex-grow-1 overflow-x-hidden d-flex g-0 text-nowrap">
        {/* SIDEBAR */}
        <motion.div
          animate={{
            width: `${sidebar ? "50px" : "230px"}`,
            flex: `${sidebar ? "0 0 50px" : "0 0 230px"}`,
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className={`bg-gray2 text-white2 d-flex flex-column justify-content-start d-lg-block d-none align-items-center`}
        >
          {!sidebar && (
            <>
              {query === "" ||
              "Main Navigation".toLowerCase().includes(query.toLowerCase()) ||
              "Home".toLowerCase().includes(query.toLowerCase()) ? (
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
                      className={`ps-1 text-decoration-none navigation-hover accordion-button py-2 ps-3 bg-gray2`}
                    >
                      <div className="d-flex gap-2 align-items-center">
                        <FontAwesomeIcon
                          icon="fa-solid fa-house"
                          className="text-yellow small"
                        />
                        <span className="small text-light">Home</span>
                      </div>
                    </button>
                  </Link>
                </>
              ) : (
                ""
              )}
              {query === "" ||
              "Records".toLowerCase().includes(query.toLowerCase()) ? (
                <>
                  {/* RECORDS */}
                  <Link href="/records" className="text-decoration-none">
                    <button
                      className={`ps-1 text-decoration-none navigation-hover accordion-button py-2 ps-3 bg-gray2`}
                    >
                      <div className="d-flex gap-2 align-items-center">
                        <FontAwesomeIcon
                          icon="fa-solid fa-table"
                          className="text-yellow small"
                        />
                        <span className="small text-light">Records</span>
                      </div>
                    </button>
                  </Link>
                </>
              ) : (
                ""
              )}
              {query === "" ||
              "Operations Manual"
                .toLowerCase()
                .includes(query.toLowerCase()) ? (
                <>
                  {/* OPERATIONS MANUAL */}
                  <Link
                    href="/operationsmanual"
                    className="text-decoration-none"
                  >
                    <button
                      className={`ps-1 text-decoration-none navigation-hover accordion-button py-2 ps-3 bg-gray2`}
                    >
                      <div className="d-flex gap-2 align-items-center">
                        <FontAwesomeIcon
                          icon="fa-solid fa-book-bible"
                          className="text-yellow small"
                        />
                        <span className="small text-light">
                          Operations Manual
                        </span>
                      </div>
                    </button>
                  </Link>
                </>
              ) : (
                ""
              )}
              {query === "" ||
              "Events".toLowerCase().includes(query.toLowerCase()) ? (
                <>
                  {/* EVENTS */}
                  <Link href="/events" className="text-decoration-none">
                    <button
                      className={`ps-1 text-decoration-none navigation-hover accordion-button py-2 ps-3 bg-gray2`}
                    >
                      <div className="d-flex gap-2 align-items-center">
                        <FontAwesomeIcon
                          icon="fa-solid fa-calendar-week"
                          className="text-yellow small"
                        />
                        <span className="small text-light">Events</span>
                      </div>
                    </button>
                  </Link>
                </>
              ) : (
                ""
              )}
              {query === "" ||
              "About".toLowerCase().includes(query.toLowerCase()) ? (
                <>
                  {/* ABOUT */}
                  <Link href="/about" className="text-decoration-none">
                    <button
                      className={`ps-1 text-decoration-none navigation-hover accordion-button py-2 ps-3 bg-gray2`}
                    >
                      <div className="d-flex gap-2 align-items-center">
                        <FontAwesomeIcon
                          icon="fa-solid fa-info"
                          className="text-yellow small"
                        />
                        <span className="small text-light">About</span>
                      </div>
                    </button>
                  </Link>
                </>
              ) : (
                ""
              )}
              {query === "" ||
              "Settings Bar".toLowerCase().includes(query.toLowerCase()) ||
              "Account Information"
                .toLowerCase()
                .includes(query.toLowerCase()) ? (
                <>
                  {/* SETTINGS BAR */}
                  <div className="bg-gray3 p-2">
                    <span className="text-lightgray small fw-light">
                      <small>SETTINGS</small>
                    </span>
                  </div>
                  {/* ACCOUNG INFORMATION BUTTON */}
                  <Link
                    href="/account-information"
                    className="text-decoration-none"
                  >
                    <button
                      className={`ps-1 text-decoration-none navigation-hover accordion-button ps-3 py-2 bg-gray2`}
                    >
                      <div className="d-flex gap-2 align-items-center">
                        <FontAwesomeIcon
                          icon="fa-solid fa-sliders"
                          className="text-yellow small"
                        />
                        <span className="small text-light">
                          Account Information
                        </span>
                      </div>
                    </button>
                  </Link>
                </>
              ) : (
                ""
              )}
              {data && (
                <>
                  {data[0].role === "ADMINISTRATOR" && (
                    <>
                      {query === "" ||
                      "Admin Settings"
                        .toLowerCase()
                        .includes(query.toLowerCase()) ? (
                        <>
                          {/* ADMIN SETTINGS */}
                          <Link
                            href="/admin-settings"
                            className="text-decoration-none"
                          >
                            <button
                              className={`ps-1 text-decoration-none navigation-hover accordion-button py-2 ps-3 bg-gray2`}
                            >
                              <div className="d-flex gap-2 align-items-center">
                                <FontAwesomeIcon
                                  icon="fa-solid fa-user-tie"
                                  className="text-yellow small"
                                />
                                <span className="small text-light">
                                  Admin Settings
                                </span>
                              </div>
                            </button>
                          </Link>
                        </>
                      ) : (
                        ""
                      )}
                    </>
                  )}
                </>
              )}
              {query === "" ||
              "Archive".toLowerCase().includes(query.toLowerCase()) ? (
                <>
                  {/* ABOUT */}
                  <Link href="/archive" className="text-decoration-none">
                    <button
                      className={`ps-1 text-decoration-none navigation-hover accordion-button py-2 ps-3 bg-gray2`}
                    >
                      <div className="d-flex gap-2 align-items-center">
                        <FontAwesomeIcon
                          icon="fa-solid fa-box-archive"
                          className="text-yellow small"
                        />
                        <span className="small text-light">Archive</span>
                      </div>
                    </button>
                  </Link>
                </>
              ) : (
                ""
              )}
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
              <Link className="w-100 text-decoration-none" href="/records">
                <div className="border-0 w-100 py-2 bg-gray2 navigation-hover position-relative d-flex justify-content-center">
                  <FontAwesomeIcon
                    icon="fa-solid fa-table"
                    className="text-yellow fs-6"
                  />
                  <div className="position-absolute start-100 top-50 translate-middle-y">
                    <div
                      className="tooltip-show d-none bg-gray2 text-white fs-6 py-2 rounded-end text-start"
                      style={{ width: "170px", paddingLeft: "20px" }}
                    >
                      Records
                    </div>
                  </div>
                </div>
              </Link>
              {/* OPERATIONS MANUAL */}
              <Link
                className="w-100 text-decoration-none"
                href="/operationsmanual"
              >
                <div className="border-0 w-100 py-2 bg-gray2 navigation-hover position-relative d-flex justify-content-center">
                  <FontAwesomeIcon
                    icon="fa-solid fa-book-bible"
                    className="text-yellow fs-6"
                  />
                  <div className="position-absolute start-100 top-50 translate-middle-y">
                    <div
                      className="tooltip-show d-none bg-gray2 text-white fs-6 py-2 rounded-end text-start"
                      style={{ width: "170px", paddingLeft: "20px" }}
                    >
                      Operations Manual
                    </div>
                  </div>
                </div>
              </Link>
              {/* EVENTS BUTTON */}
              <Link className="w-100 text-decoration-none" href="/events">
                <div className="border-0 w-100 py-2 bg-gray2 navigation-hover position-relative d-flex justify-content-center">
                  <FontAwesomeIcon
                    icon="fa-solid fa-calendar-week"
                    className="text-yellow fs-6"
                  />
                  <div className="position-absolute start-100 top-50 translate-middle-y">
                    <div
                      className="tooltip-show d-none bg-gray2 text-white fs-6 py-2 rounded-end text-start"
                      style={{ width: "170px", paddingLeft: "20px" }}
                    >
                      Events
                    </div>
                  </div>
                </div>
              </Link>
              {/* ABOUT BUTTON */}
              <Link className="w-100 text-decoration-none" href="/about">
                <div className="border-0 w-100 py-2 bg-gray2 navigation-hover position-relative d-flex justify-content-center">
                  <FontAwesomeIcon
                    icon="fa-solid fa-info"
                    className="text-yellow fs-6"
                  />
                  <div className="position-absolute start-100 top-50 translate-middle-y">
                    <div
                      className="tooltip-show d-none bg-gray2 text-white fs-6 py-2 rounded-end text-start"
                      style={{ width: "170px", paddingLeft: "20px" }}
                    >
                      About
                    </div>
                  </div>
                </div>
              </Link>
              {/* ACCOUNT INFORMATION BUTTON */}
              <Link
                className="w-100 text-decoration-none"
                href="/account-information"
              >
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
              {/* ADMIN SETTINGS BUTTON */}
              {data && (
                <>
                  {data[0].role === "ADMINISTRATOR" && (
                    <>
                      <Link
                        className="w-100 text-decoration-none"
                        href="/admin-settings"
                      >
                        <div className="border-0 w-100 py-2 bg-gray2 navigation-hover position-relative  d-flex justify-content-center">
                          <FontAwesomeIcon
                            icon="fa-solid fa-user-tie"
                            className="text-yellow fs-6"
                          />
                          <div className="position-absolute start-100 top-50 translate-middle-y">
                            <div
                              className="tooltip-show d-none bg-gray2 text-white fs-6 py-2 rounded-end text-start"
                              style={{ width: "170px", paddingLeft: "20px" }}
                            >
                              Admin Settings
                            </div>
                          </div>
                        </div>
                      </Link>
                    </>
                  )}
                </>
              )}
              {/* ARCHIVE BUTTON */}
              <Link className="w-100 text-decoration-none" href="/archive">
                <div className="border-0 w-100 py-2 bg-gray2 navigation-hover position-relative d-flex justify-content-center">
                  <FontAwesomeIcon
                    icon="fa-solid fa-box-archive"
                    className="text-yellow fs-6"
                  />
                  <div className="position-absolute start-100 top-50 translate-middle-y">
                    <div
                      className="tooltip-show d-none bg-gray2 text-white fs-6 py-2 rounded-end text-start"
                      style={{ width: "170px", paddingLeft: "20px" }}
                    >
                      Archive
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          )}
        </motion.div>

        {/* MOBILE VIEW SIDEBAR */}
        <motion.div
          animate={{ flex: `${sidebar ? "0 0 230px" : "0 0 0px"}` }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className={`bg-gray2 text-white2 d-flex flex-column justify-content-start d-lg-none d-block overflow-x-hidden`}
        >
          {query === "" ||
          "Main Navigation".toLowerCase().includes(query.toLowerCase()) ||
          "Home".toLowerCase().includes(query.toLowerCase()) ? (
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
                  className={`ps-1 text-decoration-none navigation-hover accordion-button py-2 ps-3 bg-gray2`}
                >
                  <div className="d-flex gap-2 align-items-center">
                    <FontAwesomeIcon
                      icon="fa-solid fa-house"
                      className="text-yellow small"
                    />
                    <span className="small text-light">Home</span>
                  </div>
                </button>
              </Link>
            </>
          ) : (
            ""
          )}
          {query === "" ||
          "Records".toLowerCase().includes(query.toLowerCase()) ? (
            <>
              {/* RECORDS */}
              <Link href="/records" className="text-decoration-none">
                <button
                  className={`ps-1 text-decoration-none navigation-hover accordion-button py-2 ps-3 bg-gray2`}
                >
                  <div className="d-flex gap-2 align-items-center">
                    <FontAwesomeIcon
                      icon="fa-solid fa-table"
                      className="text-yellow small"
                    />
                    <span className="small text-light">Records</span>
                  </div>
                </button>
              </Link>
            </>
          ) : (
            ""
          )}
          {query === "" ||
          "Operations Manual".toLowerCase().includes(query.toLowerCase()) ? (
            <>
              {/* MISSION AND VISION */}
              <Link href="/operationsmanual" className="text-decoration-none">
                <button
                  className={`ps-1 text-decoration-none navigation-hover accordion-button py-2 ps-3 bg-gray2`}
                >
                  <div className="d-flex gap-2 align-items-center">
                    <FontAwesomeIcon
                      icon="fa-solid fa-book-bible"
                      className="text-yellow small"
                    />
                    <span className="small text-light">Operations Manual</span>
                  </div>
                </button>
              </Link>
            </>
          ) : (
            ""
          )}
          {query === "" ||
          "Events".toLowerCase().includes(query.toLowerCase()) ? (
            <>
              {/* EVENTS */}
              <Link href="/events" className="text-decoration-none">
                <button
                  className={`ps-1 text-decoration-none navigation-hover accordion-button py-2 ps-3 bg-gray2`}
                >
                  <div className="d-flex gap-2 align-items-center">
                    <FontAwesomeIcon
                      icon="fa-solid fa-calendar-week"
                      className="text-yellow small"
                    />
                    <span className="small text-light">Events</span>
                  </div>
                </button>
              </Link>
            </>
          ) : (
            ""
          )}
          {query === "" ||
          "About".toLowerCase().includes(query.toLowerCase()) ? (
            <>
              {/* ABOUT */}
              <Link href="/about" className="text-decoration-none">
                <button
                  className={`ps-1 text-decoration-none navigation-hover accordion-button py-2 ps-3 bg-gray2`}
                >
                  <div className="d-flex gap-2 align-items-center">
                    <FontAwesomeIcon
                      icon="fa-solid fa-info"
                      className="text-yellow small"
                    />
                    <span className="small text-light">About</span>
                  </div>
                </button>
              </Link>
            </>
          ) : (
            ""
          )}
          {query === "" ||
          "Settings Bar".toLowerCase().includes(query.toLowerCase()) ||
          "Account Information".toLowerCase().includes(query.toLowerCase()) ? (
            <>
              {/* SETTINGS BAR */}
              <div className="bg-gray3 p-2">
                <span className="text-lightgray small fw-light">
                  <small>SETTINGS</small>
                </span>
              </div>
              {/* ACCOUNG INFORMATION BUTTON */}
              <Link
                href="/account-information"
                className="text-decoration-none"
              >
                <button
                  className={`ps-1 text-decoration-none navigation-hover accordion-button ps-3 py-2 bg-gray2`}
                >
                  <div className="d-flex gap-2 align-items-center">
                    <FontAwesomeIcon
                      icon="fa-solid fa-sliders"
                      className="text-yellow small"
                    />
                    <span className="small text-light">
                      Account Information
                    </span>
                  </div>
                </button>
              </Link>
            </>
          ) : (
            ""
          )}
          {data && (
            <>
              {data[0].role === "ADMINISTRATOR" && (
                <>
                  {query === "" ||
                  "Admin Settings"
                    .toLowerCase()
                    .includes(query.toLowerCase()) ? (
                    <>
                      {/* ADMIN SETTINGS */}
                      <Link
                        href="/admin-settings"
                        className="text-decoration-none"
                      >
                        <button
                          className={`ps-1 text-decoration-none navigation-hover accordion-button py-2 ps-3 bg-gray2`}
                        >
                          <div className="d-flex gap-2 align-items-center">
                            <FontAwesomeIcon
                              icon="fa-solid fa-user-tie"
                              className="text-yellow small"
                            />
                            <span className="small text-light">
                              Admin Settings
                            </span>
                          </div>
                        </button>
                      </Link>
                    </>
                  ) : (
                    ""
                  )}
                </>
              )}
            </>
          )}
          {query === "" ||
          "Archive".toLowerCase().includes(query.toLowerCase()) ? (
            <>
              {/* ABOUT */}
              <Link href="/archive" className="text-decoration-none">
                <button
                  className={`ps-1 text-decoration-none navigation-hover accordion-button py-2 ps-3 bg-gray2`}
                >
                  <div className="d-flex gap-2 align-items-center">
                    <FontAwesomeIcon
                      icon="fa-solid fa-box-archive"
                      className="text-yellow small"
                    />
                    <span className="small text-light">Archive</span>
                  </div>
                </button>
              </Link>
            </>
          ) : (
            ""
          )}
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
