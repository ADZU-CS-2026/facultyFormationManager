"use client";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SideBarOffRecordAccordion() {
  return (
    <div className="border-0 w-100 py-2 bg-gray2 navigation-hover d-flex justify-content-center">
      {/* ACCORDION */}
      <FontAwesomeIcon icon="fa-solid fa-table" className="text-yellow fs-5 " />
      <div className="position-absolute start-100 top-0">
        <div
          className="accordion accordion-flush tooltip-show d-none"
          id="accordionFlush2Example"
        >
          <div className="accordion-item">
            <div className="accordion-header">
              {/* ACCORDION BUTTON */}
              <button
                className="accordion-button collapsed py-2 rounded-top rounded-start-0 d-flex justify-content-between bg-gray2"
                style={{ width: "170px" }}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
              >
                <span className="fs-6 text-light">
                  Records
                </span>
              </button>
            </div>
            <div
              id="flush-collapseTwo"
              className="accordion-collapse show collapse bg-gray1 rounded-bottom rounded-start-0"
              data-bs-parent="#accordionFlush2Example"
            >
              {/* ACCORDION LIST */}
              <div className="d-flex flex-column justify-content-start text-lightgray">
                <Link
                  className="py-1 text-decoration-none recordlist-hover text-lightgray d-flex align-items-center"
                  href="/records/admin"
                >
                  <small>
                    <FontAwesomeIcon
                      icon="fa-solid fa-circle-arrow-right"
                      className="small ms-4"
                    />
                  </small>
                  <span className="small ms-2">
                    ADMIN
                  </span>
                </Link>
                <Link
                  className="py-1 text-decoration-none recordlist-hover text-lightgray d-flex align-items-center"
                  href="/records/ffp"
                >
                  <small>
                    <FontAwesomeIcon
                      icon="fa-solid fa-circle-arrow-right"
                      className="small ms-4"
                    />
                  </small>
                  <span className="small ms-2">
                    FFP
                  </span>
                </Link>
                <Link
                  className="py-1 text-decoration-none recordlist-hover text-lightgray d-flex align-items-center"
                  href="/records/conn"
                >
                  <small>
                    <FontAwesomeIcon
                      icon="fa-solid fa-circle-arrow-right"
                      className="small ms-4"
                    />
                  </small>
                  <span className="small ms-2">
                    CON
                  </span>
                </Link>
                <Link
                  className="py-1 text-decoration-none recordlist-hover text-lightgray d-flex align-items-center"
                  href="/records/csite"
                >
                  <small>
                    <FontAwesomeIcon
                      icon="fa-solid fa-circle-arrow-right"
                      className="small ms-4"
                    />
                  </small>
                  <span className="small ms-2">
                    CSITE
                  </span>
                </Link>
                <Link
                  className="py-1 text-decoration-none recordlist-hover text-lightgray d-flex align-items-center"
                  href="/records/sed"
                >
                  <small>
                    <FontAwesomeIcon
                      icon="fa-solid fa-circle-arrow-right"
                      className="small ms-4"
                    />
                  </small>
                  <span className="small ms-2">
                    SED
                  </span>
                </Link>
                <Link
                  className="py-1 text-decoration-none recordlist-hover text-lightgray d-flex align-items-center"
                  href="/records/sla"
                >
                  <small>
                    <FontAwesomeIcon
                      icon="fa-solid fa-circle-arrow-right"
                      className="small ms-4"
                    />
                  </small>
                  <span className="small ms-2">
                    SLA
                  </span>
                </Link>
                <Link
                  className="py-1 text-decoration-none recordlist-hover text-lightgray d-flex align-items-center"
                  href="/records/sma"
                >
                  <small>
                    <FontAwesomeIcon
                      icon="fa-solid fa-circle-arrow-right"
                      className="small ms-4"
                    />
                  </small>
                  <span className="small ms-2">
                    SMA
                  </span>
                </Link>
                <Link
                  className="py-1 text-decoration-none recordlist-hover text-lightgray d-flex align-items-center"
                  href="/records/cs"
                >
                  <small>
                    <FontAwesomeIcon
                      icon="fa-solid fa-circle-arrow-right"
                      className="small ms-4"
                    />
                  </small>
                  <span className="small ms-2">
                    CS
                  </span>
                </Link>
                <Link
                  className="py-1 text-decoration-none recordlist-hover text-lightgray d-flex align-items-center"
                  href="/records/ppo"
                >
                  <small>
                    <FontAwesomeIcon
                      icon="fa-solid fa-circle-arrow-right"
                      className="small ms-4"
                    />
                  </small>
                  <span className="small ms-2">
                    PPO
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
