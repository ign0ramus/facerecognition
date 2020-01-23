const express = require('express');
const app = express();
const cors = require('cors');
const { signIn, signUp, uploadImage } = require('./api/api');

const PORT = process.env.PORT || 5050;

app.use(express.json());
app.use(cors());

app.post('/sign-in', signIn);
app.post('/sign-up', signUp);
app.put('/upload-image', uploadImage);

app.listen(PORT, () => {
	console.log(`Server is up on port ${PORT}`);
});
