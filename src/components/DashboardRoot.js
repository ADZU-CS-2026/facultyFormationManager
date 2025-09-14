"use client";

export default function Dashboard({ children, sidebar }) {
  return (
    <>
      <div className="d-flex overflow-x-hidden flex-column min-vh-100">
        {/* ROOT */}
        {children}
      </div>
      {/* FOOTER */}
      <div className="d-flex" style={{ height: "51px" }}>
        <div
          className="d-lg-none d-block bg-gray2 sidebar-animation"
          style={{
            width: sidebar ? "230px" : "0px",
            flex: sidebar ? "0 0 230px" : "0 0 0",
          }}
        ></div>
        <div
          className="d-lg-block d-none bg-gray2 sidebar-animation"
          style={{ flex: `${sidebar ? "0 0 50px" : "0 0 230px"}`}}
        ></div>
        <div
          className={`flex-grow-1 text-gray1 overflow-x-hidden mainpage-mobile bg-white1 border-0 border-top d-flex justify-content-between align-items-center px-3`}
        >
          <div className="fs-6 text-nowrap">
            <small>
              <small>
                <span className="fw-bold">
                  Copyright © 2025 Ateneo de Zamboanga University.
                </span>{" "}
                All rights reserved.
              </small>
            </small>
          </div>
          <div className="fs-6 d-lg-block d-none text-nowrap">
            <small>
              <small>
                <span className="fw-bold">Version</span> 1.5.0 LTS.
              </small>
            </small>
          </div>
        </div>
      </div>
    </>
  );
}
