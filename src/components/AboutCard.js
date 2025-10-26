"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function WeatherCard() {
  const [hideAbout, setHideAbout] = useState(false);

  return (
    <div className="card border-0 border-top border-cyan border-3 rounded-1 shadow-sm">
      {/* CARD BODY */}
      <div>
        <div className="p-3 px-2">
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide-to="2" aria-label="Slide 3"></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active" style={{height: "350px"}}>
                  <Image src="/Images/adzu-chapel.jpg" fill style={{objectFit: "cover", objectPosition: "center", filter: "brightness(30%)"}} alt="chapel1" />
                  <div className="carousel-caption">
                    <div className="text-start logo-font text-gold fs-1 fw-bold d-none d-xl-block d-lg-none d-sm-block" >AdZU Formation System</div>
                    <div className="text-start logo-font text-gold fs-1 fw-bold d-block d-xl-none d-lg-block d-sm-none" >AdZU Formation Sys..</div>
                    <div className="text-start logo-font fs-6 text-white2 d-none d-xl-block d-lg-none d-sm-block">Faculty Formation Program Monitoring and Management System</div>
                    <div className="text-start logo-font fs-6 text-white2 d-block d-xl-none d-lg-block d-sm-none">Faculty Formation Program Monitoring and Mana..</div>
                    <div className="d-flex"> 
                      <button className="btn btn-blue text-white1 mt-3 rounded-pill px-4 border border-white fw-semibold" data-bs-toggle="modal" data-bs-target="#exampleModal2">User Guide</button>
                    </div>
                  </div>
                </div>
                <div className="carousel-item" style={{height: "350px"}}>
                  <Image src="/Images/adzu-lantaka.jpeg" fill style={{objectFit: "cover", objectPosition: "center", filter: "brightness(30%)"}} alt="chapel2" />
                  <div className="carousel-caption">
                    <div className="text-start logo-font text-gold fs-1 fw-bold d-none d-xl-block d-lg-none d-sm-block" >AdZU Formation System</div>
                    <div className="text-start logo-font text-gold fs-1 fw-bold d-block d-xl-none d-lg-block d-sm-none" >AdZU Formation Sys..</div>
                    <div className="text-start logo-font fs-6 text-white2 d-none d-xl-block d-lg-none d-sm-block">Faculty Formation Program Monitoring and Management System</div>
                    <div className="text-start logo-font fs-6 text-white2 d-block d-xl-none d-lg-block d-sm-none">Faculty Formation Program Monitoring and Mana..</div>
                    <div className="d-flex"> 
                      <button className="btn btn-blue text-white1 mt-3 rounded-pill px-4 border border-white fw-semibold" data-bs-toggle="modal" data-bs-target="#exampleModal2">User Guide</button>
                    </div>
                  </div>
                </div>
                <div className="carousel-item" style={{height: "350px"}}>
                  <Image src="/Images/adzu-lantakagallery.jpeg" fill style={{objectFit: "cover", objectPosition: "center", filter: "brightness(30%)"}} alt="chapel3" />
                  <div className="carousel-caption">
                    <div className="text-start logo-font text-gold fs-1 fw-bold d-none d-xl-block d-lg-none d-sm-block" >AdZU Formation System</div>
                    <div className="text-start logo-font text-gold fs-1 fw-bold d-block d-xl-none d-lg-block d-sm-none" >AdZU Formation Sys..</div>
                    <div className="text-start logo-font fs-6 text-white2 d-none d-xl-block d-lg-none d-sm-block">Faculty Formation Program Monitoring and Management System</div>
                    <div className="text-start logo-font fs-6 text-white2 d-block d-xl-none d-lg-block d-sm-none">Faculty Formation Program Monitoring and Mana..</div>
                    <div className="d-flex"> 
                      <button className="btn btn-blue text-white1 mt-3 rounded-pill px-4 border border-white fw-semibold" data-bs-toggle="modal" data-bs-target="#exampleModal2">User Guide</button>
                    </div>
                  </div>
                </div>
                <div className="modal fade" id="exampleModal2" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div className="modal-dialog" style={{minWidth: "60%"}}>
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
                      <div className="modal-body px-4 py-3" style={{ maxHeight: "70vh", overflowY: "auto" }}>
                        <div className="text-body small">
                          <p className="text-muted mb-3">
                            A simple web tool to manage and monitor faculty formation activities.
                            This quick guide summarizes the main actions and support options.
                          </p>

                          {/* Quick Start */}
                          <div className="mb-4">
                            <h6 className="fw-semibold text-gray1 border-bottom pb-1 mb-2">Quick Start</h6>
                            <ol className="ps-3 mb-0">
                              <li>Open the system URL provided by IT.</li>
                              <li>Log in with your Admin ID, password, and complete Turnstile verification.</li>
                              <li>Access your dashboard for summaries and quick actions.</li>
                            </ol>
                          </div>
                          {/* Common Tasks */}
                          <div className="mb-4">
                            <h6 className="fw-semibold text-gray1 border-bottom pb-1 mb-2">Common Tasks</h6>
                            <div className="vstack gap-2">
                              <div className="p-2 border rounded bg-white">
                                <strong>Add a record</strong>
                                <div className="small text-muted">Records → Add Record → Fill form → Save</div>
                              </div>
                              <div className="p-2 border rounded bg-white">
                                <strong>Search records</strong>
                                <div className="small text-muted">Records → Search → Enter name/date → Search</div>
                              </div>
                              <div className="p-2 border rounded bg-white">
                                <strong>Export reports</strong>
                                <div className="small text-muted">Dashboard → Reports → Choose filters → Export</div>
                              </div>
                            </div>
                          </div>
                          {/* Account & Security */}
                          <div className="mb-4">
                            <h6 className="fw-semibold text-gray1 border-bottom pb-1 mb-2">Account & Security</h6>
                            <p className="mb-1">
                              Change your password via <em>Account Information</em>. Passwords must be 8–13 characters.
                            </p>
                            <p className="mb-0">
                              The system uses session tokens and Cloudflare Turnstile for protection.
                            </p>
                          </div>
                          {/* Troubleshooting */}
                          <div className="mb-4">
                            <h6 className="fw-semibold text-gray1 border-bottom pb-1 mb-2">Troubleshooting</h6>
                            <ul className="ps-3 mb-0">
                              <li><strong>Can’t log in:</strong> Check ID/password or contact admin.</li>
                              <li><strong>Turnstile verified but blocked:</strong> Refresh the page; if persists, contact support.</li>
                              <li><strong>Too many attempts:</strong> Wait for the cooldown before retrying.</li>
                            </ul>
                          </div>

                          {/* Support */}
                          <div>
                            <h6 className="fw-semibold text-gray1 border-bottom pb-1 mb-2">Support</h6>
                            <p className="mb-2 text-muted">For assistance contact:</p>
                            <p className="mb-0">
                              <strong>IT Support</strong><br />
                              it-support@adzu.edu.ph<br />
                              (XXX) XXX-XXXX
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* FOOTER */}
                      <div className="modal-footer border-0 bg-light px-4 py-2 d-flex justify-content-between align-items-center">
                        <small className="text-muted">Last updated: 2025</small>
                        <div className="d-flex gap-2">
                          <button
                            type="button"
                            className="btn btn-sm btn-secondary"
                            data-bs-dismiss="modal"
                          >
                            Close
                          </button>
                          <button type="button" className="btn btn-sm btn-blue">
                            Contact Support
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
    </div>
  );
}
