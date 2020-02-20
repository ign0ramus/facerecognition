const API = process.env.NODE_ENV === 'development' ? 'http://localhost:5050' : 'https://sheltered-woodland-30586.herokuapp.com';

export const SIGN_IN_API = `${API}/sign-in`;
export const SIGN_UP_API = `${API}/sign-up`;
export const UPLOAD_IMAGE_API = `${API}/upload-image`;
export const CHECK_USER_API = `${API}/check-user`;
export const SIGN_OUT_API = `${API}/sign-out`;
