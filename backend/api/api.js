// const bcrypt = require('bcryptjs');
const db = require('../mock/db');
const {
	sendUnauthorized,
	sendNotFound,
	sendBadRequest,
} = require('../errors/errors.js');
const { validateSignUp } = require('../validator/validator');

const calcUserRank = user => {
	const usersWithMoreEntries = db.users.filter(
		elem => elem.id !== user.id && elem.entries > user.entries
	);
	return usersWithMoreEntries.length + 1;
};

const userToDTO = user => {
	const { name, email, joined } = user;
	return {
		user: {
			name,
			email,
			rank: calcUserRank(user),
			joined,
		},
	};
};

const signIn = (req, res) => {
	const user = db.users.find(
		user => user.email === req.body.email && user.password === req.body.password
	);

	if (!user) {
		return sendUnauthorized(res);
	}
	res.json(userToDTO(user));
};

const signUp = (req, res) => {
	const { name, email, password } = req.body;

	const err = validateSignUp({ name, email, password });
	if (err) {
		return sendBadRequest(res, err);
	}

	const id = db.users[db.users.length - 1].id + 1;
	const user = {
		name: `${name.charAt(0).toUpperCase()}${name.slice(1)}`,
		email,
		password,
		id,
		entries: 0,
		joined: new Date(),
	};
	db.users.push(user);
	res.json(userToDTO(user));
};

const uploadImage = (req, res) => {
	const { id } = req.body;
	const user = db.users.find(user => user.id == id);
	if (user) {
		user.entries += 1;
		return res.json(user.entries);
	}
	sendNotFound(res);
};

module.exports = {
	signIn,
	signUp,
	uploadImage,
};
