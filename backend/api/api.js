const jwt = require('jsonwebtoken');
const {
	getUserByCreds,
	incrementUserEntries,
	createNewUser,
	calcUserRank,
	getUserById,
} = require('../db/methods');

const {
	sendUnauthorized,
	sendNotFound,
	sendBadRequest,
} = require('../errors/errorResponses');
const { recognizeFace } = require('./clarifaiApi');
const { validateSignUp, validateUrl } = require('../validator/validator');

const userToDTO = async user => {
	return {
		...user,
		rank: await calcUserRank(user),
	};
};

const createJWT = userId =>
	jwt.sign({ userId }, process.env.SECRET, {
		expiresIn: '7 days',
	});

const signIn = async (req, res, next) => {
	try {
		const user = await getUserByCreds(req.body);
		if (!user) {
			return sendUnauthorized(res);
		}
		const token = createJWT(user.id);
		res.json({ user: await userToDTO(user), token });
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
		const token = createJWT(user.id);
		res.json({ user: await userToDTO(user), token });
	} catch (err) {
		next(err);
	}
};

const uploadImage = async (req, res, next) => {
	try {
		const { id, image } = req.body;

		const err = validateUrl(image);
		if (err) {
			return sendBadRequest(res, err);
		}

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

const checkUser = async (req, res, next) => {
	try {
		const { userId } = req;
		const user = await getUserById(userId);
		res.json({ user: await userToDTO(user) });
	} catch (err) {
		console.error(err);
		next();
	}
};


module.exports = {
	signIn,
	signUp,
	uploadImage,
	checkUser,
};
