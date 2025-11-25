import axios from "axios";

/**
 * Fetch pending batches for admin approval (Admin only)
 * @param {Object} params
 * @param {number} params.page - Page number
 * @param {number} params.limit - Items per page
 * @param {string} params.status - Filter by status: 'Pending', 'Approved', 'Rejected', 'all'
 * @returns {Promise<Object>} - Response with batches data
 */
export default async function fetchPendingBatches({ page = 1, limit = 10, status = 'Pending' } = {}) {
    try {
        const res = await axios.get(`/api/changes/pending?page=${page}&limit=${limit}&status=${status}`);
        return res.data;
    } catch (err) {
        throw err;
    }
}
