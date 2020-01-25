import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import Loader from '../components/Loader/Loader';
import { SIGN_IN_URL, SIGN_UP_URL } from '../const/urls';

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
	<Suspense fallback={<Loader color='secondary' />}>
		<Switch>
			<Route exact path='/' component={Home} />
			<Route path={SIGN_IN_URL} component={SignIn} />
			<Route path={SIGN_UP_URL} component={SignUp} />
		</Switch>
	</Suspense>
);

export default Routes;
