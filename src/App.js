import React, { useState } from 'react';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import './App.css';
import Rank from './components/Rank/Rank';
import Facerecognition from './components/Facerecognition/Facerecognition';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';

const clarifaiApp = new Clarifai.App({
	apiKey: 'test',
});

const particlesOptions = {
	particles: {
		number: {
			value: 100,
			density: {
				enable: true,
				value_area: 800,
			},
		},
	},
};

const App = () => {
	const [inputUrl, setInputUrl] = useState('');
	const [boundingBoxes, setBoundingBoxes] = useState(null);
	const [route, setRoute] = useState('signIn');

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
		<div className='App'>
			<Particles className='particles' params={particlesOptions} />
			<Navigation isSignIn={route === 'home'} onRouteChange={route => setRoute(route)} />

			{route === 'home' ? (
				<>
					<Logo />
					<Rank />
					<ImageLinkForm
						onChange={handleChange}
						onClick={handleImageLinkFormClick}
					/>
					<Facerecognition url={inputUrl} boxes={boundingBoxes} />
				</>
			) : route === 'signIn' ? (
				<SignIn onRouteChange={route => setRoute(route)} />
			) : (
				<Register />
			)}
		</div>
	);
};

export default App;
