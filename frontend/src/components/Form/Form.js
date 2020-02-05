import React from 'react';
import Input from './Input/Input';
import Error from './Error/Error';
import { SIGN_UP_URL } from '../../const/urls';
import { Link } from 'react-router-dom';

const Form = props => {
	const { onChange, onSubmit, legend, error } = props;

	const isSignIn = legend === 'Sign In';
	return (
		<article className='br3 ba b--black-10 w-100 w-50-m w-25-l mw6 shadow-5 absoluteCenter'>
			<main className='pa4 black-80'>
				<form className='measure' onSubmit={onSubmit}>
					<fieldset className='ba b--transparent ph0 mh0'>
						<legend className='f1 fw6 ph0 mh0'>{legend}</legend>
						{!isSignIn ? (
							<Input
								name='name'
								label='Name'
								type='text'
								onChange={onChange}
								required
								title='Alphabets letters only'
								pattern='[a-zA-Z]+'
							/>
						) : null}
						<Input
							name='email'
							label='Email'
							type='email'
							onChange={onChange}
						/>
						<Input
							name='password'
							label='Password'
							type='password'
							onChange={onChange}
						/>
					</fieldset>
					<Error text={error} />
					<div className=''>
						<button
							className='b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib'
							type='submit'
						>
							{legend}
						</button>
					</div>
				</form>
				{isSignIn ? (
					<div className='lh-copy mt3'>
						<Link to={SIGN_UP_URL} className='f6 link dim black db'>
							{'Sign Up'}
						</Link>
					</div>
				) : null}
			</main>
		</article>
	);
};

export default Form;
