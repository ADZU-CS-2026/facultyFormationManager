import axios from "axios";

/**
 * Update a retreat record with role-based handling
 * ADMINISTRATOR: Updates directly
 * STAFF: Creates pending change for approval
 * 
 * @param {Object} retreatData - The retreat data to update (must include id)
 * @returns {Promise<Object>} - Response with update result
 */
export async function fetchUpdateRetreat(retreatData) {
    try {
        const res = await axios.patch('/api/records/retreat', retreatData);
        return res.data;
    } catch (err) {
        throw err;
    }
}
