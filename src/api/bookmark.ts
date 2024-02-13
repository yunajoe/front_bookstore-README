import { BookmarkParams, postBookmarkPath } from '@/types/api/bookmark';
import { useFetch } from '@/utils/reactQuery';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
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
  return useFetch(QUERY_KEY.bookmark, getBookmark, params)
};

//회원 or 상품 찜개수 조회
const getOptionBookmark = async (option: { id: string; type: 'member' | 'book' }) => {
  const { id, type } = option;
  const result = await instance.get(`/bookmark/${id}/${type}`);
  return result.data.data;
};

export const useGetOptionBookmark = (option: {
  id: string;
  type: 'member' | 'book';
}) => {
  return useFetch(QUERY_KEY.bookmark, getOptionBookmark, option);
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