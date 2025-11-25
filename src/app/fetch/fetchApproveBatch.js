import axios from "axios";

/**
 * Approve a pending batch (Admin only)
 * @param {Object} params
 * @param {number} params.batch_id - The batch ID to approve
 * @returns {Promise<Object>} - Response with approval result
 */
export default async function fetchApproveBatch({ batch_id }) {
    try {
        const res = await axios.post('/api/changes/approve', { batch_id });
        return res.data;
    } catch (err) {
        throw err;
    }
}
