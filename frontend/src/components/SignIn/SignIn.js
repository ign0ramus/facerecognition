import React, { useState, useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import AuthForm from '../Forms/AuthForm';

const SignIn = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState(null);

	const { signIn } = useContext(UserContext);;

	const onChange = e => {
		const { target } = e;
		if (target.name === 'email') {
			setEmail(target.value);
		} else {
			setPassword(target.value);
		}
	};

	const onSubmit = async e => {
		e.preventDefault();
		const err = await signIn({ email, password });
		if (err) {
			setError(err);
		}
	};

	return (
		<AuthForm
			legend='Sign In'
			error={error}
			onChange={onChange}
			onSubmit={onSubmit}
		/>
	);
};

export default SignIn;
