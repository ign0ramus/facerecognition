import React from 'react';

const Rank = ({ name, rank, joined }) => (
	<div>
		<div className='white f3'>{`${name}, your current rank is...`}</div>
		<div className='white f1'>{`#${rank}`}</div>
		<div className='white f4'>{`Joined at ${new Date(joined).toLocaleDateString()}`}</div>
	</div>
);

export default Rank;
