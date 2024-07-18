/*api calls and external services*/
import axios from 'axios';

const API_URL = 'http://ip-address:3000/api'

const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const setAuthToken = (token) => {
    if(token) {
        api.defaults.headers.common['x-auth-token'] = token;
    }
    else {
        delete api.defaults.headers.common['x-auth-token'];
    }
};

export default api;

// Service functions 

export const login = async (email, password) => {
    try {
      const response = await api.post('/auth/login', { email, password });
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  };
  
  export const getProfile = async () => {
    try {
      const response = await api.get('/users/profile');
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  };
  
  // TODO: Add more functions for other API endpoints
    