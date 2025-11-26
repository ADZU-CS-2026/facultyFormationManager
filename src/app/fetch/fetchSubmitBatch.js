import axios from "axios";

/**
 * Submit a draft batch for admin approval
 * @param {Object} params
 * @param {number} params.batch_id - The batch ID to submit
 * @returns {Promise<Object>} - Response with submission result
 */
export default async function fetchSubmitBatch({ batch_id }) {
    try {
        const res = await axios.post('/api/changes/submit', { batch_id });
        return res.data;
    } catch (err) {
        throw err;
    }
}
