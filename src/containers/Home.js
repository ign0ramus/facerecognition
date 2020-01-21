import React, { useState } from 'react';
import Clarifai from 'clarifai';
import Rank from '../components/Rank/Rank';
import Facerecognition from '../components/Facerecognition/Facerecognition';
import Logo from '../components/Logo/Logo';
import ImageLinkForm from '../components/ImageLinkForm/ImageLinkForm';

const clarifaiApp = new Clarifai.App({
	apiKey: 'test',
});

const Home = () => {
	const [inputUrl, setInputUrl] = useState('');
	const [boundingBoxes, setBoundingBoxes] = useState(null);

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

	return (
		<>
			<Logo />
			<div className='absoluteCenter'>
				<Rank />
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
