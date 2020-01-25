const express = require('express');
const app = express();
const cors = require('cors');
const { signIn, signUp, uploadImage } = require('./api/api');

const PORT = process.env.PORT || 5050;

app.use(express.json());
app.use(cors());


app.post('/sign-up', signUp);
app.post('/sign-in', signIn);
app.post('/upload-image', uploadImage);

app.use((err, req, res, next) => {
	console.error(err);
	res.status(500).send({ error: 'Something failed. Please, try again.' });
});

app.listen(PORT, () => {
	console.log(`Server is up on port ${PORT}`);
});
