const jwt = require('jsonwebtoken');

const isAuth = (req, res, next) => {
	const token = req.get('Authorization').split(' ')[ 1 ];
	try {
		const decodedToken = jwt.verify(token, process.env.SECRET);
		req.userId = decodedToken.userId;
		next();
	} catch (err) {
		return res.status(401).json('Unauthorized');
	}
};

module.exports = { isAuth };
