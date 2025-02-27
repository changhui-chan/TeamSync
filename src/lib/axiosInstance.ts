import axios from 'axios';

import { errorToast } from '@/util/toast';

const BASE_URL = 'https://fe-project-cowokers.vercel.app/10-25';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = sessionStorage.getItem('accessToken');

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const errRes = error.response;

    if (!errRes) {
      errorToast('서버에 연결할 수 없습니다.');
      return new Promise(() => {});
    }

    const errStatus = errRes.status;

    switch (errStatus) {
      case 400:
        errorToast(errRes.data?.message || '잘못된 요청입니다.');
        return new Promise(() => {});

      case 401:
        errorToast('로그인 정보가 필요합니다.');
        return new Promise(() => {});

      case 403:
        errorToast('권한이 없습니다.');
        return new Promise(() => {});

      case 404:
        errorToast('리소스를 찾을 수 없습니다.');
        return new Promise(() => {});

      case 500:
        errorToast('서버에 문제가 발생했습니다. 잠시 후 다시 시도해 주세요.');
        return new Promise(() => {});

      default:
        return Promise.reject(error);
    }
  }
);

export default axiosInstance;
