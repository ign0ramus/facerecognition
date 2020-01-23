const validator = require('validator');

const validateSignUp = data => {
    if (!validator.isAlpha(data.name)) {
        return { error: 'Invalid name' };
    } else if (!validator.isEmail(data.email)) {
        return { error: 'Invalid email' };
    } else if (!validator.isLength(data.password, { min: 4 })) {
        return { error: 'Invalid password' };
    }
};

module.exports = {
	validateSignUp
};
