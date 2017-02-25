CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE IF NOT EXISTS burgers (
	id INTEGER AUTO_INCREMENT,
    burger_name VARCHAR(255) NOT NULL,
    devoured BOOLEAN DEFAULT FALSE,
    date TIMESTAMP,
    PRIMARY KEY (id)
);