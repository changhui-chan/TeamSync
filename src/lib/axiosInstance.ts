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

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const errRes = error.response;
    const errStatus = errRes?.status;

    if (!errRes) {
      return Promise.reject(new Error('서버에 연결할 수 없습니다.'));
    }

    switch (errStatus) {
      case 401:
        Promise.reject(new Error('로그인 정보가 필요합니다.'));
        return (window.location.href = '/login');

      case 403:
        return Promise.reject(new Error('권한이 없습니다.'));

      case 404:
        return Promise.reject(new Error('리소스를 찾을 수 없습니다.'));

      case 500:
        return Promise.reject(
          new Error('서버에 문제가 생겼습니다. 잠시 후 다시 시도해 주세요.')
        );

      default:
        return Promise.reject(error);
    }
  }
);

export default axiosInstance;
