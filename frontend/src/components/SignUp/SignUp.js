import React, { useState, useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import AuthForm from '../Forms/AuthForm';

const SignUp = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState(null);

	const { signUp } = useContext(UserContext);;

	const onChange = e => {
		const { target } = e;
		if (target.name === 'name') {
			setName(target.value);
		} else if (target.name === 'email') {
			setEmail(target.value);
		} else {
			setPassword(target.value);
		}
	};

	const onSubmit = async e => {
		e.preventDefault();
		const err = await signUp({ name, email, password });
		if (err) {
			setError(err);
		}
	};

	return (
		<AuthForm
			legend='Sign Up'
			error={error}
			onChange={onChange}
			onSubmit={onSubmit}
		/>
	);
};

export default SignUp;
