"use client";

/**
 * BatchStatusBadge - Displays a colored badge based on batch status
 * @param {Object} props
 * @param {string} props.status - Batch status: 'Draft', 'Pending', 'Approved', 'Rejected'
 * @param {string} props.size - Badge size: 'sm', 'md', 'lg'
 */
export default function BatchStatusBadge({ status, size = "sm" }) {
    const getStatusConfig = () => {
        switch (status) {
            case 'Draft':
                return {
                    bgClass: 'bg-secondary',
                    icon: 'fa-solid fa-file-pen',
                    label: 'Draft'
                };
            case 'Pending':
                return {
                    bgClass: 'bg-warning text-dark',
                    icon: 'fa-solid fa-clock',
                    label: 'Pending'
                };
            case 'Approved':
                return {
                    bgClass: 'bg-success',
                    icon: 'fa-solid fa-check-circle',
                    label: 'Approved'
                };
            case 'Rejected':
                return {
                    bgClass: 'bg-danger',
                    icon: 'fa-solid fa-times-circle',
                    label: 'Rejected'
                };
            default:
                return {
                    bgClass: 'bg-secondary',
                    icon: 'fa-solid fa-question-circle',
                    label: status || 'Unknown'
                };
        }
    };

    const getSizeClass = () => {
        switch (size) {
            case 'lg':
                return 'fs-6 px-3 py-2';
            case 'md':
                return 'small px-2 py-1';
            case 'sm':
            default:
                return 'small px-2 py-1';
        }
    };

    const config = getStatusConfig();

    return (
        <span className={`badge ${config.bgClass} ${getSizeClass()} d-inline-flex align-items-center gap-1`}>
            <i className={config.icon}></i>
            <span>{config.label}</span>
        </span>
    );
}
