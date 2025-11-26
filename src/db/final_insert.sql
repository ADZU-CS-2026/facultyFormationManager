-- Generated SQL for Data Migration
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (1001, 'Alfaro', 'Honey Rod', 'T', 'Admin', 'Unit Director', 'Formation Office', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (1002, 'Balatbat', 'Conrado', 'Z', 'Admin', 'Director', 'Alumni and Career Excellence Office', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (1002, 'DGY2', '2024-2025', '2024-03-14', '2024-03-15', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (1003, 'Bascar', 'Jane', 'C', 'Admin', 'Director', 'Human Resource Administration and Development Office', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (1003, 'DGY2', '2024-2025', '2025-02-06', '2025-02-07', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (1003, '3D_Retreat', '2023-2024', '2024-05-28', '2024-05-30', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (1003, '3D_Retreat', '2024-2025', '2025-05-26', '2025-05-30', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (1004, 'Bazan', 'Jaybee', 'D', 'Admin', 'Dean', 'School of Medicine', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (1005, 'Calingacion', 'Lynnie', 'M', 'Admin', 'Director', 'Fr Jose T Bacatan SJ Library', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (1005, '3D_Retreat', '2023-2024', '2024-05-28', '2024-05-30', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (1005, '3D_Retreat', '2024-2025', '2025-05-26', '2025-05-30', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (1006, 'Calunod', 'Christine', 'V', 'Admin', 'Director', 'Purchasing and Custodial Office', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (1006, '3D_Retreat', '2023-2024', '2023-07-05', '2023-07-07', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (1006, '3D_Retreat', '2024-2025', '2025-05-26', '2025-05-30', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (1007, 'Chavez', 'Evelyn', 'G', 'Admin', 'Director', 'Quality Assurance and Strategic Management Office', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (1007, '3D_Retreat', '2023-2024', '2024-05-28', '2024-05-30', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (1007, '3D_Retreat', '2024-2025', '2025-05-26', '2025-05-30', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (1008, 'Chua', 'Ralph Jorline', 'M', 'Admin', 'Dircetor for Analytics', 'Advacement Office', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (1009, 'Cresmundo', 'Armee Jay', 'L', 'Admin', 'Executive Assistant', 'President''s Office', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (1009, 'DGY2', '2024-2025', '2025-02-06', '2025-02-07', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (1009, '3D_Retreat', '2024-2025', '2025-05-26', '2025-05-30', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (1010, 'Deirio', 'Herbert', 'V', 'Admin', 'Quality Assurance Officer', 'Quality Assurance and Strategic Management Office', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (1010, 'DGY2', '2024-2025', '2025-02-06', '2025-02-07', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (1010, '3D_Retreat', '2023-2024', '2024-05-28', '2024-05-30', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (1010, '3D_Retreat', '2024-2025', '2025-05-26', '2025-05-30', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (1011, 'Dela Cruz', 'Gianne Kathleen', 'S', 'Admin', 'Coordinator', 'University Athletics Office', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (1011, 'DGY2', '2024-2025', '2025-04-11', '2025-04-12', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (1011, '3D_Retreat', '2024-2025', '2025-05-26', '2025-05-30', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (1012, 'Delgado', 'Ariel', 'D', 'Admin', 'Assistant to the Vice President', 'Vice President for Administration Office', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (1012, 'DGY2', '2024-2025', '2025-02-20', '2025-02-21', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (1012, '3D_Retreat', '2024-2025', '2025-05-26', '2025-05-30', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (1013, 'Emmanuel', 'Marjorie', 'S', 'Admin', 'Assistant to the Vice President', 'Vice President for Higher Education Office', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (1013, 'DGY2', '2024-2025', '2025-02-06', '2025-02-07', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (1013, '3D_Retreat', '2023-2024', '2024-05-28', '2024-05-30', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (1013, '3D_Retreat', '2024-2025', '2025-05-26', '2025-05-30', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (1014, 'Epino', 'Emir', 'V', 'Admin', 'Director', 'Ateneo Center for Environment and Sustainability', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (1015, 'Eribal', 'Rogin Christ', 'J', 'Admin', 'Director', 'Ateneo Learning and Teaching Excellence Center', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (1015, '3D_Retreat', '2023-2024', '2024-05-28', '2024-05-30', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (1016, 'Gallego', 'Marven', 'R', 'Admin', 'University Security Chief', 'University Security Office', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (1016, '3D_Retreat', '2023-2024', '2023-08-18', '2023-08-20', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (1017, 'Gonzales', 'Aurora', 'C', 'Admin', 'Unit Director', 'Social Development Office', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (1018, 'Ibañez', 'Charissa Mae', 'R', 'Admin', 'Director', 'Social Awareness and Community Service Involvement', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (1018, 'DGY2', '2024-2025', '2025-02-06', '2025-02-07', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (1018, '3D_Retreat', '2023-2024', NULL, NULL, 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (1019, 'Idris', 'Rommel', 'A', 'Admin', 'Director', 'Physical Plant Office', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (1020, 'Jalani', 'Jeffrey', 'O', 'Admin', 'Director', 'Vice-President for Basic Education', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (1021, 'Jimera', 'Kevin Roy', 'P', 'Admin', 'Director', 'Campus Ministry Office', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (1021, 'DGY2', '2024-2025', '2025-02-20', '2025-02-21', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (1021, '3D_Retreat', '2023-2024', '2024-01-11', '2024-01-13', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (1021, '3D_Retreat', '2024-2025', '2025-05-27', '2025-05-31', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (1023, 'Kanindot', 'Renee Vieve', 'V', 'Admin', 'Director', 'Office of Mission Integration Leadership Development', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (1023, '3D_Retreat', '2023-2024', '2024-05-28', '2024-05-30', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (1024, 'Ledesma', 'Arlene', NULL, 'Admin', 'Director', 'University Research Office', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (1025, 'Lladones', 'Michael', 'L', 'Admin', 'Coordinator', 'University Infirmary', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (1026, 'Manuel', 'Melanie', 'M', 'Admin', 'Treasurer', 'Finance Office', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (1027, 'Manulong', 'Tricia Mae', 'D', 'Admin', 'Manager', 'Lantaka Campus', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (1027, '3D_Retreat', '2023-2024', '2023-07-05', '2023-07-07', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (1028, 'Maravilles', 'May Lilian', 'T', 'Admin', 'Manager', 'Innovation and Technology Support Office', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (1028, 'DGY2', '2024-2025', '2023-08-18', '2023-08-20', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (1029, 'Montemor', 'Ma. Corazon', 'J', 'Admin', 'Dean', 'Rosendo U Castillo Jr College of Law', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (1030, 'Omboy', 'Welma', 'L', 'Admin', 'Dircetor', 'Center for Community Extension Services', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (1030, 'DGY2', '2024-2025', '2023-02-03', '2023-02-04', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (1030, 'DGY3', '2024-2025', '2025-02-13', '2025-02-14', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (1031, 'Panaguiton', 'Randy', 'V', 'Admin', 'Director', 'College Information and Technology Services', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (1031, 'DGY2', '2024-2025', '2025-03-14', '2025-03-15', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (1031, '3D_Retreat', '2024-2025', '2025-05-26', '2025-05-30', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (1032, 'Panaguiton', 'Leah', 'M', 'Admin', 'Director', 'University Communications Office', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (1032, '3D_Retreat', '2024-2025', '2025-05-26', '2025-05-30', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (1033, 'Pantaleta', 'Floraime', 'O', 'Admin', 'Excecutive Director', 'Ateneo Zamboanga - Mindanao Institute', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (1033, 'DGY2', '2024-2025', '2025-02-06', '2025-02-07', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (1033, '3D_Retreat', '2023-2024', '2024-05-28', '2024-05-30', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (1033, '3D_Retreat', '2024-2025', '2025-05-26', '2025-05-30', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (1034, 'Partosa', 'Jessica', 'D', 'Admin', 'Registrar', 'College Registrar''s Office', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (1034, 'DGY2', '2024-2025', '2025-02-06', '2025-02-07', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (1034, '3D_Retreat', '2023-2024', '2023-10-26', '2023-10-28', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (1034, '3D_Retreat', '2024-2025', '2025-07-16', '2025-07-18', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (1035, 'Rabanjante', 'Romeo', 'A', 'Admin', 'Director', 'Center for Blended and Digital Learning', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (1036, 'Ramos', 'Jordache', NULL, 'Admin', 'Associate Dean', 'Rosendo U Castillo Jr College of Law', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (1037, 'Reyes', 'Jennifer', 'G', 'Admin', 'Director', 'College Admissions and Aid Office', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (1038, 'Rodriguez', 'Mario', 'S', 'Admin', 'Director', 'Ateneo Center for Entrepreneurship, Innovation, and Development', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (1039, 'Tiong', 'Sheila', 'L', 'Admin', 'Director', 'College Guidance and Counseling Office', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (1039, 'DGY2', '2024-2025', '2025-02-13', '2025-02-14', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (1039, '3D_Retreat', '2024-2025', '2025-05-26', '2025-05-30', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (1040, 'Tugade', 'Judith Joy', 'V', 'Admin', 'Director', 'Office of Student Affairs', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (1040, '3D_Retreat', '2023-2024', '2023-08-18', '2023-08-20', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (1040, '3D_Retreat', '2024-2025', '2025-06-12', '2025-06-14', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (1041, 'Wee', 'Chaldeanne', 'D', 'Admin', 'Psychologist', 'Center for Testing & Measurement', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (1041, 'DGY2', '2024-2025', '2025-02-06', '2025-02-07', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (1041, '3D_Retreat', '2024-2025', '2025-05-26', '2025-05-30', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (4001, 'Torralba', 'Michele Faye', 'R', 'FFP', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (4001, '3D_Retreat', '2024-2025', '2025-05-28', '2025-05-30', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (4002, 'Sinsuan', 'Antoniette', 'G', 'FFP', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (4002, '3D_Retreat', '2024-2025', '2025-05-28', '2025-05-30', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (4003, 'Garcia', 'Dexter', 'M', 'FFP', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (4003, '3D_Retreat', '2024-2025', '2025-05-28', '2025-05-30', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (4004, 'Baguio', 'Joey James', NULL, 'FFP', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (4004, '3D_Retreat', '2024-2025', '2025-05-28', '2025-05-30', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (4005, 'Saavedra', 'Christopher', 'E', 'FFP', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (4005, '3D_Retreat', '2024-2025', '2025-05-28', '2025-05-30', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (4006, 'Marzo', 'Felicidad', 'D', 'FFP', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (3001, 'Abellon', 'Rowina', 'R', 'CON', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (3002, 'Aboy', 'Ma. Fe', 'R', 'CON', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (3003, 'Abu', 'Edwin', 'D', 'CON', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (3004, 'Abulencia', 'Karen', NULL, 'CON', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (3004, '3D_Retreat', '2024-2025', '2024-07-10', '2024-07-11', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (3005, 'Abutazil', 'Clarysse Bea', 'S', 'CON', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (3006, 'Abutazil', 'Michael', 'U', 'CON', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (3007, 'Agriam', 'Donnaveile', 'B', 'CON', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (3008, 'Alforte', 'Josephine Judith', 'P', 'CON', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (3008, '3D_Retreat', '2024-2025', '2025-06-10', '2025-06-11', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (3009, 'Alvarez', 'Franchette Angelique', 'M', 'CON', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (3010, 'Apolinario, II', 'Ricardo', 'J', 'CON', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (3011, 'Arnuco', 'Grant Wynn', 'B', 'CON', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (3012, 'Astillero', 'Eric', 'L', 'CON', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (3013, 'Aud', 'Jacqueline', 'S', 'CON', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (3014, 'Bahjin', 'Loise Lin-Marie', 'S', 'CON', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (3015, 'Balubal', 'Christine Joy', 'L', 'CON', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (3016, 'Barandino', 'Jan Paolo', 'M', 'CON', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (3017, 'Bartolome', 'Jerome DJ', 'E', 'CON', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (3018, 'Basi', 'Myra', 'S', 'CON', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (3019, 'Bautista', 'Esperanza', 'R', 'CON', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (3019, '3D_Retreat', '2025-2026', '2025-06-10', '2025-06-11', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (3020, 'Bucoy', 'Raymark', 'F', 'CON', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (3021, 'Carabaña', 'Carlo Regino', 'H', 'CON', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (3022, 'Carpio', 'Jessica', NULL, 'CON', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (3022, '3D_Retreat', '2024-2025', '2024-07-10', '2024-07-11', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (3022, '3D_Retreat', '2025-2026', '2025-06-10', '2025-06-11', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (3023, 'Celdran', 'Christina', 'B', 'CON', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (3023, '3D_Retreat', '2024-2025', '2024-07-10', '2024-07-11', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (3024, 'Chua', 'Rosella', 'R', 'CON', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (3024, '3D_Retreat', '2025-2026', '2025-06-10', '2025-06-11', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (3025, 'Circulado', 'Marga Jane', 'C', 'CON', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (3025, '3D_Retreat', '2025-2026', '2025-06-10', '2025-06-11', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (3026, 'Climaco', 'Maria Gisella', 'M', 'CON', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (3026, '3D_Retreat', '2025-2026', '2025-06-10', '2025-06-11', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (3027, 'Cruz', 'Lovell', 'A', 'CON', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (3028, 'Dagalea', 'Maridel', NULL, 'CON', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (3028, '3D_Retreat', '2024-2025', '2024-07-10', '2024-07-11', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (3028, '3D_Retreat', '2025-2026', '2025-06-10', '2025-06-11', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (3029, 'Darangina', 'Al', NULL, 'CON', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (3029, '3D_Retreat', '2024-2025', '2024-07-10', '2024-07-11', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (3029, '3D_Retreat', '2025-2026', '2025-06-10', '2025-06-11', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (3030, 'De Villa', 'Raquel', 'O', 'CON', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (3031, 'Delos Santos', 'Kenneth', 'S', 'CON', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (3032, 'Diones', 'Jeveline', 'O', 'CON', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (3033, 'Dulin', 'Fatima Rogelia', 'D', 'CON', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (3034, 'Ekstrom', 'Divine', NULL, 'CON', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (3034, '3D_Retreat', '2024-2025', '2024-07-10', '2024-07-11', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (3034, '3D_Retreat', '2025-2026', '2025-06-10', '2025-06-11', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (3035, 'Enriquez', 'Lucibel', NULL, 'CON', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (3035, '3D_Retreat', '2024-2025', '2024-07-10', '2024-07-11', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (3035, '3D_Retreat', '2025-2026', '2025-06-10', '2025-06-11', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (3036, 'Enriquez', 'Mary Ruth', NULL, 'CON', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (3036, '3D_Retreat', '2024-2025', '2024-07-10', '2024-07-11', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (3036, '3D_Retreat', '2025-2026', '2025-06-10', '2025-06-11', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (3037, 'Espinosa', 'Rochelle', NULL, 'CON', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (3037, '3D_Retreat', '2024-2025', '2024-07-10', '2024-07-11', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (3037, '3D_Retreat', '2025-2026', '2025-06-10', '2025-06-11', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (3038, 'Fernando', 'Glenrose', 'A', 'CON', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (3038, '3D_Retreat', '2024-2025', '2024-07-10', '2024-07-11', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (3039, 'Gallego', 'Joel Arvin', 'M', 'CON', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (3039, '3D_Retreat', '2025-2026', '2025-06-10', '2025-06-11', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (3040, 'Gonzaga', 'Modesta', NULL, 'CON', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (3040, '3D_Retreat', '2024-2025', '2024-07-10', '2024-07-11', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (3040, '3D_Retreat', '2025-2026', '2025-06-10', '2025-06-11', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (3041, 'Halbi', 'Darwina', 'I', 'CON', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (3042, 'Himor-Sali', 'Jomarie Mhel', 'P', 'CON', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (3043, 'Ibno', 'Fatma Elvira', 'P', 'CON', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (3044, 'Inzo', 'Hazel', NULL, 'CON', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (3044, '3D_Retreat', '2024-2025', '2024-07-10', '2024-07-11', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (3044, '3D_Retreat', '2025-2026', '2025-06-10', '2025-06-11', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (3045, 'Jumawan', 'Alexander', 'A', 'CON', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (3045, '3D_Retreat', '2025-2026', '2025-06-10', '2025-06-11', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (3046, 'Labitag', 'Fe Eva', 'S', 'CON', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (3047, 'Lagura', 'Grace Ann', 'L', 'CON', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (3048, 'Laput', 'Lorraine Aimie', 'N', 'CON', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (3049, 'Longcob', 'Ruby Grace', 'S', 'CON', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (3050, 'Lucas', 'Marietta', NULL, 'CON', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (3050, '3D_Retreat', '2024-2025', '2024-07-10', '2024-07-11', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (3050, '3D_Retreat', '2025-2026', '2025-06-10', '2025-06-11', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (3051, 'Macrohon', 'Lucia Loreli', NULL, 'CON', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (3051, '3D_Retreat', '2024-2025', '2024-07-10', '2024-07-11', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (3051, '3D_Retreat', '2025-2026', '2025-06-10', '2025-06-11', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (3052, 'Maico', 'Gertrudes', 'G', 'CON', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (3052, '3D_Retreat', '2025-2026', '2025-06-10', '2025-06-11', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (3053, 'Mandangan', 'Shohadaa', 'B', 'CON', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (3054, 'Manuel', 'Maria Eleanor', 'P', 'CON', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (3054, '3D_Retreat', '2024-2025', '2024-07-10', '2024-07-11', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (3054, '3D_Retreat', '2025-2026', '2025-06-10', '2025-06-11', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (3055, 'Mariwa', 'Jehan', 'B', 'CON', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (3056, 'Mendez', 'Rowena', 'P', 'CON', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (3057, 'Mendoza', 'Aaron', 'A', 'CON', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (3057, '3D_Retreat', '2025-2026', '2025-06-10', '2025-06-11', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (3058, 'Miguel', 'Elsie', NULL, 'CON', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (3058, '3D_Retreat', '2024-2025', '2024-07-10', '2024-07-11', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (3058, '3D_Retreat', '2025-2026', '2025-06-10', '2025-06-11', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (3059, 'Mitra', 'Annalie', 'M', 'CON', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (3060, 'Moore', 'Diane Dianchu', 'T', 'CON', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (3061, 'Paber', 'Maria Lorna', NULL, 'CON', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (3061, '3D_Retreat', '2024-2025', '2024-07-10', '2024-07-11', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (3062, 'Paber', 'Jared Kerr', 'B', 'CON', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (3063, 'Paber', 'John Lorne', 'B', 'CON', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (3064, 'Palma', 'Charito', 'S', 'CON', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (3065, 'Panaguiton', 'Maria Pilar', 'T', 'CON', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (3066, 'Pis-an', 'Sofia', 'H', 'CON', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (3068, 'Pison', 'Araceli', 'S', 'CON', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (3068, '3D_Retreat', '2024-2025', '2024-07-10', '2024-07-11', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (3068, '3D_Retreat', '2025-2026', '2025-06-10', '2025-06-11', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (3069, 'Porras', 'Maria Lourdes', 'E', 'CON', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (3069, '3D_Retreat', '2025-2026', '2025-06-10', '2025-06-11', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (3070, 'Porto', 'Ethel', 'R', 'CON', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (3071, 'Que', 'Surul Ayn', 'A', 'CON', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (3072, 'Quilos', 'Antonia', NULL, 'CON', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (3072, '3D_Retreat', '2024-2025', '2024-07-10', '2024-07-11', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (3072, '3D_Retreat', '2025-2026', '2025-06-10', '2025-06-11', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (3073, 'Ramonal', 'Maricel', 'B', 'CON', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (3074, 'Ramos', 'Doris', 'T', 'CON', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (3075, 'Regondola', 'Elinor', 'B', 'CON', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (3076, 'Relao', 'Eva', NULL, 'CON', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (3076, '3D_Retreat', '2024-2025', '2024-07-10', '2024-07-11', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (3077, 'Rivera', 'Jana Lynn', 'B', 'CON', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (3077, '3D_Retreat', '2025-2026', '2025-06-10', '2025-06-11', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (3078, 'Romero', 'Maria Rosario', 'M', 'CON', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (3079, 'Rosalejos', 'Anna Lisa', NULL, 'CON', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (3079, '3D_Retreat', '2024-2025', '2024-07-10', '2024-07-11', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (3079, '3D_Retreat', '2025-2026', '2025-06-10', '2025-06-11', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (3080, 'Rubio', 'Mary Ann', 'F', 'CON', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (3081, 'Sales', 'Catherine', 'A', 'CON', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (3081, '3D_Retreat', '2025-2026', '2025-06-10', '2025-06-11', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (3082, 'San Gil', 'Shereen', 'S', 'CON', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (3084, 'San Luis', 'Floribel', 'P', 'CON', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (3085, 'Santos', 'Ernesto Joel', 'D', 'CON', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (3086, 'Saplan', 'Dyana Marciana', NULL, 'CON', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (3086, '3D_Retreat', '2025-2026', '2025-06-10', '2025-06-11', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (3087, 'Sebastian', 'Irvin Arnold', 'G', 'CON', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (3088, 'Soria', 'Arriza Kryssan', 'M', 'CON', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (3089, 'Tallena', 'Sheena', 'B', 'CON', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (3090, 'Tandoc', 'Maria Bella', 'M', 'CON', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (3090, '3D_Retreat', '2025-2026', '2025-06-10', '2025-06-11', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (3091, 'Tecson', 'Ricky', NULL, 'CON', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (3091, '3D_Retreat', '2024-2025', '2024-07-10', '2024-07-11', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (3091, '3D_Retreat', '2025-2026', '2025-06-10', '2025-06-11', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (3092, 'Tierra', 'Elena', 'M', 'CON', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (3093, 'Velasco', 'Ellenor', 'D', 'CON', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (3094, 'Villanueva', 'Karen', NULL, 'CON', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (3094, '3D_Retreat', '2025-2026', '2025-06-10', '2025-06-11', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (3095, 'Viray', 'Marie Pauline', 'B', 'CON', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (3096, 'Wahab', 'Lilia', NULL, 'CON', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (3096, '3D_Retreat', '2025-2026', '2025-06-10', '2025-06-11', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (3097, 'Wee', 'Tommy Lloyd', NULL, 'CON', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (3098, 'Yasin', 'Narissa', 'P', 'CON', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (2001, 'Acebes Jr', 'Paulino', 'T', 'CSITE', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (2001, '3D_Retreat', '2023-2024', '2023-10-27', '2023-10-29', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (2001, '3D_Retreat', '2025-2026', '2025-07-16', '2025-07-18', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (2002, 'Anam', 'Nurhassan II', 'J', 'CSITE', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (2003, 'Arcillas', 'Clairizza', 'V', 'CSITE', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (2003, '3D_Retreat', '2025-2026', '2025-07-16', '2025-07-18', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (2004, 'Atilano', 'Ma Christine', NULL, 'CSITE', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (2004, '3D_Retreat', '2023-2024', '2023-10-27', '2023-10-29', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (2004, '3D_Retreat', '2025-2026', '2025-07-16', '2025-07-18', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (2005, 'Bernardo', 'Neil', 'T', 'CSITE', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (2006, 'Buklasan', 'Dania', 'H', 'CSITE', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (2007, 'Calisang', 'Samuel', 'R', 'CSITE', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (2007, '3D_Retreat', '2024-2025', '2024-10-24', '2024-10-26', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (2008, 'Cañedo', 'Fe Grace', 'T', 'CSITE', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (2008, '3D_Retreat', '2025-2026', '2025-07-16', '2025-07-18', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (2009, 'Capitle', 'Jericho', 'L', 'CSITE', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (2010, 'Dawabi', 'Jasser Arabani', 'T', 'CSITE', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (2011, 'Deles', 'Adeliza', NULL, 'CSITE', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (2011, '3D_Retreat', '2023-2024', '2023-10-27', '2023-10-29', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (2011, '3D_Retreat', '2024-2025', '2024-10-24', '2024-10-26', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (2012, 'Diaz', 'Kreanne', 'F', 'CSITE', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (2013, 'Dingcong', 'Jessibel', 'C', 'CSITE', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (2014, 'Falcasantos-Diaz', 'Kreanne', NULL, 'CSITE', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (2014, '3D_Retreat', '2023-2024', '2023-10-27', '2023-10-29', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (2014, '3D_Retreat', '2024-2025', '2024-10-24', '2024-10-26', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (2014, '3D_Retreat', '2025-2026', '2025-07-16', '2025-07-18', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (2015, 'Fernando', 'John Frederick', 'S', 'CSITE', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (2016, 'Filoteo', 'Mary Ann', NULL, 'CSITE', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (2016, '3D_Retreat', '2023-2024', '2023-10-27', '2023-10-29', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (2016, '3D_Retreat', '2024-2025', '2024-10-24', '2024-10-26', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (2016, '3D_Retreat', '2025-2026', '2025-07-16', '2025-07-18', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (2017, 'Gallardo', 'Louie Virgil', 'A', 'CSITE', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (2018, 'Gallardo', 'Maureen Olive', 'B', 'CSITE', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (2019, 'Garcia', 'Rosen Gabriel', 'S', 'CSITE', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (2019, '3D_Retreat', '2024-2025', '2024-10-24', '2024-10-26', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (2020, 'Garcia', 'Merlita', 'C', 'CSITE', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (2021, 'Garcia', 'Queendel Vanee', NULL, 'CSITE', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (2021, '3D_Retreat', '2023-2024', '2023-10-27', '2023-10-29', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (2023, 'Guarino', 'Kneil', NULL, 'CSITE', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (2023, '3D_Retreat', '2023-2024', '2023-10-27', '2023-10-29', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (2025, 'Guerrero', 'Ruth', 'R', 'CSITE', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (2025, '3D_Retreat', '2024-2025', '2024-10-24', '2024-10-26', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (2027, 'Hernandez', 'Daniel Angelito', 'G', 'CSITE', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (2027, '3D_Retreat', '2024-2025', '2024-10-24', '2024-10-26', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (2028, 'Ijirani', 'Robert', 'A', 'CSITE', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (2029, 'Jaji', 'Shalimar', 'A', 'CSITE', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (2029, '3D_Retreat', '2024-2025', '2024-10-24', '2024-10-26', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (2030, 'Jaldon', 'Carl Joseph', 'C', 'CSITE', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (2031, 'Jausan', 'Aleekhazer', 'J', 'CSITE', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (2032, 'Ledesma', 'Melvin', 'M', 'CSITE', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (2032, '3D_Retreat', '2023-2024', '2023-10-27', '2023-10-29', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (2032, '3D_Retreat', '2024-2025', '2024-10-24', '2024-10-26', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (2032, '3D_Retreat', '2025-2026', '2025-07-16', '2025-07-18', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (2033, 'Mangubat', 'Nilo', 'A', 'CSITE', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (2034, 'Miravite', 'Rexor', 'M', 'CSITE', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (2035, 'Mondia', 'Rikko Zaironn', 'A', 'CSITE', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (2036, 'Natividad', 'Roselita', 'O', 'CSITE', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (2036, '3D_Retreat', '2023-2024', '2023-10-27', '2023-10-29', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (2036, '3D_Retreat', '2024-2025', '2024-10-24', '2024-10-26', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (2036, '3D_Retreat', '2025-2026', '2025-07-16', '2025-07-18', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (2038, 'Nograles', 'Abdul Hadi', 'H', 'CSITE', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (2038, '3D_Retreat', '2023-2024', '2023-10-27', '2023-10-29', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (2038, '3D_Retreat', '2024-2025', '2024-10-24', '2024-10-26', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (2039, 'Nurie', 'Jennica', 'D', 'CSITE', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (2040, 'Oliva', 'Glenn', 'S', 'CSITE', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (2041, 'Opinion', 'Precious', 'T', 'CSITE', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (2041, '3D_Retreat', '2023-2024', '2023-10-27', '2023-10-29', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (2041, '3D_Retreat', '2024-2025', '2024-10-24', '2024-10-26', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (2041, '3D_Retreat', '2025-2026', '2025-07-16', '2025-07-18', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (2043, 'Pajarito', 'Jonathan Geronimo', 'B', 'CSITE', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (2045, 'Papa', 'Jozeff Allyn', 'S', 'CSITE', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (2045, '3D_Retreat', '2024-2025', '2024-10-24', '2024-10-26', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (2046, 'Partosa', 'Jocelyn', 'D', 'CSITE', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (2046, '3D_Retreat', '2023-2024', '2023-10-27', '2023-10-29', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (2046, '3D_Retreat', '2024-2025', '2024-10-24', '2024-10-26', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (2047, 'Partosa', 'Dante', 'V', 'CSITE', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (2047, '3D_Retreat', '2025-2026', '2025-07-16', '2025-07-18', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (2048, 'Partosa', 'Jocelyn', 'D', 'CSITE', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (2048, '3D_Retreat', '2025-2026', '2025-07-16', '2025-07-18', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (2049, 'Plaza', 'Carmellie Anne', 'A', 'CSITE', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (2049, '3D_Retreat', '2025-2026', '2025-07-16', '2025-07-18', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (2050, 'Quenamot', 'Jomari', 'M', 'CSITE', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (2051, 'Quibo-Quibo', 'Lyka Mae', 'C', 'CSITE', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (2052, 'Quintanes', 'Joel', NULL, 'CSITE', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (2052, '3D_Retreat', '2024-2025', '2024-10-24', '2024-10-26', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (2052, '3D_Retreat', '2025-2026', '2025-07-16', '2025-07-18', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (2053, 'Quisel', 'Daisy', 'M', 'CSITE', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (2053, '3D_Retreat', '2025-2026', '2025-07-16', '2025-07-18', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (2054, 'Rashed', 'Mariam Abdul Nabi', 'A', 'CSITE', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (2055, 'Reyes', 'Rey', NULL, 'CSITE', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (2055, '3D_Retreat', '2023-2024', '2023-10-27', '2023-10-29', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (2056, 'Rosagaron, Jr.', 'Belino', 'R', 'CSITE', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (2056, '3D_Retreat', '2024-2025', '2024-10-24', '2024-10-26', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (2056, '3D_Retreat', '2025-2026', '2025-07-16', '2025-07-18', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (2057, 'Saile', 'Noever', 'Q', 'CSITE', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (2057, '3D_Retreat', '2024-2025', '2024-10-24', '2024-10-26', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (2059, 'Santos', 'Cristelbeth', NULL, 'CSITE', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (2059, '3D_Retreat', '2023-2024', '2023-10-27', '2023-10-29', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (2060, 'Sinsuan', 'Katherine', 'I', 'CSITE', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (2060, '3D_Retreat', '2024-2025', '2024-10-24', '2024-10-26', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (2060, '3D_Retreat', '2025-2026', '2025-07-16', '2025-07-18', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (2061, 'Sousa', 'Maria Luisa', 'U', 'CSITE', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (2062, 'Subido', 'Abigail Joy', 'C', 'CSITE', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (2062, '3D_Retreat', '2025-2026', '2025-07-16', '2025-07-18', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (2063, 'Sucro', 'Frantz Merrill', 'A', 'CSITE', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (2064, 'Tan', 'Janet', NULL, 'CSITE', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (2064, '3D_Retreat', '2023-2024', '2023-10-27', '2023-10-29', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (2064, '3D_Retreat', '2024-2025', '2024-10-24', '2024-10-26', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (2064, '3D_Retreat', '2025-2026', '2025-07-16', '2025-07-18', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (2065, 'Tiam Watt', 'Jaber', NULL, 'CSITE', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (2066, 'Tubog-Canedo', 'Fe Grace', NULL, 'CSITE', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (2066, '3D_Retreat', '2023-2024', '2023-10-27', '2023-10-29', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (2066, '3D_Retreat', '2024-2025', '2024-10-24', '2024-10-26', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (2067, 'Valdenibro', 'Ashley Marie', 'D', 'CSITE', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (5001, 'Agraviador', 'Pilar', 'C', 'SED', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (5001, '3D_Retreat', '2024-2025', '2024-09-17', '2024-09-19', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (5002, 'Atilano, Jr', 'Espiridion', 'D', 'SED', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (5003, 'Austero', 'Raissa', 'P', 'SED', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (5003, '3D_Retreat', '2024-2025', '2024-09-17', '2024-09-19', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (5003, '3D_Retreat', '2025-2026', '2025-05-27', '2025-05-30', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (5004, 'Columbres', 'Alfrenz', 'N', 'SED', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (5004, '3D_Retreat', '2024-2025', '2024-09-17', '2024-09-19', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (5004, '3D_Retreat', '2025-2026', '2025-05-27', '2025-05-30', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (5005, 'Cuaresma', 'Alma', 'D', 'SED', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (5005, '3D_Retreat', '2024-2025', '2024-09-17', '2024-09-19', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (5005, '3D_Retreat', '2025-2026', '2025-05-27', '2025-05-30', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (5006, 'Cuaresma', 'Rommel', 'A', 'SED', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (5006, '3D_Retreat', '2025-2026', '2025-05-27', '2025-05-30', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (5007, 'De Jesus', 'John Thronn', 'A', 'SED', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (5007, '3D_Retreat', '2025-2026', '2025-05-27', '2025-05-30', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (5008, 'Engalla', 'Queen Reygen', NULL, 'SED', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (5008, '3D_Retreat', '2024-2025', '2024-09-17', '2024-09-19', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (5008, '3D_Retreat', '2025-2026', '2025-05-27', '2025-05-30', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (5009, 'Fabella', 'Ma. Ella', 'F', 'SED', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (5010, 'Francisco', 'Noldan King', 'F', 'SED', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (5010, '3D_Retreat', '2024-2025', '2024-09-17', '2024-09-19', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (5010, '3D_Retreat', '2025-2026', '2025-05-27', '2025-05-30', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (5011, 'Garrido', 'Liza', NULL, 'SED', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (5011, '3D_Retreat', '2024-2025', '2024-09-17', '2024-09-19', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (5011, '3D_Retreat', '2025-2026', '2025-05-27', '2025-05-30', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (5012, 'Mata', 'Leah', 'P', 'SED', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (5012, '3D_Retreat', '2024-2025', '2024-09-17', '2024-09-19', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (5012, '3D_Retreat', '2025-2026', '2025-05-27', '2025-05-30', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (5013, 'Pasilan', 'Earl Francis', 'C', 'SED', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (5013, '3D_Retreat', '2024-2025', '2024-09-17', '2024-09-19', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (5013, '3D_Retreat', '2025-2026', '2025-05-27', '2025-05-30', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (5014, 'Quimson', 'Manuela', 'E', 'SED', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (5015, 'Rabajante', 'Dorothy Joann Lei', 'L', 'SED', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (5015, '3D_Retreat', '2024-2025', '2024-01-11', '2024-01-13', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (5016, 'Tarroza', 'Jacklyn', 'M', 'SED', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (5016, '3D_Retreat', '2023-2024', '2023-02-03', '2023-02-04', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (5016, '3D_Retreat', '2024-2025', '2024-03-14', '2024-03-15', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (5016, '3D_Retreat', '2025-2026', '2025-05-27', '2025-05-30', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (5017, 'Vitug', 'Jasmin', 'P', 'SED', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (6001, 'Abas', 'Kenneth Al-John', 'A', 'SLA', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (6002, 'Absara', 'Ailyn', 'S', 'SLA', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (6003, 'Agravante', 'Silvie Jasmin', 'B', 'SLA', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (6004, 'Ajibun', 'Rosalina', 'H', 'SLA', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (6005, 'Ancheta', 'Abbey', 'W', 'SLA', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (6006, 'Angeles', 'Kimberly', NULL, 'SLA', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (6007, 'Aparicio', 'Joban', 'S', 'SLA', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (6008, 'Aporador', 'Daniella', 'C', 'SLA', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (6009, 'Araneta', 'Marlone', 'M', 'SLA', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (6010, 'Baguio', 'Melophyl', 'C', 'SLA', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (6010, '3D_Retreat', '2023-2024', '2023-08-18', '2023-08-20', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (6011, 'Baluca', 'Norma', 'A', 'SLA', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (6012, 'Bazan', 'Cheenee Jane', NULL, 'SLA', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (6013, 'Bernardo', 'Araceli', 'D', 'SLA', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (6014, 'Biton, Jr.', 'Elpidio', 'F', 'SLA', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (6014, '3D_Retreat', '2025-2026', '2025-07-16', '2025-07-18', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (6015, 'Buentipo', 'Ma Lalaine', 'I', 'SLA', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (6015, '3D_Retreat', '2023-2024', '2023-08-18', '2023-08-20', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (6015, '3D_Retreat', '2024-2025', '2024-10-24', '2024-10-26', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (6015, '3D_Retreat', '2025-2026', '2025-07-16', '2025-07-18', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (6016, 'Bulaong', 'Sharmaine', 'P', 'SLA', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (6017, 'Bustamante, SJ', 'Francisco', 'R', 'SLA', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (6018, 'Caceres', 'Michael Vincent', 'P', 'SLA', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (6019, 'Camitan', 'Desiderio IV', 'S', 'SLA', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (6020, 'Cañones', 'Ma. Christina', 'A', 'SLA', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (6021, 'Climaco', 'Joseph', 'A', 'SLA', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (6022, 'Concepcion', 'Hezekiah', 'A', 'SLA', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (6022, '3D_Retreat', '2024-2025', '2024-07-14', '2024-07-16', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (6023, 'Cabatit', 'Dominic Ian', 'E', 'SLA', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (6023, '3D_Retreat', '2023-2024', '2023-08-18', '2023-08-20', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (6023, '3D_Retreat', '2024-2025', '2024-10-24', '2024-10-26', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (6024, 'Dacles', 'Nimrod', 'J', 'SLA', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (6025, 'De Los Reyes', 'Robin', 'A', 'SLA', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (6025, '3D_Retreat', '2023-2024', '2023-08-18', '2023-08-20', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (6025, '3D_Retreat', '2024-2025', '2024-10-24', '2024-10-26', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (6025, '3D_Retreat', '2025-2026', '2025-06-12', '2025-06-14', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (6026, 'Dela Cruz', 'Perre Ian', 'T', 'SLA', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (6026, '3D_Retreat', '2023-2024', '2023-08-18', '2023-08-20', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (6027, 'Domingo', 'Alecs Yvonne', 'S', 'SLA', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (6028, 'Duran', 'Datu Akmad', 'H', 'SLA', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (6029, 'Eijansantos', 'Abee', 'M', 'SLA', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (6030, 'Eslao', 'Rovic John', 'F', 'SLA', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (6031, 'Eucapor, Jr.', 'Antonino', 'G', 'SLA', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (6032, 'Evasco, Jr', 'Emmanuel', 'C', 'SLA', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (6033, 'Faustino', 'Jufranz Sweet', 'K', 'SLA', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (6034, 'Floriza', 'Marilou', 'E', 'SLA', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (6035, 'Francisco', 'Regina Esther Angelica', 'T', 'SLA', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (6036, 'Guerrero', 'Marion', 'B', 'SLA', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (6037, 'Garcia', 'Ionee Bel', 'C', 'SLA', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (6037, '3D_Retreat', '2023-2024', '2023-03-24', '2023-03-25', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (6037, '3D_Retreat', '2024-2025', '2024-03-14', '2024-03-15', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (6037, '3D_Retreat', '2025-2026', '2025-06-12', '2025-06-14', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (6038, 'Hadjirul', 'Fatma Shaheen', 'S', 'SLA', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (6039, 'Jacinto', 'Lesly Ann', 'C', 'SLA', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (6040, 'Knuttel', 'Monalisa Ninia', 'B', 'SLA', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (6041, 'Lacastesantos', 'Leizel', 'L', 'SLA', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (6042, 'Ling', 'Justin Brion', 'B', 'SLA', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (6043, 'Marquez', 'Sandra Ma', 'J', 'SLA', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (6044, 'Masamayor', 'Kent Zacharee', 'Q', 'SLA', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (6045, 'Masjiril', 'Abdel-Aziz', 'P', 'SLA', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (6046, 'Mayonila', 'Robert', 'A', 'SLA', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (6047, 'Munar', 'Khrystal Venus', 'M', 'SLA', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (6048, 'Olasiman', 'Christian', 'E', 'SLA', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (6049, 'Orabe', 'Ma. Erica', 'T', 'SLA', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (6050, 'Pambid', 'Christine', 'I', 'SLA', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (6050, '3D_Retreat', '2023-2024', '2023-08-18', '2023-08-20', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (6051, 'Porras', 'Joel', 'C', 'SLA', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (6051, '3D_Retreat', '2023-2024', '2023-08-18', '2023-08-20', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (6051, '3D_Retreat', '2024-2025', '2024-10-24', '2024-10-26', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (6051, '3D_Retreat', '2025-2026', '2025-06-12', '2025-06-14', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (6052, 'Remotin', 'Rey', 'E', 'SLA', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (6053, 'Reyes', 'Michelle', 'C', 'SLA', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (6054, 'Saavedra', 'Charlyn', 'E', 'SLA', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (6055, 'Sabdilon', 'Jayson', 'V', 'SLA', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (6056, 'Salgados', 'Rodel', 'M', 'SLA', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (6057, 'Santos', 'Minda', 'B', 'SLA', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (6057, '3D_Retreat', '2023-2024', '2023-08-18', '2023-08-20', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (6057, '3D_Retreat', '2025-2026', '2025-06-12', '2025-06-14', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (6058, 'Solamo', 'Rosana', 'P', 'SLA', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (6058, '3D_Retreat', '2023-2024', '2023-08-18', '2023-08-20', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (6058, '3D_Retreat', '2025-2026', '2025-06-12', '2025-06-14', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (6059, 'Tiblani', 'Rene', 'S', 'SLA', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (6060, 'Vergara', 'Bryan', NULL, 'SLA', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (6060, '3D_Retreat', '2025-2026', '2025-06-12', '2025-06-14', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (6062, 'Segayo', 'Kristine Mae Isabelle', 'D', 'SLA', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (6062, '3D_Retreat', '2023-2024', '2023-08-18', '2023-08-20', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (6063, 'Viloria', 'Shirven John', 'B', 'SLA', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (6063, '3D_Retreat', '2024-2025', '2024-07-14', '2024-07-16', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (6064, 'Santos', 'Pauleen Mae', 'M', 'SLA', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (6064, '3D_Retreat', '2023-2024', '2023-02-10', '2023-02-11', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (6064, '3D_Retreat', '2024-2025', '2024-03-14', '2024-03-15', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (6064, '3D_Retreat', '2025-2026', '2025-06-12', '2025-06-14', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (6065, 'Quaile', 'Cindy Ann', 'J', 'SLA', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (6065, '3D_Retreat', '2024-2025', '2024-05-28', '2024-05-30', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (7001, 'Abdulgafur', 'Ridzanna', 'M', 'SMA', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (7002, 'Alvarez', 'Reynante', 'G', 'SMA', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (7003, 'Arrojado', 'John Hoover', 'G', 'SMA', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (7004, 'Arroyo', 'Francis', 'H', 'SMA', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (7005, 'Bazan', 'Roland Ymmanuel', 'M', 'SMA', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (7006, 'Bernaldez', 'Ericha', NULL, 'SMA', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (7006, '3D_Retreat', '2023-2024', '2023-07-12', '2023-07-13', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (7006, '3D_Retreat', '2024-2025', '2024-09-17', '2024-09-19', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (7007, 'Bernardo', 'Ma. Lucia', 'W', 'SMA', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (7007, '3D_Retreat', '2023-2024', '2023-07-12', '2023-07-13', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (7007, '3D_Retreat', '2024-2025', '2024-09-17', '2024-09-19', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (7007, '3D_Retreat', '2025-2026', '2025-07-23', '2025-07-25', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (7008, 'Chua', 'Aljon-Khan', 'M', 'SMA', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (7008, '3D_Retreat', '2023-2024', '2023-07-12', '2023-07-13', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (7009, 'Concepcion', 'Joeremy', 'L', 'SMA', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (7010, 'Conel Jr', 'Rogelio', 'C', 'SMA', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (7011, 'Dagalea', 'Magdalena', 'I', 'SMA', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (7012, 'Dagdag', 'Antonio Leandro', 'C', 'SMA', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (7013, 'Dajuela', 'Josephine', 'L', 'SMA', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (7014, 'Delosa', 'Romel', 'F', 'SMA', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (7014, '3D_Retreat', '2023-2024', '2023-07-12', '2023-07-13', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (7014, '3D_Retreat', '2024-2025', '2024-09-17', '2024-09-19', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (7014, '3D_Retreat', '2025-2026', '2025-07-23', '2025-07-25', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (7015, 'Estrada', 'Dulcita', 'C', 'SMA', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (7015, '3D_Retreat', '2023-2024', '2023-07-12', '2023-07-13', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (7015, '3D_Retreat', '2024-2025', '2024-09-17', '2024-09-19', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (7015, '3D_Retreat', '2025-2026', '2025-07-23', '2025-07-25', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (7016, 'Fernando', 'Philip III', 'P', 'SMA', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (7017, 'Francisco', 'Noela Joy', 'DR', 'SMA', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (7018, 'Gabo', 'Sheila Mae', 'J', 'SMA', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (7019, 'Genon', 'Vedia', 'A', 'SMA', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (7020, 'Guadalquiver', 'Vjisyl', 'R', 'SMA', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (7021, 'Jikiri', 'Alexander', 'A', 'SMA', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (7022, 'Jumlaie', 'Zharmaine Cynara', 'C', 'SMA', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (7023, 'Lahaman', 'Jusper Gerson', 'T', 'SMA', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (7024, 'Malik', 'Muhammad', 'A', 'SMA', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (7025, 'Manalo', 'Fei Claudine', 'R', 'SMA', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (7025, '3D_Retreat', '2023-2024', '2023-07-12', '2023-07-13', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (7025, '3D_Retreat', '2024-2025', '2024-09-17', '2024-09-19', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (7025, '3D_Retreat', '2025-2026', '2025-07-23', '2025-07-25', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (7026, 'Martinez', 'Wilfred', 'E', 'SMA', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (7027, 'Mendoza', 'Roberto', 'M', 'SMA', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (7027, '3D_Retreat', '2023-2024', '2023-07-12', '2023-07-13', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (7027, '3D_Retreat', '2024-2025', '2024-09-17', '2024-09-19', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (7027, '3D_Retreat', '2025-2026', '2025-07-23', '2025-07-25', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (7028, 'Miro', 'Edrian Dave', 'A', 'SMA', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (7028, '3D_Retreat', '2024-2025', '2024-09-17', '2024-09-19', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (7028, '3D_Retreat', '2025-2026', '2025-07-23', '2025-07-25', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (7029, 'Molina', 'Brenda Luz', 'A', 'SMA', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (7030, 'Nagdar', 'Mersan', 'A', 'SMA', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (7031, 'Pañgan', 'Jose Journal', 'A', 'SMA', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (7031, '3D_Retreat', '2023-2024', '2023-07-12', '2023-07-13', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (7031, '3D_Retreat', '2024-2025', '2024-09-17', '2024-09-19', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (7032, 'Perez', 'Erlinda', 'D', 'SMA', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (7032, '3D_Retreat', '2023-2024', '2023-07-12', '2023-07-13', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (7032, '3D_Retreat', '2024-2025', '2024-09-17', '2024-09-19', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (7032, '3D_Retreat', '2025-2026', '2025-07-23', '2025-07-25', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (7033, 'Salvador', 'Ivan Eric', 'C', 'SMA', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (7034, 'Santiago', 'Alphi', 'C', 'SMA', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (7035, 'Serneo', 'Eunice Mae Ann', 'T', 'SMA', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (7036, 'Suaib', 'Khalid', 'M', 'SMA', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (7036, '3D_Retreat', '2025-2026', '2025-07-23', '2025-07-25', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (7037, 'Taradji', 'Ar-Rashid', 'J', 'SMA', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (7038, 'Vasquez', 'Joshua James', 'M', 'SMA', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (7039, 'Velez', 'Dexter', 'S', 'SMA', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (7039, '3D_Retreat', '2024-2025', '2024-09-17', '2024-09-19', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (7039, '3D_Retreat', '2025-2026', '2025-07-23', '2025-07-25', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (7040, 'Wee', 'John Carlos', NULL, 'SMA', NULL, NULL, NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (7040, '3D_Retreat', '2024-2025', '2024-09-17', '2024-09-19', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (7040, '3D_Retreat', '2025-2026', '2025-07-23', '2025-07-25', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9001, 'Ababao', 'Cryl', NULL, 'CS', 'Office Support Staff', 'Finance Office', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9001, 'DGY1', '2024-2025', '2024-11-07', '2024-11-08', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9001, 'DGY2', '2024-2025', '2025-11-07', '2025-11-08', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9002, 'Aboc', 'Ma Rona Cristina', 'V', 'CS', 'Coach', 'Athletics Office', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9003, 'Acapulco', 'Philip John', 'T', 'CS', 'Research Assistant', 'School of Medicine', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9004, 'Aczon', 'Catherine Joy', 'J', 'CS', 'Assistant Finance Officer', 'Ateneo Learning and Teaching Excellence Center', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9005, 'Adil', 'Akin', 'I', 'CS', 'Coach', 'Athletics Office', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9006, 'Aduca', 'Justine Clarice', 'DC', 'CS', 'Office Support Staff', 'Vice President for Administration Office', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9006, 'DGY1', '2024-2025', '2024-11-21', '2024-11-22', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9007, 'Agan', 'Sheila', 'T', 'CS', 'Campus Minister', 'Campus Ministry Office', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9007, 'DGY2', '2024-2025', '2025-02-06', '2025-02-07', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9008, 'Aguila', 'Johanna', 'G', 'CS', 'Payroll In-charge', 'Human Resource Administration and Development Office', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9008, 'DGY1', '2024-2025', '2023-03-03', '2023-03-04', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9008, 'DGY2', '2024-2025', '2025-02-06', '2025-02-07', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9009, 'Aguilar', 'John Michael', 'M', 'CS', 'Office Support Staff', 'School of Medicine', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9009, 'DGY1', '2024-2025', '2023-03-05', '2023-03-06', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9010, 'Alabata', 'Lindy Jade', 'P', 'CS', 'Career Development Officer', 'Alumni and Career Excellence Office', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9010, 'DGY1', '2024-2025', '2023-02-03', '2023-02-04', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9010, 'DGY2', '2024-2025', '2025-02-20', '2025-02-21', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9011, 'Alas-as', 'Wilbert', 'S', 'CS', 'Office Support Staff', 'Fr Jose T Bacatan SJ Library', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9011, 'DGY1', '2024-2025', '2028-01-27', '2028-01-27', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9011, 'DGY2', '2024-2025', '2024-03-14', '2024-03-15', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9011, 'DGY3', '2024-2025', '2025-01-16', '2025-01-17', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9012, 'Alvarez', 'Jelly Anne', 'D', 'CS', 'Office Support Staff', 'School of Medicine', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9012, 'DGY1', '2024-2025', '2023-01-20', '2023-01-21', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9013, 'Amiril', 'Khaleilah', 'P', 'CS', 'Psychometrician', 'Center for Testing and Measurement', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9013, 'DGY1', '2024-2025', '2024-03-01', '2024-03-02', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9013, 'DGY2', '2024-2025', '2025-02-06', '2025-02-07', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9014, 'Angeles', 'Edwin', 'M', 'CS', 'Office Support Staff', 'University Security Office', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9014, 'DGY1', '2024-2025', '2023-02-10', '2023-02-11', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9014, 'DGY2', '2024-2025', '2025-02-13', '2025-02-14', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9015, 'Apolonio', 'Mary Elizabeth', 'S', 'CS', 'Program Officer', 'Ateneo Peace Institute', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9015, 'DGY1', '2024-2025', '2023-02-17', '2023-02-18', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9015, 'DGY2', '2024-2025', '2025-02-20', '2025-02-21', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9016, 'Aquino', 'Renmille Joyce', 'L', 'CS', 'Coach', 'Athletics Office', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9017, 'Aquino', 'Ryan George', 'L', 'CS', 'Coach', 'Athletics Office', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9018, 'Arambala', 'Sheyn', 'T', 'CS', 'Coach', 'Athletics Office', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9019, 'Araneta', 'Mary Ann', 'S', 'CS', 'Coach', 'Athletics Office', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9020, 'Araneta', 'Trisha Mae', 'G', 'CS', 'Office Support Staff', 'Center for Testing & Measurement', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9021, 'Araneta', 'Joan', 'B', 'CS', 'Office Support Staff', 'Office of Student Affairs', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9022, 'Arcillas', 'Arvie', 'G', 'CS', 'Community Coordinator', 'School of Medicine', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9023, 'Areglado', 'Marvin Jay', 'S', 'CS', 'Office Support Staff', 'Purchasing and Custodial Office', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9023, 'DGY1', '2024-2025', '2023-03-10', '2023-03-11', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9023, 'DGY2', '2024-2025', '2024-03-21', '2024-03-22', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9023, 'DGY3', '2024-2025', '2025-01-16', '2025-01-17', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9024, 'Arjona', 'Angelica', 'V', 'CS', 'Psychometrician', 'Center for Testing and Measurement', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9024, 'DGY1', '2024-2025', '2024-03-01', '2024-03-02', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9024, 'DGY2', '2024-2025', '2025-02-06', '2025-02-07', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9025, 'Asarud', 'Fadzrati', 'D', 'CS', 'Faculty', 'Ateneo Learning and Teaching Excellence Center', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9026, 'Ascura', 'Marcelina', 'C', 'CS', 'Librarian', 'Fr Jose T Bacatan SJ Library', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9026, 'DGY1', '2024-2025', '2023-02-03', '2023-02-04', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9026, 'DGY2', '2024-2025', '2024-04-11', '2024-04-12', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9027, 'Atilano', 'Romelyn', 'P', 'CS', 'Office Support Staff', 'Fr Jose T Bacatan SJ Library - Audio Visual Center', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9027, 'DGY1', '2024-2025', '2024-11-21', '2024-11-22', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9028, 'Avenido', 'Marlon', NULL, 'CS', 'Coach', 'Athletics Office', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9029, 'Baculio II', 'Vincent Renan', 'A', 'CS', 'Campus Minister', 'Campus Ministry Office', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9030, 'Bader', 'Michelle', 'P', 'CS', 'Coach', 'Athletics Office', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9031, 'Badlon', 'Gladys', 'T', 'CS', 'Campus Minister', 'Campus Ministry Office', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9032, 'Baginda', 'Urdoha', 'M', 'CS', 'Assistant Director', 'Physical Plant Office', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9032, 'DGY1', '2024-2025', '2023-03-03', '2023-03-04', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9033, 'Bais', 'Rodolfo', 'U', 'CS', 'Security Officer', 'University Security Office', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9033, 'DGY1', '2024-2025', '2024-02-23', '2024-02-24', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9033, 'DGY2', '2024-2025', '2025-02-13', '2025-02-14', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9034, 'Balatbat', 'Maridel', 'A', 'CS', 'Office Support Staff', 'Center for Information Technology Services', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9034, 'DGY1', '2024-2025', '2023-03-17', '2023-03-18', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9034, 'DGY2', '2024-2025', '2024-03-14', '2024-03-15', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9035, 'Barot', 'Arvie', 'A', 'CS', 'Office Support Staff', 'Purchasing and Custodial Office', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9035, 'DGY1', '2024-2025', '2023-03-17', '2023-03-18', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9035, 'DGY2', '2024-2025', '2024-03-14', '2024-03-15', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9035, 'DGY3', '2024-2025', '2025-01-23', '2025-01-24', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9036, 'Basiri', 'Hemill Kan', 'L', 'CS', 'Coach', 'Athletics Office', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9037, 'Bautista, Jr.', 'Danilo', 'T', 'CS', 'Technical Staff', 'University Communications Office', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9037, 'DGY1', '2024-2025', '2023-02-17', '2023-02-18', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9037, 'DGY2', '2024-2025', '2024-03-21', '2024-03-22', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9037, 'DGY3', '2024-2025', '2025-01-16', '2025-01-17', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9038, 'Belciña', 'Ma. Angelee', 'A', 'CS', 'Guidance Counselor', 'College Guidance and Counseling Office', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9038, 'DGY1', '2024-2025', '2023-01-27', '2023-01-28', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9038, 'DGY2', '2024-2025', '2024-04-11', '2024-04-12', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9038, 'DGY3', '2024-2025', '2025-01-23', '2025-01-24', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9039, 'Bernales', 'Pauline Kaye', 'F', 'CS', 'Office Support Staff', 'Vice President for Administartion Office', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9040, 'Boac', 'Daisy Joy', 'I', 'CS', 'Training Staff', 'Center for Testing and Measurement', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9040, 'DGY1', '2024-2025', '2024-11-07', '2024-11-08', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9041, 'Brigoli', 'Nia May', 'T', 'CS', 'Records Management Staff', 'Human Resource Administration and Development Office', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9042, 'Buscas', 'Philip Cesar', 'DS', 'CS', 'Coach', 'Athletics Office', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9043, 'Cabatit', 'Dominic Ian', 'E', 'CS', 'Laboratory Technician', 'School of Liberal Arts Masscom Laboratory', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9043, 'DGY1', '2024-2025', '2023-02-17', '2023-02-18', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9043, 'DGY2', '2024-2025', '2024-03-14', '2024-03-15', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9044, 'Cabato', 'Karelle Mae', 'T', 'CS', 'Office Support Staff', 'Registrar Office', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9044, 'DGY1', '2024-2025', '2024-02-23', '2024-02-24', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9045, 'Cabato', 'Rea Joy', 'A', 'CS', 'Office Staff', 'Finance Office', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9045, 'DGY1', '2024-2025', '2023-03-03', '2023-03-04', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9045, 'DGY2', '2024-2025', '2025-02-13', '2025-02-14', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9046, 'Calunod', 'Ma. Angeline', 'A', 'CS', 'Office Support Staff', 'Registrar Office', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9046, 'DGY1', '2024-2025', '2024-02-23', '2024-02-24', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9046, 'DGY2', '2024-2025', '2025-02-20', '2025-02-21', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9047, 'Camacho', 'Carl Anthony', 'L', 'CS', 'Bandmaster', 'Ateneo Center for Culture and Arts', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9047, 'DGY1', '2024-2025', '2024-02-23', '2024-02-24', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9047, 'DGY2', '2024-2025', '2025-02-20', '2025-02-21', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9048, 'Camins', 'Angelo Michael', 'V', 'CS', 'Coach', 'Athletics Office', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9049, 'Campos', 'Anthony Wilfred', 'A', 'CS', 'Coach', 'Athletics Office', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9050, 'Candido', 'Mark Vicente', 'A', 'CS', 'Office Support Staff', 'Ateneo Center for Environment and Sustainability', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9050, 'DGY1', '2024-2025', '2023-03-17', '2023-03-18', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9050, 'DGY2', '2024-2025', '2024-03-21', '2024-03-22', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9050, 'DGY3', '2024-2025', '2025-01-23', '2025-01-24', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9051, 'Cardenas', 'Crizel', 'P', 'CS', 'Office Support Staff', 'College Admissions and Aid Office', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9051, 'DGY1', '2024-2025', '2023-01-20', '2023-01-21', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9051, 'DGY2', '2024-2025', '2024-04-11', '2024-04-12', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9051, 'DGY3', '2024-2025', '2025-01-23', '2025-01-24', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9052, 'Carolasdolasan', 'Arjun', 'P', 'CS', 'Program Officer', 'Center for Community Extension Services', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9052, 'DGY1', '2024-2025', '2024-03-01', '2024-03-02', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9053, 'Cascara', 'Romel', 'A', 'CS', 'Office Support Staff', 'College Infirmary', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9054, 'Cascara', 'Sherylyn', 'B', 'CS', 'Benefits In-charge', 'Human Resource Administration and Development Office', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9054, 'DGY1', '2024-2025', '2023-02-03', '2023-02-04', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9054, 'DGY2', '2024-2025', '2024-04-11', '2024-04-12', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9054, 'DGY3', '2024-2025', '2025-01-23', '2025-01-24', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9055, 'Castillo', 'Sarah Jane', 'O', 'CS', 'Admin Assistant', 'Rosendo U Castillo College of Law', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9055, 'DGY1', '2024-2025', '2023-03-03', '2023-03-04', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9056, 'Cerna', 'Genner', 'R', 'CS', 'Information Techonology Specialist', 'Finance Office', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9056, 'DGY1', '2024-2025', '2023-02-10', '2023-02-11', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9057, 'Cerna', 'Lanz', NULL, 'CS', 'Office Staff', 'President''s Office', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9057, 'DGY1', '2024-2025', '2024-11-21', '2024-11-22', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9058, 'Chiang', 'Aileen', 'I', 'CS', 'Office Staff', 'Finance Office', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9058, 'DGY1', '2024-2025', '2023-03-24', '2023-03-25', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9058, 'DGY2', '2024-2025', '2024-03-14', '2024-03-15', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9058, 'DGY3', '2024-2025', '2025-01-23', '2025-01-24', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9059, 'Ching', 'Leizl', 'C', 'CS', 'Librarian', 'Fr Jose T Bacatan SJ Library', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9059, 'DGY1', '2024-2025', '2023-02-10', '2023-02-11', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9059, 'DGY2', '2024-2025', '2024-04-11', '2024-04-12', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9059, 'DGY3', '2024-2025', '2025-01-23', '2025-01-24', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9060, 'Cinco', 'Billy', 'M', 'CS', 'Technical Staff', 'Fr Jose T Bacatan SJ Library', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9061, 'Colonia', 'Jovito', 'B', 'CS', 'Security Officer', 'University Security Office', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9061, 'DGY1', '2024-2025', '2024-03-01', '2024-03-02', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9061, 'DGY2', '2024-2025', '2025-02-13', '2025-02-14', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9062, 'Comahig', 'Ruth', 'B', 'CS', 'NSTP Formator', 'Social Awareness and CommunityService Involvement Office', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9062, 'DGY1', '2024-2025', '2023-03-10', '2023-03-11', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9062, 'DGY2', '2024-2025', '2025-02-13', '2025-02-14', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9063, 'Cristobal', 'Jay', 'E', 'CS', 'Coach', 'Athletics Office', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9064, 'Cruz', 'Mary Joy', 'L', 'CS', 'NSTP Formator', 'Social Awareness and CommunityService Involvement Office', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9065, 'Cuaresma', 'Neil Adrian', 'D', 'CS', 'Office Support Staff', 'Fr Jose T Bacatan SJ Library', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9066, 'Cuario', 'Laarni', 'P', 'CS', 'Office Support Staff', 'School of Medicine', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9066, 'DGY1', '2024-2025', '2023-01-27', '2023-01-28', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9067, 'Dabasol', 'Cristine', 'M', 'CS', 'Coach', 'Athletics Office', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9068, 'Dammang', 'Lera Lorenne', 'S', 'CS', 'Project Asst of DOST-AdZU AZUL Hub', 'Social Development Office', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9068, 'DGY1', '2024-2025', '2023-02-10', '2023-02-11', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9069, 'Dammang', 'Rhadz-Maynur', 'J', 'CS', 'NSTP Formator', 'Social Awareness and CommunityService Involvement Office', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9069, 'DGY1', '2024-2025', '2024-02-23', '2024-02-24', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9069, 'DGY2', '2024-2025', '2025-02-13', '2025-02-14', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9070, 'Dapat', 'Vie Honey Liores', 'G', 'CS', 'Special Staff', 'College Infirmary', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9071, 'De Castro', 'Aleli', 'A', 'CS', 'Compensation Manager', 'Human Resource Administration and Development Office', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9071, 'DGY1', '2024-2025', '2023-02-17', '2023-02-18', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9071, 'DGY2', '2024-2025', '2025-02-06', '2025-02-07', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9072, 'De Leon', 'Sandro Emil', 'V', 'CS', 'Office Support Staff', 'Vice President for Administartion Office', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9072, 'DGY1', '2024-2025', '2024-11-21', '2024-11-22', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9073, 'Degusman', 'Razma', 'O', 'CS', 'NSTP Formator', 'Social Awareness and CommunityService Involvement Office', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9073, 'DGY1', '2024-2025', '2023-03-03', '2023-03-04', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9073, 'DGY2', '2024-2025', '2024-03-21', '2024-03-22', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9073, 'DGY3', '2024-2025', '2025-01-23', '2025-01-24', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9074, 'Dela Cruz', 'Meghann Leah', 'C', 'CS', 'Program Officer', 'Ateneo Learning and Teaching Excellence Center', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9074, 'DGY1', '2024-2025', '2024-03-01', '2024-03-02', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9074, 'DGY2', '2024-2025', '2025-02-13', '2025-02-14', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9075, 'Delos Santos Jr', 'Expedito', 'M', 'CS', 'Coach', 'Athletics Office', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9076, 'Destacamento', 'Rejen', NULL, 'CS', 'Campus Minister', 'Campus Ministry Office', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9077, 'Diaz', 'Jenon', 'B', 'CS', 'Psychometrician', 'Center for Testing and Measurement', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9077, 'DGY1', '2024-2025', '2024-11-07', '2024-11-08', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9078, 'Diki', 'Joel', 'L', 'CS', 'Office Support Staff', 'Purchasing and Custodial Office', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9078, 'DGY1', '2024-2025', '2023-01-20', '2023-01-21', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9078, 'DGY2', '2024-2025', '2024-03-21', '2024-03-22', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9078, 'DGY3', '2024-2025', '2025-01-16', '2025-01-17', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9079, 'Dimaculangan', 'Giosimon', 'P', 'CS', 'Special Staff', 'Center for Information Technology Services', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9079, 'DGY1', '2024-2025', '2024-03-01', '2024-03-02', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9080, 'Diniay', 'Jhudiel Sean', 'D', 'CS', 'Asst Training & Dev. Officer', 'Ateneo Learning and Teaching Excellence Center', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9081, 'Domingo', 'Andrew', 'T', 'CS', 'Office Staff', 'Finance Office', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9081, 'DGY1', '2024-2025', '2023-03-10', '2023-03-11', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9082, 'Doren', 'Coleen', 'L', 'CS', 'Office Support Staff', 'Office of Student Affairs', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9082, 'DGY1', '2024-2025', '2023-01-20', '2023-01-21', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9082, 'DGY2', '2024-2025', '2024-04-11', '2024-04-12', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9082, 'DGY3', '2024-2025', '2025-01-23', '2025-01-24', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9083, 'Dumayag', 'Mickaella Joyce', 'Y', 'CS', 'Media & Communictaion Specialist', 'University Communications Office', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9083, 'DGY1', '2024-2025', '2023-01-20', '2023-01-21', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9083, 'DGY2', '2024-2025', '2025-02-13', '2025-02-14', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9084, 'Ebal', 'Gerald James', 'Y', 'CS', 'Research Associate', 'University Research Office', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9084, 'DGY1', '2024-2025', '2023-03-17', '2023-03-18', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9084, 'DGY2', '2024-2025', '2024-04-11', '2024-04-12', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9084, 'DGY3', '2024-2025', '2025-01-23', '2025-01-24', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9085, 'Ebreo', 'Annie', 'G', 'CS', 'Administrative Assistant', 'Office of the President', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9085, 'DGY1', '2024-2025', '2023-02-17', '2023-02-18', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9086, 'Egos', 'Gli Christian', 'R', 'CS', 'Manager', 'Fabrication Laboratory', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9087, 'Elola', 'Roberto', 'L', 'CS', 'Security Officer', 'University Security Office', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9087, 'DGY1', '2024-2025', '2024-02-23', '2024-02-24', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9087, 'DGY2', '2024-2025', '2025-02-06', '2025-02-07', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9088, 'Enriquez', 'Maria Geraldine', 'M', 'CS', 'Technical Staff', 'Fr Jose T Bacatan SJ Library', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9088, 'DGY1', '2024-2025', '2023-03-03', '2023-03-04', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9088, 'DGY2', '2024-2025', '2024-04-11', '2024-04-12', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9088, 'DGY3', '2024-2025', '2025-01-23', '2025-01-24', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9089, 'Enriquez', 'Patrick', 'A', 'CS', 'Technical Staff', 'Fr Jose T Bacatan SJ Library - Audio Visual Center', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9089, 'DGY1', '2024-2025', '2023-03-17', '2023-03-18', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9090, 'Espero', 'Anna Marie', 'R', 'CS', 'Librarian', 'Fr Jose T Bacatan SJ Library', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9091, 'Estorque', 'Meliza', 'M', 'CS', 'Office Staff', 'Finance Office', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9091, 'DGY1', '2024-2025', '2024-11-07', '2024-11-08', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9092, 'Evangelista', 'Justin', 'P', 'CS', 'Office Support Staff', 'Center for Information Technology Services', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9092, 'DGY1', '2024-2025', '2024-02-23', '2024-02-24', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9092, 'DGY2', '2024-2025', '2025-02-06', '2025-02-07', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9093, 'Fabia', 'Perilyn', 'C', 'CS', 'Office Support Staff', 'Ateneo Center for Culture and Arts', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9093, 'DGY1', '2024-2025', '2023-03-24', '2023-03-25', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9093, 'DGY2', '2024-2025', '2024-03-14', '2024-03-15', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9094, 'Fabian', 'Geoffrey', 'M', 'CS', 'Administrative Assistant', 'Center for Blended and Digital Learning', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9095, 'Faustino', 'Adrianne Kyle', 'G', 'CS', 'Guidance Counselor', 'College Guidance and Counseling Office', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9095, 'DGY1', '2024-2025', '2023-02-03', '2023-02-04', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9095, 'DGY2', '2024-2025', '2024-04-11', '2024-04-12', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9095, 'DGY3', '2024-2025', '2025-01-23', '2025-01-24', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9096, 'Fayluga', 'Jerome', 'M', 'CS', 'Special Staff', 'Center for Information Technology Services', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9096, 'DGY1', '2024-2025', '2024-11-07', '2024-11-08', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9097, 'Fernandez', 'Ruby', 'M', 'CS', 'Office Staff', 'Finance Office', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9097, 'DGY1', '2024-2025', '2024-11-21', '2024-11-22', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9098, 'Fernandez', 'Jerico', 'G', 'CS', 'Office Support Staff', 'Purchasing and Custodial Office', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9098, 'DGY1', '2024-2025', '2023-01-27', '2023-01-28', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9098, 'DGY2', '2024-2025', '2025-02-13', '2025-02-14', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9099, 'Fernandez', 'Reyvent', 'L', 'CS', 'Media & Communication Specialist', 'University Communications Office', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9100, 'Fernando', 'Jeremy', 'J', 'CS', 'Auxiliary Supervisor', 'Auxiliary Services', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9100, 'DGY1', '2024-2025', '2023-01-20', '2023-01-21', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9100, 'DGY2', '2024-2025', '2025-02-13', '2025-02-14', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9101, 'Filoteo', 'Mary Ann', 'M', 'CS', 'Technical Support Staff', 'College Science Laboratory', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9101, 'DGY1', '2024-2025', '2023-02-10', '2023-02-11', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9102, 'Filoteo', 'William', 'K', 'CS', 'Coach', 'Athletics Office', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9103, 'Francisco', 'Erica Marie', 'B', 'CS', 'Office Support Staff', 'Ateneo Learning and Teaching Excellence Center', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9103, 'DGY1', '2024-2025', '2023-01-27', '2023-01-28', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9104, 'Francisco', 'Mary Claire', 'B', 'CS', 'Office Staff', 'Finance Office', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9104, 'DGY1', '2024-2025', '2024-11-21', '2024-11-22', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9105, 'Fulton', 'Edna-May', 'L', 'CS', 'Program Officer', 'Ateneo Zam-Min Institute', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9106, 'Gagaracruz', 'Icelyn Pola', 'A', 'CS', 'Teller', 'Finance Office', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9106, 'DGY1', '2024-2025', '2024-11-21', '2024-11-22', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9107, 'Galvez', 'Raymund Brix', 'O', 'CS', 'Special Staff', 'Center for Information Technology Services', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9107, 'DGY1', '2024-2025', '2023-03-10', '2023-03-11', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9107, 'DGY2', '2024-2025', '2025-02-13', '2025-02-14', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9108, 'Garcia', 'Mila', 'G', 'CS', 'Office Support Staff', 'Registrar Office', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9108, 'DGY1', '2024-2025', '2023-02-10', '2023-02-11', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9109, 'Go', 'Jerico', NULL, 'CS', 'Special Staff', 'Center for Information Technology Services', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9110, 'Gonzaga', 'Winchester', 'M', 'CS', 'Coach', 'Athletics Office', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9111, 'Gonzales', 'Kenneth Rey', 'B', 'CS', 'Special Staff', 'Center for Information Technology Services', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9112, 'Gotis', 'John Ross', 'L', 'CS', 'Office Staff/ Mechanical Engineer', 'Physical Plant Office', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9112, 'DGY1', '2024-2025', '2024-01-27', '2024-01-28', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9113, 'Gregorio', 'J.B. Rosario', NULL, 'CS', 'Office Support Staff', 'College Registrar''s Office', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9113, 'DGY1', '2024-2025', '2024-11-07', '2024-11-08', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9114, 'Guillermo', 'Noralyn Rosario', 'M', 'CS', 'Office Support Staff', 'College Registrar''s Office', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9114, 'DGY1', '2024-2025', '2023-02-17', '2023-02-18', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9115, 'Hipolito', 'Arden Christian', 'L', 'CS', 'Project Manager for SUGPAT', 'Ateneo Learning and Teaching Excellence Center', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9116, 'Ibba', 'Mishiela', 'D', 'CS', 'Research Assistant  for CHAPP', 'School of Medicine', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9117, 'Jacinto', 'Cherramie', 'B', 'CS', 'Librarian', 'Fr Jose T Bacatan SJ Library', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9117, 'DGY1', '2024-2025', '2023-03-03', '2023-03-04', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9117, 'DGY2', '2024-2025', '2024-04-11', '2024-04-12', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9117, 'DGY3', '2024-2025', '2025-01-23', '2025-01-24', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9118, 'Jimenez', 'Ma. Grace', 'B', 'CS', 'Office Staff', 'Finance Office', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9118, 'DGY1', '2024-2025', '2023-01-27', '2023-01-28', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9118, 'DGY2', '2024-2025', '2024-03-21', '2024-03-22', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9118, 'DGY3', '2024-2025', '2025-01-23', '2025-01-24', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9119, 'Jimeno', 'Daryl', 'DC', 'CS', 'NSTP Formator', 'Social Awareness and CommunityService Involvement Office', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9119, 'DGY1', '2024-2025', '2023-03-24', '2023-03-25', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9119, 'DGY2', '2024-2025', '2024-03-21', '2024-03-22', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9119, 'DGY3', '2024-2025', '2025-01-16', '2025-01-17', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9120, 'Juarez', 'Joel', 'A', 'CS', 'Coach', 'Athletics Office', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9121, 'Julian', 'Brixson', 'C', 'CS', 'Area Coordinator for Zamboanga City', 'Ateneo Learning and Teaching Excellence Center', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9122, 'Landerito', 'Maria Johanna', 'R', 'CS', 'Office Staff', 'Finance Office', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9122, 'DGY1', '2024-2025', '2023-02-03', '2023-02-04', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9122, 'DGY2', '2024-2025', '2024-03-21', '2024-03-22', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9123, 'Lauron', 'Unielyn', 'M', 'CS', 'Office Support Staff', 'Social Awareness and CommunityService Involvement Office', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9123, 'DGY1', '2024-2025', '2024-03-01', '2024-03-02', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9123, 'DGY2', '2024-2025', '2025-02-13', '2025-02-14', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9124, 'Lebron', 'Yanver Aidrian', 'C', 'CS', 'Psychometrician', 'Center for Testing and Measurement', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9124, 'DGY1', '2024-2025', '2024-11-07', '2024-11-08', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9125, 'Ledesma', 'Euleigh Quin', 'S', 'CS', 'Special Staff', 'Center for Information Technology Services', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9125, 'DGY1', '2024-2025', '2024-03-01', '2024-03-02', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9126, 'Lim', 'Troy Gian', 'A', 'CS', 'Program Officer', 'Ateneo Center for Leadership and Governance', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9126, 'DGY1', '2024-2025', '2024-03-01', '2024-03-02', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9127, 'Lim', 'Aurelli Maria Bettina', 'A', 'CS', 'Campus Minister', 'Campus Ministry Office', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9128, 'Lim', 'Regina', 'D', 'CS', 'Office Support Staff', 'Center for Testing and Measurement', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9128, 'DGY1', '2024-2025', '2023-03-10', '2023-03-11', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9129, 'Lim', 'Sherry Gloria', 'A', 'CS', 'Office Support Staff', 'College Admissions and Aid Office', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9129, 'DGY1', '2024-2025', '2023-01-27', '2023-01-28', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9129, 'DGY2', '2024-2025', '2024-04-11', '2024-04-12', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9129, 'DGY3', '2024-2025', '2025-01-16', '2025-01-17', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9130, 'Lim', 'Andrei', 'M', 'CS', 'Assistant Operator', 'Fabrication Laboratory', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9131, 'Lim', 'Agnes', 'S', 'CS', 'Librarian', 'Fr Jose T Bacatan SJ Library', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9131, 'DGY1', '2024-2025', '2023-03-17', '2023-03-18', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9131, 'DGY2', '2024-2025', '2024-03-21', '2024-03-22', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9131, 'DGY3', '2024-2025', '2025-01-16', '2025-01-17', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9132, 'Lim', 'Maria Carlotta', 'B', 'CS', 'Office Staff', 'School of Medicine', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9132, 'DGY1', '2024-2025', '2023-03-10', '2023-03-11', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9132, 'DGY2', '2024-2025', '2025-02-13', '2025-02-14', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9133, 'Locson', 'Geraldine', 'G', 'CS', 'Special Staff', 'College Infirmary', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9133, 'DGY1', '2024-2025', '2024-02-23', '2024-02-24', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9133, 'DGY2', '2024-2025', '2025-02-20', '2025-02-21', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9134, 'Loreto', 'Denise Keith', 'R', 'CS', 'Office Support Staff', 'Quality Assurance and Strategic Management Office', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9135, 'Longakit', 'Wendy', 'C', 'CS', 'Assistant Director', 'Physical Plant Office', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9135, 'DGY1', '2024-2025', '2023-03-10', '2023-03-11', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9136, 'Losabia', 'Erica Joy', 'B', 'CS', 'Program Officer', 'Social Awareness and CommunityService Involvement Office', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9136, 'DGY1', '2024-2025', '2024-02-23', '2024-02-24', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9136, 'DGY2', '2024-2025', '2025-02-13', '2025-02-14', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9137, 'Lozano Jr.', 'Vergel', 'O', 'CS', 'Assistant Advocacy and Communication Officer', 'Ateneo Learning and Teaching Excellence Center', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9138, 'Lumigis', 'Rose Jasmine', 'N', 'CS', 'Office Support Staff', 'College Admissions and Aid Office', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9138, 'DGY1', '2024-2025', '2024-11-21', '2024-11-22', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9139, 'Luza', 'Eva', 'DF', 'CS', 'Office Staff', 'President''s Office', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9139, 'DGY1', '2024-2025', '2023-03-03', '2023-03-04', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9139, 'DGY2', '2024-2025', '2025-02-06', '2025-02-07', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9140, 'Mabanal', 'Marilou', 'O', 'CS', 'Office Staff', 'Human Resource Administration and Development Office', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9140, 'DGY1', '2024-2025', '2024-03-01', '2024-03-02', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9140, 'DGY2', '2024-2025', '2025-02-06', '2025-02-07', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9141, 'Macaroy', 'Yya Micaela', 'A', 'CS', 'Office Support Staff', 'Formation Office', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9142, 'Maceren', 'Andy', 'A', 'CS', 'Technical Staff', 'Center for Information Technology Services', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9142, 'DGY1', '2024-2025', '2023-02-03', '2023-02-04', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9143, 'Macing', 'Valerhie', 'S', 'CS', 'Office Support Staff', 'Rosendo U Castillo College of Law', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9143, 'DGY1', '2024-2025', '2023-03-10', '2023-03-11', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9144, 'Mancao', 'Shaina', 'F', 'CS', 'Student Account', 'Finance Office', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9144, 'DGY1', '2024-2025', '2023-03-24', '2023-03-25', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9144, 'DGY2', '2024-2025', '2025-02-20', '2025-02-21', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9145, 'Mandi', 'Rowayne Cecil', 'D', 'CS', 'Office Staff', 'School of Medicine', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9145, 'DGY1', '2024-2025', '2023-03-17', '2023-03-18', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9146, 'Maniago', 'Monique', 'A', 'CS', 'Psychometrician', 'Center for Testing and Measurement', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9146, 'DGY1', '2024-2025', '2024-03-01', '2024-03-02', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9146, 'DGY2', '2024-2025', '2025-02-06', '2025-02-07', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9147, 'Mariano', 'Nelson', 'B', 'CS', 'Office Support Staff', 'Registrar Office', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9147, 'DGY1', '2024-2025', '2023-03-03', '2023-03-04', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9147, 'DGY2', '2024-2025', '2024-03-21', '2024-03-22', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9148, 'Martin', 'Ingrid Mae', 'A', 'CS', 'Office Staff', 'Finance Office', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9148, 'DGY1', '2024-2025', '2024-11-07', '2024-11-08', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9149, 'Marzan', 'John Francis', 'D', 'CS', 'Technical Staff', 'Center for Information Technology Services', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9150, 'Matarlo', 'Rona Marie', 'I', 'CS', 'Office Support Staff', 'Alumni and Career Excellence Office', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9150, 'DGY1', '2024-2025', '2024-11-21', '2024-11-22', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9151, 'Mayonila', 'Dexter Jude', 'B', 'CS', 'Canteen Coordinator', 'Sauras/Canteen/Tienda/JMR Office', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9151, 'DGY1', '2024-2025', '2023-03-17', '2023-03-18', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9151, 'DGY2', '2024-2025', '2024-03-14', '2024-03-15', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9151, 'DGY3', '2024-2025', '2025-01-23', '2025-01-24', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9152, 'Melano', 'Anna Lyn', 'L', 'CS', 'Special Staff', 'College Infirmary', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9152, 'DGY1', '2024-2025', '2023-02-10', '2023-02-11', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9152, 'DGY2', '2024-2025', '2025-02-20', '2025-02-21', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9153, 'Mendoza', 'Angelita', 'F', 'CS', 'Office Staff', 'Finance Office', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9153, 'DGY1', '2024-2025', '2023-02-10', '2023-02-11', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9154, 'Mercader', 'Leonides', 'I', 'CS', 'Coach', 'Athletics Office', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9155, 'Miguel', 'Marilyn', 'T', 'CS', 'Research Assistant', 'University Research Office', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9155, 'DGY1', '2024-2025', '2023-01-20', '2023-01-21', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9155, 'DGY2', '2024-2025', '2024-03-14', '2024-03-15', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9155, 'DGY3', '2024-2025', '2025-01-16', '2025-01-17', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9156, 'Mohammad', 'Ma. Suzette', 'G', 'CS', 'Office Support Staff', 'Lantaka Admintration Office', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9156, 'DGY1', '2024-2025', '2024-02-23', '2024-02-24', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9156, 'DGY2', '2024-2025', '2025-02-06', '2025-02-07', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9157, 'Napao', 'Girlie', 'D', 'CS', 'Office Support Staff', 'Center for Information Technology Services', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9157, 'DGY1', '2024-2025', '2023-01-27', '2023-01-28', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9157, 'DGY2', '2024-2025', '2024-03-14', '2024-03-15', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9157, 'DGY3', '2024-2025', '2025-01-16', '2025-01-17', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9158, 'Narvasa', 'Mellany', 'S', 'CS', 'Office Staff', 'College Guidance and Counseling Office', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9158, 'DGY1', '2024-2025', '2023-02-17', '2023-02-18', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9158, 'DGY2', '2024-2025', '2024-03-21', '2024-03-22', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9158, 'DGY3', '2024-2025', '2025-01-16', '2025-01-17', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9159, 'Natividad', 'Marvin', 'D', 'CS', 'Civil Engineer', 'Physical Plant Office', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9159, 'DGY1', '2024-2025', '2024-03-01', '2024-03-02', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9159, 'DGY2', '2024-2025', '2025-02-20', '2025-02-21', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9160, 'Ong', 'Raymond', 'T', 'CS', 'Office Support Staff', 'Ateneo Center for Environment and Sustainability', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9160, 'DGY1', '2024-2025', '2023-01-20', '2023-01-21', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9161, 'Panganiban', 'Yumaira', 'U', 'CS', 'Internal Auditor - OIC', 'Internal Auditor Office', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9161, 'DGY1', '2024-2025', '2024-11-21', '2024-11-22', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9162, 'Panganiban', 'Angelique', 'T', 'CS', 'Office Support Staff', 'School of Medicine', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9162, 'DGY1', '2024-2025', '2023-02-03', '2023-02-04', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9163, 'Pantaleon', 'Ma. Isabel', 'D', 'CS', 'Program Officer for Health', 'Center for Community Extension Services', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9163, 'DGY1', '2024-2025', '2024-11-07', '2024-11-08', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9164, 'Parao', 'Laurence', 'L', 'CS', 'Office Support Staff', 'School of Medicine', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9164, 'DGY1', '2024-2025', '2023-02-10', '2023-02-11', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9165, 'Pasion', 'Gabriel Moises', 'B', 'CS', 'Special Staff', 'Center for Information Technology Services', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9165, 'DGY1', '2024-2025', '2024-03-01', '2024-03-02', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9166, 'Pataroque', 'Victor', 'V', 'CS', 'Office Support Staff', 'Purchasing and Custodial Office', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9166, 'DGY1', '2024-2025', '2024-11-07', '2024-11-08', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9167, 'Patiño', 'Jeleth', 'P', 'CS', 'Program Officer', 'Social Awareness and CommunityService Involvement Office', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9167, 'DGY1', '2024-2025', '2023-01-27', '2023-01-28', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9167, 'DGY2', '2024-2025', '2024-03-21', '2024-03-22', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9167, 'DGY3', '2024-2025', '2025-01-23', '2025-01-24', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9168, 'Pecson', 'Faye Souvenir', 'L', 'CS', 'HR Acquisition and Operations Officer', 'Human Resource Administration and Development Office', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9169, 'Perez', 'Lovey Niño Jey', 'P', 'CS', 'Office Support Staff', 'Ateneo Center for Environment and Sustainability', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9170, 'Pong', 'Marilou', 'L', 'CS', 'Office Staff', 'College Admissions and Aid Office', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9170, 'DGY1', '2024-2025', '2023-03-17', '2023-03-18', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9170, 'DGY2', '2024-2025', '2024-04-11', '2024-04-12', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9170, 'DGY3', '2024-2025', '2025-01-23', '2025-01-24', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9171, 'Porto', 'Ethel', 'R', 'CS', 'Technical Staff', 'College of Nursing', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9171, 'DGY1', '2024-2025', '2023-01-20', '2023-01-21', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9172, 'Potestas', 'Gernalyn', 'T', 'CS', 'Campus Minister', 'Campus Ministry Office', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9172, 'DGY2', '2024-2025', '2025-02-20', '2025-02-21', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9173, 'Punzalan', 'Jaime Kristoffer', 'T', 'CS', 'Asst Program Coordinator', 'School of Medicine', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9174, 'Punzalan', 'Mary Germeyn', 'D', 'CS', 'Asst Program Coordinator', 'School of Medicine', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9175, 'Quijano', 'Maria Victoria', 'T', 'CS', 'Office Staff', 'Finance Office', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9175, 'DGY1', '2024-2025', '2023-02-17', '2023-02-18', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9176, 'Rabanal', 'Marc Zuriel', 'R', 'CS', 'Office Support Staff', 'Office of Student Affairs', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9176, 'DGY1', '2024-2025', '2023-01-27', '2023-01-28', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9176, 'DGY2', '2024-2025', '2024-04-11', '2024-04-12', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9176, 'DGY3', '2024-2025', '2025-01-16', '2025-01-17', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9177, 'Rabanes', 'Edilyn', 'B', 'CS', 'Office Support Staff', 'Vice President for Higher Education', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9178, 'Rabara', 'Khristine', 'B', 'CS', 'Office Support Staff', 'School of Medicine', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9178, 'DGY1', '2024-2025', '2023-02-17', '2023-02-18', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9178, 'DGY2', '2024-2025', '2024-04-11', '2024-04-12', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9179, 'Rafon', 'Robert Jay', 'F', 'CS', 'Electronics & Audio-Visual Technician', 'Sauras/Canteen/Tienda/JMR Office', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9179, 'DGY1', '2024-2025', '2023-03-24', '2023-03-25', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9179, 'DGY2', '2024-2025', '2024-03-21', '2024-03-22', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9179, 'DGY3', '2024-2025', '2025-01-23', '2025-01-24', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9180, 'Ramillano', 'Aleli', 'J', 'CS', 'Office Support Staff', 'University Research Office', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9180, 'DGY1', '2024-2025', '2023-03-24', '2023-03-25', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9180, 'DGY2', '2024-2025', '2024-03-21', '2024-03-22', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9180, 'DGY3', '2024-2025', '2025-02-06', '2025-02-07', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9181, 'Ramirez', 'Dannica', 'R', 'CS', 'Office Support Staff', 'Alumni and Career Excellence Office', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9182, 'Ramirez Jr.', 'Nadjmi', 'A', 'CS', 'Office Support Staff', 'College of Nursing - Review Center', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9182, 'DGY1', '2024-2025', '2024-11-21', '2024-11-22', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9183, 'Ramos', 'John Hartford', 'B', 'CS', 'Office Support Staff', 'Office of Student Affairs', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9183, 'DGY1', '2024-2025', '2023-02-03', '2023-02-04', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9183, 'DGY2', '2024-2025', '2024-03-21', '2024-03-22', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9183, 'DGY3', '2024-2025', '2025-01-23', '2025-01-24', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9184, 'Regaspi', 'Camille', 'L', 'CS', 'Secretary', 'Global Paths - Internationalization Office', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9185, 'Reyes', 'Rowel', 'F', 'CS', 'Office Support Staff', 'Purchasing and Custodial Office', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9185, 'DGY1', '2024-2025', '2023-02-03', '2023-02-04', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9185, 'DGY2', '2024-2025', '2024-03-21', '2024-03-22', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9185, 'DGY3', '2024-2025', '2025-01-23', '2025-01-24', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9186, 'Rio', 'Gilbert', 'A.', 'CS', 'Office Support Staff', 'Center for Community Extension Services', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9186, 'DGY1', '2024-2025', '2023-02-03', '2023-02-04', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9186, 'DGY2', '2024-2025', '2025-02-20', '2025-02-21', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9187, 'Rio', 'Marissa', 'E', 'CS', 'Secretary', 'Purchasing and Custodial Office', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9187, 'DGY1', '2024-2025', '2023-02-10', '2023-02-11', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9187, 'DGY2', '2024-2025', '2025-02-13', '2025-02-14', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9188, 'Rivera', 'April Gay', 'M', 'CS', 'Office Support Staff', 'Campus Ministry Office', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9188, 'DGY2', '2024-2025', '2025-02-06', '2025-02-07', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9189, 'Rojas', 'Allyanna Therese', 'V', 'CS', 'Coach', 'Athletics Office', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9190, 'Roldan', 'Jumar', 'C', 'CS', 'Technical Staff', 'Center for Information Technology Services', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9190, 'DGY1', '2024-2025', '2024-11-07', '2024-11-08', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9191, 'Romanggar', 'Philip', 'S', 'CS', 'Information System Staff', 'Human Resource Administration and Development Office', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9192, 'Ruiz', 'John Federick', 'P', 'CS', 'Coach', 'Athletics Office', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9193, 'Russell Jr.', 'Jube', NULL, 'CS', 'IT Staff', 'Registrar Office', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9194, 'Rublico', 'Anna Marie', 'V', 'CS', 'Librarian', 'Fr Jose T Bacatan SJ Library', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9194, 'DGY1', '2024-2025', '2023-03-24', '2023-03-25', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9194, 'DGY2', '2024-2025', '2024-03-21', '2024-03-22', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9194, 'DGY3', '2024-2025', '2025-01-23', '2025-01-24', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9195, 'Saavedra Jr', 'Victoriano', 'C', 'CS', 'Office Support Staff', 'School of Medicine', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9195, 'DGY1', '2024-2025', '2023-03-03', '2023-03-04', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9195, 'DGY2', '2024-2025', '2024-03-21', '2024-03-22', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9196, 'Sabac', 'Victoria', 'D', 'CS', 'Office Support Staff', 'Fr Jose T Bacatan SJ Library', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9196, 'DGY1', '2024-2025', '2023-02-03', '2023-02-04', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9197, 'Sahali', 'Nurjay', 'M', 'CS', 'Coach', 'Athletics Office', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9198, 'Sajulga', 'Wilbert', 'B', 'CS', 'Program Officer for Education', 'Center for Community Extension Services', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9198, 'DGY1', '2024-2025', '2023-02-10', '2023-02-11', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9198, 'DGY2', '2024-2025', '2025-02-20', '2025-02-21', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9199, 'Santillan', 'Rijhin Christian', 'T', 'CS', 'Office Support Staff', 'Fabrication Laboratory', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9200, 'Santos', 'Rigelin Grace', 'B', 'CS', 'Research Assistant', 'University Research Office', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9200, 'DGY1', '2024-2025', '2023-01-27', '2023-01-28', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9201, 'Sastre', 'Teresita', 'B', 'CS', 'Office Staff', 'Finance Office', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9201, 'DGY1', '2024-2025', '2023-03-10', '2023-03-11', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9201, 'DGY2', '2024-2025', '2025-02-13', '2025-02-14', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9202, 'Segayo', 'Kristine Mae Isabelle', 'D', 'CS', 'Project Asst of DOST-AdZU AZUL Hub', 'Social Development Office', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9203, 'Semil', 'Shannen Marthy', 'C', 'CS', 'Training Staff', 'Human Resource Administration and Development Office', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9204, 'Serundo', 'Adilo', 'S', 'CS', 'Coach', 'Athletics Office', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9205, 'Simbajon', 'Cecile', 'B', 'CS', 'Training & Development Officer', 'Human Resource Administration and Development Office', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9205, 'DGY1', '2024-2025', '2023-03-10', '2023-03-11', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9205, 'DGY2', '2024-2025', '2024-04-11', '2024-04-12', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9205, 'DGY3', '2024-2025', '2025-01-23', '2025-01-24', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9206, 'Solaran', 'Susette', 'B', 'CS', 'Office Staff', 'Center for Information Technology Services', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9206, 'DGY1', '2024-2025', '2023-03-10', '2023-03-11', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9207, 'Soriño', 'John Griffin', 'A', 'CS', 'Office Support Staff', 'Center for Testing and Measurement', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9207, 'DGY1', '2024-2025', '2024-11-21', '2024-11-22', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9208, 'Sta. Teresa', 'Loreta', 'R', 'CS', 'Project Officer', 'Center for Community Extension Services', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9209, 'Sta. Teresa', 'Parisa', 'H', 'CS', 'Librarian', 'Fr Jose T Bacatan SJ Library', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9209, 'DGY1', '2024-2025', '2024-02-23', '2024-02-24', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9210, 'Suarez', 'Khryszha Maye', 'S', 'CS', 'Registrar', 'Rosendo U Castillo College of Law', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9211, 'Sumergido', 'Maria Carla', 'N', 'CS', 'Office Staff', 'Social Development Office', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9212, 'Supe', 'Arielah Jean', 'E', 'CS', 'NSTP Formator', 'Social Awareness and CommunityService Involvement Office', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9213, 'Tanginan', 'Ramil', 'Q', 'CS', 'Coach', 'Athletics Office', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9214, 'Tarroza', 'Carlo', NULL, 'CS', 'Coach', 'Athletics Office', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9215, 'Tingson', 'Sarah Noreen', 'I', 'CS', 'Office Support Staff', 'University Security Office', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9215, 'DGY1', '2024-2025', '2023-02-17', '2023-02-18', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9215, 'DGY2', '2024-2025', '2025-02-06', '2025-02-07', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9216, 'Tuazon', 'Emelina', 'C', 'CS', 'Librarian', 'Fr Jose T Bacatan SJ Library', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9216, 'DGY1', '2024-2025', '2023-01-20', '2023-01-21', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9217, 'Tubio', 'Jennifer', 'L', 'CS', 'Office Support Staff', 'Fr Jose T Bacatan SJ Library', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9217, 'DGY1', '2024-2025', '2023-02-10', '2023-02-11', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9217, 'DGY2', '2024-2025', '2024-07-11', '2024-07-12', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9217, 'DGY3', '2024-2025', '2025-01-16', '2025-01-17', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9218, 'Urbano', 'Myra', 'B', 'CS', 'Office Staff', 'University Communications Office', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9218, 'DGY1', '2024-2025', '2023-02-10', '2023-02-11', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9219, 'Usman', 'Jaeramarga', 'U', 'CS', 'Office Support Staff', 'Office of Mission Integration and Development', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9220, 'Valmonte', 'Peter Emmanuel', 'C', 'CS', 'Communications Officer', 'Office for Advancement', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9221, 'Vecina', 'Richter Robin', 'M', 'CS', 'Special Support Staff', 'Center for Information Technology Services', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9221, 'DGY1', '2024-2025', '2023-01-27', '2023-01-28', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9222, 'Velos', 'Albert', 'M', 'CS', 'Coach', 'Athletics Office', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9223, 'Ventura', 'Jayton', 'A', 'CS', 'Office Support Staff', 'Purchasing and Custodial Office', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9223, 'DGY1', '2024-2025', '2024-11-21', '2024-11-22', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9224, 'Vergara', 'Rod Adrian', 'E', 'CS', 'Special Staff', 'Center for Information Technology Services', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9224, 'DGY1', '2024-2025', '2024-11-07', '2024-11-08', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9225, 'Vesagas', 'Francis Ray', 'E', 'CS', 'Technical Staff', 'University Communications Office', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9225, 'DGY1', '2024-2025', '2023-03-03', '2023-03-04', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9226, 'Vicente', 'Jerwin', 'A', 'CS', 'Technical Staff', 'Center for Information Technology Services', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9226, 'DGY1', '2024-2025', '2023-02-17', '2023-02-18', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9226, 'DGY2', '2024-2025', '2024-03-14', '2024-03-15', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9227, 'Villamer', 'Shareeka Jean', 'A', 'CS', 'Office Support Staff', 'Alumni and Career Excellence Office', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9228, 'Villanueva', 'Vincent', 'M', 'CS', 'Coach', 'Athletics Office', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9229, 'Villanueva', 'Rowena', 'F', 'CS', 'Teller', 'Finance Office', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9229, 'DGY1', '2024-2025', '2024-11-21', '2024-11-22', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (9230, 'Zapanta', 'Jaime Danilo', 'A', 'CS', 'Technical Staff', 'University Communications Office', NULL, 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (9230, 'DGY1', '2024-2025', '2023-03-10', '2023-03-11', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (8001, 'Alaan', 'Nilo', NULL, 'PPO', NULL, NULL, 'ALOHA', 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8001, 'Retreat', 'TBD', '2024-02-02', '2024-02-03', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8001, 'Retreat', 'TBD', NULL, NULL, 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (8002, 'Alberto', 'Rolly', NULL, 'PPO', NULL, NULL, 'ALOHA', 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8002, 'Retreat', 'TBD', '2024-02-02', '2024-02-03', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8002, 'Retreat', 'TBD', NULL, NULL, 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (8003, 'Alfaro', 'Anicita', NULL, 'PPO', NULL, NULL, 'ALOHA', 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8003, 'Retreat', 'TBD', '2024-02-02', '2024-02-03', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8003, 'Retreat', 'TBD', NULL, NULL, 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (8004, 'Almonte', 'Mark Kenneth', NULL, 'PPO', NULL, NULL, 'REGULAR', 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8004, 'Retreat', 'TBD', '2024-02-02', '2024-02-03', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (8005, 'Anastacio', 'Richard', NULL, 'PPO', NULL, NULL, 'ALOHA', 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8005, 'Retreat', 'TBD', '2024-02-02', '2024-02-03', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (8006, 'Angeles', 'Rommel', NULL, 'PPO', NULL, NULL, 'REGULAR', 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8006, 'Retreat', 'TBD', '2024-02-02', '2024-02-03', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8006, 'Retreat', 'TBD', NULL, NULL, 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (8007, 'Araneta', 'Joselita', NULL, 'PPO', NULL, NULL, 'REGULAR', 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8007, 'Retreat', 'TBD', '2024-02-02', '2024-02-03', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8007, 'Retreat', 'TBD', NULL, NULL, 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (8008, 'Arcillas', 'Gerson', NULL, 'PPO', NULL, NULL, 'ALOHA', 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8008, 'Retreat', 'TBD', NULL, NULL, 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (8009, 'Aspacio', 'Marlon', NULL, 'PPO', NULL, NULL, 'REGULAR', 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (8010, 'Baldesamos', 'Enjanet', NULL, 'PPO', NULL, NULL, 'ALOHA', 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8010, 'Retreat', 'TBD', '2024-02-02', '2024-02-03', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8010, 'Retreat', 'TBD', NULL, NULL, 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (8011, 'Baligasa', 'Sherwin', NULL, 'PPO', NULL, NULL, 'ALOHA', 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8011, 'Retreat', 'TBD', NULL, NULL, 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (8012, 'Ballena', 'Julio', NULL, 'PPO', NULL, NULL, 'ALOHA', 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8012, 'Retreat', 'TBD', '2024-02-02', '2024-02-03', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8012, 'Retreat', 'TBD', NULL, NULL, 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (8013, 'Banua', 'Alvin', NULL, 'PPO', NULL, NULL, 'REGULAR', 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (8014, 'Bayot', 'Ralph', NULL, 'PPO', NULL, NULL, 'ALOHA', 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8014, 'Retreat', 'TBD', NULL, NULL, 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (8015, 'Bello', 'Reymark', NULL, 'PPO', NULL, NULL, 'ALOHA', 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8015, 'Retreat', 'TBD', '2024-02-16', '2024-02-17', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (8016, 'Bonifacio', 'Josel', NULL, 'PPO', NULL, NULL, 'ALOHA', 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8016, 'Retreat', 'TBD', '2024-02-02', '2024-02-03', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8016, 'Retreat', 'TBD', NULL, NULL, 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (8017, 'Cabanero', 'Caires', NULL, 'PPO', NULL, NULL, 'ALOHA', 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8017, 'Retreat', 'TBD', NULL, NULL, 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (8018, 'Cabato', 'Rommel', NULL, 'PPO', NULL, NULL, 'REGULAR', 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8018, 'Retreat', 'TBD', '2024-02-02', '2024-02-03', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8018, 'Retreat', 'TBD', NULL, NULL, 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (8019, 'Caloted', 'Janiano', NULL, 'PPO', NULL, NULL, 'ALOHA', 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8019, 'Retreat', 'TBD', NULL, NULL, 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (8020, 'Clemente', 'Jomer', NULL, 'PPO', NULL, NULL, 'ALOHA', 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8020, 'Retreat', 'TBD', '2024-02-16', '2024-02-17', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8020, 'Retreat', 'TBD', NULL, NULL, 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (8021, 'Columno', 'Ernesto', NULL, 'PPO', NULL, NULL, 'ALOHA', 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8021, 'Retreat', 'TBD', NULL, NULL, 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (8022, 'Cudia', 'Edison', NULL, 'PPO', NULL, NULL, 'ALOHA', 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8022, 'Retreat', 'TBD', NULL, NULL, 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (8023, 'Cupta', 'Publita', NULL, 'PPO', NULL, NULL, 'ALOHA', 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8023, 'Retreat', 'TBD', NULL, NULL, 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (8024, 'Damian', 'Arnold', NULL, 'PPO', NULL, NULL, 'REGULAR', 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8024, 'Retreat', 'TBD', '2024-02-16', '2024-02-17', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8024, 'Retreat', 'TBD', NULL, NULL, 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (8025, 'Danag', 'Janet', NULL, 'PPO', NULL, NULL, 'ALOHA', 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8025, 'Retreat', 'TBD', '2024-02-16', '2024-02-17', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8025, 'Retreat', 'TBD', NULL, NULL, 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (8026, 'Daud', 'AL Hasbi', NULL, 'PPO', NULL, NULL, 'ALOHA', 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8026, 'Retreat', 'TBD', NULL, NULL, 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (8027, 'Degalicia', 'Roselyn', NULL, 'PPO', NULL, NULL, 'ALOHA', 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8027, 'Retreat', 'TBD', NULL, NULL, 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (8028, 'Deirio', 'Gomersendo', NULL, 'PPO', NULL, NULL, 'ALOHA', 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8028, 'Retreat', 'TBD', '2024-02-16', '2024-02-17', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8028, 'Retreat', 'TBD', NULL, NULL, 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (8029, 'Dela Cerna', 'Romulo', NULL, 'PPO', NULL, NULL, 'ALOHA', 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8029, 'Retreat', 'TBD', '2024-02-16', '2024-02-17', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8029, 'Retreat', 'TBD', NULL, NULL, 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (8030, 'Dela Cerna', 'Alex', NULL, 'PPO', NULL, NULL, 'ALOHA', 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8030, 'Retreat', 'TBD', '2024-02-02', '2024-02-03', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8030, 'Retreat', 'TBD', NULL, NULL, 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (8031, 'Dela Cruz', 'Albert', NULL, 'PPO', NULL, NULL, 'ALOHA', 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (8032, 'Dela Cruz', 'Jonathan', NULL, 'PPO', NULL, NULL, 'ALOHA', 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8032, 'Retreat', 'TBD', NULL, NULL, 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (8033, 'Delgado', 'Kevin', NULL, 'PPO', NULL, NULL, 'ALOHA', 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8033, 'Retreat', 'TBD', '2024-02-02', '2024-02-03', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8033, 'Retreat', 'TBD', NULL, NULL, 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (8034, 'Delos Reyes', 'Joebert', NULL, 'PPO', NULL, NULL, 'ALOHA', 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8034, 'Retreat', 'TBD', '2024-02-16', '2024-02-17', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8034, 'Retreat', 'TBD', NULL, NULL, 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (8035, 'Delos Reyes', 'Edwin', NULL, 'PPO', NULL, NULL, 'ALOHA', 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8035, 'Retreat', 'TBD', '2024-02-16', '2024-02-17', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8035, 'Retreat', 'TBD', NULL, NULL, 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (8036, 'Delos Santos', 'Rolando', NULL, 'PPO', NULL, NULL, 'ALOHA', 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8036, 'Retreat', 'TBD', '2024-02-16', '2024-02-17', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8036, 'Retreat', 'TBD', NULL, NULL, 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (8037, 'Enojo', 'Rogelio', NULL, 'PPO', NULL, NULL, 'REGULAR', 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8037, 'Retreat', 'TBD', '2024-02-02', '2024-02-03', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8037, 'Retreat', 'TBD', NULL, NULL, 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (8038, 'Enojo', 'Roland', NULL, 'PPO', NULL, NULL, 'REGULAR', 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8038, 'Retreat', 'TBD', '2024-02-16', '2024-02-17', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8038, 'Retreat', 'TBD', NULL, NULL, 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (8039, 'Fabia', 'Rizjo', NULL, 'PPO', NULL, NULL, 'ALOHA', 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8039, 'Retreat', 'TBD', '2024-02-02', '2024-02-03', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (8040, 'Fernandez', 'Liezel Geames', NULL, 'PPO', NULL, NULL, 'REGULAR', 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8040, 'Retreat', 'TBD', NULL, NULL, 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (8041, 'Fernandez', 'Christopher', NULL, 'PPO', NULL, NULL, 'ALOHA', 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (8042, 'Fernandez', 'Henry', NULL, 'PPO', NULL, NULL, 'ALOHA', 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8042, 'Retreat', 'TBD', '2024-02-16', '2024-02-17', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8042, 'Retreat', 'TBD', NULL, NULL, 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (8043, 'Fernando', 'Ginalyn', NULL, 'PPO', NULL, NULL, 'REGULAR', 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8043, 'Retreat', 'TBD', NULL, NULL, 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (8044, 'Fernando', 'Randy', NULL, 'PPO', NULL, NULL, 'REGULAR', 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8044, 'Retreat', 'TBD', NULL, NULL, 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (8045, 'Fernando', 'Chris john', NULL, 'PPO', NULL, NULL, 'ALOHA', 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8045, 'Retreat', 'TBD', NULL, NULL, 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (8046, 'Fernando', 'Jeremy', NULL, 'PPO', NULL, NULL, 'REGULAR', 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8046, 'Retreat', 'TBD', NULL, NULL, 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (8047, 'Francisco', 'Noviel Vin', NULL, 'PPO', NULL, NULL, 'ALOHA', 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8047, 'Retreat', 'TBD', '2024-02-16', '2024-02-17', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8047, 'Retreat', 'TBD', NULL, NULL, 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (8048, 'Francsico', 'Erwin', NULL, 'PPO', NULL, NULL, 'ALOHA', 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8048, 'Retreat', 'TBD', '2024-02-16', '2024-02-17', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8048, 'Retreat', 'TBD', NULL, NULL, 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (8049, 'Fuastino', 'Freddie', NULL, 'PPO', NULL, NULL, 'ALOHA', 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8049, 'Retreat', 'TBD', NULL, NULL, 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (8050, 'Gaganting', 'Felicito', NULL, 'PPO', NULL, NULL, 'REGULAR', 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (8051, 'Gaganting Cruz', 'Kenneth', NULL, 'PPO', NULL, NULL, 'ALOHA', 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8051, 'Retreat', 'TBD', '2024-02-02', '2024-02-03', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8051, 'Retreat', 'TBD', NULL, NULL, 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (8052, 'Gagantingcruz', 'Leonel', NULL, 'PPO', NULL, NULL, 'ALOHA', 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8052, 'Retreat', 'TBD', '2024-02-16', '2024-02-17', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8052, 'Retreat', 'TBD', NULL, NULL, 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (8053, 'Gajardo', 'Erwin', NULL, 'PPO', NULL, NULL, 'REGULAR', 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8053, 'Retreat', 'TBD', '2024-02-02', '2024-02-03', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8053, 'Retreat', 'TBD', NULL, NULL, 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (8054, 'Garcing', 'Kate Krizzel', NULL, 'PPO', NULL, NULL, 'REGULAR', 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8054, 'Retreat', 'TBD', NULL, NULL, 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (8055, 'Garcia', 'Michael', NULL, 'PPO', NULL, NULL, 'ALOHA', 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8055, 'Retreat', 'TBD', '2024-02-02', '2024-02-03', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8055, 'Retreat', 'TBD', NULL, NULL, 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (8056, 'Garcia', 'Eric Lyod', NULL, 'PPO', NULL, NULL, 'ALOHA', 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8056, 'Retreat', 'TBD', NULL, NULL, 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (8057, 'Gaygay', 'Waldinilo', NULL, 'PPO', NULL, NULL, 'ALOHA', 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8057, 'Retreat', 'TBD', '2024-02-02', '2024-02-03', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8057, 'Retreat', 'TBD', NULL, NULL, 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (8058, 'Gelizon', 'Donny', NULL, 'PPO', NULL, NULL, 'ALOHA', 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8058, 'Retreat', 'TBD', NULL, NULL, 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (8059, 'Gonzales', 'Oscar', NULL, 'PPO', NULL, NULL, 'REGULAR', 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8059, 'Retreat', 'TBD', NULL, NULL, 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (8060, 'Gregorio', 'Annaliza', NULL, 'PPO', NULL, NULL, 'REGULAR', 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8060, 'Retreat', 'TBD', '2024-02-16', '2024-02-17', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8060, 'Retreat', 'TBD', NULL, NULL, 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (8061, 'Gregorio', 'Kevin', NULL, 'PPO', NULL, NULL, 'ALOHA', 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8061, 'Retreat', 'TBD', NULL, NULL, 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (8062, 'Guevara', 'Lowel', NULL, 'PPO', NULL, NULL, 'REGULAR', 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8062, 'Retreat', 'TBD', '2024-02-02', '2024-02-03', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8062, 'Retreat', 'TBD', NULL, NULL, 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (8063, 'Hisalan', 'Vincent', NULL, 'PPO', NULL, NULL, 'ALOHA', 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8063, 'Retreat', 'TBD', '2024-02-16', '2024-02-17', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8063, 'Retreat', 'TBD', NULL, NULL, 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (8064, 'Jimenez', 'Allen', NULL, 'PPO', NULL, NULL, 'ALOHA', 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8064, 'Retreat', 'TBD', '2024-02-02', '2024-02-03', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8064, 'Retreat', 'TBD', NULL, NULL, 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (8065, 'Julian', 'Roal', NULL, 'PPO', NULL, NULL, 'ALOHA', 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8065, 'Retreat', 'TBD', '2024-02-16', '2024-02-17', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8065, 'Retreat', 'TBD', NULL, NULL, 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (8066, 'Jumanog', 'Jayson', NULL, 'PPO', NULL, NULL, 'ALOHA', 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8066, 'Retreat', 'TBD', '2024-02-16', '2024-02-17', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8066, 'Retreat', 'TBD', NULL, NULL, 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (8067, 'Lacastesantos', 'Paulino', NULL, 'PPO', NULL, NULL, 'REGULAR', 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8067, 'Retreat', 'TBD', '2024-02-16', '2024-02-17', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8067, 'Retreat', 'TBD', NULL, NULL, 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (8068, 'Lim', 'Arnel', NULL, 'PPO', NULL, NULL, 'ALOHA', 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8068, 'Retreat', 'TBD', '2024-02-16', '2024-02-17', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (8069, 'Lomocso', 'Reynaldo', NULL, 'PPO', NULL, NULL, 'REGULAR', 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8069, 'Retreat', 'TBD', '2024-02-02', '2024-02-03', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8069, 'Retreat', 'TBD', NULL, NULL, 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (8070, 'Longakit', 'Wendy', NULL, 'PPO', NULL, NULL, 'ALOHA', 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8070, 'Retreat', 'TBD', NULL, NULL, 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (8071, 'Lozada', 'Joey', NULL, 'PPO', NULL, NULL, 'ALOHA', 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8071, 'Retreat', 'TBD', '2024-02-02', '2024-02-03', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8071, 'Retreat', 'TBD', NULL, NULL, 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (8072, 'Luna', 'Rica Joy', NULL, 'PPO', NULL, NULL, 'REGULAR', 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8072, 'Retreat', 'TBD', '2024-02-16', '2024-02-17', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (8073, 'Macaroy', 'Nancy', NULL, 'PPO', NULL, NULL, 'ALOHA', 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8073, 'Retreat', 'TBD', '2024-02-02', '2024-02-03', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8073, 'Retreat', 'TBD', NULL, NULL, 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (8074, 'Macasa', 'Mico Jhem', NULL, 'PPO', NULL, NULL, 'ALOHA', 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8074, 'Retreat', 'TBD', '2024-02-02', '2024-02-03', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8074, 'Retreat', 'TBD', NULL, NULL, 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (8075, 'Macoycruz', 'James', NULL, 'PPO', NULL, NULL, 'REGULAR', 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8075, 'Retreat', 'TBD', NULL, NULL, 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (8076, 'Maglangit', 'Francis', NULL, 'PPO', NULL, NULL, 'REGULAR', 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8076, 'Retreat', 'TBD', '2024-02-16', '2024-02-17', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8076, 'Retreat', 'TBD', NULL, NULL, 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (8077, 'Maglangit', 'Jerry', NULL, 'PPO', NULL, NULL, 'ALOHA', 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8077, 'Retreat', 'TBD', '2024-02-16', '2024-02-17', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8077, 'Retreat', 'TBD', NULL, NULL, 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (8078, 'Manalopilar', 'Jhonnel', NULL, 'PPO', NULL, NULL, 'ALOHA', 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8078, 'Retreat', 'TBD', '2024-02-02', '2024-02-03', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8078, 'Retreat', 'TBD', NULL, NULL, 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (8079, 'Marcial', 'Mark Anthony', NULL, 'PPO', NULL, NULL, 'REGULAR', 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8079, 'Retreat', 'TBD', NULL, NULL, 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (8080, 'Mariano', 'Leo', NULL, 'PPO', NULL, NULL, 'ALOHA', 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8080, 'Retreat', 'TBD', NULL, NULL, 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (8081, 'Mariano', 'Joseph', NULL, 'PPO', NULL, NULL, 'ALOHA', 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8081, 'Retreat', 'TBD', '2024-02-16', '2024-02-17', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8081, 'Retreat', 'TBD', NULL, NULL, 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (8082, 'Mendoza', 'Marvin', NULL, 'PPO', NULL, NULL, 'REGULAR', 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8082, 'Retreat', 'TBD', NULL, NULL, 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (8083, 'Miro', 'Nelson', NULL, 'PPO', NULL, NULL, 'ALOHA', 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8083, 'Retreat', 'TBD', NULL, NULL, 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (8084, 'Montigo', 'Jonathan', NULL, 'PPO', NULL, NULL, 'REGULAR', 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8084, 'Retreat', 'TBD', '2024-02-02', '2024-02-03', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8084, 'Retreat', 'TBD', NULL, NULL, 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (8085, 'Napao', 'Rufino', NULL, 'PPO', NULL, NULL, 'REGULAR', 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8085, 'Retreat', 'TBD', NULL, NULL, 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (8086, 'Natividad', 'Marvin', NULL, 'PPO', NULL, NULL, 'ALOHA', 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (8087, 'Pacure', 'Frederick', NULL, 'PPO', NULL, NULL, 'ALOHA', 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8087, 'Retreat', 'TBD', '2024-02-02', '2024-02-03', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8087, 'Retreat', 'TBD', NULL, NULL, 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (8088, 'Pagotaisidro', 'Ronilo', NULL, 'PPO', NULL, NULL, 'ALOHA', 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8088, 'Retreat', 'TBD', '2024-02-02', '2024-02-03', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8088, 'Retreat', 'TBD', NULL, NULL, 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (8089, 'Pagotaisidro', 'Richard', NULL, 'PPO', NULL, NULL, 'ALOHA', 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8089, 'Retreat', 'TBD', '2024-02-16', '2024-02-17', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8089, 'Retreat', 'TBD', NULL, NULL, 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (8090, 'Partosa', 'Sheila', NULL, 'PPO', NULL, NULL, 'REGULAR', 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8090, 'Retreat', 'TBD', NULL, NULL, 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (8091, 'Pataroque', 'Vincent', NULL, 'PPO', NULL, NULL, 'ALOHA', 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8091, 'Retreat', 'TBD', '2024-02-02', '2024-02-03', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (8092, 'Pataroque', 'Romano', NULL, 'PPO', NULL, NULL, 'ALOHA', 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8092, 'Retreat', 'TBD', '2024-02-16', '2024-02-17', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8092, 'Retreat', 'TBD', NULL, NULL, 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (8093, 'Peralta', 'Ma Socorro', NULL, 'PPO', NULL, NULL, 'ALOHA', 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8093, 'Retreat', 'TBD', '2024-02-16', '2024-02-17', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8093, 'Retreat', 'TBD', NULL, NULL, 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (8094, 'Purisimo', 'Francisco', NULL, 'PPO', NULL, NULL, 'ALOHA', 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (8095, 'Quisay', 'Edward', NULL, 'PPO', NULL, NULL, 'ALOHA', 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8095, 'Retreat', 'TBD', '2024-02-02', '2024-02-03', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8095, 'Retreat', 'TBD', NULL, NULL, 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (8096, 'Rabasto', 'Rayson', NULL, 'PPO', NULL, NULL, 'ALOHA', 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8096, 'Retreat', 'TBD', '2024-02-02', '2024-02-03', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8096, 'Retreat', 'TBD', NULL, NULL, 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (8097, 'Ramillano', 'Freddie', NULL, 'PPO', NULL, NULL, 'REGULAR', 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8097, 'Retreat', 'TBD', '2024-02-02', '2024-02-03', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8097, 'Retreat', 'TBD', NULL, NULL, 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (8098, 'Ramirez', 'Danny', NULL, 'PPO', NULL, NULL, 'REGULAR', 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8098, 'Retreat', 'TBD', '2024-02-16', '2024-02-17', 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (8099, 'Ramirez', 'Randy boy', NULL, 'PPO', NULL, NULL, 'ALOHA', 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8099, 'Retreat', 'TBD', NULL, NULL, 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (8100, 'Randa', 'Romil', NULL, 'PPO', NULL, NULL, 'ALOHA', 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8100, 'Retreat', 'TBD', NULL, NULL, 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (8101, 'Reponte', 'Jocelyn', NULL, 'PPO', NULL, NULL, 'ALOHA', 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8101, 'Retreat', 'TBD', NULL, NULL, 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (8102, 'Ressureccion', 'Victoria', NULL, 'PPO', NULL, NULL, 'REGULAR', 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8102, 'Retreat', 'TBD', '2024-02-16', '2024-02-17', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8102, 'Retreat', 'TBD', NULL, NULL, 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (8103, 'Roa', 'Pedro', NULL, 'PPO', NULL, NULL, 'REGULAR', 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (8104, 'Rojas', 'Jonel', NULL, 'PPO', NULL, NULL, 'ALOHA', 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8104, 'Retreat', 'TBD', '2024-02-16', '2024-02-17', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8104, 'Retreat', 'TBD', NULL, NULL, 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (8106, 'Rojas', 'Bernard', NULL, 'PPO', NULL, NULL, 'ALOHA', 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8106, 'Retreat', 'TBD', '2024-02-16', '2024-02-17', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8106, 'Retreat', 'TBD', NULL, NULL, 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (8107, 'Rojas', 'Philip', NULL, 'PPO', NULL, NULL, 'ALOHA', 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8107, 'Retreat', 'TBD', '2024-02-16', '2024-02-17', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8107, 'Retreat', 'TBD', NULL, NULL, 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (8108, 'Saavedra', 'Jayron', NULL, 'PPO', NULL, NULL, 'ALOHA', 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8108, 'Retreat', 'TBD', '2024-02-02', '2024-02-03', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8108, 'Retreat', 'TBD', NULL, NULL, 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (8109, 'Sabay sabay', 'Maricel', NULL, 'PPO', NULL, NULL, 'ALOHA', 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8109, 'Retreat', 'TBD', NULL, NULL, 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (8110, 'Samonte', 'Sumaida', NULL, 'PPO', NULL, NULL, 'ALOHA', 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8110, 'Retreat', 'TBD', NULL, NULL, 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (8111, 'Sandalan', 'Crisanto', NULL, 'PPO', NULL, NULL, 'ALOHA', 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8111, 'Retreat', 'TBD', NULL, NULL, 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (8112, 'Sanoria', 'Edel', NULL, 'PPO', NULL, NULL, 'ALOHA', 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8112, 'Retreat', 'TBD', NULL, NULL, 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (8113, 'Santillan', 'Christopher', NULL, 'PPO', NULL, NULL, 'ALOHA', 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8113, 'Retreat', 'TBD', '2024-02-16', '2024-02-17', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8113, 'Retreat', 'TBD', NULL, NULL, 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (8114, 'Sarino', 'Ethel', NULL, 'PPO', NULL, NULL, 'REGULAR', 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8114, 'Retreat', 'TBD', '2024-02-02', '2024-02-03', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8114, 'Retreat', 'TBD', NULL, NULL, 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (8115, 'Sorino', 'Alexander', NULL, 'PPO', NULL, NULL, 'ALOHA', 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (8116, 'Suarez', 'Joebert', NULL, 'PPO', NULL, NULL, 'ALOHA', 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8116, 'Retreat', 'TBD', '2024-02-02', '2024-02-03', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8116, 'Retreat', 'TBD', NULL, NULL, 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (8117, 'Taping', 'Leny', NULL, 'PPO', NULL, NULL, 'ALOHA', 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8117, 'Retreat', 'TBD', NULL, NULL, 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (8118, 'Tino', 'Mariel', NULL, 'PPO', NULL, NULL, 'ALOHA', 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8118, 'Retreat', 'TBD', NULL, NULL, 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (8119, 'Trogelio', 'Limuel', NULL, 'PPO', NULL, NULL, 'REGULAR', 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8119, 'Retreat', 'TBD', '2024-02-02', '2024-02-03', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8119, 'Retreat', 'TBD', NULL, NULL, 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (8120, 'Trojillo', 'Danniell', NULL, 'PPO', NULL, NULL, 'ALOHA', 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8120, 'Retreat', 'TBD', NULL, NULL, 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (8121, 'Tubil', 'Edison', NULL, 'PPO', NULL, NULL, 'ALOHA', 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8121, 'Retreat', 'TBD', '2024-02-02', '2024-02-03', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8121, 'Retreat', 'TBD', NULL, NULL, 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (8122, 'Tubio', 'Venel', NULL, 'PPO', NULL, NULL, 'ALOHA', 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8122, 'Retreat', 'TBD', '2024-02-16', '2024-02-17', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8122, 'Retreat', 'TBD', NULL, NULL, 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (8123, 'Tugahan', 'Roel', NULL, 'PPO', NULL, NULL, 'ALOHA', 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8123, 'Retreat', 'TBD', '2024-02-16', '2024-02-17', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8123, 'Retreat', 'TBD', NULL, NULL, 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (8124, 'Tumimpad', 'Rustom', NULL, 'PPO', NULL, NULL, 'REGULAR', 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8124, 'Retreat', 'TBD', '2024-02-02', '2024-02-03', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8124, 'Retreat', 'TBD', NULL, NULL, 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (8125, 'Urdoha', 'Baginda', NULL, 'PPO', NULL, NULL, 'ALOHA', 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8125, 'Retreat', 'TBD', NULL, NULL, 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (8126, 'Ventura', 'Nickie', NULL, 'PPO', NULL, NULL, 'REGULAR', 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8126, 'Retreat', 'TBD', NULL, NULL, 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (8127, 'Vicente', 'Dante', NULL, 'PPO', NULL, NULL, 'ALOHA', 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8127, 'Retreat', 'TBD', '2024-02-02', '2024-02-03', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8127, 'Retreat', 'TBD', NULL, NULL, 'Present');
INSERT INTO users (id, last_name, first_name, middle_initial, department, position, office, status, work_status) 
VALUES (8128, 'Wong', 'Marlon', NULL, 'PPO', NULL, NULL, 'ALOHA', 'Active')
ON DUPLICATE KEY UPDATE last_name=VALUES(last_name);
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8128, 'Retreat', 'TBD', '2024-02-16', '2024-02-17', 'Present');
INSERT INTO retreat_records (user_id, retreat_type, school_year, start_date, completion_date, attendance_status)
VALUES (8128, 'Retreat', 'TBD', NULL, NULL, 'Present');