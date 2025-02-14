import type { QueryKey } from '@tanstack/react-query';
import { queryOptions } from '@tanstack/react-query';

import { queryClient } from './defaultOptions';

export const createQueryOptions = <R>(
  queryKey: QueryKey,
  queryFn: () => Promise<R>,
  customOptions = {}
) => {
  const cachedData = queryClient.getQueryData<R>(queryKey);

  return queryOptions({
    ...(queryClient.getDefaultOptions().queries as R),

    queryKey,
    queryFn,
    initialData: () => {
      return cachedData || ([] as R);
    },
    ...customOptions,
  });
};

export const createMutationOptions = <R>(
  mutationFn: () => Promise<R>,
  customOptions = {}
) => ({
  ...(queryClient.getDefaultOptions().queries as R),
  mutationFn,
  ...customOptions,
});
