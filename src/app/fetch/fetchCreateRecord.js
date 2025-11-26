import axios from "axios";

/**
 * Create a new record with role-based handling
 * ADMINISTRATOR: Creates directly
 * STAFF: Creates pending change for approval
 * 
 * @param {Object} recordData - The record data to create
 * @returns {Promise<Object>} - Response with creation result
 */
export default async function fetchCreateRecord(recordData) {
    try {
        const res = await axios.post('/api/records/create', recordData);
        return res.data;
    } catch (err) {
        throw err;
    }
}
