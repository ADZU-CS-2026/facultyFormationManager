import StaffProfile from "@/app/components/StaffAccountProfile";

export default async function StaffProfileAccount({ params }) {
  const { id } = await params;

  return (
    <>
      <div className="w-100">
        <div className="row g-0">
          <div className="col-12 py-4 px-3">
            {/* CARD */}
            <div className="card border-0 border-top border-secondary border-opacity-50 border-3 rounded-1 shadow-sm">
              {/* CARD HEADER */}
              <div className="text-gray1 fs-6 border-bottom p-2 px-3 d-flex justify-content-between align-items-center">
                <div style={{ fontSize: "18px" }}>Staff Profile</div>
              </div>

              {/* CARD BODY */}
              <div className="p-3 py-2">
                <StaffProfile id={id} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
