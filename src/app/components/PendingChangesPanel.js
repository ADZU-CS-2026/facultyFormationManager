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

    return (
        <div className="pending-changes-panel">
            {/* Header */}
            <div className="d-flex justify-content-between align-items-center mb-4">
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

            {/* Status Filter */}
            <div className="mb-3">
                <div className="btn-group btn-group-sm w-100">
                    {['all', 'Draft', 'Pending', 'Approved', 'Rejected'].map((status) => (
                        <button
                            key={status}
                            className={`btn ${statusFilter === status ? 'btn-primary' : 'btn-outline-primary'}`}
                            onClick={() => setStatusFilter(status)}
                        >
                            {status === 'all' ? 'All' : status}
                        </button>
                    ))}
                </div>
            </div>

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
                    <p>No change batches found</p>
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
                                            <span className="fw-medium">{batch.description || 'Untitled Batch'}</span>
                                        </div>
                                        <div className="small text-muted mt-1">
                                            {batch.change_count || 0} change(s) • Created {formatDate(batch.created_at)}
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
                                        >
                                            <i className="fa-solid fa-paper-plane me-1"></i>
                                            Submit
                                        </button>
                                    )}
                                    {batch.status === 'Rejected' && batch.rejection_reason && (
                                        <span className="badge bg-danger" title={batch.rejection_reason}>
                                            <i className="fa-solid fa-info-circle"></i>
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
                                                                    <span className="me-2">{change.action_type}</span>
                                                                    <span className="text-muted small">
                                                                        on {change.table_name}
                                                                        {change.record_id && ` #${change.record_id}`}
                                                                    </span>
                                                                    {change.has_conflict && (
                                                                        <span className="badge bg-warning text-dark ms-2">Conflict</span>
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
                                                                                Remove
                                                                            </button>
                                                                        </div>
                                                                    )}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
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
