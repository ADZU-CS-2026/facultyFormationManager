"use client";

import fetchUserId from "@/app/fetch/fetchUserId";
import fetchRecordRetreatId from "@/app/fetch/fetchRecordRetreatId";
import { useQuery } from "@tanstack/react-query";

export default function RecordProfile({ id }) {
  const {
    data: user,
    isFetching: userFetching,
    isError: userError,
  } = useQuery({
    queryKey: ["recordid", id],
    queryFn: async () => await fetchUserId(id),
  });

  const {
    data: retreat,
    isFetching: retreatFetching,
    isError: retreatError,
  } = useQuery({
    queryKey: ["recordretreatid", id],
    queryFn: async () => await fetchRecordRetreatId(id),
  });

  const _3DRetreat =
    user?.[0]?.department !== "CS" &&
    retreat?.filter((data) => data.retreat_type === "3D Retreat");

  const DGY1 = retreat?.find((data) => data.retreat_type === "DGY1");
  const DGY2 = retreat?.find((data) => data.retreat_type === "DGY2");
  const DGY3 = retreat?.find((data) => data.retreat_type === "DGY3");
  const DGY41 = retreat?.find((data) => data.retreat_type === "DGY4.1 IMC");
  const DGY42 = retreat?.find(
    (data) => data.retreat_type === "DGY4.2 3D Retreat"
  );
  const DGY51 = retreat?.find((data) => data.retreat_type === "DGY5.1 IPC");
  const DGY52 = retreat?.find(
    (data) => data.retreat_type === "DGY5.2 3D Retreat"
  );
  const SD = retreat?.find((data) => data.retreat_type === "SD");

  return (
    <>
      <>
        <div className="row fs-5 d-flex align-items-center justify-content-end">
          <div className="col-md-4 col-12 d-flex justify-content-center">{`${
            user?.[0]?.id
          } - ${user?.[0]?.last_name}, ${user?.[0]?.first_name} ${
            user?.[0]?.middle_initial || ""
          }`}</div>
          <div className="col-md-4 col-12 fs-6 d-flex justify-content-md-end justify-content-center align-items-center gap-2">
            <div
              className={`${
                user?.[0]?.work_status === "Active" ? "bg-green" : "bg-red"
              } rounded-pill`}
              style={{ width: "10px", height: "10px" }}
            ></div>
            {user?.[0]?.work_status}
          </div>
        </div>

        <div className="row text-wrap g-4 mt-4">
          <div className="col-12 col-md-3">
            <div className="table-responsive">
              <table className="table small table-bordered table-striped table-hover align-middle">
                <thead className="border">
                  <tr className="text-start">
                    <th className="bg-tableheadergray" colSpan="2">
                      Title
                    </th>
                  </tr>
                </thead>
                {user?.[0]?.department !== "PPO" ? (
                  <tbody>
                    <tr>
                      <td className="text-start text-muted">Department</td>
                      <td className="text-center text-muted">
                        {user?.[0]?.department}
                      </td>
                    </tr>
                    <tr>
                      <td className="text-start text-muted">Position</td>
                      <td className="text-center text-muted">
                        {user?.[0]?.position}
                      </td>
                    </tr>
                    <tr>
                      <td className="text-start text-muted">Office</td>
                      <td className="text-center text-muted">
                        {user?.[0]?.office}
                      </td>
                    </tr>
                  </tbody>
                ) : (
                  <tbody>
                    <tr>
                      <td className="text-start text-muted">Department</td>
                      <td className="text-center text-muted">
                        {user?.[0]?.department}
                      </td>
                    </tr>
                    <tr>
                      <td className="text-start text-muted">Status</td>
                      <td className="text-center text-muted">
                        {user?.[0]?.status}
                      </td>
                    </tr>
                  </tbody>
                )}
              </table>
            </div>
          </div>

          <div className="col-12 col-md-9">
            <div className="table-responsive">
              <table className="table small table-bordered table-striped table-hover align-middle">
                <thead className="border">
                  <tr className="text-start">
                    <th className="bg-tableheadergray">Retreat Type</th>
                    <th className="bg-tableheadergray">Attendance Date</th>
                    <th className="bg-tableheadergray">Attendance Staus</th>
                  </tr>
                </thead>
                <tbody>
                  {user?.[0]?.department === "CS" && (
                    <>
                      <tr>
                        <td className="text-start text-muted">DYG1</td>
                        <td className="text-center text-muted">
                          {DGY1?.start_date &&
                            DGY1?.completion_date &&
                            `${DGY1?.start_date.split("T")[0] || ""} - ${
                              DGY1?.completion_date.split("T")[0] || ""
                            }`}
                        </td>
                        <td className="text-center text-muted">
                          {DGY1?.attendance_status}
                        </td>
                      </tr>
                      <tr>
                        <td className="text-start text-muted">DYG2</td>
                        <td className="text-center text-muted">
                          {DGY2?.start_date &&
                            DGY2?.completion_date &&
                            `${DGY2?.start_date.split("T")[0] || ""} - ${
                              DGY2?.completion_date.split("T")[0] || ""
                            }`}
                        </td>
                        <td className="text-center text-muted">
                          {DGY2?.attendance_status}
                        </td>
                      </tr>
                      <tr>
                        <td className="text-start text-muted">DYG3</td>
                        <td className="text-center text-muted">
                          {DGY3?.start_date &&
                            DGY3?.completion_date &&
                            `${DGY3?.start_date.split("T")[0] || ""} - ${
                              DGY3?.completion_date.split("T")[0] || ""
                            }`}
                        </td>
                        <td className="text-center text-muted">
                          {DGY3?.attendance_status}
                        </td>
                      </tr>
                      <tr>
                        <td className="text-start text-muted">DYG4.1 IMC</td>
                        <td className="text-center text-muted">
                          {DGY41?.start_date &&
                            DGY41?.completion_date &&
                            `${DGY41?.start_date.split("T")[0] || ""} - ${
                              DGY41?.completion_date.split("T")[0] || ""
                            }`}
                        </td>
                        <td className="text-center text-muted">
                          {DGY41?.attendance_status}
                        </td>
                      </tr>
                      <tr>
                        <td className="text-start text-muted">
                          DYG4.2 3D Retreat
                        </td>
                        <td className="text-center text-muted">
                          {DGY42?.start_date &&
                            DGY42?.completion_date &&
                            `${DGY42?.start_date.split("T")[0] || ""} - ${
                              DGY42?.completion_date.split("T")[0] || ""
                            }`}
                        </td>
                        <td className="text-center text-muted">
                          {DGY42?.attendance_status}
                        </td>
                      </tr>
                      <tr>
                        <td className="text-start text-muted">DYG5.1 IPC</td>
                        <td className="text-center text-muted">
                          {DGY51?.start_date &&
                            DGY51?.completion_date &&
                            `${DGY51?.start_date.split("T")[0] || ""} - ${
                              DGY51?.completion_date.split("T")[0] || ""
                            }`}
                        </td>
                        <td className="text-center text-muted">
                          {DGY51?.attendance_status}
                        </td>
                      </tr>
                      <tr>
                        <td className="text-start text-muted">
                          DYG5.2 3D Retreat
                        </td>
                        <td className="text-center text-muted">
                          {DGY52?.start_date &&
                            DGY52?.completion_date &&
                            `${DGY52?.start_date.split("T")[0] || ""} - ${
                              DGY52?.completion_date.split("T")[0] || ""
                            }`}
                        </td>
                        <td className="text-center text-muted">
                          {DGY52?.attendance_status}
                        </td>
                      </tr>
                      <tr>
                        <td className="text-start text-muted">SD</td>
                        <td className="text-center text-muted">
                          {SD?.start_date &&
                            SD?.completion_date &&
                            `${SD?.start_date.split("T")[0] || ""} - ${
                              SD?.completion_date.split("T")[0] || ""
                            }`}
                        </td>
                        <td className="text-center text-muted">
                          {SD?.attendance_status}
                        </td>
                      </tr>
                    </>
                  )}

                  {user?.[0]?.department === "Admin" && (
                    <>
                      <tr>
                        <td className="text-start text-muted">DGY2</td>
                        <td className="text-center text-muted">
                          {DGY2?.start_date &&
                            DGY2?.completion_date &&
                            `${DGY2?.start_date.split("T")[0] || ""} - ${
                              DGY2?.completion_date.split("T")[0] || ""
                            }`}
                        </td>
                        <td className="text-center text-muted">
                          {DGY2?.attendance_status}
                        </td>
                      </tr>
                      <tr>
                        <td className="text-start text-muted">DGY3</td>
                        <td className="text-center text-muted">
                          {DGY3?.start_date &&
                            DGY3?.completion_date &&
                            `${DGY3?.start_date.split("T")[0] || ""} - ${
                              DGY3?.completion_date.split("T")[0] || ""
                            }`}
                        </td>
                        <td className="text-center text-muted">
                          {DGY3?.attendance_status}
                        </td>
                      </tr>
                    </>
                  )}

                  {user?.[0]?.department !== "CS" && (
                    <>
                      {_3DRetreat?.map((data, index) => (
                        <tr key={index}>
                          <td className="text-start text-muted">
                            {`${data?.retreat_type} ${data?.school_year}`}
                          </td>
                          <td className="text-center text-muted">
                            {data?.start_date &&
                              data?.completion_date &&
                              `${data?.start_date || ""} - ${
                                data?.completion_date || ""
                              }`}
                          </td>
                          <td className="text-center text-muted">
                            {data?.attendance_status}
                          </td>
                        </tr>
                      ))}
                    </>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </>
    </>
  );
}
