"use client";

import Image from "next/image";
import { useState } from "react";

export default function About() {
  const [hoveredOffice, setHoveredOffice] = useState(null);

  const offices = [
    {
      id: 1,
      name: "SACSI",
      fullName: "Social Awareness and Community Service Involvement Formation Program",
      description: "Empowering students through community engagement and social responsibility initiatives that foster meaningful connections with underserved communities.",
      hasFacebook: true,
      facebookUrl: "https://www.facebook.com/sacsiadzu"
    },
    {
      id: 2,
      name: "CMO",
      fullName: "Campus Ministry Office",
      description: "Nurturing spiritual growth and faith development through prayer services, retreats, and religious activities that strengthen the Jesuit identity.",
      hasFacebook: true,
      facebookUrl: "https://www.facebook.com/adzucollegecmo"
    },
    {
      id: 3,
      name: "CGCO",
      fullName: "College Guidance and Counseling Office",
      description: "Providing professional counseling and guidance services to support students' mental health, personal growth, and academic success.",
      hasFacebook: true,
      facebookUrl: "https://www.facebook.com/AdzuCGCO20"
    },
    {
      id: 4,
      name: "FFP",
      fullName: "Freshmen Formation Program",
      description: "Welcoming and guiding first-year students through their transition to university life with comprehensive orientation and formation activities.",
      hasFacebook: true,
      facebookUrl: "https://www.facebook.com/profile.php?id=61555743475144"
    },
    {
      id: 5,
      name: "AAO",
      fullName: "Ateneo Athletics Office",
      description: "Promoting physical wellness and sportsmanship through varsity programs and athletic activities that develop discipline and teamwork.",
      hasFacebook: true,
      facebookUrl: "https://www.facebook.com/adzuathletics"
    },
    {
      id: 6,
      name: "UCSHJ",
      fullName: "University Church of the Sacred Heart of Jesus",
      description: "Serving as the spiritual heart of the university community, offering masses, sacraments, and a sacred space for worship and reflection.",
      hasFacebook: false,
      facebookUrl: ""
    }
  ];

  return (
    <>
      <div className="w-100">
        <div className="row g-0">
          <div className="col-12 py-4 px-3">
            {/* CARD */}
            <div className="card border-0 border-top border-secondary border-opacity-50 border-3 rounded-1 shadow-sm">
              {/* HEADER */}
              <div className="fw-bold fs-6 text-primary border-bottom border-primary p-2 px-3 d-flex align-items-center border-opacity-25" style={{ color: "#0c2461" }}> 
                <i className="bi bi-info-circle-fill me-2" style={{ fontSize: "18px" }}></i>
                <span style={{ fontSize: "18px" }}>About</span>
              </div>

              {/* CARD BODY */}
              <div className="p-3 py-2">
                {/* ABOUT */}
                <div className="mb-4">
                  <h4 className="fw-bold mb-3 text-primary" style={{ color: "#0c2461" }}>
                    About Us!
                  </h4>

                  <div className="row align-items-center">
                    {/* IMAGE */}
                    <div className="col-md-5 mb-3 mb-md-0 d-flex justify-content-center">
                      <Image
                        src="/Images/formationofficee.png"
                        alt="Formation Office Staff"
                        width={600}
                        height={400}
                        className="img-fluid rounded shadow"
                        style={{ maxHeight: "350px", objectFit: "cover" }}
                      />
                    </div>

                    {/* INFORMATION */}
                    <div className="col-md-7">
                      <div className="card shadow-sm border-0 p-4 text-wrap text-break" style={{ backgroundColor: "#f8f9fa" }}>
                        <p className="lh-base m-0">
                          The <strong>Office of the Unit Director for Formation</strong> serves as the coordinating hub for all formation offices and departments within the university. Our mission is to foster <strong>holistic student development</strong> through integrated programs that address the spiritual, emotional, intellectual, and social dimensions of growth.
                        </p>
                        <p className="lh-base mt-3 m-0">
                          The Unit Director leads the design and implementation of comprehensive formation initiatives, including spiritual enrichment, psycho-emotional support, social action programs, and personalized coaching services that prepare students to become <em>persons for others</em>.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* OFFICES */}
                <div className="mt-5">
                  <h4 className="fw-bold mb-3 text-primary" style={{ color: "#0c2461" }}>
                    Offices Under the Unit Director for Formation
                  </h4>

                  <div className="row g-3">
                    {offices.map((office) => (
                      <div key={office.id} className="col-md-6 col-lg-4">
                        <div className="card shadow-sm border-0 h-100 position-relative"
                          style={{
                            transition: "all 0.4s ease",
                            cursor: "pointer",
                            transform: hoveredOffice === office.id ? "translateY(-8px)" : "translateY(0)",
                            boxShadow: hoveredOffice === office.id ? "0 8px 16px rgba(0,0,0,0.15)" : ""
                          }}
                          onMouseEnter={() => setHoveredOffice(office.id)}
                          onMouseLeave={() => setHoveredOffice(null)}
                        >
                          {/* Main Card Content */}
                          <div className="card-body p-3">
                            <div className="d-flex justify-content-between align-items-start mb-2">
                              <h5 className="fw-bold mb-0" style={{ color: "#0c2461" }}>
                                {office.name}
                              </h5>
                              {office.hasFacebook && (
                                <a 
                                  href={office.facebookUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-primary"
                                  onClick={(e) => e.stopPropagation()}
                                  style={{ fontSize: "20px" }}
                                >
                                  <i className="bi bi-facebook"></i>
                                </a>
                              )}
                            </div>
                            <p className="small text-muted mb-2 text-wrap text-break">
                              {office.fullName}
                            </p>
                            
                            {/* Expanded Content (Description) - Shows on hover */}
                            <div
                              style={{
                                maxHeight: hoveredOffice === office.id ? "800px" : "0",
                                opacity: hoveredOffice === office.id ? 1 : 0,
                                transition: "all 0.4s ease",
                                overflow: "hidden"
                              }}
                            >
                              <hr className="my-2" />
                              <p className="small lh-base mb-0 text-wrap text-break">
                                {office.description}
                              </p>
                            </div>
                          </div>

                          {/* Accent border */}
                          <div
                            style={{
                              position: "absolute",
                              bottom: 0,
                              left: 0,
                              right: 0,
                              height: "4px",
                              backgroundColor: "#0c2461",
                              transform: hoveredOffice === office.id ? "scaleX(1)" : "scaleX(0)",
                              transition: "transform 0.4s ease"
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .card {
          transition: all 0.3s ease;
        }
      `}</style>
    </>
  );
}