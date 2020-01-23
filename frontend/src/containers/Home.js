import React, { useState, useContext } from 'react';
import Clarifai from 'clarifai';
import Rank from '../components/Rank/Rank';
import Facerecognition from '../components/Facerecognition/Facerecognition';
import Logo from '../components/Logo/Logo';
import ImageLinkForm from '../components/ImageLinkForm/ImageLinkForm';
import UserContext from '../context/UserContext';
import { Redirect } from 'react-router-dom';
import { SIGN_IN_URL } from '../const/urls';

const clarifaiApp = new Clarifai.App({
	apiKey: 'test',
});

const Home = () => {
	const [inputUrl, setInputUrl] = useState('');
	const [boundingBoxes, setBoundingBoxes] = useState(null);
	const { user } = useContext(UserContext.Consumer);

	const handleChange = e => {
		setBoundingBoxes(null);
		setInputUrl(e.target.value);
	};

	const handleImageLinkFormClick = async () => {
		try {
			const res = await clarifaiApp.models.predict(
				Clarifai.FACE_DETECT_MODEL,
				inputUrl
			);
			setBoundingBoxesPosition(res);
		} catch (err) {
			console.error(err);
			alert('Something went wrong! :(');
		}
	};

	const setBoundingBoxesPosition = data => {
		const detectedFaces = data.outputs[0].data.regions;
		if (detectedFaces) {
			const facesCoords = calculateFacesCoords(detectedFaces);
			setBoundingBoxes(facesCoords);
		}
	};

	const calculateFacesCoords = detectedFaces =>
		detectedFaces.map(face => {
			const coords = face.region_info.bounding_box;
			return {
				id: face.id,
				top: coords.top_row * 100,
				left: coords.left_col * 100,
				right: (1 - coords.right_col) * 100,
				bottom: (1 - coords.bottom_row) * 100,
			};
		});

	return !user ? <Redirect to={SIGN_IN_URL}/> : (
		<>
			<Logo />
			<div className='absoluteCenter'>
				<Rank name={user.name} rank={user.rank} joined={user.joined}/>
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
