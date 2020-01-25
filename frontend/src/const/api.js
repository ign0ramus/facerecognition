const API = process.env.REACT_APP_BACKEND_URL || 'http://localhost:3000';

export const SIGN_IN_API = `${API}/sign-in`;
export const SIGN_UP_API = `${API}/sign-up`;
export const UPLOAD_IMAGE_API = `${API}/upload-image`;
export const CHECK_USER_API = `${API}/check-user`;
export const SIGN_OUT_API = `${API}/sign-out`;
