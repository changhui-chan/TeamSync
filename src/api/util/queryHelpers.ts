import type { QueryKey } from '@tanstack/react-query';
import { queryOptions } from '@tanstack/react-query';

import { queryClient } from './defaultOptions';

export const createQueryOptions = <R>(
  queryKey: QueryKey,
  queryFn: () => Promise<R>
) => {
  const cachedData = queryClient.getQueryData<R>(queryKey);

  return queryOptions({
    ...(queryClient.getDefaultOptions().queries as R),

    queryKey,
    queryFn,
    initialData: () => {
      return cachedData || ([] as R);
    },
  });
};
