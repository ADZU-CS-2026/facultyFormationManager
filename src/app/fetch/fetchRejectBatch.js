import axios from "axios";

/**
 * Reject a pending batch with reason (Admin only)
 * @param {Object} params
 * @param {number} params.batch_id - The batch ID to reject
 * @param {string} params.rejection_reason - Reason for rejection
 * @returns {Promise<Object>} - Response with rejection result
 */
export default async function fetchRejectBatch({ batch_id, rejection_reason }) {
    try {
        const res = await axios.post('/api/changes/reject', { batch_id, rejection_reason });
        return res.data;
    } catch (err) {
        throw err;
    }
}
