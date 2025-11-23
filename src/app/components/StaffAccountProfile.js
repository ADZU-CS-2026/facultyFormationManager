"use client";

import { useQuery } from "@tanstack/react-query";
import fetchStaffAccountData from "@/app/fetch/fetchStaffAccountData";

export default function StaffAccountProfile({ id }) {
  const { data: staff, isLoading } = useQuery({
    queryKey: ["staffid", id],
    queryFn: async () => await fetchStaffAccountData(id),
  });

  return (
    <>
      <div className="text-center fs-5 mt-2">
        ID: {!isLoading ? staff[0].id : "Loading..."}
      </div>
      <div className="text-center fs-5">
        Password: {!isLoading ? staff[0].password : "Loading..."}
      </div>
      <div className="d-flex justify-content-center gap-2 my-2 mt-3">
        <button className="btn btn-sm text-white btn-green fw-semibold">
          Update Password
        </button>
        <button className="btn btn-sm text-white btn-red fw-semibold">
          Delete Account
        </button>
      </div>
    </>
  );
}
