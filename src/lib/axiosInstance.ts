import axios from 'axios';

const BASE_URL = 'https://fe-project-cowokers.vercel.app/10-25';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
