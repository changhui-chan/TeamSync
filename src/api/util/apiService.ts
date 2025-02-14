import axiosInstance from '@/lib/axiosInstance';

export const requestData = async <P, Q, R>(
  method: 'get' | 'post' | 'delete' | 'patch',
  url: string,
  data: Q,
  params?: P
) => {
  const response = await axiosInstance.request<R>({
    method,
    url,
    data,
    params,
  });
  return response.data;
};
