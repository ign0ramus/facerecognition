const db = require('./postgresDB');
const bcrypt = require('bcryptjs');

const createNewUser = async ({ name, email, password }) => {
	const hash = await bcrypt.hash(password, 8);
	try {
		const trx = await db.transaction();
		const loginEmail = await trx
			.insert({ hash, email })
			.into('login')
			.returning('email');
		const result = await trx('users')
			.returning('*')
			.insert({
				email: loginEmail[0],
				name: `${name.charAt(0).toUpperCase()}${name.slice(1)}`,
				joined: new Date(),
			});
		await trx.commit();
		return result[0];
	} catch {
		await trx.rollback();
		throw Error();
	}
};

const calcUserRank = async user => {
	const usersWithMoreEntires = await db('users')
		.where('entries', '>', user.entries)
		.andWhereNot({ id: user.id });
	return usersWithMoreEntires.length + 1;
};

const isEmailExists = async email => {
	const result = await db('users')
		.returning('count')
		.count('id')
		.where({ email });
	const { count } = result[0];
	return count > 0;
};

const getUserByCreds = async ({ email, password }) => {
	const login = await db
		.select('email', 'hash')
		.from('login')
		.where({ email });
	const isEqual = login[0] && (await bcrypt.compare(password, login[0].hash));
	if (isEqual) {
		const user = await db
			.select('*')
			.from('users')
			.where({ email });
		return user[0];
	}
	return null;
};

const incrementUserEntries = async id => {
	const result = await db('users')
		.where({ id })
		.increment('entries', 1)
		.returning('*');
	return result[0];
};

const getUserById = async id => {
	const result = await db('users').where({ id });
	return result[ 0 ];
}

module.exports = {
	createNewUser,
	calcUserRank,
	isEmailExists,
	incrementUserEntries,
	getUserByCreds,
	getUserById,
};
