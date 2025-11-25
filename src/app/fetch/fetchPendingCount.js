import axios from "axios";

/**
 * Fetch count of pending batches (Admin only)
 * For notification badge
 * @returns {Promise<Object>} - Response with pending_count
 */
export default async function fetchPendingCount() {
    try {
        const res = await axios.get('/api/changes/count');
        return res.data;
    } catch (err) {
        throw err;
    }
}
