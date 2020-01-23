import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../../context/UserContext';

const LinkTachyonsClasses = 'link dim black f4 f3-ns underline pa3';
const Navigation = () => {
	const { user, signOut } = useContext(UserContext.Consumer);

	return user ? (
		<nav className='flex justify-end'>
			<Link onClick={signOut} to='/sign-in' className={LinkTachyonsClasses}>
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
};

export default Navigation;
