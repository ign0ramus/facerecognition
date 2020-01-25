const {
	getUser,
	incrementUserEntries,
	createNewUser,
	calcUserRank,
} = require('../db/methods');

const {
	sendUnauthorized,
	sendNotFound,
	sendBadRequest,
} = require('../errors/errorResponses');
const { recognizeFace } = require('./clarifaiApi');
const { validateSignUp } = require('../validator/validator');

const userToDTO = async user => {
	return {
		...user,
		rank: await calcUserRank(user),
	};
};

const signIn = async (req, res, next) => {
	try {
		const user = await getUser(req.body);
		if (!user) {
			return sendUnauthorized(res);
		}
		res.json({ user: await userToDTO(user) });
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
		res.json({ user: await userToDTO(user) });
	} catch (err) {
		next(err);
	}
};

const uploadImage = async (req, res, next) => {
	try {
		const { id, image } = req.body;
		const user = await incrementUserEntries(id);
		if (user) {
			const result = await recognizeFace(image);
			return res.json({ user: await userToDTO(user), boundingBox: result });
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
