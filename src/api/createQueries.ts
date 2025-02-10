import type { QueryKey } from '@tanstack/react-query';

import { getAllData, getDetailData } from './apiServive';
import { createQueryOptions } from './queryHelpers';

export const createQueries = <R, P>(url: string, params?: P) => ({
  all: () => {
    const queryKey: QueryKey = params ? [`${url}`, params] : [`${url}`];

    return createQueryOptions(
      queryKey,
      async (): Promise<R> => getAllData(url, params)
    );
  },
  detail: (id: string) => {
    const queryKey: QueryKey = params ? [`${url}`, params] : [`${url}`, id];

    return createQueryOptions(
      queryKey,
      async (): Promise<R> => getDetailData(url, id)
    );
  },
});
