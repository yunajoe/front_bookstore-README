import { useQuery } from "@tanstack/react-query";

export const useFetch = <T>(
  queryKey: string,
  queryFn: (option: T) => Promise<any>,
  params: T,
) => {
  const context = useQuery({
    queryKey: [queryKey, params],
    queryFn : () => queryFn(params),
    enabled: true,
  });

  return context
};
