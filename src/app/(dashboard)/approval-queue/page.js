"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import fetchAccountData from "@/app/fetch/fetchAccountData";
import ApprovalQueue from "@/app/components/ApprovalQueue";

export default function ApprovalQueuePage() {
    const router = useRouter();
    const [authorized, setAuthorized] = useState(false);

    // Password verification states
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [verifyPassword, setVerifyPassword] = useState("");
    const [verifyEye, setVerifyEye] = useState(false);
    const [verifyError, setVerifyError] = useState("");

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

    // Handle password verification
    const handleVerifyPassword = (e) => {
        e.preventDefault();
        if (!verifyPassword) {
            setVerifyError("Please enter your password");
            return;
        }

        // Check if entered password matches admin password
        if (accountData?.[0]?.password === verifyPassword) {
            setIsAuthenticated(true);
            setVerifyError("");
            setVerifyPassword("");
        } else {
            setVerifyError("Incorrect password. Please try again.");
        }
    };

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
                                            <p className="text-muted small">Please enter your password to access Approval Queue</p>
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
        <div className="container-fluid py-4">
            <div className="row justify-content-center">
                <div className="col-xl-10 col-lg-11">
                    {/* Page Header */}
                    <div className="card mb-4">
                        <div className="card-body">
                            <div className="d-flex align-items-center justify-content-between">
                                <div className="d-flex align-items-center">
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
                                <button
                                    className="btn btn-sm btn-outline-danger"
                                    onClick={() => setIsAuthenticated(false)}
                                    title="Lock Approval Queue"
                                >
                                    <i className="bi bi-lock-fill me-1"></i>
                                    Lock
                                </button>
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
                                        <p className="mb-0 small">Apply all changes in a batch to the database</p>
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
                                        <p className="mb-0 small">Decline changes with a reason for the submitter</p>
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
                                        <p className="mb-0 small">Review when data has changed since request</p>
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