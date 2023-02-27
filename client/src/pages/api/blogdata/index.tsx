import { NextApiRequest, NextApiResponse } from "next";

export default function BlogData(req: NextApiRequest, res: NextApiResponse){
    // only allow GET
    if(req.method !== 'GET'){
        return res.status(404).json({error: `Invalid method: ${req.method}`})
    }

    const sqlite3 = require('sqlite3').verbose();
    let sql;

    // connect to db
    const db = new sqlite3.Database('./database/blog.db', sqlite3.OPEN_READWRITE,(err: any)=>{
        if (err) {
            return res.status(500).json({error: `Database Failure`});
        }
    });

    // select
    sql = 'SELECT *, strftime("%m/%d/%Y", timestamp) as date FROM blogs ORDER BY timestamp DESC';
    db.all(sql, [], (err: any, rows: any)=>{
        if (err) {
            return res.status(500).json({error: `Database Failure`}) 
        } 
        return res.status(200).json(rows)
    }
    )
    db.close();
}