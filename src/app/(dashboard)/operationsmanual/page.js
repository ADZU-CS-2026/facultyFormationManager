"use client";

import Image from "next/image";

export default function MissionAndVision() {
  return (
    <div className="w-100">
      <div className="row g-0">
        <div className="col-12 py-4 px-3">
          {/* MAIN CARD */}
          <div className="card border-0 border-top border-secondary border-opacity-50 border-3 rounded-1 shadow-sm">
            {/* HEADER */}
            <div className="text-gray1 fs-6 border-bottom p-2 px-3 d-flex justify-content-between align-items-center">
              <div style={{ fontSize: "18px" }}>Operations Manual</div>
            </div>

            {/* BODY */}
            <div className="p-4">
              {/* VISION CARD */}
              <div className="card shadow-sm rounded-2 border-0 mb-4 text-wrap text-break">
                <div className="card-body">
                  <h5
                    className="fw-bold text-primary border-start border-3 ps-2 mb-3"
                    style={{ color: "#0c2461" }}
                  >
                    Vision
                  </h5>
                  <p className="small lh-base m-0">
                    The Formation Office is determined to set the hearts of the
                    community on fire with deep faith and love of God.
                  </p>
                </div>
              </div>

              {/* MISSION CARD */}
              <div className="card shadow-sm rounded-2 border-0 mb-4 text-wrap text-break">
                <div className="card-body">
                  <h5
                    className="fw-bold text-primary border-start border-3 ps-2 mb-3"
                    style={{ color: "#0c2461" }}
                  >
                    Mission
                  </h5>
                  <p className="small lh-base mb-4">
                    Our mission is to foster the holistic personal development
                    of the community by providing activities and programs that
                    will assist the community to be:
                  </p>

                  {/* MISSION CARDS */}
                  <div className="row g-3">
                    {/* Competent */}
                    <div className="col-12 col-md-6">
                      <div
                        className="card h-100 border-0 shadow-sm p-3 text-wrap text-break"
                        style={{ backgroundColor: "#f4f7ff" }}
                      >
                        <h6
                          className="fw-bold mb-2"
                          style={{ color: "#1B3A90" }}
                        >
                          Competent
                        </h6>
                        <p className="small lh-base mb-0">
                          A solid grounding of self toward self-awareness and
                          self-acceptance of abilities and limitations that
                          contribute to human fulfillment.
                        </p>
                      </div>
                    </div>

                    {/* Conscience */}
                    <div className="col-12 col-md-6">
                      <div
                        className="card h-100 border-0 shadow-sm p-3 text-wrap text-break"
                        style={{ backgroundColor: "#f4f7ff" }}
                      >
                        <h6
                          className="fw-bold mb-2"
                          style={{ color: "#1B3A90" }}
                        >
                          Conscience
                        </h6>
                        <p className="small lh-base mb-0">
                          A look at reality with the eyes of God; discovering
                          the goodness and beauty of creation and individuals,
                          including places of pain, misery, and injustice.
                        </p>
                      </div>
                    </div>

                    {/* Character */}
                    <div className="col-12 col-md-6">
                      <div
                        className="card h-100 border-0 shadow-sm p-3 text-wrap text-break"
                        style={{ backgroundColor: "#f4f7ff" }}
                      >
                        <h6
                          className="fw-bold mb-2"
                          style={{ color: "#1B3A90" }}
                        >
                          Character
                        </h6>
                        <p className="small lh-base mb-0">
                          A transformative experience that forms expansive
                          hearts and minds as real persons of solidarity with
                          those in suffering, disadvantage, or oppression.
                        </p>
                      </div>
                    </div>

                    {/* Compassion */}
                    <div className="col-12 col-md-6">
                      <div
                        className="card h-100 border-0 shadow-sm p-3 text-wrap text-break"
                        style={{ backgroundColor: "#f4f7ff" }}
                      >
                        <h6
                          className="fw-bold mb-2"
                          style={{ color: "#1B3A90" }}
                        >
                          Compassion
                        </h6>
                        <p className="small lh-base mb-0">
                          A person in solidarity who assumes the suffering of
                          others, recognizing human dignity and the inherent
                          value of every person deeply loved by God.
                        </p>
                      </div>
                    </div>

                    {/* Culture */}
                    <div className="col-12 col-md-6">
                      <div
                        className="card h-100 border-0 shadow-sm p-3 text-wrap text-break"
                        style={{ backgroundColor: "#f4f7ff" }}
                      >
                        <h6
                          className="fw-bold mb-2"
                          style={{ color: "#1B3A90" }}
                        >
                          Culture
                        </h6>
                        <p className="small lh-base mb-0">
                          A celebration of identity and faith for social
                          transformation.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* ORGANIZATIONAL CHART */}
              <div className="mt-5">
                <h4
                  className="fw-bold mb-3 text-primary"
                  style={{ color: "#0c2461" }}
                >
                  Organizational Chart
                </h4>

                <div className="card shadow-sm border-0 p-3">
                  <Image
                    src="/Images/orgchart.png"
                    alt="Organizational Chart"
                    width={900}
                    height={700}
                    className="img-fluid rounded"
                  />
                </div>
              </div>

              {/* STAFF */}
              <div className="mt-5">
                <h4
                  className="fw-bold mb-3 text-primary"
                  style={{ color: "#0c2461" }}
                >
                  Meet Our Staff
                </h4>

                <div className="row g-4">
                  <div className="col-12 col-sm-6 col-md-3 text-center">
                    <Image
                      src="/Images/sirhoneyrod.png"
                      alt="Mr Honey Rod T. Alfaro"
                      width={300}
                      height={300}
                      className="img-fluid rounded mb-2"
                    />
                    <div className="fw-bold" style={{ color: "#1B3A90" }}>
                      Mr. Honey Rod T. Alfaro
                    </div>
                    <div className="small text-muted">
                      Unit Director for Formation
                    </div>
                  </div>

                  <div className="col-12 col-sm-6 col-md-3 text-center">
                    <Image
                      src="/Images/msyya.png"
                      alt="Ms Yya Micaela Macaroy"
                      width={300}
                      height={300}
                      className="img-fluid rounded mb-2"
                    />
                    <div className="fw-bold" style={{ color: "#1B3A90" }}>
                      Ms. Yya Micaela Macaroy
                    </div>
                    <div className="small text-muted">Secretary</div>
                  </div>

                  <div className="col-12 col-sm-6 col-md-3 text-center">
                    <Image
                      src="/Images/frtex.png"
                      alt="Fr Alberto Tex Paurom"
                      width={300}
                      height={300}
                      className="img-fluid rounded mb-2"
                    />
                    <div className="fw-bold" style={{ color: "#1B3A90" }}>
                      Fr. Alberto Paurom, SJ, MD
                    </div>
                    <div className="small text-muted">
                      Chaplain & Liturgical Coordinator
                    </div>
                  </div>

                  <div className="col-12 col-sm-6 col-md-3 text-center">
                    <Image
                      src="/Images/siregidio.png"
                      alt="Mr Egidio Sua"
                      width={300}
                      height={300}
                      className="img-fluid rounded mb-2"
                    />
                    <div className="fw-bold" style={{ color: "#1B3A90" }}>
                      Mr. Egidio Sua
                    </div>
                    <div className="small text-muted">
                      Liturgy Support Staff
                    </div>
                  </div>
                </div>
              </div>

              {/* CONTACT and FIND US */}
              <div className="mt-5">
                <div className="row g-4">
                  {/* CONTACT */}
                  <div className="col-12 col-md-6">
                    <h4
                      className="fw-bold mb-3 text-primary"
                      style={{ color: "#0c2461" }}
                    >
                      Contact Us!
                    </h4>

                    <div className="card shadow-sm border-0 p-4 text-wrap text-break">
                      <p className="mb-1">
                        <strong>Email:</strong> vpformation@adzu.edu.ph
                      </p>
                      <p className="mb-1">
                        <strong>Phone:</strong> (062) 991-0871 local 2228 / 1008
                      </p>
                      <p className="mb-1">
                        <strong>Office:</strong> University Church of the Sacred
                        Heart of Jesus
                      </p>
                      <p className="mb-1">
                        <strong>Address:</strong> Ateneo de Zamboanga
                        University, La Purisima St., Zamboanga City, 7000
                      </p>
                    </div>
                  </div>

                  {/* FIND US */}
                  <div className="col-12 col-md-6">
                    <h4
                      className="fw-bold mb-3 text-primary"
                      style={{ color: "#0c2461" }}
                    >
                      Find Us!
                    </h4>

                    <div className="card shadow-sm border-0 p-4 d-flex align-items-center justify-content-center">
                      <a
                        href="https://www.facebook.com/adzuformationoffice"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary"
                        style={{ fontSize: "60px" }}
                      >
                        <i className="bi bi-facebook"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* END BODY */}
          </div>
        </div>
      </div>
    </div>
  );
}
