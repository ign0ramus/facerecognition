import React from 'react';
import ReactTooltip from 'react-tooltip';
import tooltipIcon from '../../assets/Information-icon.png';
import './Rank.css';

const Rank = ({ user }) => (
	<div>
		<div className='white f3'>{`${user.name}, your current rank is...`}</div>
		<div className='white f1'>
			<div className='rankContainer'>
				<span className='rankText'>{`#${user.rank}`}</span>
				<div data-tip='Your rank depends on how many image entries you did comparing with others users' className='rankImgContainer'>
					<img className='rankImg' src={tooltipIcon} alt='Info' />
				</div>
			</div>
			<ReactTooltip />
		</div>
		<div className='white f4'>{`You did ${user.entries} image entries.`}</div>
		<div className='white f4'>{`Joined at ${new Date(
			user.joined
		).toLocaleDateString()}`}</div>
	</div>
);

export default Rank;
