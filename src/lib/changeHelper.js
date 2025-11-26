import { pool } from "./db";
import { v4 as uuidv4 } from 'uuid';

/**
 * Role-based save helper
 * 
 * For ADMINISTRATOR: Saves directly to the database
 * For STAFF: Creates a pending change record for approval
 * 
 * @param {Object} options
 * @param {string} options.role - User role (ADMINISTRATOR or STAFF)
 * @param {string|number} options.userId - User ID from JWT payload
 * @param {string} options.tableName - Target table name
 * @param {string} options.actionType - INSERT, UPDATE, or DELETE
 * @param {number|null} options.recordId - Record ID (null for INSERT)
 * @param {Object|null} options.oldValues - Current values before change (null for INSERT)
 * @param {Object|null} options.newValues - New values to apply (null for DELETE)
 * @param {string} options.description - Description of the change (for batch)
 * 
 * @returns {Object} - { success, isDirectSave, data, message }
 */
export async function roleBasedSave({
    role,
    userId,
    tableName,
    actionType,
    recordId = null,
    oldValues = null,
    newValues = null,
    description = null
}) {
    // Validate inputs
    const validActions = ['INSERT', 'UPDATE', 'DELETE'];
    if (!validActions.includes(actionType)) {
        return {
            success: false,
            message: `Invalid action_type. Must be one of: ${validActions.join(', ')}`
        };
    }

    // ADMINISTRATOR: Direct save to database
    if (role === 'ADMINISTRATOR') {
        try {
            let result;

            if (actionType === 'INSERT') {
                const columns = Object.keys(newValues);
                const placeholders = columns.map(() => '?').join(', ');
                const values = Object.values(newValues);

                const [insertResult] = await pool.execute(
                    `INSERT INTO ${tableName} (${columns.join(', ')}) VALUES (${placeholders})`,
                    values
                );
                result = { insertId: insertResult.insertId };

            } else if (actionType === 'UPDATE') {
                const setClause = Object.keys(newValues).map(key => `${key} = ?`).join(', ');
                const values = [...Object.values(newValues), recordId];

                await pool.execute(
                    `UPDATE ${tableName} SET ${setClause} WHERE id = ?`,
                    values
                );
                result = { updatedId: recordId };

            } else if (actionType === 'DELETE') {
                await pool.execute(
                    `DELETE FROM ${tableName} WHERE id = ?`,
                    [recordId]
                );
                result = { deletedId: recordId };
            }

            return {
                success: true,
                isDirectSave: true,
                data: result,
                message: `${actionType} completed successfully`
            };

        } catch (error) {
            return {
                success: false,
                message: `Database error: ${error.message}`
            };
        }
    }

    // STAFF: Create pending change for approval
    if (role === 'STAFF') {
        try {
            // Check if staff has an existing draft batch
            const [existingDraft] = await pool.execute(
                `SELECT id, batch_uuid FROM change_batches 
                 WHERE submitted_by = ? AND status = 'Draft' 
                 ORDER BY created_at DESC LIMIT 1`,
                [userId]
            );

            let batchId, batchUuid;

            if (existingDraft.length > 0) {
                // Use existing draft batch
                batchId = existingDraft[0].id;
                batchUuid = existingDraft[0].batch_uuid;

                // Update description if provided
                if (description) {
                    await pool.execute(
                        `UPDATE change_batches SET description = ? WHERE id = ?`,
                        [description, batchId]
                    );
                }
            } else {
                // Create new draft batch
                batchUuid = uuidv4();
                const [newBatch] = await pool.execute(
                    `INSERT INTO change_batches (batch_uuid, submitted_by, status, description) 
                     VALUES (?, ?, 'Draft', ?)`,
                    [batchUuid, userId, description || 'Pending changes']
                );
                batchId = newBatch.insertId;
            }

            // Create pending change record
            const [pendingChange] = await pool.execute(
                `INSERT INTO pending_changes (batch_id, table_name, record_id, action_type, old_values, new_values) 
                 VALUES (?, ?, ?, ?, ?, ?)`,
                [
                    batchId,
                    tableName,
                    recordId,
                    actionType,
                    oldValues ? JSON.stringify(oldValues) : null,
                    newValues ? JSON.stringify(newValues) : null
                ]
            );

            return {
                success: true,
                isDirectSave: false,
                data: {
                    change_id: pendingChange.insertId,
                    batch_id: batchId,
                    batch_uuid: batchUuid,
                    status: 'Draft'
                },
                message: 'Change added to pending approval batch'
            };

        } catch (error) {
            return {
                success: false,
                message: `Database error: ${error.message}`
            };
        }
    }

    // Unknown role
    return {
        success: false,
        message: 'Unknown user role'
    };
}

/**
 * Get current record values for comparison
 * Useful for UPDATE/DELETE operations where you need old_values
 * 
 * @param {string} tableName - Table name
 * @param {number} recordId - Record ID
 * @returns {Object|null} - Current record values or null if not found
 */
export async function getCurrentRecordValues(tableName, recordId) {
    try {
        const [rows] = await pool.execute(
            `SELECT * FROM ${tableName} WHERE id = ?`,
            [recordId]
        );
        return rows.length > 0 ? rows[0] : null;
    } catch (error) {
        console.error('Error fetching current record:', error);
        return null;
    }
}
