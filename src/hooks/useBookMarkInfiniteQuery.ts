import { getBookMarkList } from '@/api/bookmark';
import { useInfiniteQuery, useQueryClient } from '@tanstack/react-query';
import { useEffect } from 'react';

const LIMIT = 8;
function useBookMarkInfiniteQuery() {
  const {
    data,
    status,
    isError,
   isSuccess,
    isLoading,
    isPending,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery({
    queryKey: ['bookMarkUserId'],
    queryFn: async ({ pageParam }) => {
      const result = await getBookMarkList(pageParam, LIMIT);
      return {
        ...result,
        pageParam: pageParam,
      };
    },
    getNextPageParam: (lastPage) => {
      return lastPage.data.cursorId === -1 ? undefined : lastPage.pageParam + 1;
    },
    initialPageParam: 0,
  });

  const queryClient = useQueryClient();

  useEffect(() => {
    return () => {
      queryClient.resetQueries({ queryKey: ['bookMarkUserId'] });
    };
  }, []);
  return {
    data,
    isError,
    status,
    fetchNextPage,
    hasNextPage,
    isSuccess,
    isLoading,
    isPending,
  };
}

export default useBookMarkInfiniteQuery;
