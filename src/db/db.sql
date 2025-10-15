CREATE DATABASE adzuformationsystem;

USE adzuformationsystem;

CREATE TABLE adminaccount(
    id INT NOT NULL PRIMARY KEY,
    role VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL UNIQUE
);

INSERT INTO adminaccount (id, role, password)
VALUES (230692, 'ADMINISTRATOR', 'adzuformation');