"use client";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import fetchAccountData from "@/app/fetch/fetchAccountData";
import fetchStaffList from "@/app/fetch/fetchStaffList";
import { useQuery, useMutation } from "@tanstack/react-query";
import fetchCreateStaffAccount from "@/app/fetch/fetchCreateStaffAccount";
import { queryClient } from "@/app/react-query";
import { useRouter } from "next/navigation";

export default function About() {
  const [eye, setEye] = useState(false);
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isErr, setIsErr] = useState(true);
  const [staffEye, setStaffEye] = useState(false);

  const mutation = useMutation({
    mutationFn: fetchCreateStaffAccount,
    onSuccess: () => {
      setMessage("Staff Account Created Successfully!");
      queryClient.invalidateQueries({ queryKey: ["staff"] });
      queryClient.invalidateQueries({ queryKey: ["staffid"] });
      queryClient.invalidateQueries({ queryKey: ["account"] });
      setIsErr(false);
    },
    onError: () => {
      if (staff.some((data) => data.id === parseInt(id))) {
        setMessage("Staff Account already exists!");
      } else {
        setMessage("Staff Account not Successfully Created!");
      }
      setIsErr(true);
    },
  });

  const router = useRouter();

  function createStaff(e) {
    e.preventDefault();
    if (!id || !password) {
      setIsErr(true);
      return setMessage("Please fill the blank!");
    }
    if (isNaN(id)) {
      setIsErr(true);
      return setMessage("Id must be number only!");
    }
    if (id.length !== 6) {
      setIsErr(true);
      return setMessage("Id must be a 6 characters only!");
    }
    if (password.length > 13 && password.length < 8) {
      setIsErr(true);
      return setMessage("Password must be 8 - 13 characters only!");
    }
    mutation.mutate({ id, password });
  }

  const { data: check } = useQuery({
    queryKey: ["account"],
    queryFn: fetchAccountData,
  });

  const {
    data: staff,
    isLoading: staffLoading,
    isError: staffError,
    error: stafferr,
  } = useQuery({
    queryKey: ["staff"],
    queryFn: fetchStaffList,
  });

  if (check?.[0]?.role === "STAFF") {
    return null;
  }

  return (
    <>
      <div className="w-100">
        <div className="row g-0">
          <div className="col-12 py-4 px-3">
            {/* CARD */}
            <div className="card border-0 border-top border-secondary border-opacity-50 border-3 rounded-1 shadow-sm">
              {/* CARD HEADER */}
              <div className="fw-bold fs-6 text-primary border-bottom border-primary p-2 px-3 d-flex align-items-center border-opacity-25" style={{ color: "#0c2461" }}> 
                <i className="bi bi-gear-fill me-2" style={{ fontSize: "18px" }}></i>
                <span style={{ fontSize: "18px" }}>Admin Settings</span>
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
                      Staff Account List
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
                      Create Staff Account
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
                    <div className="d-flex justify-content-end pt-4 px-3">
                      <button
                        className="btn text-white btn-sm btn-lightblue"
                        onClick={() => setStaffEye(staffEye ? false : true)}
                      >
                        <FontAwesomeIcon
                          icon={`fa-regular ${
                            !staffEye ? "fa-eye-slash" : "fa-eye"
                          }`}
                        />
                      </button>
                    </div>
                    <div
                      className="pt-2 p-3 d-flex justify-content-center"
                      style={{ minWidth: "70vw" }}
                    >
                      <table className="table table-bordered table-striped table-hover align-middle">
                        <thead className="border">
                          <tr className="text-start">
                            <th className="bg-tableheadergray">ID</th>
                            <th className="bg-tableheadergray">Password</th>
                          </tr>
                        </thead>
                        <tbody>
                          <>
                            {staffLoading ? (
                              <tr>
                                <td
                                  colSpan="2"
                                  className="text-center text-muted"
                                >
                                  Loading...
                                </td>
                              </tr>
                            ) : (
                              <>
                                {!staffError ? (
                                  staff.map((data, index) => (
                                    <tr
                                      className="cursor-pointer"
                                      key={index}
                                      onClick={() =>
                                        router.push(
                                          `/admin-settings/${data.id}`
                                        )
                                      }
                                    >
                                      <td className="text-start text-muted">
                                        {data.id}
                                      </td>
                                      <td className="text-start text-muted">
                                        <input
                                          type={`${
                                            staffEye ? "text" : "password"
                                          }`}
                                          value={data.password}
                                          readOnly
                                          className="border-0 bg-transparent cursor-pointer"
                                          size={`${data.password.length}`}
                                        />
                                      </td>
                                    </tr>
                                  ))
                                ) : (
                                  <>
                                    {stafferr.response.status === 404 ? (
                                      <tr>
                                        <td
                                          colSpan="2"
                                          className="text-center text-muted"
                                        >
                                          Empty Staff List
                                        </td>
                                      </tr>
                                    ) : (
                                      <tr>
                                        <td
                                          colSpan="2"
                                          className="text-center text-muted"
                                        >
                                          Error
                                        </td>
                                      </tr>
                                    )}
                                  </>
                                )}
                              </>
                            )}
                          </>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* CREATE ACCOUNT SECTION */}
                  <form onSubmit={createStaff}>
                    <div
                      className="tab-pane fade d-block"
                      id="nav-profile"
                      role="tabpanel"
                      aria-labelledby="nav-profile-tab"
                      tabIndex="0"
                    >
                      <div
                        className="px-3 pt-3 d-flex"
                        style={{ maxWidth: "607.5px" }}
                      >
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
                            value={id}
                            onChange={(e) => setId(e.target.value)}
                          />
                          <div className="position-relative">
                            <input
                              type={!eye ? "password" : "text"}
                              className="form-control form-control-sm rounded-0 w-full bg-white1"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
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
                      <div
                        className="ps-3 pb-3 d-flex align-items-center"
                        style={{ maxWidth: "607.5px" }}
                      >
                        <div className="px-3 gap-4 d-inline-block fw-bold d-flex flex-column justify-content-evenly">
                          <div className="text-center opacity-0">ID Number</div>
                        </div>
                        <button
                          type="submit"
                          className="ms-3 btn btn-sm btn-lightblue text-light"
                        >
                          Create Account
                        </button>
                        <div
                          className={`ms-3 ${
                            !isErr ? "text-green" : "text-red"
                          }`}
                        >
                          {message}
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
