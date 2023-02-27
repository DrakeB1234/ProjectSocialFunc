const sqlite3 = require('sqlite3').verbose();
let sql;

// connect to db
const db = new sqlite3.Database('blog.db', sqlite3.OPEN_READWRITE,(err)=>{
    if (err) return console.error(err.message);
});

// // INSERT INTO
sql = `INSERT INTO blogs (timestamp, title, content) VALUES (?, ?, ?)`

db.run(sql, ['2023-02-10', 'Start of Project!', `I have started this projects
github repoistory and started to work on the basic page flow that I will use for
SocialFunc! The idea of this project is to create a platform to play interactable
party games with friends!`], (err)=>{
    if (err) return console.error(err.message);
})

// // DELETE
// sql = `DELETE FROM blogs WHERE id = 2`;

// db.run(sql, (err)=>{
//     if (err) return console.error(err.message);
// })

// CREATE TABLE
// sql = `CREATE TABLE blogs (\
//     id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
//     timestamp date,
//     title text NOT NULL,
//     content text NOT NULL)`

// db.run(sql)

// DROP TABLE
// sql = `DROP TABLE blogs`;

// db.run(sql);