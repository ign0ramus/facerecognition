import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {
	SIGN_IN_API,
	SIGN_UP_API,
	UPLOAD_IMAGE_API,
	CHECK_USER_API,
	SIGN_OUT_API,
} from '../const/api';
import { HOME_URL, SIGN_IN_URL } from '../const/urls';
import { postRequest } from '../helpers/fetch';
export const UserContext = React.createContext();

export const UserContextProvider = props => {
	const [user, setUser] = useState(null);

	const history = useHistory();

	useEffect(() => {
		const { pathname } = history.location;
		if (pathname !== HOME_URL && Boolean(user)) {
			history.push(HOME_URL);
		}
	}, [history, user]);

	useEffect(() => {
		const checkUser = async () => {
			const res = await postRequest(CHECK_USER_API, {});
			if (res.user) {
				return setUser(res.user);
			}
			history.push(SIGN_IN_URL);
		};
		checkUser();
		//eslint-disable-next-line
	}, []);

	const addUserData = user => {
		setUser(user);
		history.push(HOME_URL);
	};

	const signIn = async data => {
		const res = await postRequest(SIGN_IN_API, data);
		if (res.error) {
			return res.error;
		}

		addUserData(res.user);
	};

	const signUp = async data => {
		const res = await postRequest(SIGN_UP_API, data);
		if (res.error) {
			return res.error;
		}

		addUserData(res.user);
	};

	const uploadImage = async data => {
		const res = await postRequest(UPLOAD_IMAGE_API, data);
		if (res.error) {
			return res;
		}
		setUser(res.user);
		return res;
	};

	const signOut = async () => {
		setUser(null);
		await postRequest(SIGN_OUT_API, {});
	};

	const contextValue = {
		user,
		signIn,
		signUp,
		uploadImage,
		signOut,
	};

	return (
		<UserContext.Provider value={contextValue}>
			{props.children}
		</UserContext.Provider>
	);
};
