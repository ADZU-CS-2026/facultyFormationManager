import axios from "axios";

/**
 * Reject a pending batch (Admin only)
 * @param {Object} params
 * @param {number} params.batch_id - The batch ID to reject
 * @returns {Promise<Object>} - Response with rejection result
 */
export default async function fetchRejectBatch({ batch_id }) {
    try {
        const res = await axios.post('/api/changes/reject', { batch_id });
        return res.data;
    } catch (err) {
        throw err;
    }
}
