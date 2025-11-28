"use client";

import { useState, useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import { queryClient } from "@/app/react-query";
import fetchPendingBatches from "@/app/fetch/fetchPendingBatches";
import fetchBatchDetails from "@/app/fetch/fetchBatchDetails";
import fetchApproveBatch from "@/app/fetch/fetchApproveBatch";
import fetchRejectBatch from "@/app/fetch/fetchRejectBatch";
import BatchStatusBadge from "./BatchStatusBadge";
import DiffViewer from "./DiffViewer";
import Pagination from "./Pagination";

/**
 * ApprovalQueue - Admin component to view and process pending approval requests
 */
export default function ApprovalQueue() {
    const [batches, setBatches] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [statusFilter, setStatusFilter] = useState('Pending');
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [totalItems, setTotalItems] = useState(0);
    const [expandedBatch, setExpandedBatch] = useState(null);
    const [batchDetails, setBatchDetails] = useState(null);
    const [detailsLoading, setDetailsLoading] = useState(false);
    const [actionMessage, setActionMessage] = useState(null);

    const itemsPerPage = 10;

    // Fetch batches
    useEffect(() => {
        loadBatches();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentPage, statusFilter]);

    const loadBatches = async () => {
        setLoading(true);
        setError(null);
        try {
            const result = await fetchPendingBatches({
                page: currentPage,
                limit: itemsPerPage,
                status: statusFilter
            });
            if (result.success) {
                setBatches(result.data || []);
                setTotalPages(result.pagination?.totalPages || 1);
                setTotalItems(result.pagination?.total || 0);
            } else {
                setError(result.message);
            }
        } catch (err) {
            setError(err.response?.data?.message || err.message || 'Failed to load batches');
        } finally {
            setLoading(false);
        }
    };

    // Load batch details
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

    // Approve mutation
    const approveMutation = useMutation({
        mutationFn: fetchApproveBatch,
        onSuccess: (result) => {
            if (result.success) {
                setActionMessage({ type: 'success', text: 'Batch approved successfully!' });
                setExpandedBatch(null);
                setBatchDetails(null);
                loadBatches();
                queryClient.invalidateQueries(['pendingBatches']);
                queryClient.invalidateQueries(['pendingCount']);
            } else {
                setActionMessage({ type: 'danger', text: result.message });
            }
        },
        onError: (err) => {
            setActionMessage({ type: 'danger', text: err.response?.data?.message || err.message });
        }
    });

    // Reject mutation
    const rejectMutation = useMutation({
        mutationFn: fetchRejectBatch,
        onSuccess: (result) => {
            if (result.success) {
                setActionMessage({ type: 'success', text: 'Batch rejected' });
                setExpandedBatch(null);
                setBatchDetails(null);
                loadBatches();
                queryClient.invalidateQueries(['pendingBatches']);
                queryClient.invalidateQueries(['pendingCount']);
            } else {
                setActionMessage({ type: 'danger', text: result.message });
            }
        },
        onError: (err) => {
            setActionMessage({ type: 'danger', text: err.response?.data?.message || err.message });
        }
    });

    const handleApprove = (batchId) => {
        if (confirm('Are you sure you want to approve this batch? All changes will be applied to the database.')) {
            approveMutation.mutate({ batch_id: batchId });
        }
    };

    const handleReject = (batchId) => {
        if (confirm('Are you sure you want to reject this batch?')) {
            rejectMutation.mutate({ batch_id: batchId });
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

    const handlePageChange = (page) => {
        setCurrentPage(page);
        setExpandedBatch(null);
        setBatchDetails(null);
    };

    return (
        <div className="approval-queue">
            {/* Header */}
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h5 className="mb-0">
                    <i className="fa-solid fa-clipboard-check me-2"></i>
                    Approval Queue
                    {statusFilter === 'Pending' && totalItems > 0 && (
                        <span className="badge bg-warning text-dark ms-2">{totalItems}</span>
                    )}
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
                <div className="btn-group btn-group-sm">
                    {['Pending', 'Approved', 'Rejected', 'all'].map((status) => (
                        <button
                            key={status}
                            className={`btn ${statusFilter === status ? 'btn-primary' : 'btn-outline-primary'}`}
                            onClick={() => {
                                setStatusFilter(status);
                                setCurrentPage(1);
                            }}
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
                    <i className="fa-solid fa-check-circle fs-1 mb-3 d-block text-success"></i>
                    <p>No pending batches to review</p>
                </div>
            )}

            {/* Batch List */}
            {!loading && batches.length > 0 && (
                <>
                    <div className="list-group mb-3">
                        {batches.map((batch) => (
                            <div key={batch.id} className="list-group-item p-0">
                                {/* Batch Header */}
                                <div
                                    className="p-3 d-flex justify-content-between align-items-center"
                                    onClick={() => handleExpandBatch(batch.id)}
                                    style={{ cursor: 'pointer' }}
                                >
                                    <div className="d-flex align-items-center gap-3">
                                        <i className={`fa-solid ${expandedBatch === batch.id ? 'fa-chevron-down' : 'fa-chevron-right'} text-muted`}></i>
                                        <div>
                                            <div className="d-flex align-items-center gap-2 flex-wrap">
                                                <BatchStatusBadge status={batch.status} />
                                                <span className="fw-medium">{batch.description || 'Untitled Batch'}</span>
                                            </div>
                                            <div className="small text-muted mt-1">
                                                <span className="me-3">
                                                    <i className="fa-solid fa-user me-1"></i>
                                                    {batch.submitted_by_name || batch.submitted_by || 'Unknown'}
                                                </span>
                                                <span className="me-3">
                                                    <i className="fa-solid fa-clock me-1"></i>
                                                    {formatDate(batch.submitted_at || batch.created_at)}
                                                </span>
                                                <span>
                                                    <i className="fa-solid fa-list me-1"></i>
                                                    {batch.change_count || 0} change(s)
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Action Buttons */}
                                    {batch.status === 'Pending' && (
                                        <div className="d-flex gap-2" onClick={(e) => e.stopPropagation()}>
                                            <button
                                                className="btn btn-sm btn-success"
                                                onClick={() => handleApprove(batch.id)}
                                                disabled={approveMutation.isPending || rejectMutation.isPending}
                                            >
                                                <i className="fa-solid fa-check me-1"></i>
                                                Approve
                                            </button>
                                            <button
                                                className="btn btn-sm btn-danger"
                                                onClick={() => handleReject(batch.id)}
                                                disabled={approveMutation.isPending || rejectMutation.isPending}
                                            >
                                                <i className="fa-solid fa-times me-1"></i>
                                                Reject
                                            </button>
                                        </div>
                                    )}
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

                                                {/* Conflict Warning */}
                                                {batchDetails.changes?.some(c => c.has_conflict) && (
                                                    <div className="alert alert-warning py-2 mb-3">
                                                        <i className="fa-solid fa-exclamation-triangle me-2"></i>
                                                        <strong>Warning:</strong> Some changes have conflicts with current database values.
                                                    </div>
                                                )}

                                                {/* Changes List */}
                                                {batchDetails.changes && batchDetails.changes.length > 0 ? (
                                                    <div className="accordion" id={`accordion-${batch.id}`}>
                                                        {batchDetails.changes.map((change) => (
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

                    {/* Pagination */}
                    {totalPages > 1 && (
                        <Pagination
                            currentPage={currentPage}
                            totalPages={totalPages}
                            onPageChange={handlePageChange}
                        />
                    )}
                </>
            )}
        </div>
    );
}
