"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function UserPopover({ userPopup, userPop }) {

  const [adminData, setAdminData] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();

  useEffect(() => {
    async function getData(){
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
    getData();
  },[])

  async function Logout(){
      const res = fetch("/api/auth/logout", {method: "POST"});
      router.replace("/login");
  }

  return (
    <>
      {/* USER BUTTON */}
      <div
        className={`d-flex align-items-center justify h-100 px-3 user-hover cursor-pointer ${userPopup && "bg-semidarkblue"}`}
        role="button"
        onClick={() => userPop()}
      >
        <FontAwesomeIcon icon="fa-solid fa-user" />
        <span className="d-lg-block d-none ms-1 small">
          Welcome, {adminData ? adminData[0].role : message}!
        </span>
      </div>
      {/* USER'S POPOVER */}
      <div
        className={`position-absolute border bg-white2 text-light card rounded-0 end-0 top-100 d-flex flex-column ${userPopup ? "d-block" : "d-none"}`}
        style={{ width: "278px", zIndex: "99" }}
      >
        <div className="w-100 bg-blue d-flex flex-column align-items-center justify-content-center py-2">
          <FontAwesomeIcon
            icon="fa-solid fa-circle-user"
            className="text-light"
            style={{ fontSize: "90px" }}
          />
          <span className="fs-6 mt-2">{adminData ? adminData[0].id : message}</span>
          <span className="fs-6">
            <small>
              <small>
                {adminData ? adminData[0].role : message}
              </small>
            </small>
          </span>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center p-2 gap-1">
          <button className="w-100 btn btn-yellow text-black rounded-1 btn-sm d-flex justify-content-center align-items-center">
            <FontAwesomeIcon icon="fa-solid fa-key" className="fs-6" />
            <span className="fs-6 ps-1">
              <small>Change Password</small>
            </span>
          </button>
          <button
            className="w-100 btn btn-red text-white btn-sm rounded-1 d-flex justify-content-center align-items-center"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            <FontAwesomeIcon
              icon="fa-solid fa-right-from-bracket"
              className="fs-6"
            />
            <span className="fs-6 ps-1">
              <small>Log out</small>
            </span>
          </button>
        </div>
      </div>
      {/* USER'S MODAL */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content rounded-0">
            <div className="modal-header d-flex justify-content-center align-items-center py-4">
              <span className="modal-title fs-4" id="exampleModalLabel">
                Confirm Log-out?
              </span>
            </div>
            <div className="modal-body">
              <div className="w-100 d-flex flex-lg-row flex-column gap-lg-0 gap-2 justify-content-between align-items-center">
                <div className="w-100">
                  <button
                    type="button"
                    className="btn btn-sm btn-green text-white w-lg-50 w-100 me-lg-2"
                    data-bs-dismiss="modal"
                    onClick={Logout}
                  >
                    <FontAwesomeIcon
                      icon="fa-solid fa-check"
                      className="fs-6"
                    />
                    <span className="fs-6">
                      <small>
                        Yes
                      </small>
                    </span>
                  </button>
                </div>
                <button
                  type="button"
                  className="btn btn-sm btn-white2 text-black w-lg-50 w-100 ms-lg-2"
                  data-bs-dismiss="modal"
                >
                  <FontAwesomeIcon icon="fa-solid fa-xmark" className="fs-6" />
                  <span className="fs-6">
                    <small>
                      No
                    </small>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
