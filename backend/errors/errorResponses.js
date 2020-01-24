const sendUnauthorized = res => {
	res.status(401).send({ error: 'Invalid email or password' });
};

const sendNotFound = res => {
	res.status(404).send({ error: 'Not Found' });
};

const sendBadRequest = (res, error) => {
	res.status(400).send(error);
};

module.exports = {
	sendUnauthorized,
	sendNotFound,
	sendBadRequest,
};
