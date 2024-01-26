<!-- <div align="center">
<img src="public/favicon.svg" height="50px" width="auto" /> 
<h3>
 The ESLAND page reimagined
</h3>
<p>Created for didactic and educational purposes.</p>
</div>

<div align="center">
    <a href="#" target="_blank">
        Preview
    </a>
    <span>&nbsp;✦&nbsp;</span>
    <a href="#-getting-started">
        Getting Started
    </a>
    <span>&nbsp;✦&nbsp;</span>
    <a href="#-commands">
        Commands
    </a>
    <span>&nbsp;✦&nbsp;</span>
    <a href="#-license">
        License
    </a>
    <span>&nbsp;✦&nbsp;</span>
    <a href="https://www.youtube.com/c/midudev">
        YouTube
    </a>
    <span>&nbsp;✦&nbsp;</span>
    <a href="https://twitter.com/midudev">
        Twitter
    </a>
</div>

<p></p>

<div align="center"> -->
### NotionClone

<!-- </div> -->

> [!WARNING]
> This page is not official. The official page is [**notion.so**](https://notion.so/).

## 🛠️ Stack

- [**Vite**](https://https://vitejs.dev/) - The web framework for content-driven websites.
- [**React**](https://react.dev/) - JavaScript with syntax for types.
- [**Vanilla CSS**] - A utility-first CSS framework for rapidly building custom designs.
- [**Express**](https://expressjs.com/) - JavaScript with syntax for types.
- [**MySQL**](https://www.mysql.com/) - JavaScript with syntax for types.

## 🚀 Getting Started

1. [Clone](https://github.com/santiago-federici/ReactJS-NotionClone.git) this repository.

```bash
git clone git@github.com:santiago-federici/ReactJS-NotionClone.git
```

2. Install the dependencies both in the frontend and the backend:

- I use [npm](https://www.npmjs.com/) to install and manage the dependencies.

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

```bash
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

### 🤝 Contributing

<a href="https://github.com/santiago-federici/ReactJS-NotionClone/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=santiago-federici/ReactJS-NotionClone" />
</a>

## 🧞 Commands

|     | Command          | Action                                        |
| :-- | :--------------- | :-------------------------------------------- |
| ⚙️  | `dev`            | Starts local dev server at `localhost:5173`.  |
| ⚙️  | `start`          | Starts local dev server at `localhost:3000`.  |
| ⚙️  | `build`          | Build your production site to `./dist/`.      |