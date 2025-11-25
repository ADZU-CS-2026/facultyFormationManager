"use client";
import { useMutation } from "@tanstack/react-query";
import { queryClient } from "@/app/react-query";
import { useState } from "react";
import fetchAddRecord from "@/app/fetch/fetchAddRecord";

export default function AddRecord() {
  const [first_name, set_first_name] = useState("");
  const [last_name, set_last_name] = useState("");
  const [middle_initial, set_middle_initial] = useState("");
  const [department, set_department] = useState("");
  const [position, set_position] = useState("");
  const [office, set_office] = useState("");
  const [status, set_status] = useState("");
  const [school_year, set_school_year] = useState("");
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [isDone, setIsDone] = useState(false);

  let currentYear = new Date().getFullYear();
  const setAddRecordSchoolYears = [];
  let current = currentYear;

  for (let y = 0; y < 3; y++) {
    let year = current;
    let nextYear = year + 1;
    setAddRecordSchoolYears.push(`${year}-${nextYear}`);
    --current;
  }

  const mutationAddRecord = useMutation({
    mutationFn: fetchAddRecord,
    onSuccess: (res) => {
      setIsDone(() => true);
      queryClient.refetchQueries();
      setMessage("User created successfully!");
      set_first_name("");
      set_last_name("");
      set_middle_initial("");
      set_department("");
      set_position("");
      set_office("");
      set_status("");
      set_school_year("");
    },
    onError: (error) => {
      setIsError(() => true);
      setIsDone(() => true);
      const status = error?.response?.status;
      if (status === 500) {
        setMessage("Error");
      }
      setMessage("User not created successfully!");
    },
  });

  async function addRecord(e) {
    e.preventDefault();
    setIsError(() => false);
    setIsDone(() => false);
    mutationAddRecord.mutate({
      first_name,
      last_name,
      middle_initial,
      department,
      position,
      office,
      status,
      school_year,
    });
  }

  return (
    <>
      <div className="p-3">
        <form onSubmit={addRecord}>
          <div className="row justify-content-center py-4">
            <div className="col-xl-8 col-lg-9 col-md-10 d-flex flex-column gap-3">
              <div className="d-flex gap-2 align-items-center">
                <div>First Name</div>
                <input
                  type="text"
                  className="form-control form-control-sm"
                  required
                  value={first_name}
                  onChange={(e) => set_first_name(e.target.value)}
                />
              </div>
              <div className="d-flex gap-2 align-items-center">
                <div>Last Name</div>
                <input
                  type="text"
                  className="form-control form-control-sm"
                  required
                  value={last_name}
                  onChange={(e) => set_last_name(e.target.value)}
                />
              </div>
              <div className="d-flex gap-2 align-items-center">
                <div>Middle Initial</div>
                <input
                  type="text"
                  className="form-control form-control-sm"
                  required
                  value={middle_initial}
                  onChange={(e) => set_middle_initial(e.target.value)}
                />
              </div>
              <div className="d-flex gap-2 align-items-center">
                <div>Department</div>
                <select
                  className="form-select form-select-sm"
                  required
                  value={department}
                  onChange={(e) => set_department(e.target.value)}
                >
                  <option value="" hidden>
                    Choose
                  </option>
                  <option value="Admin">Administrator</option>
                  <option value="FFP">Freshmen Formation Office</option>
                  <option value="CON">College of Nursing</option>
                  <option value="CSITE">
                    College of Science and Information Technology and
                    Engineering
                  </option>
                  <option value="SED">School of Education</option>
                  <option value="SLA">School of Liberal Arts</option>
                  <option value="SMA">
                    School of Management and Accountancy
                  </option>
                  <option value="CS">Central Services</option>
                  <option value="PPO">Physical Plant Personnel</option>
                </select>
              </div>
              <div className="d-flex gap-2 align-items-center">
                <div>School Year</div>
                <select
                  className="form-select form-select-sm"
                  required
                  value={school_year}
                  onChange={(e) => set_school_year(e.target.value)}
                >
                  <option value="" hidden>
                    Choose
                  </option>
                  {
                    <>
                      {setAddRecordSchoolYears.map((data, index) => (
                        <option key={index} value={data}>
                          SY {data}
                        </option>
                      ))}
                    </>
                  }
                </select>
              </div>
              {department === "PPO" && (
                <>
                  <div className="d-flex gap-2 align-items-center">
                    <div>Status</div>
                    <input
                      className="form-control form-control-sm"
                      value={status}
                      onChange={(e) => set_status(e.target.value)}
                      required
                    />
                  </div>
                </>
              )}
              {department !== "PPO" && department !== "" ? (
                <>
                  <div className="d-flex gap-2 align-items-center">
                    <div>Position</div>
                    <input
                      className="form-control form-control-sm"
                      value={position}
                      onChange={(e) => set_position(e.target.value)}
                      required
                    />
                  </div>
                  <div className="d-flex gap-2 align-items-center">
                    <div>Office</div>
                    <input
                      className="form-control form-control-sm"
                      value={office}
                      onChange={(e) => set_office(e.target.value)}
                      required
                    />
                  </div>
                </>
              ) : (
                ""
              )}

              {isDone && (
                <div
                  className={`py-2 ${
                    isError ? "text-red" : "text-green"
                  } text-center fw-bold fs-5`}
                >
                  {message}
                </div>
              )}
              <button
                type="submit"
                className="btn fw-semibold btn-sm btn-green text-white"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
