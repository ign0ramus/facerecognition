const express = require('express');
const app = express();
const cors = require('cors');
const bcrypt = require('bcryptjs');
const PORT = process.env.PORT || 5050;

const db = {
	users: [
		{
			id: 1,
			name: 'John',
            email: 'john@gmail.com',
            password: '1234',
			entries: 0,
			joined: new Date(),
		},
		{
			id: 2,
			name: 'Sally',
			email: 'sally@gmail.com',
            entries: 0,
            password: '1234',
			joined: new Date(),
		},
	],
	login: [
		{
			id: 1,
			hash: '',
			email: 'john@gmail.com',
		},
	],
};

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
	res.json(db.users);
});

app.post('/sign-in', (req, res) => {
	if (
		db.users.some(
			user =>
				user.email === req.body.email && user.password === req.body.password
		)
	) {
		console.log(req.body.email, req.body.password);
	} else {
		res.status(400).send('Error signing in');
    }
	res.json('sign-in');
});

app.post('/sign-up', (req, res) => {
	const { name, email, password } = req.body;
	const id = db.users[db.users.length - 1].id + 1;
	const user = {
		name,
		email,
		password,
		id,
		entries: 0,
		joined: new Date(),
	};
    db.users.push(user);
	console.log(user.id);
	res.json(user);
});

app.get('/profile/:id', (req, res) => {
	const { id } = req.params;
	const user = db.users.find(user => user.id == id);
	if (user) {
		return res.json(user);
	}
	res.status(404).send('No such user');
});

app.put('/image', (req, res) => {
	const { id } = req.body;
	const user = db.users.find(user => user.id == id);
	if (user) {
		user.entries += 1;
		return res.json(user.entries);
	}
	res.status(404).send('No such user');
});

app.listen(PORT, () => {
	console.log(`Server is up on port ${PORT}`);
});
