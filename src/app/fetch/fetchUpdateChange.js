import axios from "axios";

/**
 * Update a pending change (Staff only, Draft batches only)
 * @param {Object} params
 * @param {number} params.change_id - The change ID to update
 * @param {Object} params.new_values - Updated new values
 * @returns {Promise<Object>} - Response with update result
 */
export async function fetchUpdateChange({ change_id, new_values }) {
    try {
        const res = await axios.patch('/api/changes/update', { change_id, new_values });
        return res.data;
    } catch (err) {
        throw err;
    }
}

/**
 * Delete a pending change (Staff only, Draft batches only)
 * @param {Object} params
 * @param {number} params.change_id - The change ID to delete
 * @returns {Promise<Object>} - Response with delete result
 */
export async function fetchDeleteChange({ change_id }) {
    try {
        const res = await axios.delete('/api/changes/update', { data: { change_id } });
        return res.data;
    } catch (err) {
        throw err;
    }
}
