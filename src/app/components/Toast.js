"use client";

import { useState, useEffect, createContext, useContext, useCallback } from "react";

// Create context for toast notifications
const ToastContext = createContext(null);

/**
 * Toast Provider - Wrap your app with this to enable toast notifications
 */
export function ToastProvider({ children }) {
    const [toasts, setToasts] = useState([]);

    const removeToast = useCallback((id) => {
        setToasts(prev => prev.filter(toast => toast.id !== id));
    }, []);

    const addToast = useCallback((message, type = 'info', duration = 5000) => {
        const id = Date.now() + Math.random();
        setToasts(prev => [...prev, { id, message, type, duration }]);

        // Auto-remove after duration
        if (duration > 0) {
            setTimeout(() => {
                removeToast(id);
            }, duration);
        }

        return id;
    }, [removeToast]);

    const success = useCallback((message, duration) => addToast(message, 'success', duration), [addToast]);
    const error = useCallback((message, duration) => addToast(message, 'danger', duration), [addToast]);
    const warning = useCallback((message, duration) => addToast(message, 'warning', duration), [addToast]);
    const info = useCallback((message, duration) => addToast(message, 'info', duration), [addToast]);
    const pending = useCallback((message, duration) => addToast(message, 'pending', duration), [addToast]);

    return (
        <ToastContext.Provider value={{ addToast, removeToast, success, error, warning, info, pending }}>
            {children}
            <ToastContainer toasts={toasts} removeToast={removeToast} />
        </ToastContext.Provider>
    );
}

/**
 * Hook to use toast notifications
 */
export function useToast() {
    const context = useContext(ToastContext);
    if (!context) {
        throw new Error('useToast must be used within a ToastProvider');
    }
    return context;
}

/**
 * Toast Container - Renders all active toasts
 */
function ToastContainer({ toasts, removeToast }) {
    if (toasts.length === 0) return null;

    return (
        <div
            className="toast-container position-fixed bottom-0 end-0 p-3"
            style={{ zIndex: 99999 }}
        >
            {toasts.map(toast => (
                <Toast key={toast.id} toast={toast} onClose={() => removeToast(toast.id)} />
            ))}
        </div>
    );
}

/**
 * Individual Toast Component
 */
function Toast({ toast, onClose }) {
    const [show, setShow] = useState(false);

    useEffect(() => {
        // Trigger animation
        setTimeout(() => setShow(true), 10);
    }, []);

    const handleClose = () => {
        setShow(false);
        setTimeout(onClose, 150);
    };

    const getConfig = () => {
        switch (toast.type) {
            case 'success':
                return {
                    bgClass: 'bg-success',
                    icon: 'fa-solid fa-check-circle',
                    title: 'Success'
                };
            case 'danger':
                return {
                    bgClass: 'bg-danger',
                    icon: 'fa-solid fa-times-circle',
                    title: 'Error'
                };
            case 'warning':
                return {
                    bgClass: 'bg-warning',
                    icon: 'fa-solid fa-exclamation-triangle',
                    title: 'Warning'
                };
            case 'pending':
                return {
                    bgClass: 'bg-info',
                    icon: 'fa-solid fa-clock',
                    title: 'Pending Approval'
                };
            case 'info':
            default:
                return {
                    bgClass: 'bg-primary',
                    icon: 'fa-solid fa-info-circle',
                    title: 'Info'
                };
        }
    };

    const config = getConfig();

    return (
        <div
            className={`toast ${show ? 'show' : ''} align-items-center text-white border-0 mb-2`}
            style={{
                opacity: show ? 1 : 0,
                transform: show ? 'translateX(0)' : 'translateX(100%)',
                transition: 'all 0.15s ease-out',
                minWidth: '300px'
            }}
            role="alert"
        >
            <div className={`toast-header ${config.bgClass} text-white`}>
                <i className={`${config.icon} me-2`}></i>
                <strong className="me-auto">{config.title}</strong>
                <button
                    type="button"
                    className="btn-close btn-close-white"
                    onClick={handleClose}
                ></button>
            </div>
            <div className="toast-body bg-white text-dark">
                {toast.message}
            </div>
        </div>
    );
}

export default Toast;
