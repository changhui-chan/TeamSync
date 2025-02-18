import { requestData } from './apiService';
import { createMutationOptions } from './queryHelpers';

export const createMutations = <P, Q, R>(
  method: 'post' | 'delete' | 'patch',
  url: string,
  data?: Q,
  params?: P,
  customOptions = {}
) => {
  return createMutationOptions(
    async (): Promise<R> => requestData(method, url, data, params),
    customOptions
  );
};
