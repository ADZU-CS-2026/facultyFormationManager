"use client"

export default function AccountInformation() {

  return (
    <>
    <div className="w-100">
      <div className="row g-0">
        <div className="col-12 py-4 px-3">
      {/* CARD */}
      <div className="card border-0 border-top border-secondary border-opacity-50 border-3 rounded-1 shadow-sm">
        {/* CARD HEADER */}
        <div className="text-gray1 border-bottom p-2 px-3 fs-6 d-flex justify-content-between align-items-center">
          <div>
            Account Information
          </div>
        </div>

        {/* CARD BODY */}
        <div
          className="p-3"
        >
          <nav>
        <div className="nav nav-tabs small" id="nav-tab" role="tablist" style={{maxWidth: "607.5px"}}>
            <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Profile Info</button>
            <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Change Password</button>
        </div>
        </nav>
        <div className="tab-content small" id="nav-tabContent">
            <div className="tab-pane fade show active d-block" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabIndex="0">
                <div className="p-3 d-flex" style={{maxWidth: "607.5px"}}>
                    <div className="p-3 gap-2 d-inline-block fw-bold d-flex flex-column justify-content-evenly">
                        <div className="text-center mb-3">Role</div>
                        <div>Contact Number</div>
                    </div>
                    <div className="fw-bold d-flex flex-column justify-content-evenly" style={{width: "375px"}}>
                        <input className="form-control form-control-sm rounded-0 w-full" defaultValue="ADMINISTRATOR" />
                        <input className="form-control form-control-sm rounded-0 w-full" defaultValue="09xx - xxx - xxxx" />
                </div>
                </div>
            </div>
            <div className="tab-pane fade d-block" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabIndex="0">
                <div className="p-3 d-flex" style={{maxWidth: "607.5px"}}>
                <div className="p-3 gap-4 d-inline-block fw-bold d-flex flex-column justify-content-evenly">
                    <div className="text-center">Previous Password</div>
                    <div className="text-center">New Password</div>
                    <div className="text-center">Re-enter New Password</div>
                </div>
                <div className="fw-bold d-flex flex-column justify-content-evenly" style={{width: "375px"}}>
                    <input className="form-control form-control-sm rounded-0 w-full" defaultValue="" />
                    <input className="form-control form-control-sm rounded-0 w-full" defaultValue="" />
                    <input className="form-control form-control-sm rounded-0 w-full" defaultValue="" />
                </div>
                </div>
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
