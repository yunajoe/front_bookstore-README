import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';

export const useFetch = <T>(
  queryKey: string,
  queryFn: (option: T) => Promise<any>,
  params: T,
) => {
  const context = useQuery({
    queryKey: [queryKey, params],
    queryFn: () => queryFn(params),
    enabled: true,
  });

  return context;
};

export const useDelete = <T>(mutationFn: (option: T) => Promise<any>, option: T) => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: () => mutationFn(option),
    onSuccess : () => queryClient.invalidateQueries(),
  });
  return mutation
};

export const usePost = <T>(mutationFn: (option : T) => Promise<any>, option: T) => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: () => mutationFn(option),
    onSuccess : () => queryClient.invalidateQueries(),
  });
  return mutation
};

export const useUpdate = <T, S>(
  url: string,
  params?: object,
  updater?: (oldData: T, newData: S) => T,
) => {
  return useGenericMutation<T, S>(
    (data) => api.patch<S>(url, data),
    url,
    params,
    updater,
  );
};
