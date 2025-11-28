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

/**
 * Create a new retreat record with role-based handling
 * ADMINISTRATOR: Creates directly
 * STAFF: Creates pending change for approval
 * 
 * @param {Object} retreatData - The retreat data to create (must include user_id, retreat_type)
 * @returns {Promise<Object>} - Response with create result
 */
export async function fetchCreateRetreat(retreatData) {
    try {
        const res = await axios.post('/api/records/retreat', retreatData);
        return res.data;
    } catch (err) {
        throw err;
    }
}

/**
 * Delete a retreat record with role-based handling
 * ADMINISTRATOR: Deletes directly
 * STAFF: Creates pending change for approval
 * 
 * @param {number} id - The retreat record ID to delete
 * @returns {Promise<Object>} - Response with delete result
 */
export async function fetchDeleteRetreat(id) {
    try {
        const res = await axios.delete('/api/records/retreat', { data: { id } });
        return res.data;
    } catch (err) {
        throw err;
    }
}
