import React, { useState } from 'react';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import './App.css';
import Rank from './components/Rank/Rank';
import Facerecognition from './components/Facerecognition/Facerecognition';

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

function App() {
	const [inputUrl, setInputUrl] = useState('');
	const [boundingBoxes, setBoundingBoxes] = useState(null);

	const handleChange = e => {
		setBoundingBoxes(null);
		setInputUrl(e.target.value);
	};

	const onClick = async () => {
		try {
			const res = await clarifaiApp.models.predict(
				Clarifai.FACE_DETECT_MODEL,
				inputUrl
			);
			setBoundingBoxesPosition(res);
		} catch (err) {
			console.error(err);
		}
	};

	const setBoundingBoxesPosition = data => {
		const detectedFaces = data.outputs[ 0 ].data.regions;
		if (detectedFaces) {
			const facesCooords = detectedFaces.map(el => {
				const coords = el.region_info.bounding_box;
				return {
					id: el.id,
					top: coords.top_row * 100,
					left: coords.left_col * 100,
					right: (1 - coords.right_col) * 100,
					bottom: (1 - coords.bottom_row) * 100,
				};
			});
			setBoundingBoxes(facesCooords);
		}
	};

	return (
		<div className='App'>
			<Particles className='particles' params={particlesOptions} />
			<Navigation />
			<Logo />
			<Rank />
			<ImageLinkForm onChange={handleChange} onClick={onClick} />
			<Facerecognition url={inputUrl} boxes={boundingBoxes} />
		</div>
	);
}

export default App;
