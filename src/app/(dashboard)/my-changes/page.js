"use client";

import PendingChangesPanel from "@/app/components/PendingChangesPanel";

export default function MyChangesPage() {
    return (
        <div className="container-fluid py-4">
            <div className="row justify-content-center">
                <div className="col-xl-10 col-lg-11">
                    {/* Page Header */}
                    <div className="card mb-4">
                        <div className="card-body">
                            <div className="d-flex align-items-center">
                                <div className="rounded-circle bg-primary bg-opacity-10 p-3 me-3">
                                    <i className="fa-solid fa-clipboard-list fs-4 text-primary"></i>
                                </div>
                                <div>
                                    <h4 className="mb-1">My Changes</h4>
                                    <p className="text-muted mb-0">
                                        View and manage your pending change requests. Draft changes can be edited or removed before submission.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* How It Works */}
                    <div className="card mb-4">
                        <div className="card-header bg-light">
                            <h6 className="mb-0">
                                <i className="fa-solid fa-info-circle me-2"></i>
                                How It Works
                            </h6>
                        </div>
                        <div className="card-body">
                            <div className="row g-3">
                                <div className="col-md-3 text-center">
                                    <div className="rounded-circle bg-red-100 bg-opacity-10 mx-auto mb-2 d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px' }}>
                                        <i className="fa-solid fa-file-pen text-secondary"></i>
                                    </div>
                                    <small className="fw-medium">1. Draft</small>
                                    <p className="small text-muted mb-0">Make changes to records. They&apos;re saved as drafts.</p>
                                </div>
                                <div className="col-md-3 text-center">
                                    <div className="rounded-circle bg-primary bg-opacity-10 mx-auto mb-2 d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px' }}>
                                        <i className="fa-solid fa-paper-plane text-primary"></i>
                                    </div>
                                    <small className="fw-medium">2. Submit</small>
                                    <p className="small text-muted mb-0">Submit your draft batch for admin review.</p>
                                </div>
                                <div className="col-md-3 text-center">
                                    <div className="rounded-circle bg-warning bg-opacity-10 mx-auto mb-2 d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px' }}>
                                        <i className="fa-solid fa-clock text-warning"></i>
                                    </div>
                                    <small className="fw-medium">3. Pending</small>
                                    <p className="small text-muted mb-0">Wait for admin to review your changes.</p>
                                </div>
                                <div className="col-md-3 text-center">
                                    <div className="rounded-circle bg-success bg-opacity-10 mx-auto mb-2 d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px' }}>
                                        <i className="fa-solid fa-check-circle text-success"></i>
                                    </div>
                                    <small className="fw-medium">4. Applied</small>
                                    <p className="small text-muted mb-0">Approved changes are applied to the database.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Pending Changes Panel */}
                    <div className="card">
                        <div className="card-body">
                            <PendingChangesPanel />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
