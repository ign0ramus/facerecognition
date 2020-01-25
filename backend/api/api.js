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
const { validateSignUp } = require('../validator/validator');

const userToDTO = async user => {
	return {
		...user,
		rank: await calcUserRank(user),
	};
};

const signIn = async (req, res, next) => {
	try {
		const user = await getUserByCreds(req.body);
		if (!user) {
			return sendUnauthorized(res);
		}
		req.session.userId = user.id;

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
		req.session.userId = user.id;
		res.json({ user: await userToDTO(user) });
	} catch (err) {
		next(err);
	}
};

const uploadImage = async (req, res, next) => {
	try {
		if (!req.session.userId) {
			res.send(400);
		}
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

const checkUser = async (req, res, next) => {
	try {
		const { userId } = req.session;
		if (!userId) {
			return res.json({ user: null });
		}

		const user = await getUserById(userId);
		res.json({ user: await userToDTO(user) });
	} catch (err) {
		console.error(err);
		next();
	}
};

const signOut = (req, res) => {
	req.session.destroy(err => {
		if (err) {
			return res.redirect('/');
		}
		res.clearCookie(process.env.SESSION_NAME);
	});
};

module.exports = {
	signIn,
	signUp,
	uploadImage,
	checkUser,
	signOut,
};
