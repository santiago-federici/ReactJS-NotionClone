CREATE TABLE users (
	id BINARY(16) PRIMARY KEY DEFAULT (UUID_TO_BIN(UUID())),
    username VARCHAR(25) NOT NULL,
    email VARCHAR(50) NOT NULL UNIQUE,
    user_password VARCHAR(200) NOT NULL
);

CREATE TABLE tables (
	id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(50) DEFAULT ('Untitled'),
    user_id BINARY(16) NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE table_rows (
	id INT PRIMARY KEY AUTO_INCREMENT,
    main_content VARCHAR(50),
    description VARCHAR(250),
    status VARCHAR (50),
    priority VARCHAR (50),
    due DATE,
    table_id INT NOT NULL,
    FOREIGN KEY (table_id) REFERENCES tables(id)
);
