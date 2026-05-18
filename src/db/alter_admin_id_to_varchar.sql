-- Migrate admin/staff account IDs from INT to VARCHAR so alphanumeric IDs are supported.
-- Run this once on your database before creating alphanumeric IDs.

START TRANSACTION;

ALTER TABLE change_batches DROP FOREIGN KEY change_batches_ibfk_1;
ALTER TABLE change_batches DROP FOREIGN KEY change_batches_ibfk_2;
ALTER TABLE queries DROP FOREIGN KEY queries_ibfk_1;

ALTER TABLE adminaccount MODIFY COLUMN id VARCHAR(50) NOT NULL;
ALTER TABLE change_batches MODIFY COLUMN submitted_by VARCHAR(50) NOT NULL;
ALTER TABLE change_batches MODIFY COLUMN reviewed_by VARCHAR(50) NULL;
ALTER TABLE queries MODIFY COLUMN id VARCHAR(50) NOT NULL;

ALTER TABLE change_batches
  ADD CONSTRAINT change_batches_ibfk_1 FOREIGN KEY (submitted_by) REFERENCES adminaccount(id) ON DELETE CASCADE,
  ADD CONSTRAINT change_batches_ibfk_2 FOREIGN KEY (reviewed_by) REFERENCES adminaccount(id) ON DELETE SET NULL;

ALTER TABLE queries
  ADD CONSTRAINT queries_ibfk_1 FOREIGN KEY (id) REFERENCES adminaccount(id);

COMMIT;
