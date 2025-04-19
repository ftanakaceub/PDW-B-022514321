const { Pool } = require('pg');

const connect = async () => {
    if (!global.connection) {
        const CONNECTION_STRING=`postgres://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`
        global.connection = new Pool({
            connectionString: CONNECTION_STRING,
        });
    }
    return global.connection.connect();
};

const query = async (sql, params) => {
    const client = await connect();
    const result = await client.query(sql, params);
    client.release();
    return result.rows;
};

module.exports = { query };