import React, { useState, useContext, useEffect } from 'react';
import { isURL } from 'validator';
import Rank from '../components/Rank/Rank';
import Facerecognition from '../components/Facerecognition/Facerecognition';
import Logo from '../components/Logo/Logo';
import ImageLinkForm from '../components/ImageLinkForm/ImageLinkForm';
import { UserContext } from '../context/UserContext';
import { Redirect } from 'react-router-dom';
import { SIGN_IN_URL } from '../const/urls';

const Home = () => {
	const [inputUrl, setInputUrl] = useState('');
	const [boundingBoxes, setBoundingBoxes] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const { user, uploadImage } = useContext(UserContext);

	useEffect(() => {
		if (isLoading && boundingBoxes) {
			setIsLoading(false);
		}
	}, [isLoading, boundingBoxes]);

	const handleChange = e => {
		setBoundingBoxes(null);
		setInputUrl(e.target.value);
	};

	const handleImageLinkFormClick = async () => {
		if (!isURL(inputUrl)) {
			return alert('Invalid image URL');
		}
		setIsLoading(true);
		const result = await uploadImage({ image: inputUrl, id: user.id });
		if (result.error) {
			setIsLoading(false);
			return alert(result.error);
		}
		setBoundingBoxes(result.boundingBox);
	};

	return !user ? (
		<Redirect to={SIGN_IN_URL} />
	) : (
		<>
			<Logo />
			<Rank user={user} />
			<ImageLinkForm
				onChange={handleChange}
				onClick={handleImageLinkFormClick}
			/>
			<Facerecognition
				isLoading={isLoading}
				url={inputUrl}
				boxes={boundingBoxes}
			/>
		</>
	);
};

export default Home;
