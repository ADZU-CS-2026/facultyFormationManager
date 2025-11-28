"use client";
import Image from "next/image";

export default function WeatherCard() {
  return (
    <div className="card border-0 border-top border-cyan border-3 rounded-1 shadow-sm">
      {/* CARD BODY */}
      <div>
        <div className="p-3 px-2">
          <div
            id="carouselExampleSlidesOnly"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleSlidesOnly"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleSlidesOnly"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleSlidesOnly"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active" style={{ height: "350px" }}>
                <Image
                  src="/Images/adzu-chapel.jpg"
                  fill
                  style={{
                    objectFit: "cover",
                    objectPosition: "center",
                    filter: "brightness(30%)",
                  }}
                  alt="chapel1"
                />
                <div className="carousel-caption">
                  <div className="text-start logo-font text-gold fs-1 fw-bold d-none d-xl-block d-lg-none d-sm-block">
                    AdZU Formation System
                  </div>
                  <div className="text-start logo-font text-gold fs-1 fw-bold d-block d-xl-none d-lg-block d-sm-none">
                    AdZU Formation Sys..
                  </div>
                  <div className="text-start logo-font fs-6 text-white2 d-none d-xl-block d-lg-none d-sm-block">
                    Faculty Formation Program Monitoring and Management System
                  </div>
                  <div className="text-start logo-font fs-6 text-white2 d-block d-xl-none d-lg-block d-sm-none">
                    Faculty Formation Program Monitoring and Mana..
                  </div>
                  <div className="d-flex">
                    <button
                      className="btn btn-blue text-white1 mt-3 rounded-pill px-4 border border-white fw-semibold"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal2"
                    >
                      User Guide
                    </button>
                  </div>
                </div>
              </div>
              <div className="carousel-item" style={{ height: "350px" }}>
                <Image
                  src="/Images/adzu-lantaka.jpeg"
                  fill
                  style={{
                    objectFit: "cover",
                    objectPosition: "center",
                    filter: "brightness(30%)",
                  }}
                  alt="chapel2"
                />
                <div className="carousel-caption">
                  <div className="text-start logo-font text-gold fs-1 fw-bold d-none d-xl-block d-lg-none d-sm-block">
                    AdZU Formation System
                  </div>
                  <div className="text-start logo-font text-gold fs-1 fw-bold d-block d-xl-none d-lg-block d-sm-none">
                    AdZU Formation Sys..
                  </div>
                  <div className="text-start logo-font fs-6 text-white2 d-none d-xl-block d-lg-none d-sm-block">
                    Faculty Formation Program Monitoring and Management System
                  </div>
                  <div className="text-start logo-font fs-6 text-white2 d-block d-xl-none d-lg-block d-sm-none">
                    Faculty Formation Program Monitoring and Mana..
                  </div>
                  <div className="d-flex">
                    <button
                      className="btn btn-blue text-white1 mt-3 rounded-pill px-4 border border-white fw-semibold"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal2"
                    >
                      User Guide
                    </button>
                  </div>
                </div>
              </div>
              <div className="carousel-item" style={{ height: "350px" }}>
                <Image
                  src="/Images/adzu-lantakagallery.jpeg"
                  fill
                  style={{
                    objectFit: "cover",
                    objectPosition: "center",
                    filter: "brightness(30%)",
                  }}
                  alt="chapel3"
                />
                <div className="carousel-caption">
                  <div className="text-start logo-font text-gold fs-1 fw-bold d-none d-xl-block d-lg-none d-sm-block">
                    AdZU Formation System
                  </div>
                  <div className="text-start logo-font text-gold fs-1 fw-bold d-block d-xl-none d-lg-block d-sm-none">
                    AdZU Formation Sys..
                  </div>
                  <div className="text-start logo-font fs-6 text-white2 d-none d-xl-block d-lg-none d-sm-block">
                    Faculty Formation Program Monitoring and Management System
                  </div>
                  <div className="text-start logo-font fs-6 text-white2 d-block d-xl-none d-lg-block d-sm-none">
                    Faculty Formation Program Monitoring and Mana..
                  </div>
                  <div className="d-flex">
                    <button
                      className="btn btn-blue text-white1 mt-3 rounded-pill px-4 border border-white fw-semibold"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal2"
                    >
                      User Guide
                    </button>
                  </div>
                </div>
              </div>
              <div
              className="modal fade"
              id="exampleModal2"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog" style={{ minWidth: "60%" }}>
                <div className="modal-content">
                  {/* HEADER */}
                  <div className="modal-header bg-light border-0 px-4 py-3">
                    <h6 className="modal-title fw-semibold text-gray1 mb-0">
                      ADZU Formation System — User Guide
                    </h6>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  {/* BODY */}
                  <div
                    className="modal-body px-4 py-3"
                    style={{ maxHeight: "70vh", overflowY: "auto" }}
                  >
                    <div className="text-body small">
                      <p className="text-muted mb-3 text-wrap text-break">
                        A web-based platform for the <strong>Faculty Formation Program Monitoring and Management System</strong> of AdZU. This guide outlines the system&apos;s purpose and navigation.
                      </p>

                      {/* Quick Start */}
                      <div className="mb-4">
                        <h6 className="fw-semibold text-gray1 border-bottom pb-1 mb-2">
                          Quick Start
                        </h6>
                        <ol className="ps-3 mb-0">
                          <li>Open the system URL provided: https://adzu-formationsystem.vercel.app/</li>
                          <li>
                            Log in with your <strong>ID</strong> and <strong>password</strong>. Complete the verification.
                          </li>
                          <li>
                            Access the <strong>Home</strong> dashboard for an overview of the school year records, the calendar, and system shortcuts.
                          </li>
                        </ol>
                      </div>
                      
                      {/* System Navigation */}
                      <div className="mb-4">
                        <h6 className="fw-semibold text-gray1 border-bottom pb-1 mb-2 text-wrap text-break">
                          Main Navigation
                        </h6>
                        <div className="vstack gap-2 text-wrap text-break">
                          <div className="p-2 border rounded bg-white">
                            <strong>Home</strong>
                            <div className="small text-muted">
                              Your main dashboard. View active school year records, upcoming events via the calendar, and important links such as the links to the Formation Office&apos;s Facebook Page and Google Sites.
                            </div>
                          </div>
                          <div className="p-2 border rounded bg-white">
                            <strong>Records</strong>
                            <div className="small text-muted">
                              Search and manage individual faculty formation records. Use the <strong>Add Record</strong> tab to input new faculty data.
                            </div>
                          </div>
                          <div className="p-2 border rounded bg-white">
                            <strong>Operations Manual</strong>
                            <div className="small text-muted">
                              Read the comprehensive overview and history of the Ateneo de Zamboanga University and the Formation Office.
                            </div>
                          </div>
                          <div className="p-2 border rounded bg-white">
                            <strong>Events</strong>
                            <div className="small text-muted">
                              View <strong>Recent Events</strong> and <strong>Past Events</strong>. Admin/Staff can use <strong>Enable Edit Mode</strong> to modify Recent Events and add new subcards for Past Events.
                            </div>
                          </div>
                          <div className="p-2 border rounded bg-white">
                            <strong>About</strong>
                            <div className="small text-muted">
                              Information regarding the Office of the Unit Director for Formation and its mission.
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Account & Administrator Tasks */}
                      <div className="mb-4">
                          <h6 className="fw-semibold text-gray1 border-bottom pb-1 mb-2">
                            Settings & Administration
                          </h6>
                          <div className="vstack gap-2">
                            <div className="p-2 border rounded bg-white">
                              <strong>Account Information</strong>
                              <div className="small text-muted">
                                View your Role and ID Number. Use <strong>Change Password</strong> to update your credentials (must be 8–13 characters).
                              </div>
                            </div>
                            <div className="p-2 border rounded bg-white">
                              <strong>Admin Settings (Admin Only)</strong>
                              <div className="small text-muted">
                                Manage system staff accounts. Use the <strong>Create Staff Account</strong> tab to add new administrative users.
                              </div>
                            </div>
                            <div className="p-2 border rounded bg-white">
                              <strong>Archive</strong>
                              <div className="small text-muted text-wrap text-break">
                                View the list of archived or inactive faculty members. By default, inactive users are shown. <strong>Administrators</strong> can use the <strong>Toggle</strong> button to change a user&apos;s status. Staff can view but cannot modify statuses.
                              </div>
                            </div>
                             <div className="p-2 border rounded bg-white">
                              <strong>Approval Queue (Admin Only)</strong>
                              <div className="small text-muted text-wrap text-break">
                                Review pending changes submitted by staff. Use <strong>Approve</strong> to apply changes or <strong>Reject</strong> to decline them.
                              </div>
                            </div>
                            <div className="p-2 border rounded bg-white">
                              <strong>My Changes (Staff)</strong>
                              <div className="small text-muted text-wrap text-break">
                                Track your pending, approved, and rejected submissions. Submit drafts for admin approval.
                              </div>
                            </div>
                          </div>
                      </div>
                      
                      {/* Security */}
                      <div className="mb-4">
                        <h6 className="fw-semibold text-gray1 border-bottom pb-1 mb-2">
                          Security
                        </h6>
                        <ul className="ps-3 mb-0">
                          <li>
                            The system uses session tokens and Cloudflare Turnstile for protection.
                          </li>
                          <li>
                            <strong>Can&apos;t log in?</strong> Double-check your ID/password and try refreshing.
                          </li>
                        </ul>
                      </div>

                    </div>
                  </div>
                  {/* FOOTER */}
                  <div className="modal-footer border-0 bg-light px-4 py-2 d-flex justify-content-between align-items-center">
                    <small className="text-muted">Last updated: 2025</small>
                    <button
                      type="button"
                      className="btn btn-sm btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
