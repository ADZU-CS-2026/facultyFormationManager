import axios from "axios";

/**
 * Update a record with role-based handling
 * ADMINISTRATOR: Updates directly
 * STAFF: Creates pending change for approval
 * 
 * @param {Object} recordData - The record data to update (must include id)
 * @returns {Promise<Object>} - Response with update result
 */
export async function fetchUpdateRecord(recordData) {
    try {
        const res = await axios.patch('/api/records/update', recordData);
        return res.data;
    } catch (err) {
        throw err;
    }
}

/**
 * Delete a record with role-based handling
 * ADMINISTRATOR: Deletes directly
 * STAFF: Creates pending change for approval
 * 
 * @param {Object} params - Must include id
 * @returns {Promise<Object>} - Response with delete result
 */
export async function fetchDeleteRecord({ id }) {
    try {
        const res = await axios.delete('/api/records/update', { data: { id } });
        return res.data;
    } catch (err) {
        throw err;
    }
}
