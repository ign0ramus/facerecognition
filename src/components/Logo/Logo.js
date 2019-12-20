import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import brainLogo from './logo.png';

const Logo = () => (
	<div className='ma4 mt0'>
		<Tilt
			className='Tilt br2 shadow-2'
			options={{ max: 55 }}
			style={{ height: 150, width: 150 }}
		>
			<div className='Tilt-inner pa3 flex justify-center'>
				<img className='pt3' src={brainLogo} alt='Brain logo' />
			</div>
		</Tilt>
	</div>
);

export default Logo;
