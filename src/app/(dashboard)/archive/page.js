"use client";

export default function Archive() {
  return (
    <>
      <div className="w-100">
        <div className="row g-0">
          <div className="col-12 py-4 px-3">
            {/* CARD */}
            <div className="card border-0 border-top border-secondary border-opacity-50 border-3 rounded-1 shadow-sm">
              {/* HEADER */}
              <div
                className="fw-bold fs-6 text-primary border-bottom border-primary p-2 px-3 d-flex align-items-center border-opacity-25"
                style={{ color: "#0c2461" }}
              >
                <i
                  className="bi bi-archive-fill me-2"
                  style={{ fontSize: "18px" }}
                ></i>
                <span style={{ fontSize: "18px" }}>Archive</span>
              </div>

              {/* CARD BODY */}
              <div className="p-3 py-2">{/* ADD CODE HERE */}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
