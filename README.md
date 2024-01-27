<div align="center">
    <a href="#-description" target="_blank">
        Description
    </a>
    <span>&nbsp;✦&nbsp;</span>
    <a href="#-stack" target="_blank">
        Stack
    </a>
    <span>&nbsp;✦&nbsp;</span>
    <a href="#--getting-started" target="_blank">
        Getting Started
    </a>
    <span>&nbsp;✦&nbsp;</span>
    <a href="#-dependencies" target="_blank">
        Dependencies
    </a>
    <span>&nbsp;✦&nbsp;</span>
    <a href="#-contributing" target="_blank">
        Contributing
    </a>
    <span>&nbsp;✦&nbsp;</span>
    <a href="#-commands" target="_blank">
        Commands
    </a>
    <span>&nbsp;✦&nbsp;</span>
    <a href="#-social-media" target="_blank">
        Social Media
    </a>
</div>

<h1 align="center">
  NotionClone
</h1>

> [!WARNING]
> This page is not official. This is just for educating purposes. The official page is [**notion.so**](https://notion.so/).

<div id="-description"></div>

## 📝 Description

A clone of the [Notion](https://notion.so/) website where you can create tables and track your daily tasks.

<div id="-stack"></div>

## 🛠️ Stack

- [**Vite**](https://https://vitejs.dev/) - A new way to build modern web apps.
- [**React**](https://react.dev/) - A JavaScript library for building user interfaces.
- [**CSS**](https://developer.mozilla.org/en-US/docs/Web/CSS) - Cascading Style Sheets for styling your pages.
- [**Express**](https://expressjs.com/) - A Node.js framework for building web applications.
- [**MySQL**](https://www.mysql.com/) - The world's most popular open source database.

<div id="-getting-started"></div>


## 🚀 Getting Started

1. [Clone](https://github.com/santiago-federici/ReactJS-NotionClone.git) this repository.

```bash
git clone git@github.com:santiago-federici/ReactJS-NotionClone.git
```

2. Install the dependencies both in the frontend and the backend:

- I use [npm](https://www.npmjs.com/) to install and manage the dependencies.

<div id="-dependencies"></div>

# Install dependencies:
```bash
npm install
```

3. Run the frontend:

```bash
npm run dev
```

4. Run the backend:

```bash
npm run start
```

4. Create a database (I use MySQL Workbench):

```sql
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
    FOREIGN KEY (table_id) REFERENCES tables(id)
);
```

6. Open [**http://localhost:5371**](http://localhost:5371/) with your browser to see the result 🚀

<div id="-contributing"></div>

### 🤝 Contributing

<a href="https://github.com/santiago-federici/ReactJS-NotionClone/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=santiago-federici/ReactJS-NotionClone" />
</a>

<div id="-commands"></div>

## 🧞 Commands

|     | Command          | Action                                        |
| :-- | :--------------- | :-------------------------------------------- |
| ⚙️  | `dev`            | Starts local dev server at `localhost:5173`.  |
| ⚙️  | `start`          | Starts local dev server at `localhost:3000`.  |
| ⚙️  | `build`          | Build your production site to `./dist/`.      |


<div id="-social-media"></div>

## 📲 My Social Media

<div style='display: grid; gap: 10px;'>
  <div style='display: flex; gap: 10px;'>
    <img src='https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/github.svg' height="20px" width="20px" align="center" />
    <a href="https://github.com/santiago-federici" target="_blank">Github</a>
  </div>
  <div style='display: flex; gap: 10px;'>
    <img src='https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/twitter.svg' height="20px" width="20px" align="center" />
    <a href="https://twitter.com/Santi_Federici" target="_blank">Twitter</a>
  </div>
  <div style='display: flex; gap: 10px;'>
    <img src='https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/instagram.svg' height="20px" width="20px" align="center" />
    <a href="https://www.instagram.com/santi_federici/" target="_blank">Instagram</a>
  </div>
  <div style='display: flex; gap: 10px;'>
    <img src='https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/linkedin.svg' height="20px" width="20px" align="center" />
    <a href="www.linkedin.com/in/santiago-federici" target="_blank">Linkedin</a>
  </div>
</div>