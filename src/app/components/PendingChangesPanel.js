"use client";

import { useState, useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import { queryClient } from "@/app/react-query";
import fetchMyDrafts from "@/app/fetch/fetchMyDrafts";
import fetchSubmitBatch from "@/app/fetch/fetchSubmitBatch";
import fetchBatchDetails from "@/app/fetch/fetchBatchDetails";
import { fetchDeleteChange } from "@/app/fetch/fetchUpdateChange";
import BatchStatusBadge from "./BatchStatusBadge";
import DiffViewer from "./DiffViewer";

// Status descriptions for users
const STATUS_INFO = {
    Draft: {
        icon: "fa-file-pen",
        color: "secondary",
        title: "Drafts",
        description: "Changes you've made but haven't submitted yet. You can review, edit, or remove changes before submitting for approval.",
        action: "Submit when ready for admin review"
    },
    Pending: {
        icon: "fa-clock",
        color: "warning",
        title: "Awaiting Approval",
        description: "Your changes have been submitted and are waiting for an administrator to review and approve them.",
        action: "Please wait for admin review"
    },
    Approved: {
        icon: "fa-circle-check",
        color: "success",
        title: "Approved",
        description: "Your changes have been approved and applied to the system.",
        action: "No action needed"
    },
    Rejected: {
        icon: "fa-circle-xmark",
        color: "danger",
        title: "Rejected",
        description: "Your changes were not approved. Check the rejection reason for details.",
        action: "Review the feedback and submit new changes if needed"
    }
};

/**
 * PendingChangesPanel - Staff component to view and manage pending changes
 */
export default function PendingChangesPanel() {
    const [batches, setBatches] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [statusFilter, setStatusFilter] = useState('all');
    const [expandedBatch, setExpandedBatch] = useState(null);
    const [batchDetails, setBatchDetails] = useState(null);
    const [detailsLoading, setDetailsLoading] = useState(false);
    const [actionMessage, setActionMessage] = useState(null);

    // Fetch batches on mount and filter change
    useEffect(() => {
        loadBatches();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [statusFilter]);

    const loadBatches = async () => {
        setLoading(true);
        setError(null);
        try {
            const result = await fetchMyDrafts(statusFilter);
            if (result.success) {
                setBatches(result.data || []);
            } else {
                setError(result.message);
            }
        } catch (err) {
            setError(err.message || 'Failed to load batches');
        } finally {
            setLoading(false);
        }
    };

    // Load batch details when expanding
    const handleExpandBatch = async (batchId) => {
        if (expandedBatch === batchId) {
            setExpandedBatch(null);
            setBatchDetails(null);
            return;
        }

        setExpandedBatch(batchId);
        setDetailsLoading(true);
        try {
            const result = await fetchBatchDetails(batchId);
            if (result.success) {
                setBatchDetails(result.data);
            }
        } catch (err) {
            console.error('Failed to load batch details:', err);
        } finally {
            setDetailsLoading(false);
        }
    };

    // Submit batch mutation
    const submitMutation = useMutation({
        mutationFn: fetchSubmitBatch,
        onSuccess: (result) => {
            if (result.success) {
                setActionMessage({ type: 'success', text: 'Batch submitted for approval!' });
                loadBatches();
                queryClient.invalidateQueries(['myDrafts']);
            } else {
                setActionMessage({ type: 'danger', text: result.message });
            }
        },
        onError: (err) => {
            setActionMessage({ type: 'danger', text: err.message || 'Failed to submit batch' });
        }
    });

    // Delete change mutation
    const deleteMutation = useMutation({
        mutationFn: fetchDeleteChange,
        onSuccess: (result) => {
            if (result.success) {
                setActionMessage({ type: 'success', text: 'Change removed successfully' });
                if (expandedBatch) {
                    handleExpandBatch(expandedBatch); // Refresh details
                }
                loadBatches();
            } else {
                setActionMessage({ type: 'danger', text: result.message });
            }
        },
        onError: (err) => {
            setActionMessage({ type: 'danger', text: err.message || 'Failed to delete change' });
        }
    });

    const handleSubmit = (batchId) => {
        if (confirm('Are you sure you want to submit this batch for admin approval?')) {
            submitMutation.mutate({ batch_id: batchId });
        }
    };

    const handleDeleteChange = (changeId) => {
        if (confirm('Are you sure you want to remove this change?')) {
            deleteMutation.mutate({ change_id: changeId });
        }
    };

    const formatDate = (dateString) => {
        if (!dateString) return '-';
        return new Date(dateString).toLocaleString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    const getActionTypeIcon = (actionType) => {
        switch (actionType) {
            case 'INSERT': return 'fa-solid fa-plus text-success';
            case 'UPDATE': return 'fa-solid fa-edit text-primary';
            case 'DELETE': return 'fa-solid fa-trash text-danger';
            default: return 'fa-solid fa-question';
        }
    };

    // User-friendly action type labels
    const getActionLabel = (actionType) => {
        switch (actionType) {
            case 'INSERT': return 'New Record';
            case 'UPDATE': return 'Update';
            case 'DELETE': return 'Delete';
            default: return actionType;
        }
    };

    // User-friendly table name labels
    const getTableLabel = (tableName) => {
        switch (tableName) {
            case 'retreat_records': return 'Retreat Record';
            case 'users': return 'User';
            default: return tableName.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
        }
    };

    return (
        <div className="pending-changes-panel">
            {/* Header with explanation */}
            <div className="mb-4">
                <div className="d-flex justify-content-between align-items-center mb-2">
                    <h5 className="mb-0">
                        <i className="fa-solid fa-clipboard-list me-2"></i>
                        My Changes
                    </h5>
                    <button
                        className="btn btn-sm btn-outline-primary"
                        onClick={loadBatches}
                        disabled={loading}
                    >
                        <i className="fa-solid fa-refresh me-1"></i>
                        Refresh
                    </button>
                </div>
                <p className="text-muted small mb-0">
                    Track all your changes here. As a staff member, your changes need admin approval before they take effect.
                </p>
            </div>

            {/* Status Filter with better labels */}
            <div className="mb-3">
                <label className="form-label small text-muted mb-1">Filter by status:</label>
                <div className="btn-group btn-group-sm w-100">
                    <button
                        className={`btn ${statusFilter === 'all' ? 'btn-primary' : 'btn-outline-primary'}`}
                        onClick={() => setStatusFilter('all')}
                    >
                        <i className="fa-solid fa-list me-1"></i>
                        All
                    </button>
                    <button
                        className={`btn ${statusFilter === 'Draft' ? 'btn-secondary' : 'btn-outline-secondary'}`}
                        onClick={() => setStatusFilter('Draft')}
                    >
                        <i className="fa-solid fa-file-pen me-1"></i>
                        Drafts
                    </button>
                    <button
                        className={`btn ${statusFilter === 'Pending' ? 'btn-warning' : 'btn-outline-warning'}`}
                        onClick={() => setStatusFilter('Pending')}
                    >
                        <i className="fa-solid fa-clock me-1"></i>
                        Awaiting
                    </button>
                    <button
                        className={`btn ${statusFilter === 'Approved' ? 'btn-success' : 'btn-outline-success'}`}
                        onClick={() => setStatusFilter('Approved')}
                    >
                        <i className="fa-solid fa-circle-check me-1"></i>
                        Approved
                    </button>
                    <button
                        className={`btn ${statusFilter === 'Rejected' ? 'btn-danger' : 'btn-outline-danger'}`}
                        onClick={() => setStatusFilter('Rejected')}
                    >
                        <i className="fa-solid fa-circle-xmark me-1"></i>
                        Rejected
                    </button>
                </div>
            </div>

            {/* Status info banner when filtered */}
            {statusFilter !== 'all' && STATUS_INFO[statusFilter] && (
                <div className={`alert alert-${STATUS_INFO[statusFilter].color} py-2 mb-3`}>
                    <div className="d-flex align-items-start">
                        <i className={`fa-solid ${STATUS_INFO[statusFilter].icon} me-2 mt-1`}></i>
                        <div>
                            <strong>{STATUS_INFO[statusFilter].title}</strong>
                            <p className="mb-1 small">{STATUS_INFO[statusFilter].description}</p>
                            <span className="small fst-italic">
                                <i className="fa-solid fa-arrow-right me-1"></i>
                                {STATUS_INFO[statusFilter].action}
                            </span>
                        </div>
                    </div>
                </div>
            )}

            {/* Action Message */}
            {actionMessage && (
                <div className={`alert alert-${actionMessage.type} alert-dismissible fade show py-2`}>
                    {actionMessage.text}
                    <button
                        type="button"
                        className="btn-close"
                        onClick={() => setActionMessage(null)}
                    ></button>
                </div>
            )}

            {/* Loading State */}
            {loading && (
                <div className="text-center py-5">
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            )}

            {/* Error State */}
            {error && (
                <div className="alert alert-danger">{error}</div>
            )}

            {/* Empty State */}
            {!loading && !error && batches.length === 0 && (
                <div className="text-center py-5 text-muted">
                    <i className="fa-solid fa-inbox fs-1 mb-3 d-block"></i>
                    {statusFilter === 'Draft' ? (
                        <>
                            <p className="mb-1">No drafts yet</p>
                            <p className="small">When you add, edit, or delete records, they will appear here first as drafts.</p>
                        </>
                    ) : statusFilter === 'Pending' ? (
                        <>
                            <p className="mb-1">No changes awaiting approval</p>
                            <p className="small">Submit your drafts to see them here while they await admin review.</p>
                        </>
                    ) : statusFilter === 'Approved' ? (
                        <>
                            <p className="mb-1">No approved changes yet</p>
                            <p className="small">Once an admin approves your submissions, they will be listed here.</p>
                        </>
                    ) : statusFilter === 'Rejected' ? (
                        <>
                            <p className="mb-1">No rejected changes</p>
                            <p className="small">Great! None of your submissions have been rejected.</p>
                        </>
                    ) : (
                        <>
                            <p className="mb-1">No change history found</p>
                            <p className="small">Start by adding, editing, or deleting records. Your changes will appear here.</p>
                        </>
                    )}
                </div>
            )}

            {/* Batch List */}
            {!loading && batches.length > 0 && (
                <div className="list-group">
                    {batches.map((batch) => (
                        <div key={batch.id} className="list-group-item p-0">
                            {/* Batch Header */}
                            <div
                                className="p-3 d-flex justify-content-between align-items-center cursor-pointer"
                                onClick={() => handleExpandBatch(batch.id)}
                                style={{ cursor: 'pointer' }}
                            >
                                <div className="d-flex align-items-center gap-3">
                                    <i className={`fa-solid ${expandedBatch === batch.id ? 'fa-chevron-down' : 'fa-chevron-right'} text-muted`}></i>
                                    <div>
                                        <div className="d-flex align-items-center gap-2">
                                            <BatchStatusBadge status={batch.status} />
                                            <span className="fw-medium">{batch.description || 'Untitled Changes'}</span>
                                        </div>
                                        <div className="small text-muted mt-1">
                                            <i className="fa-solid fa-layer-group me-1"></i>
                                            {batch.change_count || 0} change{batch.change_count !== 1 ? 's' : ''}
                                            <span className="mx-2">•</span>
                                            <i className="fa-regular fa-calendar me-1"></i>
                                            {formatDate(batch.created_at)}
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center gap-2">
                                    {batch.status === 'Draft' && (
                                        <button
                                            className="btn btn-sm btn-success"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                handleSubmit(batch.id);
                                            }}
                                            disabled={submitMutation.isPending || batch.change_count === 0}
                                            title="Submit for admin approval"
                                        >
                                            <i className="fa-solid fa-paper-plane me-1"></i>
                                            Submit for Approval
                                        </button>
                                    )}
                                    {batch.status === 'Pending' && (
                                        <span className="badge bg-warning text-dark">
                                            <i className="fa-solid fa-hourglass-half me-1"></i>
                                            Waiting for Admin
                                        </span>
                                    )}
                                    {batch.status === 'Rejected' && batch.rejection_reason && (
                                        <span className="badge bg-danger" title={batch.rejection_reason}>
                                            <i className="fa-solid fa-info-circle me-1"></i>
                                            See Reason
                                        </span>
                                    )}
                                </div>
                            </div>

                            {/* Batch Details (Expanded) */}
                            {expandedBatch === batch.id && (
                                <div className="border-top p-3 bg-light">
                                    {detailsLoading ? (
                                        <div className="text-center py-3">
                                            <div className="spinner-border spinner-border-sm" role="status"></div>
                                        </div>
                                    ) : batchDetails ? (
                                        <>
                                            {/* Rejection Reason */}
                                            {batch.status === 'Rejected' && batchDetails.batch?.rejection_reason && (
                                                <div className="alert alert-danger py-2 mb-3">
                                                    <strong>Rejection Reason:</strong> {batchDetails.batch.rejection_reason}
                                                </div>
                                            )}

                                            {/* Changes List */}
                                            {batchDetails.changes && batchDetails.changes.length > 0 ? (
                                                <>
                                                    <p className="small text-muted mb-2">
                                                        <i className="fa-solid fa-info-circle me-1"></i>
                                                        Click on each item below to see what will change:
                                                    </p>
                                                    <div className="accordion" id={`accordion-${batch.id}`}>
                                                        {batchDetails.changes.map((change, index) => (
                                                            <div className="accordion-item" key={change.id}>
                                                                <h2 className="accordion-header">
                                                                    <button
                                                                        className="accordion-button collapsed py-2"
                                                                        type="button"
                                                                        data-bs-toggle="collapse"
                                                                        data-bs-target={`#change-${change.id}`}
                                                                    >
                                                                        <i className={`${getActionTypeIcon(change.action_type)} me-2`}></i>
                                                                        <span className={`badge me-2 ${change.action_type === 'INSERT' ? 'bg-success' :
                                                                                change.action_type === 'UPDATE' ? 'bg-primary' :
                                                                                    change.action_type === 'DELETE' ? 'bg-danger' : 'bg-secondary'
                                                                            }`}>
                                                                            {getActionLabel(change.action_type)}
                                                                        </span>
                                                                        <span className="text-muted small">
                                                                            {getTableLabel(change.table_name)}
                                                                            {change.record_id && ` (ID: ${change.record_id})`}
                                                                        </span>
                                                                        {change.has_conflict && (
                                                                            <span className="badge bg-warning text-dark ms-2">
                                                                                <i className="fa-solid fa-exclamation-triangle me-1"></i>
                                                                                Data Changed
                                                                            </span>
                                                                        )}
                                                                    </button>
                                                                </h2>
                                                                <div
                                                                    id={`change-${change.id}`}
                                                                    className="accordion-collapse collapse"
                                                                    data-bs-parent={`#accordion-${batch.id}`}
                                                                >
                                                                    <div className="accordion-body">
                                                                        <DiffViewer
                                                                            oldValues={change.old_values}
                                                                            newValues={change.new_values}
                                                                            currentValues={change.current_values}
                                                                            actionType={change.action_type}
                                                                            showConflicts={true}
                                                                        />
                                                                        {batch.status === 'Draft' && (
                                                                            <div className="mt-3 text-end">
                                                                                <button
                                                                                    className="btn btn-sm btn-outline-danger"
                                                                                    onClick={() => handleDeleteChange(change.id)}
                                                                                    disabled={deleteMutation.isPending}
                                                                                >
                                                                                    <i className="fa-solid fa-trash me-1"></i>
                                                                                    Remove This Change
                                                                                </button>
                                                                            </div>
                                                                        )}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </>
                                            ) : (
                                                <p className="text-muted text-center mb-0">No changes in this batch</p>
                                            )}
                                        </>
                                    ) : (
                                        <p className="text-muted text-center mb-0">Failed to load details</p>
                                    )}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
