import { NextApiRequest, NextApiResponse } from "next";

export default function BlogData(req: NextApiRequest, res: NextApiResponse){
    // only allow GET
    if(req.method !== 'GET'){
        res.status(404).json({message: `Invalid method: ${req.method}`})
    }

    const sqlite3 = require('sqlite3').verbose();
    let sql;

    // connect to db
    const db = new sqlite3.Database('./database/blog.db', sqlite3.OPEN_READWRITE,(err: any)=>{
        if (err) {
            console.error(err.message)
            res.status(500).json('Database Error');
        }
    });

    // select
    sql = 'SELECT *, strftime("%m/%d/%Y", timestamp) as date FROM blogs ORDER BY timestamp DESC';
    db.all(sql, [], (err: any, rows: any)=>{
        if (err) {
            console.error(err.message)
            res.status(500).json('Database Error');
        }
        res.status(200).json(rows)
    }
    )
    db.close();
}