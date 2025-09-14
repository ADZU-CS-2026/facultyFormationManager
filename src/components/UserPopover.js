"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";

export default function UserPopover({ userPopup, userPop }) {

  const router = useRouter();

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
          Welcome, JOSHUA EDUARD!
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
          <span className="fs-6 mt-2">230691</span>
          <span className="fs-6">
            <small>
              <small>
                <small>JOSHUA EDUARD L. GUIRITAN</small>
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
                        <small>Yes</small>
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
                      <small>No</small>
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
