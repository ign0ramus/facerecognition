import React from 'react';
import { Link } from 'react-router-dom';

const LinkTachyonsClasses = 'link dim black f4 f3-ns underline pa3';
const Navigation = ({ isSignIn }) => {
	return isSignIn ? (
		<nav className='flex justify-end'>
			<Link to='/sign-in' className={LinkTachyonsClasses}>
				Sign out
			</Link>
		</nav>
	) : (
			<nav className='flex justify-center justify-end-ns'>
				<Link to='/sign-in' className={LinkTachyonsClasses}>
					Sign In
			</Link>
				<Link to='/sign-up' className={LinkTachyonsClasses}>
					Sign Up
			</Link>
			</nav>
		);
}

export default Navigation;
