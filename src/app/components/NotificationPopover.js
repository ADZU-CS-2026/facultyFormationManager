"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import fetchAccountData from "@/app/fetch/fetchAccountData";
import fetchPendingCount from "@/app/fetch/fetchPendingCount";

export default function NotificationPopover({ notifPopup, notifPop }) {
  const router = useRouter();

  // Get user account data to check role
  const { data: accountData } = useQuery({
    queryKey: ["account"],
    queryFn: fetchAccountData,
  });

  const isAdmin = accountData?.[0]?.role === 'ADMINISTRATOR';

  // Fetch pending count for admins
  const { data: pendingData } = useQuery({
    queryKey: ["pendingCount"],
    queryFn: fetchPendingCount,
    enabled: isAdmin,
    refetchInterval: 30000, // Refresh every 30 seconds
  });

  const pendingCount = pendingData?.data?.pending_count || 0;

  const handleApprovalQueueClick = () => {
    notifPop(); // Close the popup
    router.push('/approval-queue');
  };

  return (
    <>
      {/* NOTIFICATION BUTTON */}
      <div
        className={`h-100 px-3 d-flex justify-center align-items-center notification-hover cursor-pointer position-relative ${notifPopup && "bg-semidarkblue"}`}
        onClick={notifPop}
      >
        <FontAwesomeIcon icon="fa-solid fa-bell" className="fs-5" />
        {/* Pending Badge for Admins */}
        {isAdmin && pendingCount > 0 && (
          <span
            className="position-absolute badge rounded-pill bg-danger"
            style={{
              top: '8px',
              right: '8px',
              fontSize: '10px',
              minWidth: '18px',
              padding: '3px 5px'
            }}
          >
            {pendingCount > 99 ? '99+' : pendingCount}
          </span>
        )}
      </div>
      {/* NOTIFICATION POPUP */}
      <div
        className={`bg-white position-absolute card top-100 end-50 rounded-bottom-1 rounded-0 ${!notifPopup && "d-none"}`}
        style={{ width: "300px", zIndex: "99999" }}
      >
        {/* Pending Approvals for Admin */}
        {isAdmin && pendingCount > 0 && (
          <div
            className="border-bottom p-2 d-flex cursor-pointer notification-hover"
            onClick={handleApprovalQueueClick}
            style={{ cursor: 'pointer' }}
          >
            <FontAwesomeIcon
              icon="fa-solid fa-clipboard-check"
              className="text-warning fs-3 mt-1"
            />
            <div className="text-gray1 d-flex flex-column ms-3">
              <div className="fs-6 small">
                <small className="fw-bold">Pending Approvals</small>
              </div>
              <div className="fs-6 small text-lightgray">
                <small>
                  <small>{pendingCount} batch(es) awaiting review</small>
                </small>
              </div>
            </div>
            <span className="badge bg-warning text-dark ms-auto align-self-center">
              {pendingCount}
            </span>
          </div>
        )}

        <div className="border-bottom p-2 d-flex">
          <FontAwesomeIcon
            icon="fa-solid fa-earth-asia"
            className="text-red fs-3 mt-1"
          />
          <div className="text-gray1 d-flex flex-column ms-3">
            <div className="fs-6 small">
              <small>Project Started!</small>
            </div>
            <div className="fs-6 small text-lightgray">
              <small>
                <small>Started At: Sep, 2025</small>
              </small>
            </div>
          </div>
        </div>
        <div className="fs-6 small text-gray1 pt-5 pb-3 d-flex justify-content-center">
          <small className="text-center">Notification Section</small>
        </div>
      </div>
    </>
  );
}
