"use client";

import { useState } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { queryClient } from "@/app/react-query";
import fetchStaffAccountData from "@/app/fetch/fetchStaffAccountData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import fetchUpdateUserAccount from "@/app/fetch/fetchUpdateUserAccount";
import fetchDeleteAccount from "@/app/fetch/fetchDeleteAccount";
import { useRouter } from "next/navigation";

export default function StaffAccountProfile({ id }) {
  const { data: staff, isLoading } = useQuery({
    queryKey: ["staffid", id],
    queryFn: async () => await fetchStaffAccountData(id),
  });

  const router = useRouter();

  const [eye, setEye] = useState(false);
  const [prevPass, setPrevPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [reNewPass, setReNewPass] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [deleteMessage, setDeleteMessage] = useState("");

  const mutationChangePassword = useMutation({
    mutationFn: fetchUpdateUserAccount,
    onSuccess: () => {
      setErrorMessage("Password Updated!");
      setPrevPass("");
      setNewPass("");
      setReNewPass("");
      queryClient.invalidateQueries({ queryKey: ["account"] });
      queryClient.invalidateQueries({ queryKey: ["staff"] });
      queryClient.invalidateQueries({ queryKey: ["staffid"] });
    },
    onError: (err) => {
      setErrorMessage("Error");
    },
  });

  const mutationDelete = useMutation({
    mutationFn: fetchDeleteAccount,
    onSuccess: () => {
      setDeleteMessage("");
      queryClient.invalidateQueries({ queryKey: ["staff"] });
      queryClient.invalidateQueries({ queryKey: ["staffid"] });
      router.replace("/admin-settings");
    },
    onError: (error) => {
      const status = error?.response?.status;
      if (status === 404) {
        setDeleteMessage("Id not found!");
      } else if (status === 500) {
        setDeleteMessage("Error");
      }
      setDeleteMessage(error?.response?.data?.message);
    },
  });

  function deleteAccount() {
    const id = staff?.[0]?.id;
    mutationDelete.mutate({ id });
  }

  function changePassword(e) {
    e.preventDefault();
    if (!prevPass || !newPass || !reNewPass) {
      return setErrorMessage("Please fill the blank!");
    } else if (prevPass === newPass) {
      return setErrorMessage("New password same as previous!");
    } else if (newPass.length < 8 || newPass.length > 13) {
      return setErrorMessage("Password length must be 8-13 characters only!");
    } else if (staff?.[0]?.password !== prevPass) {
      return setErrorMessage("Invalid previous password!");
    } else if (newPass !== reNewPass) {
      return setErrorMessage("Re-enter password not match!");
    }
    const id = staff?.[0]?.id;

    mutationChangePassword.mutate({ id, newPass });
  }

  return (
    <>
      <ul className="nav nav-tabs small mt-2" id="myTab" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active"
            id="home-tab"
            data-bs-toggle="tab"
            data-bs-target="#home-tab-pane"
            type="button"
            role="tab"
            aria-controls="home-tab-pane"
            aria-selected="true"
          >
            Account
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="profile-tab"
            data-bs-toggle="tab"
            data-bs-target="#profile-tab-pane"
            type="button"
            role="tab"
            aria-controls="profile-tab-pane"
            aria-selected="false"
          >
            Update Password
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="contact-tab"
            data-bs-toggle="tab"
            data-bs-target="#contact-tab-pane"
            type="button"
            role="tab"
            aria-controls="contact-tab-pane"
            aria-selected="false"
          >
            Delete
          </button>
        </li>
      </ul>
      <div className="tab-content small" id="myTabContent">
        <div
          className="tab-pane fade show active"
          id="home-tab-pane"
          role="tabpanel"
          aria-labelledby="home-tab"
          tabIndex="0"
        >
          <div className="p-3 d-flex" style={{ maxWidth: "607.5px" }}>
            <div className="p-3 gap-2 d-inline-block fw-bold d-flex flex-column justify-content-evenly">
              <div className="text-center mb-3">ID Number</div>
              <div className="text-center">Password</div>
            </div>
            {/* SECTION SHOWS ADMIN CREDENTIALS INFORMATION */}
            <div
              className="ms-3 fw-bold d-flex flex-column justify-content-evenly"
              style={{ width: "375px" }}
            >
              <input
                type="text"
                className="form-control form-control-sm rounded-0 w-full bg-white1"
                value={!isLoading ? staff?.[0]?.id : "Loading..."}
                disabled
              />
              <div className="position-relative">
                <input
                  type={!eye ? "password" : "text"}
                  className="form-control form-control-sm rounded-0 w-full bg-white1"
                  value={!isLoading ? staff?.[0].password : "Loading..."}
                  disabled
                />
                {!eye ? (
                  <FontAwesomeIcon
                    icon="fa-regular fa-eye-slash"
                    className="position-absolute translate-middle-y top-50 text-yellowgray small cursor-pointer"
                    style={{ right: "10px" }}
                    onClick={() => {
                      setEye((eye) => (eye ? false : true));
                    }}
                  />
                ) : (
                  <FontAwesomeIcon
                    icon="fa-regular fa-eye"
                    className="position-absolute translate-middle-y top-50 text-yellowgray small cursor-pointer"
                    style={{ right: "10px" }}
                    onClick={() => {
                      setEye((eye) => (eye ? false : true));
                    }}
                  />
                )}
              </div>
            </div>
          </div>
        </div>

        {/* PASSWORD CHANGE */}
        <div
          className="tab-pane fade"
          id="profile-tab-pane"
          role="tabpanel"
          aria-labelledby="profile-tab"
          tabIndex="0"
        >
          <form onSubmit={changePassword}>
            <div className="p-3 pb-1 d-flex" style={{ maxWidth: "607.5px" }}>
              <div className="p-3 gap-4 d-inline-block fw-bold d-flex flex-column justify-content-evenly">
                <div className="text-center">Previous Password</div>
                <div className="text-center">New Password</div>
                <div className="text-center">Re-enter New Password</div>
              </div>
              <div
                className="ms-3 fw-bold d-flex flex-column justify-content-evenly"
                style={{ width: "375px" }}
              >
                <input
                  type="password"
                  className="form-control form-control-sm rounded-0 w-full"
                  value={prevPass}
                  onChange={(e) => setPrevPass(e.target.value)}
                />
                <input
                  type="password"
                  className="form-control form-control-sm rounded-0 w-full"
                  value={newPass}
                  onChange={(e) => setNewPass(e.target.value)}
                />
                <input
                  type="password"
                  className="form-control form-control-sm rounded-0"
                  value={reNewPass}
                  onChange={(e) => setReNewPass(e.target.value)}
                />
              </div>
            </div>
            <div
              className="ps-3 pb-3 d-flex align-items-center"
              style={{ maxWidth: "607.5px" }}
            >
              <div className="px-3 gap-4 d-inline-block fw-bold d-flex flex-column justify-content-evenly">
                <div className="text-center opacity-0">
                  Re-enter New Password
                </div>
              </div>
              <button
                type="submit"
                className="ms-3 btn btn-sm btn-lightblue text-light"
              >
                Update
              </button>
              <div
                className={`${
                  errorMessage === "Password Updated!"
                    ? "text-green"
                    : "text-red"
                } fs-6 ps-3`}
              >
                {errorMessage}
              </div>
            </div>
          </form>
        </div>
        <div
          className="tab-pane fade"
          id="contact-tab-pane"
          role="tabpanel"
          aria-labelledby="contact-tab"
          tabIndex="0"
        >
          <div className="p-3">
            <div className="fw-bold text-red fs-6 text-center">
              <FontAwesomeIcon icon="fa-solid fa-circle-exclamation" /> Caution:
              This action will permanently remove the staff account.
            </div>
            <div className="d-flex justify-content-center">
              <button
                className="btn btn-sm fw-semibold btn-red text-white mt-4"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal2"
              >
                {deleteMessage && (
                  <div className="fw-bold btn-red text-red my-3">
                    {deleteMessage}
                  </div>
                )}
                Delete Account
              </button>
            </div>
          </div>

          {/* DELETE CONFIRM MODAL */}
          <div
            className="modal fade"
            id="exampleModal2"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content rounded-0">
                <div className="modal-header d-flex justify-content-center align-items-center py-4">
                  <span className="modal-title fs-5" id="exampleModalLabel">
                    Confirm deletion of this staff account?
                  </span>
                </div>
                <div className="modal-body">
                  <div className="w-100 d-flex flex-lg-row flex-column gap-lg-0 gap-2 justify-content-between align-items-center">
                    <button
                      type="button"
                      className="btn btn-sm btn-green text-white w-lg-50 w-100 me-lg-2"
                      data-bs-dismiss="modal"
                      onClick={deleteAccount}
                    >
                      <FontAwesomeIcon
                        icon="fa-solid fa-check"
                        className="fs-6"
                      />
                      <span className="fs-6">
                        <small>Yes</small>
                      </span>
                    </button>
                    <button
                      type="button"
                      className="btn btn-sm btn-white2 text-black w-lg-50 w-100 ms-lg-2"
                      data-bs-dismiss="modal"
                    >
                      <FontAwesomeIcon
                        icon="fa-solid fa-xmark"
                        className="fs-6"
                      />
                      <span className="fs-6">
                        <small>No</small>
                      </span>
                    </button>
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
