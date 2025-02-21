import type { QueryKey } from '@tanstack/react-query';

import { requestData } from './apiService';
import { createQueryOptions } from './queryHelpers';

export const createQueries = <P, R>(url: string, params?: P) => {
  const queryKey: QueryKey = params ? [`${url}`, params] : [`${url}`];

  return createQueryOptions(
    queryKey,
    async (): Promise<R> => requestData('get', url, params)
  );
};
