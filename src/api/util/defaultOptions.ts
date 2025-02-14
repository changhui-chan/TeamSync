import { QueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';

const UNKNOWN_ERROR_MESSAGE = '알 수 없는 오류가 발생했습니다.';

const commonOptions = {
  onError: (error: unknown) => {
    if (error instanceof Error) {
      console.log(error.message);
    } else if (error instanceof AxiosError) {
      const message = error.response?.data?.message || UNKNOWN_ERROR_MESSAGE;
      console.log(message);
    } else {
      console.log(UNKNOWN_ERROR_MESSAGE);
    }
  },
};

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: 'always',
      ...commonOptions,
    },

    mutations: { ...commonOptions },
  },
});
