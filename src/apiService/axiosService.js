import axios from 'axios';

axios.defaults.baseURL = 'https://so-yammy-one.onrender.com/'; // NEED TO ADD BASE_URL

export const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};
