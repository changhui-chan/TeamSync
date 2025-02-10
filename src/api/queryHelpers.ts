import type { QueryKey } from '@tanstack/react-query';
import { QueryClient } from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchInterval: 5000,
      refetchIntervalInBackground: true,
    },
  },
});

export const createQueryOptions = <R>(
  queryKey: QueryKey,
  queryFn: () => Promise<R>,
  customOptions = {}
) => ({
  queryKey,
  queryFn,
  initialData: () => {
    const cachedData = queryClient.getQueryData<R>(queryKey);
    return cachedData || ([] as R);
  },
  ...customOptions,
});
