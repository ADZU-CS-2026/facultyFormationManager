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
          <div className="">{user?.[0]?.id}</div>
          <div className="">{user?.[0]?.first_name}</div>
          <div className="">{user?.[0]?.last_name}</div>
          <div className="">{user?.[0]?.middle_initial}</div>
          <div className="">{user?.[0]?.department}</div>
          <div className="">{user?.[0]?.position}</div>
          <div className="">{user?.[0]?.office}</div>
          <div className="">{user?.[0]?.status}</div>
          <div className="">{user?.[0]?.work_status}</div>
        </>
      )}
    </>
  );
}
