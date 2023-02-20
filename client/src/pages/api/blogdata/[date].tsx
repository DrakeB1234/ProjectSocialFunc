import { NextApiRequest, NextApiResponse } from "next";

export default function BlogDataFilterDate(req: NextApiRequest, res: NextApiResponse){
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
    sql = `SELECT * FROM blogs WHERE timestamp = '${req.query.date}'`;
    db.all(sql, [], (err: any, rows: any)=>{
        if (err) {
            console.error(err.message)
            res.status(500).json('Database Error');
        }
        // catch if no data fetched
        if (rows.length === 0) return res.json('No data found')

        // end response
        db.close()
        res.status(200).json({data: rows})
    });
}