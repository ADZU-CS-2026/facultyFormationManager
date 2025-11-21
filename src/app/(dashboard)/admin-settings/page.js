"use client";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import fetchAdminData from "@/app/fetch/fetchAdminData";
import { useQuery } from "@tanstack/react-query";

export default function About() {
  const [eye, setEye] = useState(false);

  const { data } = useQuery({
    queryKey: ["admin"],
    queryFn: fetchAdminData,
  });

  if (data[0].role === "STAFF") {
    return;
  }

  return (
    <>
      <div className="w-100">
        <div className="row g-0">
          <div className="col-12 py-4 px-3">
            {/* CARD */}
            <div className="card border-0 border-top border-secondary border-opacity-50 border-3 rounded-1 shadow-sm">
              {/* CARD HEADER */}
              <div className="text-gray1 fs-6 border-bottom p-2 px-3 d-flex justify-content-between align-items-center">
                <div style={{ fontSize: "18px" }}>Admin Settings</div>
              </div>

              {/* CARD BODY */}
              <div className="p-3">
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
                      Staff Account List
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
                      Create Staff Account
                    </button>
                  </div>
                </nav>
                <div className="tab-content small" id="nav-tabContent">
                  {/* PROFILE INFO SECTION */}
                  <div
                    className="tab-pane fade show active d-block"
                    id="nav-home"
                    role="tabpanel"
                    aria-labelledby="nav-home-tab"
                    tabIndex="0"
                  >
                    <div
                      className="pt-4 p-3 d-flex justify-content-center"
                      style={{ minWidth: "70vw" }}
                    >
                      <table className="table table-bordered table-striped table-hover align-middle">
                        <thead className="border">
                          <tr className="text-start">
                            <th className="bg-tableheadergray">ID</th>
                            <th className="bg-tableheadergray">Password</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td colSpan="2" className="text-center text-muted">
                              No staff accounts.
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  {/* CHANGE PASSWORD SECTION */}
                  <form>
                    <div
                      className="tab-pane fade d-block"
                      id="nav-profile"
                      role="tabpanel"
                      aria-labelledby="nav-profile-tab"
                      tabIndex="0"
                    >
                      <div
                        className="px-3 pt-3 d-flex"
                        style={{ maxWidth: "607.5px" }}
                      >
                        <div className="p-3 gap-2 d-inline-block fw-bold d-flex flex-column justify-content-evenly">
                          <div className="text-center mb-3">ID Number</div>
                          <div className="text-center">Password</div>
                        </div>
                        {/* SECTION SHOWS ADMIN CREDENTIALS INFORMATION */}
                        <div
                          className="ms-3 fw-bold d-flex flex-column justify-content-evenly"
                          style={{ width: "375px" }}
                        >
                          <input
                            type="text"
                            className="form-control form-control-sm rounded-0 w-full bg-white1"
                          />
                          <div className="position-relative">
                            <input
                              type={!eye ? "password" : "text"}
                              className="form-control form-control-sm rounded-0 w-full bg-white1"
                            />
                            {!eye ? (
                              <FontAwesomeIcon
                                icon="fa-regular fa-eye-slash"
                                className="position-absolute translate-middle-y top-50 text-yellowgray small cursor-pointer"
                                style={{ right: "10px" }}
                                onClick={() => {
                                  setEye((eye) => (eye ? false : true));
                                }}
                              />
                            ) : (
                              <FontAwesomeIcon
                                icon="fa-regular fa-eye"
                                className="position-absolute translate-middle-y top-50 text-yellowgray small cursor-pointer"
                                style={{ right: "10px" }}
                                onClick={() => {
                                  setEye((eye) => (eye ? false : true));
                                }}
                              />
                            )}
                          </div>
                        </div>
                      </div>
                      <div
                        className="ps-3 pb-3 d-flex align-items-center"
                        style={{ maxWidth: "607.5px" }}
                      >
                        <div className="px-3 gap-4 d-inline-block fw-bold d-flex flex-column justify-content-evenly">
                          <div className="text-center opacity-0">ID Number</div>
                        </div>
                        <button
                          type="submit"
                          className="ms-3 btn btn-sm btn-lightblue text-light"
                        >
                          Create Account
                        </button>
                      </div>
                    </div>
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
