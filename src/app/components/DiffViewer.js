"use client";

import { useState } from "react";

/**
 * DiffViewer - Displays a side-by-side or inline comparison of old vs new values
 * @param {Object} props
 * @param {Object} props.oldValues - Original values before change
 * @param {Object} props.newValues - New values after change
 * @param {Object} props.currentValues - Current values in database (for conflict detection)
 * @param {string} props.actionType - 'INSERT', 'UPDATE', or 'DELETE'
 * @param {boolean} props.showConflicts - Whether to highlight conflicts
 */
export default function DiffViewer({
    oldValues = {},
    newValues = {},
    currentValues = {},
    actionType = 'UPDATE',
    showConflicts = true
}) {
    const [viewMode, setViewMode] = useState('side-by-side'); // 'side-by-side' or 'inline'

    // Flatten nested objects for display (handles user creation with nested structure)
    const flattenObject = (obj, prefix = '') => {
        if (!obj || typeof obj !== 'object') return {};

        let result = {};

        for (const [key, value] of Object.entries(obj)) {
            // Skip internal/meta fields
            if (['id', 'created_at', 'updated_at'].includes(key)) continue;

            if (key === 'user' && typeof value === 'object' && value !== null) {
                // Flatten user object fields directly
                for (const [userKey, userValue] of Object.entries(value)) {
                    if (!['id', 'created_at', 'updated_at'].includes(userKey)) {
                        result[userKey] = userValue;
                    }
                }
            } else if (key === 'retreat_types' && Array.isArray(value)) {
                // Format retreat types as a readable list
                result['retreat_types'] = value.join(', ');
            } else if (Array.isArray(value)) {
                result[key] = value.join(', ');
            } else if (typeof value === 'object' && value !== null) {
                // Recursively flatten other objects
                const nested = flattenObject(value, key);
                result = { ...result, ...nested };
            } else {
                result[key] = value;
            }
        }

        return result;
    };

    // Flatten values for display
    const flatOldValues = flattenObject(oldValues);
    const flatNewValues = flattenObject(newValues);
    const flatCurrentValues = flattenObject(currentValues);

    // Get all unique keys from both objects
    const allKeys = [...new Set([
        ...Object.keys(flatOldValues || {}),
        ...Object.keys(flatNewValues || {}),
        ...Object.keys(flatCurrentValues || {})
    ])];

    // Check if a field has a conflict (current value differs from old value)
    const hasConflict = (key) => {
        if (!showConflicts || !flatCurrentValues) return false;
        const old = flatOldValues?.[key];
        const current = flatCurrentValues?.[key];
        return old !== undefined && current !== undefined && String(old) !== String(current);
    };

    // Check if a field has changed
    const hasChanged = (key) => {
        const old = flatOldValues?.[key];
        const newVal = flatNewValues?.[key];
        return String(old) !== String(newVal);
    };

    const formatValue = (value) => {
        if (value === null || value === undefined) return <em className="text-muted">-</em>;
        if (value === '') return <em className="text-muted">empty</em>;
        if (typeof value === 'boolean') return value ? 'Yes' : 'No';
        if (Array.isArray(value)) return value.join(', ');
        if (typeof value === 'object') return JSON.stringify(value);
        return String(value);
    };

    const renderFieldLabel = (key) => {
        // Convert snake_case to Title Case
        return key.split('_').map(word =>
            word.charAt(0).toUpperCase() + word.slice(1)
        ).join(' ');
    };

    if (actionType === 'INSERT') {
        return (
            <div className="diff-viewer">
                <div className="alert alert-info py-2 mb-3">
                    <i className="fa-solid fa-plus-circle me-2"></i>
                    <strong>New Record</strong>
                </div>
                <table className="table table-sm table-bordered mb-0">
                    <thead className="table-light">
                        <tr>
                            <th width="30%">Field</th>
                            <th>Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.entries(flatNewValues || {}).map(([key, value]) => (
                            <tr key={key}>
                                <td className="fw-medium">{renderFieldLabel(key)}</td>
                                <td className="bg-success bg-opacity-10 text-success">
                                    <i className="fa-solid fa-plus me-1"></i>
                                    {formatValue(value)}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }

    if (actionType === 'DELETE') {
        return (
            <div className="diff-viewer">
                <div className="alert alert-danger py-2 mb-3">
                    <i className="fa-solid fa-trash me-2"></i>
                    <strong>Record to be Deleted</strong>
                </div>
                <table className="table table-sm table-bordered mb-0">
                    <thead className="table-light">
                        <tr>
                            <th width="30%">Field</th>
                            <th>Current Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.entries(flatOldValues || {}).map(([key, value]) => (
                            <tr key={key}>
                                <td className="fw-medium">{renderFieldLabel(key)}</td>
                                <td className="bg-danger bg-opacity-10 text-danger text-decoration-line-through">
                                    {formatValue(value)}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }

    // UPDATE view - Show all fields, highlight changed ones
    // A field is considered changed only if both values exist and are different
    const getChangedFields = () => {
        const changed = [];
        
        for (const key of allKeys) {
            const oldVal = flatOldValues?.[key];
            const newVal = flatNewValues?.[key];
            
            // Skip if new value is null/undefined (field wasn't part of the update)
            if (newVal === null || newVal === undefined) continue;
            
            // Skip if values are the same
            if (String(oldVal) === String(newVal)) continue;
            
            changed.push(key);
        }
        
        return changed;
    };

    const changedFields = getChangedFields();
    
    // Get display value - for unchanged fields, show the old value (current data)
    const getDisplayValue = (key, type) => {
        const oldVal = flatOldValues?.[key];
        const newVal = flatNewValues?.[key];
        const isChanged = changedFields.includes(key);
        
        if (type === 'old') {
            return oldVal;
        } else {
            // For new value column: show new value if changed, otherwise show current value
            return isChanged ? newVal : oldVal;
        }
    };

    return (
        <div className="diff-viewer">
            {/* View Mode Toggle */}
            <div className="d-flex justify-content-between align-items-center mb-3">
                <span className="text-muted small">
                    <i className="fa-solid fa-edit me-1"></i>
                    {changedFields.length} field{changedFields.length !== 1 ? 's' : ''} changed
                </span>
                <div className="btn-group btn-group-sm">
                    <button
                        className={`btn ${viewMode === 'side-by-side' ? 'btn-primary' : 'btn-outline-primary'}`}
                        onClick={() => setViewMode('side-by-side')}
                    >
                        Side by Side
                    </button>
                    <button
                        className={`btn ${viewMode === 'inline' ? 'btn-primary' : 'btn-outline-primary'}`}
                        onClick={() => setViewMode('inline')}
                    >
                        Changes Only
                    </button>
                </div>
            </div>

            {/* Conflict Warning */}
            {showConflicts && changedFields.some(key => hasConflict(key)) && (
                <div className="alert alert-warning py-2 mb-3">
                    <i className="fa-solid fa-exclamation-triangle me-2"></i>
                    <strong>Conflict Detected:</strong> Some values have changed since this request was created.
                </div>
            )}

            {viewMode === 'side-by-side' ? (
                <table className="table table-sm table-bordered mb-0">
                    <thead className="table-light">
                        <tr>
                            <th width="25%">Field</th>
                            <th width="37.5%">Original Value</th>
                            <th width="37.5%">New Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allKeys.map(key => {
                            const conflict = hasConflict(key);
                            const isChanged = changedFields.includes(key);
                            const oldVal = flatOldValues?.[key];

                            return (
                                <tr key={key} className={conflict ? 'table-warning' : ''}>
                                    <td className="fw-medium">
                                        {renderFieldLabel(key)}
                                        {isChanged && (
                                            <span className="badge bg-primary ms-2" style={{ fontSize: '0.65rem' }}>Changed</span>
                                        )}
                                        {conflict && (
                                            <i className="fa-solid fa-exclamation-triangle text-warning ms-1" title="Conflict"></i>
                                        )}
                                    </td>
                                    <td className={isChanged ? 'bg-danger bg-opacity-10' : ''}>
                                        {formatValue(oldVal)}
                                        {conflict && (
                                            <div className="small text-warning mt-1">
                                                <i className="fa-solid fa-arrow-right me-1"></i>
                                                Current: {formatValue(flatCurrentValues?.[key])}
                                            </div>
                                        )}
                                    </td>
                                    <td className={isChanged ? 'bg-success bg-opacity-10' : ''}>
                                        {isChanged ? (
                                            formatValue(getDisplayValue(key, 'new'))
                                        ) : (
                                            <span className="text-muted">{formatValue(oldVal)}</span>
                                        )}
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            ) : (
                /* Inline view - only show changed fields */
                changedFields.length > 0 ? (
                    <div className="list-group">
                        {changedFields.map(key => {
                            const conflict = hasConflict(key);

                            return (
                                <div key={key} className={`list-group-item ${conflict ? 'list-group-item-warning' : ''}`}>
                                    <div className="d-flex justify-content-between align-items-start">
                                        <strong>{renderFieldLabel(key)}</strong>
                                        {conflict && (
                                            <span className="badge bg-warning text-dark">Conflict</span>
                                        )}
                                    </div>
                                    <div className="mt-2">
                                        <span className="text-danger text-decoration-line-through me-2">
                                            {formatValue(flatOldValues?.[key])}
                                        </span>
                                        <i className="fa-solid fa-arrow-right text-muted mx-2"></i>
                                        <span className="text-success fw-medium">
                                            {formatValue(flatNewValues?.[key])}
                                        </span>
                                    </div>
                                    {conflict && (
                                        <div className="small text-warning mt-1">
                                            <i className="fa-solid fa-info-circle me-1"></i>
                                            Current value in database: {formatValue(flatCurrentValues?.[key])}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    <div className="alert alert-secondary py-2 mb-0">
                        <i className="fa-solid fa-info-circle me-2"></i>
                        No field changes detected.
                    </div>
                )
            )}
        </div>
    );
}
