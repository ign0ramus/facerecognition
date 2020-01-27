const express = require('express');
const session = require('express-session');
const app = express();
const cors = require('cors');
const {
	signIn,
	signUp,
	uploadImage,
	checkUser,
	signOut,
} = require('./api/api');

const PORT = process.env.PORT || 5050;
const ONE_WEEK = 1000 * 60 * 60 * 24 * 7;

app.use(express.json());
app.use(
	cors({
		origin: process.env.FRONTEND_URL || 'http://localhost:3000',
		credentials: true,
	})
);

const sessConfig = {
	name: process.env.SESSION_NAME || 'sid',
	resave: false,
	saveUninitialized: false,
	secret: process.env.SESSION_SECRET || '!secret1',
	proxy: true,
	cookie: {
		maxAge: process.env.SESSION_LIFETIME || ONE_WEEK,
		sameSite: true,
		httpOnly: true,
	},
};

app.use(session(sessConfig));

app.post('/sign-up', signUp);
app.post('/sign-in', signIn);
app.post('/upload-image', uploadImage);
app.post('/check-user', checkUser);
app.post('/sign-out', signOut);

app.use((err, req, res, next) => {
	console.error(err);
	res.status(500).send({ error: 'Something failed. Please, try again.' });
});

app.listen(PORT, () => {
	console.log(`Server is up on port ${PORT}`);
});
