const knex = require('knex');

const db = knex({
    client: 'pg',
    connection: {
        host: process.env.POSTGRES_URL || '127.0.0.1',
        user: 'postgres',
        password: '',
        database: 'facerecognition'
    }
});

module.exports = db;