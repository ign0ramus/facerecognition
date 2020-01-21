import React, { Suspense, lazy } from 'react';
import {Route, Switch } from 'react-router-dom';
import Loader from '../components/Loader/Loader';

const minDelay = 500;
const Home = lazy(async () => {
	await new Promise(res => setTimeout(res, minDelay))
	return import('./Home');
});
const SignIn = lazy(async () => {
	await new Promise(res => setTimeout(res, minDelay))
	return import('../components/SignIn/SignIn');
});
const SignUp = lazy(async () => {
	await new Promise(res => setTimeout(res, minDelay))
	return import('../components/SignUp/SignUp');
});

const Routes = () => (
		<Suspense fallback={<Loader />}>
			<Switch>
				<Route exact path='/' component={Home} />
				<Route path='/sign-in' component={SignIn} />
				<Route path='/sign-up' component={SignUp} />
			</Switch>
		</Suspense>
);

export default Routes;
