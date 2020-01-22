import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import Loader from '../components/Loader/Loader';

const minDelay = 500;
const Home = lazy(async () => {
	const result = await Promise.all([
		import('./Home'),
		new Promise(res => setTimeout(res, minDelay)),
	]);
	return result[0];
});
const SignIn = lazy(async () => {
	const result = await Promise.all([
		import('../components/SignIn/SignIn'),
		new Promise(res => setTimeout(res, minDelay)),
	]);
	return result[0];
});
const SignUp = lazy(async () => {
	const result = await Promise.all([
		import('../components/SignUp/SignUp'),
		new Promise(res => setTimeout(res, minDelay)),
	]);
	return result[0];
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
