"use client";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SideBarOnRecordAccordion() {
  return (
    <div className="accordion accordion-flush" id="accordionFlushExample">
      {/* ACCORDION */}
      <div className="accordion-item">
        <div className="accordion-header">
          {/* ACCORDION BUTTON */}
          <button
            className={`accordion-button collapsed py-2 bg-gray2 gap-2 navigation-hover`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseOne"
            aria-expanded="false"
            aria-controls="flush-collapseOne"
          >
            <FontAwesomeIcon
              icon="fa-solid fa-table"
              className="text-yellow fs-6"
            />
            <span className="small text-light">
              <small>Records</small>
            </span>
          </button>
        </div>
        <div
          id="flush-collapseOne"
          className="accordion-collapse show collapse bg-gray1"
          data-bs-parent="#accordionFlushExample"
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
                <small>ADMIN</small>
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
                <small>FFP</small>
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
                <small>CON</small>
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
                <small>CSITE</small>
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
                <small>SED</small>
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
                <small>SLA</small>
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
                <small>SMA</small>
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
                <small>CS</small>
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
                <small>PPO</small>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
