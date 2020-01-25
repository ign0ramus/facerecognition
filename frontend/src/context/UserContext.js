import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { SIGN_IN_API, SIGN_UP_API, UPLOAD_IMAGE_API } from '../const/api';
import { HOME_URL } from '../const/urls';
import { postRequest } from '../helpers/fetch';
const UserContext = React.createContext();

const UserContextProvider = props => {
	const [user, setUser] = useState(null);

	const history = useHistory();

	useEffect(() => {
		const { pathname } = history.location;
		if (pathname !== HOME_URL && Boolean(user)) {
			history.push(HOME_URL);
		}
	}, [history, user]);

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

	const signOut = () => setUser(null);

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

export default { Provider: UserContextProvider, Consumer: UserContext };
