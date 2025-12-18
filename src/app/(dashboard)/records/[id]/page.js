"use client";

import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import RecordProfile from "@/app/components/RecordProfile";
import { use } from "react";

export default function RecordsProfile({ params }) {
  const { id } = use(params);
  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    contentRef: componentRef,
    documentTitle: `Record-Profile-${id}`,
  });

  return (
    <>
      <div className="w-100">
        <div className="row g-0">
          <div className="col-12 py-4 px-3">
            {/* CARD */}
            <div className="card border-0 border-top border-secondary border-opacity-50 border-3 rounded-1 shadow-sm">
              {/* HEADER */}
              <div
                className="fw-semibold fs-6 text-primary border-bottom border-primary p-2 px-3 d-flex align-items-center justify-content-between border-opacity-25"
                style={{ color: "#0c2461" }}
              >
                <div style={{ fontSize: "18px" }}>Record Profile - {id}</div>

                {/* PRINT BUTTON */}
                <button
                  onClick={() => handlePrint()}
                  className="btn btn-sm gradient-button text-black no-print"
                  style={{ borderRadius: "2px", border: "0.8px solid black" }}
                >
                  Print
                </button>
              </div>

              {/* CARD BODY */}
              <div className="p-3 py-2" ref={componentRef}>
                <RecordProfile id={id} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PRINT STYLES */}
      <style jsx global>{`
        @media print {
          .no-print {
            display: none !important;
          }
          
          /* Hide navigation, sidebar, etc. */
          nav, aside, .sidebar, .navbar {
            display: none !important;
          }
          
          /* Full width for print */
          .card {
            box-shadow: none !important;
            border: none !important;
          }
          
          /* Prevent page breaks inside cards */
          .card-body {
            page-break-inside: avoid;
          }
          
          /* Hide Edit and Back buttons when printing */
          button, .btn, a.btn {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}