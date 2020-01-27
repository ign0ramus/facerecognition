import React from 'react';
import Particles from 'react-particles-js';
import { HashRouter as Router } from 'react-router-dom';
import './App.css';
import Navigation from '../components/Navigation/Navigation';
import Routes from './Routes';
import UserContext from '../context/UserContext';

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
	return (
		<div className='App'>
			<Particles className='particles' params={particlesOptions} />
			<Router basename='/'>
				<UserContext.Provider>
					<Navigation />
					<Routes />
				</UserContext.Provider>
			</Router>
		</div>
	);
};

export default App;
