import React, { useState, useContext } from 'react';
import Rank from '../components/Rank/Rank';
import Facerecognition from '../components/Facerecognition/Facerecognition';
import Logo from '../components/Logo/Logo';
import ImageLinkForm from '../components/ImageLinkForm/ImageLinkForm';
import UserContext from '../context/UserContext';
import { Redirect } from 'react-router-dom';
import { SIGN_IN_URL } from '../const/urls';

const Home = () => {
	const [inputUrl, setInputUrl] = useState('');
	const [boundingBoxes, setBoundingBoxes] = useState(null);
	const { user, uploadImage } = useContext(UserContext.Consumer);

	const handleChange = e => {
		setBoundingBoxes(null);
		setInputUrl(e.target.value);
	};

	const handleImageLinkFormClick = async () => {
		const result = await uploadImage({image: inputUrl, id: user.id});
		if (result.error) {
			return alert(result.error);
		}
		setBoundingBoxes(result.boundingBox);
	};

	return !user ? (
		<Redirect to={SIGN_IN_URL} />
	) : (
		<>
			<Logo />
			<div className='absoluteCenter'>
				<Rank name={user.name} rank={user.rank} joined={user.joined} />
				<ImageLinkForm
					onChange={handleChange}
					onClick={handleImageLinkFormClick}
				/>
				<Facerecognition url={inputUrl} boxes={boundingBoxes} />
			</div>
		</>
	);
};

export default Home;
