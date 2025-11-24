"use client";

import RecordSearch from "@/app/components/RecordSearch";

export default function Records() {
  return (
    <>
      <div className="w-100">
        <div className="row g-0">
          <div className="col-12 py-4 px-3">
            {/* CARD */}
            <div className="card border-0 border-top border-secondary border-opacity-50 border-3 rounded-1 shadow-sm">
              {/* CARD HEADER */}
              <div className="text-gray1 fs-6 border-bottom p-2 px-3 d-flex justify-content-between align-items-center">
                <div style={{ fontSize: "18px" }}>Records</div>
              </div>

              {/* CARD BODY */}
              <div className="p-3 py-2">
                <nav>
                  <div
                    className="nav nav-tabs small"
                    id="nav-tab"
                    role="tablist"
                    style={{ maxWidth: "607.5px" }}
                  >
                    <button
                      className="nav-link active"
                      id="nav-home-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-home"
                      type="button"
                      role="tab"
                      aria-controls="nav-home"
                      aria-selected="true"
                    >
                      Search
                    </button>
                    <button
                      className="nav-link"
                      id="nav-profile-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-profile"
                      type="button"
                      role="tab"
                      aria-controls="nav-profile"
                      aria-selected="false"
                    >
                      Add
                    </button>
                  </div>
                </nav>
                <div className="tab-content small" id="nav-tabContent">
                  {/* PROFILE INFO SECTION */}
                  <div
                    className="tab-pane fade show active d-block p-3"
                    id="nav-home"
                    role="tabpanel"
                    aria-labelledby="nav-home-tab"
                    tabIndex="0"
                  >
                    <RecordSearch />
                  </div>

                  {/* CREATE ACCOUNT SECTION */}
                  <form>
                    <div
                      className="tab-pane fade d-block"
                      id="nav-profile"
                      role="tabpanel"
                      aria-labelledby="nav-profile-tab"
                      tabIndex="0"
                    ></div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
