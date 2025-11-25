"use client";

import fetchUserId from "@/app/fetch/fetchUserId";
import { useQuery } from "@tanstack/react-query";

export default function RecordProfile({ id }) {
  const {
    data: user,
    isFetching: userFetching,
    isError: userError,
  } = useQuery({
    queryKey: ["recordid"],
    queryFn: async () => await fetchUserId(id),
  });

  return (
    <>
      {!userFetching && (
        <>
          <div className="row fs-5 d-flex align-items-center justify-content-end">
            <div className="col-4 d-flex justify-content-center">{`${user?.[0]?.id} - ${user?.[0]?.last_name}, ${user?.[0]?.first_name} ${user?.[0]?.middle_initial}`}</div>
            <div className="col-4 d-flex justify-content-end align-items-center gap-2">
              <div
                className="bg-green rounded-pill"
                style={{ width: "13px", height: "13px" }}
              ></div>
              {user?.[0]?.work_status}
            </div>
          </div>

          <div className="">
            <button></button>
          </div>

          <div className="d-flex flex-md-row flex-column justify-content-between gap-3 mt-4">
            <div className="w-50">
              <table className="table w-100 small table-bordered table-striped table-hover align-middle">
                <thead className="border">
                  <tr className="text-start">
                    <th className="bg-tableheadergray" colSpan="2">
                      Title
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-center text-muted">Position</td>
                    <td className="text-center text-muted">
                      {user?.[0]?.position}
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center text-muted">Office</td>
                    <td className="text-center text-muted">
                      {user?.[0]?.office}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="w-100">
              <table className="table w-100 small table-bordered table-striped table-hover align-middle">
                <thead className="border">
                  <tr className="text-start">
                    <th className="bg-tableheadergray">Retreat Type</th>
                    <th className="bg-tableheadergray">Attendance Date</th>
                    <th className="bg-tableheadergray">Attendance Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-start text-muted">Retreat</td>
                    <td className="text-center text-muted">Retreat</td>
                    <td className="text-center text-muted">Retreat</td>
                  </tr>
                  <tr>
                    <td className="text-start text-muted">Retreat</td>
                    <td className="text-center text-muted">Retreat</td>
                    <td className="text-center text-muted">Retreat</td>
                  </tr>
                  <tr>
                    <td className="text-start text-muted">Retreat</td>
                    <td className="text-center text-muted">Retreat</td>
                    <td className="text-center text-muted">Retreat</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/* <div className="">{user?.[0]?.id}</div>
          <div className="">{user?.[0]?.first_name}</div>
          <div className="">{user?.[0]?.last_name}</div>
          <div className="">{user?.[0]?.middle_initial}</div>
          <div className="">{user?.[0]?.department}</div>
          <div className="">{user?.[0]?.position}</div>
          <div className="">{user?.[0]?.office}</div>
          <div className="">{user?.[0]?.status}</div>
          <div className="">{user?.[0]?.work_status}</div> */}
        </>
      )}
    </>
  );
}
