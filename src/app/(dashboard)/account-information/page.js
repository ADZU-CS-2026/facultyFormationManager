"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import fetchAccountData from "@/app/fetch/fetchAccountData";
import fetchUpdateUserAccount from "@/app/fetch/fetchUpdateUserAccount";
import { useQuery, useMutation } from "@tanstack/react-query";
import { queryClient } from "@/app/react-query";

export default function AccountInformation() {
  const router = useRouter();
  const [eye, setEye] = useState(false);
  const [prevPass, setPrevPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [reNewPass, setReNewPass] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Password verification states
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [verifyPassword, setVerifyPassword] = useState("");
  const [verifyEye, setVerifyEye] = useState(false);
  const [verifyError, setVerifyError] = useState("");

  const { data, isLoading } = useQuery({
    queryKey: ["account"],
    queryFn: fetchAccountData,
  });

  const mutationChangePassword = useMutation({
    mutationFn: fetchUpdateUserAccount,
    onSuccess: () => {
      setErrorMessage("Password Updated!");
      setPrevPass("");
      setNewPass("");
      setReNewPass("");
      queryClient.refetchQueries({ queryKey: ["account"] });
    },
    onError: (err) => {
      setErrorMessage("Error");
    },
  });

  // Handle password verification
  const handleVerifyPassword = (e) => {
    e.preventDefault();
    if (!verifyPassword) {
      setVerifyError("Please enter your password");
      return;
    }

    // Check if entered password matches account password
    if (data?.[0]?.password === verifyPassword) {
      setIsAuthenticated(true);
      setVerifyError("");
      setVerifyPassword("");
    } else {
      setVerifyError("Incorrect password. Please try again.");
    }
  };

  function changePassword(e) {
    e.preventDefault();
    if (!prevPass || !newPass || !reNewPass) {
      return setErrorMessage("Please fill the blank!");
    } else if (prevPass === newPass) {
      return setErrorMessage("New password same as previous!");
    } else if (newPass.length < 8 || newPass.length > 13) {
      return setErrorMessage("Password length must be 8-13 characters only!");
    } else if (data?.[0]?.password !== prevPass) {
      return setErrorMessage("Invalid previous password!");
    } else if (newPass !== reNewPass) {
      return setErrorMessage("Re-enter password not match!");
    }
    const id = data?.[0]?.id;

    mutationChangePassword.mutate({ id, newPass });
  }

  // Show password verification modal if not authenticated
  if (!isAuthenticated) {
    return (
      <div className="w-100">
        <div className="row g-0">
          <div className="col-12 py-4 px-3">
            <div className="card border-0 border-top border-secondary border-opacity-50 border-3 rounded-1 shadow-sm">
              <div
                className="fw-bold fs-6 text-primary border-bottom border-primary p-2 px-3 d-flex align-items-center border-opacity-25"
                style={{ color: "#0c2461" }}
              >
                <i className="bi bi-shield-lock-fill me-2" style={{ fontSize: "18px" }}></i>
                <span style={{ fontSize: "18px" }}>Authentication Required</span>
              </div>

              <div className="p-5 d-flex justify-content-center align-items-center" style={{ minHeight: "400px" }}>
                <div className="card border shadow-sm" style={{ maxWidth: "450px", width: "100%" }}>
                  <div className="card-body p-4">
                    <div className="text-center mb-4">
                      <i className="bi bi-lock-fill text-primary" style={{ fontSize: "48px", color: "#0c2461" }}></i>
                      <h5 className="mt-3 fw-bold">Verify Your Identity</h5>
                      <p className="text-muted small">Please enter your password to access Account Information</p>
                    </div>

                    <form onSubmit={handleVerifyPassword}>
                      <div className="mb-3">
                        <label className="form-label fw-semibold">Password</label>
                        <div className="position-relative">
                          <input
                            type={verifyEye ? "text" : "password"}
                            className="form-control"
                            value={verifyPassword}
                            onChange={(e) => setVerifyPassword(e.target.value)}
                            placeholder="Enter your password"
                            autoFocus
                          />
                          <FontAwesomeIcon
                            icon={`fa-regular ${verifyEye ? "fa-eye" : "fa-eye-slash"}`}
                            className="position-absolute translate-middle-y top-50 text-muted cursor-pointer"
                            style={{ right: "15px" }}
                            onClick={() => setVerifyEye(!verifyEye)}
                          />
                        </div>
                        {verifyError && (
                          <div className="text-danger small mt-2">
                            <i className="bi bi-exclamation-circle me-1"></i>
                            {verifyError}
                          </div>
                        )}
                      </div>

                      <div className="d-grid gap-2">
                        <button type="submit" className="btn btn-primary" style={{ backgroundColor: "#0c2461", borderColor: "#0c2461" }}>
                          <i className="bi bi-unlock-fill me-2"></i>
                          Verify & Continue
                        </button>
                        <button
                          type="button"
                          className="btn btn-outline-secondary"
                          onClick={() => router.back()}
                        >
                          Cancel
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="w-100">
        <div className="row g-0">
          <div className="col-12 py-4 px-3">
            {/* CARD */}
            <div className="card border-0 border-top border-secondary border-opacity-50 border-3 rounded-1 shadow-sm">
              {/* CARD HEADER */}
              <div
                className="fw-bold fs-6 text-primary border-bottom border-primary p-2 px-3 d-flex align-items-center justify-content-between border-opacity-25"
                style={{ color: "#0c2461" }}
              >
                <div className="d-flex align-items-center">
                  <i
                    className="bi bi-person-lines-fill me-2"
                    style={{ fontSize: "18px" }}
                  ></i>
                  <span style={{ fontSize: "18px" }}>Account Information</span>
                </div>
                <button
                  className="btn btn-sm btn-outline-danger"
                  onClick={() => setIsAuthenticated(false)}
                  title="Lock Account Information"
                >
                  <i className="bi bi-lock-fill me-1"></i>
                  Lock
                </button>
              </div>

              {/* CARD BODY */}
              <div className="p-3">
                <nav>
                  <div
                    className="nav nav-tabs small"
                    id="nav-tab"
                    role="tablist"
                    style={{ maxWidth: "607.5px" }}
                  >
                    <button
                      className="nav-link active"
                      id="nav-home-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-home"
                      type="button"
                      role="tab"
                      aria-controls="nav-home"
                      aria-selected="true"
                    >
                      Profile Info
                    </button>
                    <button
                      className="nav-link"
                      id="nav-profile-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-profile"
                      type="button"
                      role="tab"
                      aria-controls="nav-profile"
                      aria-selected="false"
                    >
                      Change Password
                    </button>
                  </div>
                </nav>
                <div className="tab-content small" id="nav-tabContent">
                  {/* PROFILE INFO SECTION */}
                  <div
                    className="tab-pane fade show active d-block"
                    id="nav-home"
                    role="tabpanel"
                    aria-labelledby="nav-home-tab"
                    tabIndex="0"
                  >
                    <div className="p-3 d-flex" style={{ maxWidth: "607.5px" }}>
                      <div className="p-3 gap-2 d-inline-block fw-bold d-flex flex-column justify-content-evenly">
                        <div className="text-center mb-3">Role</div>
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
                          value={!isLoading ? data[0].role : "Loading..."}
                          disabled
                        />
                        <input
                          type="text"
                          className="form-control form-control-sm rounded-0 w-full bg-white1"
                          value={!isLoading ? data[0].id : "Loading..."}
                          disabled
                        />
                        <div className="position-relative">
                          <input
                            type={!eye ? "password" : "text"}
                            className="form-control form-control-sm rounded-0 w-full bg-white1"
                            value={!isLoading ? data[0].password : "Loading..."}
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
                  {/* CHANGE PASSWORD SECTION */}
                  <form onSubmit={changePassword}>
                    <div
                      className="tab-pane fade d-block"
                      id="nav-profile"
                      role="tabpanel"
                      aria-labelledby="nav-profile-tab"
                      tabIndex="0"
                    >
                      <div
                        className="p-3 pb-1 d-flex"
                        style={{ maxWidth: "607.5px" }}
                      >
                        <div className="p-3 gap-4 d-inline-block fw-bold d-flex flex-column justify-content-evenly">
                          <div className="text-center">Previous Password</div>
                          <div className="text-center">New Password</div>
                          <div className="text-center">
                            Re-enter New Password
                          </div>
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
                          className={`${errorMessage === "Password Updated!"
                              ? "text-green"
                              : "text-red"
                            } fs-6 ps-3`}
                        >
                          {errorMessage}
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}