"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import fetchAccountData from "@/app/fetch/fetchAccountData";
import ApprovalQueue from "@/app/components/ApprovalQueue";

export default function ApprovalQueuePage() {
    const router = useRouter();
    const [authorized, setAuthorized] = useState(false);

    // Get user account data to check role
    const { data: accountData, isLoading, isError } = useQuery({
        queryKey: ["account"],
        queryFn: fetchAccountData,
    });

    useEffect(() => {
        if (!isLoading && accountData) {
            const isAdmin = accountData?.[0]?.role === 'ADMINISTRATOR';
            if (!isAdmin) {
                router.replace('/');
            } else {
                setAuthorized(true);
            }
        }
    }, [accountData, isLoading, router]);

    if (isLoading) {
        return (
            <div className="container-fluid py-5 text-center">
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }

    if (isError || !authorized) {
        return (
            <div className="container-fluid py-5">
                <div className="alert alert-danger text-center">
                    <i className="fa-solid fa-lock me-2"></i>
                    Access Denied. Administrator privileges required.
                </div>
            </div>
        );
    }

    return (
        <div className="container-fluid py-4">
            <div className="row justify-content-center">
                <div className="col-xl-10 col-lg-11">
                    {/* Page Header */}
                    <div className="card mb-4">
                        <div className="card-body">
                            <div className="d-flex align-items-center text-wrap text-break">
                                <div className="rounded-circle bg-warning bg-opacity-10 p-3 me-3">
                                    <i className="fa-solid fa-clipboard-check fs-4 text-warning"></i>
                                </div>
                                <div>
                                    <h4 className="mb-1">Approval Queue</h4>
                                    <p className="text-muted mb-0">
                                        Review and process pending change requests submitted by staff members.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="row g-3 mb-4">
                        <div className="col-md-4">
                            <div className="card h-100 border-success">
                                <div className="card-body d-flex align-items-center">
                                    <div className="rounded-circle bg-success bg-opacity-10 p-2 me-3">
                                        <i className="fa-solid fa-check text-success"></i>
                                    </div>
                                    <div>
                                        <small className="text-muted">Approve</small>
                                        <p className="mb-0 small text-wrap text-break">Apply all changes in a batch to the database</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card h-100 border-danger">
                                <div className="card-body d-flex align-items-center">
                                    <div className="rounded-circle bg-danger bg-opacity-10 p-2 me-3">
                                        <i className="fa-solid fa-times text-danger"></i>
                                    </div>
                                    <div>
                                        <small className="text-muted">Reject</small>
                                        <p className="mb-0 small text-wrap text-break">Decline changes with a reason for the submitter</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card h-100 border-warning">
                                <div className="card-body d-flex align-items-center">
                                    <div className="rounded-circle bg-warning bg-opacity-10 p-2 me-3">
                                        <i className="fa-solid fa-exclamation-triangle text-warning"></i>
                                    </div>
                                    <div>
                                        <small className="text-muted">Conflicts</small>
                                        <p className="mb-0 small text-wrap text-break">Review when data has changed since request</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Approval Queue Component */}
                    <div className="card">
                        <div className="card-body">
                            <ApprovalQueue />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
