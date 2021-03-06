const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const { isAuth } = require('./middleware/auth');

const { signIn, signUp, uploadImage, checkUser } = require('./api/api');

const PORT = process.env.PORT || 5050;

app.use(express.json());
app.use(
	cors({
		origin: process.env.FRONTEND_URL,
	})
);
app.use(morgan('combined'));

app.post('/sign-up', signUp);
app.post('/sign-in', signIn);
app.post('/upload-image', isAuth, uploadImage);
app.post('/check-user', isAuth, checkUser);

app.use((err, req, res, next) => {
	console.error(err);
	res.status(500).json({ error: 'Something failed. Please, try again.' });
});

app.listen(PORT, () => {
	console.log(`Server is up on port ${PORT}`);
});
