"use client";

import Image from "next/image";

export default function About() {
  return (
    <>
      <div className="w-100">
        <div className="row g-0">
          <div className="col-12 py-4 px-3">
            {/* CARD */}
            <div className="card border-0 border-top border-secondary border-opacity-50 border-3 rounded-1 shadow-sm">
              {/* CARD HEADER */}
              <div className="text-gray1 fs-6 border-bottom p-2 px-3 d-flex justify-content-between align-items-center">
                <div style={{ fontSize: "18px" }}>About</div>
              </div>

              {/* CARD BODY */}
              <div className="p-3 py-2">
                {/* ABOUT */}
                <div className="mb-4">
                  <h4
                    className="fw-bold mb-3 text-primary"
                    style={{ color: "#0c2461" }}
                  >
                    About Us!
                  </h4>

                  <div className="row align-items-center">
                    {/* INFORMATION */}
                    <div className="col-md-6">
                      <div className="card shadow-sm border-0 p-4 text-wrap text-break">
                        <p className="small lh-base m-0">
                          The Office of the Unit Director for Formation convenes
                          and oversees the various formation offices and
                          departments within the university. The Unit Director
                          plays a pivotal role in the development and
                          implementation of holistic formation programs and
                          activities, which encompass spiritual,
                          psycho-emotional, social action, and coaching
                          initiatives.
                        </p>
                      </div>
                    </div>

                    <div className="col-md-6 mt-3 mt-md-0 d-flex justify-content-center">
                      <Image
                        src="/Images/formationofficee.png"
                        alt="Formation Office Staff"
                        width={600}
                        height={400}
                        className="img-fluid rounded shadow-sm"
                      />
                    </div>
                  </div>
                </div>

                {/* OFFICES */}
                <div className="mt-5">
                  <h4
                    className="fw-bold mb-3 text-primary"
                    style={{ color: "#0c2461" }}
                  >
                    Offices Under the Unit Director for Formation
                  </h4>

                  <div className="card shadow-sm border-0 p-4">
                    <ul className="small lh-lg m-0 ps-3">
                      <li>
                        Social Awareness and Community Service Involvement
                        Formation Program (SACSI) Office
                      </li>
                      <li>Campus Ministry Office (CMO)</li>
                      <li>College Guidance and Counseling Office (CGCO)</li>
                      <li>Freshmen Formation Program</li>
                      <li>Ateneo Athletics Office (AAO)</li>
                      <li>
                        University Church of the Sacred Heart of Jesus (UCSHJ)
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
