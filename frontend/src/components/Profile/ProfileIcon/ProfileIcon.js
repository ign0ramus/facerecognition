import React, { useState, useContext } from 'react';
import {
	Dropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { SIGN_IN_URL } from '../../../const/urls';
import { UserContext } from '../../../context/UserContext';
import './ProfileIcon.css';

const ProfileIcon = () => {
	const [isOpen, setIsOpen] = useState(false);
	const { signOut, toggleProfile } = useContext(UserContext);

	const toggle = () => setIsOpen(prevState => !prevState);

	return (
		<div className='pa3 tc'>
			<Dropdown isOpen={isOpen} toggle={toggle}>
				<DropdownToggle
					tag='span'
					data-toggle='dropdown'
					aria-expanded={isOpen}
				>
					<img
						src='http://tachyons.io/img/logo.jpg'
						className='br-100 ba h3 w3 dib'
						alt='avatar'
					/>
				</DropdownToggle>
				<DropdownMenu right className='mt4 background-grey'>
					<DropdownItem onClick={toggleProfile}>View Profile</DropdownItem>
					<DropdownItem>
						<Link
							onClick={signOut}
							style={{ color: 'inherit', textDecoration: 'none' }}
							to={SIGN_IN_URL}
						>
							Sign out
						</Link>
					</DropdownItem>
				</DropdownMenu>
			</Dropdown>
		</div>
	);
};

export default ProfileIcon;
