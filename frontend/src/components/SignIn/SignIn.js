import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

const SignIn = () => {
	const [redirect, setRedirect] = useState(false);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

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
		try {
			const res = await fetch('http://localhost:5050/sign-in', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					email,
					password,
				}),
			});
			const jsonRes = await res.json();
			// TODO: change to proper respond validation
			// added just for testing (change soon)
			if (jsonRes === 'sign-in') {
				setRedirect(true);
			}
		} catch (err) {
			console.error(err);
		}
	};

	return redirect ? (
		<Redirect to='/' />
	) : (
		<article className='br3 ba b--black-10 w-100 w-50-m w-25-l mw6 shadow-5 absoluteCenter'>
			<main className='pa4 black-80'>
				<form className='measure' onSubmit={onSubmit}>
					<fieldset id='sign_up' className='ba b--transparent ph0 mh0'>
						<legend className='f1 fw6 ph0 mh0'>Sign In</legend>
						<div className='mt3'>
							<label className='db fw6 lh-copy f6' htmlFor='email-address'>
								Email
							</label>
							<input
								className='pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100'
								type='email'
								name='email'
								onChange={onChange}
								id='email-address'
							/>
						</div>
						<div className='mv3'>
							<label className='db fw6 lh-copy f6' htmlFor='password'>
								Password
							</label>
							<input
								className='b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100'
								type='password'
								name='password'
								onChange={onChange}
								id='password'
							/>
						</div>
					</fieldset>
					<div className=''>
						<input
							className='b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib'
							type='submit'
							value='Sign in'
						/>
					</div>
					<div className='lh-copy mt3'>
						<a href='/sign-up' className='f6 link dim black db'>
							Sign Up
						</a>
					</div>
				</form>
			</main>
		</article>
	);
};

export default SignIn;
