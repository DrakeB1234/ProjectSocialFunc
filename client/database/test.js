const sqlite3 = require('sqlite3').verbose();
let sql;

// connect to db
const db = new sqlite3.Database('blog.db', sqlite3.OPEN_READWRITE,(err)=>{
    if (err) return console.error(err.message);
});

// insert
sql = `INSERT INTO blogs (timestamp, title, content) VALUES (?, ?, ?)`

db.run(sql, ['2023-02-10', 'Project Start!', 'Start of projects repository on Github and first website design! Started to design some new art for and testing out logos to use throughout this project. Mainly need to start thinking of a page flow for this site to make it as accessible as possible. One thing at a time though!'], (err)=>{
    if (err) return console.error(err.message);
})

// CREATE TABLE
// sql = `CREATE TABLE blogs (\
//     id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
//     timestamp date,
//     title text NOT NULL,
//     content text NOT NULL)`

// db.run(sql)

// CREATE TABLE
// sql = `DROP TABLE blogs`;

// db.run(sql);