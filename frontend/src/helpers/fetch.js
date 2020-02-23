const requestData = async (method, link, data) => {
	try {
		const options = {
			method: method,
			headers: { 'Content-Type': 'application/json', Authorization: '' },
			body: JSON.stringify(data),
		};
		const token = localStorage.getItem('access_token');
		if (token) {
			options.headers.Authorization = `Bearer ${token}`;
		}

		const res = await fetch(link, options);
		return await res.json();
	} catch (err) {
		console.error(err);
	}
};

export const postRequest = async (link, data) => {
	return await requestData('POST', link, data);
};

export const putRequest = async (link, data) => {
	return await requestData('PUT', link, data);
};
