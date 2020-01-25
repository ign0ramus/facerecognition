const {
	getUser,
	incrementUserEntiries,
	createNewUser,
	calcUserRank,
} = require('../db/methods');
const {
	sendUnauthorized,
	sendNotFound,
	sendBadRequest,
} = require('../errors/errorResponses');
const { validateSignUp } = require('../validator/validator');

const userToDTO = async user => {
	return {
		user: {
			...user,
			rank: await calcUserRank(user),
		},
	};
};

const signIn = async (req, res, next) => {
	try {
		const user = await getUser(req.body);
		if (!user) {
			return sendUnauthorized(res);
		}
		res.json(await userToDTO(user));
	} catch (err) {
		next(err);
	}
};

const signUp = async (req, res, next) => {
	try {
		const err = await validateSignUp(req.body);
		if (err) {
			return sendBadRequest(res, err);
		}
		const user = await createNewUser(req.body);
		res.json(await userToDTO(user));
	} catch (err) {
		next(err);
	}
};

const uploadImage = async (req, res, next) => {
	try {
		const { id } = req.body;
		const user = await incrementUserEntiries(id);
		if (user) {
			return res.json({ rank: await calcUserRank(user) });
		}
		sendNotFound(res);
	} catch (err) {
		next(err);
	}
};

module.exports = {
	signIn,
	signUp,
	uploadImage,
};
