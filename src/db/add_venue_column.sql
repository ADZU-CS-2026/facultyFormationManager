-- Add dedicated venue field for retreat records
ALTER TABLE retreat_records
ADD COLUMN venue VARCHAR(255) NULL AFTER attendance_status;