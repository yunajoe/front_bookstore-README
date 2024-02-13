import { BookmarkParams, postBookmarkPath } from '@/types/api/bookmark';
import { QueryClient, useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { QUERY_KEY } from 'src/constants/queryKey';
import { instance } from 'src/libs/instance';

//찜 목록 조회
const getBookmark = async (params : BookmarkParams) => {
  const result = await instance.get('/bookmark', {
    params,
  });
  return result.data.data;
};

export const useGetCart = (params: BookmarkParams) => {
  const { data, ...props } = useQuery({
    queryKey: [QUERY_KEY.bookmark],
    queryFn: () => getBookmark(params),
    enabled: true,
  });
  return {data, ...props}
};

//회원 or 상품 찜개수 조회
const getOptionBookmark = async (id:number, option:string) => {
  const result = await instance.get(`/bookmark/${id}/${option}`);
  return result.data.data
}

export const useGetOptionBookmark = (id: number, option: string) => {
  const { data, ...props } = useQuery({
    queryKey: [QUERY_KEY.bookmark, id, option],
    queryFn: () => getOptionBookmark(id, option),
    enabled: !!id && !!option,
  });
  return {data, ...props}
};

//찜 하기
const postBookmark = async ({bookId, memberId} : postBookmarkPath) => {
  const result = await instance.post(`/bookmark/${bookId}/${memberId}`);
  return result.data.data;
}

export const usePostBookmark = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: ({ bookId, memberId } : postBookmarkPath) => postBookmark({ bookId, memberId }),
    onSuccess: () => {
      queryClient.invalidateQueries();
    },
  });
  return mutation;
}

//찜 삭제
const deleteBookmark = async (bookmarkId : string) => {
  const result = await instance.delete(`/bookmark/${bookmarkId}`);
  return result.data
}

export const useDeleteBookmark = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (bookmarkId: string) => deleteBookmark(bookmarkId),
    onSuccess: () => {
      queryClient.invalidateQueries();
    }
  })
  return mutation
}