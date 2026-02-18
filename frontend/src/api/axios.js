import axios from 'axios';

const api = axios.create({
  baseURL: 'https://your-render-url.onrender.com/api', // CHANGE THIS to your actual Render URL
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token if logged in
api.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default api;