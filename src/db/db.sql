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