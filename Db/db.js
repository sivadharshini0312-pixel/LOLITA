import mysql from "mysql2/promise";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";

dotenv.config();

// Path to SSL certificate
const caCertPath = path.join(process.cwd(), "certs", "global-bundle.pem");

const db = mysql.createPool({
    host: process.env.SQL_HOST,
    user: process.env.SQL_USER,
    password: process.env.SQL_PASS,
    database: process.env.SQL_DB,
    port: process.env.SQL_PORT,

    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    connectTimeout: 10000,

    ssl: {
        ca: fs.readFileSync(caCertPath),
        rejectUnauthorized: true
    }
});

export const connectDB = async () => {
    try {
        const connection = await db.getConnection();
        console.log("✅ AWS RDS MySQL connected successfully");
        connection.release();
    } catch (err) {
        console.error("❌ Connection is not established:", err.message);
        process.exit(1);
    }
};

export default db;
