import axiosInstance from '@/lib/axiosInstance';

export const getAllData = async <R, P>(url: string, params?: P) => {
  const response = await axiosInstance.get<R>(url, { params });
  return response.data;
};

export const getDetailData = async <R>(url: string, id?: string) => {
  const response = await axiosInstance.get<R>(`${url}/${id}`);
  return response.data;
};
