import type { UseMutationOptions } from '@tanstack/react-query';

const defaultOptions: UseMutationOptions = {
  onSuccess: (data) => {
    console.log(data);
  },
};

export const createMutationOptions = <R>(
  mutationFn: () => Promise<R>,
  customOptions = {}
) => ({
  mutationFn,
  ...defaultOptions,
  ...customOptions,
});
