CREATE DATABASE IF NOT EXISTS adzuformationsystem;

USE adzuformationsystem;
-- Users Table (Faculty/Staff)
CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    last_name VARCHAR(100) NOT NULL,
    first_name VARCHAR(100) NOT NULL,
    middle_initial VARCHAR(10),
    department ENUM('Admin', 'FFP', 'CON', 'CSITE', 'SED', 'SLA', 'SMA', 'CS', 'PPO') NOT NULL,
    position VARCHAR(100),  -- For Admin/CS
    office VARCHAR(100),    -- For Admin/CS
    status VARCHAR(50),     -- For PPO (Aloha, regular, etc)
    work_status ENUM('Active', 'Inactive') DEFAULT 'Active',
    INDEX idx_department (department),
    INDEX idx_work_status (work_status),
    INDEX idx_name (last_name, first_name) 
)

-- Retreat Records Table
CREATE TABLE retreat_records (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    retreat_type VARCHAR(50) NOT NULL,  -- 'DGY1', 'DGY2', 'DGY3', 'DGY4.1_IMC', 'DGY4.2_3D_Retreat', 'DGY5.1_IPC', 'DGY5.2_3D_Retreat', 'SD', '3D_Retreat'
    school_year VARCHAR(20) NOT NULL,   -- '2023-2024', '2024-2025', etc.
    start_date DATE,
    completion_date DATE, 
    attendance_status ENUM('Present', 'Absent'),
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    INDEX idx_user_year (user_id, school_year),
    INDEX idx_retreat_type (retreat_type),
    INDEX idx_completion_date (completion_date)
)


-- Certificates Table
CREATE TABLE certificates (
    id INT PRIMARY KEY AUTO_INCREMENT,
    retreat_record_id INT NOT NULL,
    certificate_number VARCHAR(50) UNIQUE NOT NULL,  -- Format: DGY2-2024-001
    issued_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    issued_by INT,  -- Admin user who issued it
    status ENUM('Active', 'Reprinted', 'Voided') DEFAULT 'Active',
    print_count INT DEFAULT 1,
    void_reason TEXT,
    template_version VARCHAR(20) DEFAULT 'v1.0',  -- Track certificate design version
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (retreat_record_id) REFERENCES retreat_records(id) ON DELETE CASCADE,
    FOREIGN KEY (issued_by) REFERENCES users(id) ON DELETE SET NULL,
    INDEX idx_retreat_record (retreat_record_id),
    INDEX idx_certificate_number (certificate_number),
    INDEX idx_status (status)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Admin Account Table (for system login)
CREATE TABLE adminaccount(
    id INT NOT NULL PRIMARY KEY,
    role VARCHAR(50) NOT NULL,
    password VARCHAR(255) NOT NULL
    
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


CREATE TABLE queries (
    query VARCHAR(255) NOT NULL,
    id INT PRIMARY KEY AUTO_INCREMENT,
    FOREIGN KEY (id) REFERENCES adminaccount(id)
)


-- Change Batches Table (groups changes for approval workflow)
CREATE TABLE change_batches (
    id INT PRIMARY KEY AUTO_INCREMENT,
    batch_uuid VARCHAR(36) UNIQUE NOT NULL,  -- UUID for external reference
    submitted_by INT NOT NULL,  -- Staff account ID who created the batch
    status ENUM('Draft', 'Pending', 'Approved', 'Rejected') DEFAULT 'Draft',
    description VARCHAR(255),  -- Optional description of the batch
    submitted_at TIMESTAMP NULL,  -- When batch was submitted for approval
    reviewed_by INT NULL,  -- Admin who reviewed
    reviewed_at TIMESTAMP NULL,  -- When reviewed
    rejection_reason TEXT NULL,  -- Reason if rejected
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (submitted_by) REFERENCES adminaccount(id) ON DELETE CASCADE,
    FOREIGN KEY (reviewed_by) REFERENCES adminaccount(id) ON DELETE SET NULL,
    INDEX idx_status (status),
    INDEX idx_submitted_by (submitted_by),
    INDEX idx_submitted_at (submitted_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Pending Changes Table (individual changes within a batch)
CREATE TABLE pending_changes (
    id INT PRIMARY KEY AUTO_INCREMENT,
    batch_id INT NOT NULL,  -- Links to change_batches
    table_name VARCHAR(50) NOT NULL,  -- 'users', 'retreat_records', etc.
    record_id INT NULL,  -- ID of existing record (NULL for INSERT operations)
    action_type ENUM('INSERT', 'UPDATE', 'DELETE') NOT NULL,
    old_values JSON NULL,  -- Snapshot before change (NULL for INSERT)
    new_values JSON NOT NULL,  -- The proposed new values
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (batch_id) REFERENCES change_batches(id) ON DELETE CASCADE,
    INDEX idx_batch_id (batch_id),
    INDEX idx_table_name (table_name),
    INDEX idx_record_id (record_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE forgotpassword (
    email VARCHAR(255) NOT NULL UNIQUE,
    login_code VARCHAR(10),
    login_expire DATETIME
)


INSERT INTO adminaccount (id, role, password)
VALUES (230692, 'ADMINISTRATOR', 'adzuformation');