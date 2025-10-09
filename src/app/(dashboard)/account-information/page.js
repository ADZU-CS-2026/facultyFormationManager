"use client"
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function AccountInformation() {

  const [eye, setEye] = useState(false);
  const [message, setMessage] = useState("");
  const [adminData, setAdminData] = useState("");

  useEffect(() => {
    async function getInfo(){
      try{
        const res = await fetch("/api");
        if(res.ok){
          const data = await res.json();
          return setAdminData(data);
        }
        throw new Error("No Fetch!");
      }
      catch(err){
        setMessage(err.message);
      }
    }
    getInfo();
  }, []);

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
          {/* PROFILE INFO SECTION */}
            <div className="tab-pane fade show active d-block" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabIndex="0">
                <div className="p-3 d-flex" style={{maxWidth: "607.5px"}}>
                    <div className="p-3 gap-2 d-inline-block fw-bold d-flex flex-column justify-content-evenly">
                        <div className="text-center mb-3">Role</div>
                        <div className="text-center mb-3">ID Number</div>
                        <div className="text-center">Password</div>
                    </div>
                    <div className="ms-3 fw-bold d-flex flex-column justify-content-evenly" style={{width: "375px"}}>
                        <input type="text" className="form-control form-control-sm rounded-0 w-full bg-white1" defaultValue={adminData ? adminData[0].role : message} disabled/>
                        <input type="text" className="form-control form-control-sm rounded-0 w-full bg-white1" defaultValue={adminData ? adminData[0].id : message} disabled/>
                        <div className="position-relative">
                        <input type={!eye ? "password" : "text"} className="form-control form-control-sm rounded-0 w-full bg-white1" defaultValue={adminData ? "adzuformation" : message} disabled/>
                        {!eye ? (<FontAwesomeIcon icon="fa-regular fa-eye-slash" className="position-absolute translate-middle-y top-50 text-yellowgray small cursor-pointer" style={{right: "10px"}} onClick={() => {setEye(eye => eye ? false : true)}}/>) : 
                                (<FontAwesomeIcon icon="fa-regular fa-eye" className="position-absolute translate-middle-y top-50 text-yellowgray small cursor-pointer" style={{right: "10px"}} onClick={() => {setEye(eye => eye ? false : true)}}/>)}
                      </div>
                  </div>
                </div>
            </div>
            {/* CHANGE PASSWORD SECTION */}
              <div className="tab-pane fade d-block" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabIndex="0">
                  <div className="p-3 pb-1 d-flex" style={{maxWidth: "607.5px"}}>
                    <div className="p-3 gap-4 d-inline-block fw-bold d-flex flex-column justify-content-evenly">
                        <div className="text-center">Previous Password</div>
                        <div className="text-center">New Password</div>
                        <div className="text-center">Re-enter New Password</div>
                    </div>
                    
                    <div className="ms-3 fw-bold d-flex flex-column justify-content-evenly" style={{width: "375px"}}>
                        <input className="form-control form-control-sm rounded-0 w-full" defaultValue="" />
                        <input className="form-control form-control-sm rounded-0 w-full" defaultValue="" />
                        <input className="form-control form-control-sm rounded-0" defaultValue="" />
                    </div>
                  </div>
                  <div className="ps-3 d-flex" style={{maxWidth: "607.5px"}}>
                    <div className="px-3 gap-4 d-inline-block fw-bold d-flex flex-column justify-content-evenly">
                        <div className="text-center opacity-0">Re-enter New Password</div>
                    </div>
                    <button className="ms-3 mb-3 btn btn-sm btn-lightblue text-light">Update</button>
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
