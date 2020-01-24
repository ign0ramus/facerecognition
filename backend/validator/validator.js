const validator = require('validator');
const { isEmailExists } = require('../db/methods');

const validateSignUp = async data => {
	if (await isEmailExists(data.email)) {
		return { error: 'Email already exists' };
	} else if (!validator.isAlpha(data.name)) {
		return { error: 'Invalid name' };
	} else if (!validator.isEmail(data.email)) {
		return { error: 'Invalid email' };
	} else if (!validator.isLength(data.password, { min: 4 })) {
		return { error: 'Password is too short' };
	}
};

module.exports = {
	validateSignUp,
};
