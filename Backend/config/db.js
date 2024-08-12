const mysql = require('mysql2/promise');

let pool;
const connectDatabase = async () => {
    if (!pool) {
        pool = mysql.createPool({
            host: process.env.MYSQL_HOST,
            user: process.env.MYSQL_USER,
            password: process.env.MYSQL_PASSWORD,
            database: process.env.MYSQL_DATABASE,
            waitForConnections: true,
            connectionLimit: 10,
            queueLimit: 0
        });

        //to check connection successful or not
        // try {
        //     const [rows] = await pool.query('SELECT 1');
        //     console.log('Database connection successful');
        // } catch (error) {
        //     console.error('Database connection failed:', error.message);
        //     process.exit(1); // Exit the process if connection fails
        // }
    }

    return pool;
};

module.exports = connectDatabase;