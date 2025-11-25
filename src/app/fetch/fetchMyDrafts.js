import axios from "axios";

/**
 * Fetch user's draft/pending/approved/rejected batches
 * @param {string} status - Filter by status: 'Draft', 'Pending', 'Approved', 'Rejected', 'all'
 * @returns {Promise<Object>} - Response with batches data
 */
export default async function fetchMyDrafts(status = 'all') {
    try {
        const res = await axios.get(`/api/changes/my-drafts?status=${status}`);
        return res.data;
    } catch (err) {
        throw err;
    }
}
