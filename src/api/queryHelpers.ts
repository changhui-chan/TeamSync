import type { QueryKey } from '@tanstack/react-query';
import { QueryClient, queryOptions } from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: 'always',
    },
  },
});

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

// export const createQueryOptions = <R>(
//   queryKey: QueryKey,
//   queryFn: () => Promise<R>,
//   customOptions = {}
// ) => {
//   const cachedData = queryClient.getQueryData<R>(queryKey);

//   return {
//     ...queryClient.getDefaultOptions().queries,
//     queryKey,
//     queryFn,
//     initialData: () => cachedData || ([] as R),
//     ...customOptions,
//   };
// };
