import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { SIGN_IN_API, SIGN_UP_API, UPLOAD_IMAGE_API } from '../const/api';
import { HOME } from '../const/links';
import { postRequest, putRequest } from '../helpers/fetch';
const UserContext = React.createContext();

const UserContextProvider = props => {
	const [user, setUser] = useState(null);

	const history = useHistory();

	const signIn = async data => {

    };
    const signUp = async data => {

    }
    const uploadImage = async data => {

    }

	const contextValue = {
		user,
        signIn,
        signUp,
        uploadImage
	};

	return (
		<UserContext.Provider value={contextValue}>
			{props.children}
		</UserContext.Provider>
	);
};

export default { Provider: UserContextProvider, Consumer: UserContext };
