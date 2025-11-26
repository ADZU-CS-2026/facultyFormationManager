import axios from "axios";

/**
 * Fetch batch details with diff comparison
 * @param {number} batchId - The batch ID to fetch
 * @returns {Promise<Object>} - Response with batch details and changes
 */
export default async function fetchBatchDetails(batchId) {
    try {
        const res = await axios.get(`/api/changes/batch/${batchId}`);
        return res.data;
    } catch (err) {
        throw err;
    }
}
