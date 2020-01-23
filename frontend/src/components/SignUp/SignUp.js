import React, { useState } from 'react';

const SignUp = props => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

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
	}

	return (
		<article className='br3 ba b--black-10 w-100 w-50-m w-25-l mw6 shadow-5 absoluteCenter'>
			<main className='pa4 black-80'>
				<form onSubmit={onSubmit}  className='measure'>
					<fieldset id='sign_up' className='ba b--transparent ph0 mh0'>
						<legend className='f1 fw6 ph0 mh0'>Sign Up</legend>
						<div className='mt3'>
							<label className='db fw6 lh-copy f6' htmlFor='name'>
								Name
							</label>
							<input
								className='pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100'
								type='text'
								name='name'
								onChange={onChange}
								id='name'
							/>
						</div>
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
							value='Sign Up'
						/>
					</div>
				</form>
			</main>
		</article>
	);
};

export default SignUp;
