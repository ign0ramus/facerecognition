import React from 'react';

const Navigation = ({ onRouteChange, isSignIn }) =>
	isSignIn ? (
		<nav className='flex justify-end'>
			<a
				href='#0'
				onClick={() => onRouteChange('signIn')}
				className='link dim black f3 underline pa3'
			>
				Sign Out
			</a>
		</nav>
	) : (
		<nav className='flex justify-end'>
			<a
				href='#0'
				onClick={() => onRouteChange('signIn')}
				className='link dim black f3 underline pa3'
			>
				Sign In
			</a>
			<a
				href='#0'
				onClick={() => onRouteChange('register')}
				className='link dim black f3 underline pa3'
			>
				Register
			</a>
		</nav>
	);

export default Navigation;
