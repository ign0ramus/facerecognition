const knex = require('knex');

const db = knex({
	client: 'pg',
	connection: {
		connectionString: process.env.POSTGRES_URI,
		ssl: true,
	},
});

module.exports = db;
