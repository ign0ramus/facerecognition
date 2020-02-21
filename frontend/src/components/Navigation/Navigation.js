import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import { SIGN_IN_URL, SIGN_UP_URL } from '../../const/urls';
import ProfileIcon from '../Profile/ProfileIcon/ProfileIcon';

const LinkTachyonsClasses = 'link dim black f4 f3-ns underline pa3';
const Navigation = () => {
	const { user } = useContext(UserContext);

	return user ? (
		<nav className='flex justify-end'>
			<ProfileIcon />
		</nav>
	) : (
		<nav className='flex justify-center justify-end-ns'>
			<Link to={SIGN_IN_URL} className={LinkTachyonsClasses}>
				Sign In
			</Link>
			<Link to={SIGN_UP_URL} className={LinkTachyonsClasses}>
				Sign Up
			</Link>
		</nav>
	);
};

export default Navigation;
