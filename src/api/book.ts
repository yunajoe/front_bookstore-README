import { BookParams, putBookPath } from '@/types/api/book';
import { useFetch } from '@/utils/reactQuery';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { QUERY_KEY } from 'src/constants/queryKey';
import { instance } from 'src/libs/instance';

interface GetBookOption {
  endpoint?: string;
  params?: BookParams;
}

//책 전체 가져오기, 도서 단일 조회, 책 페이징 조회,
const getBook = async (option: GetBookOption) => {
  const { endpoint, params } = option;
  const result = await instance.get(`/book${endpoint ? `/${endpoint}` : ''}`, {
    params,
  });
  return result.data;
};

export const useGetBook = (option: GetBookOption) => {
  return useFetch(QUERY_KEY.book, getBook, option)
}

//도서 조회수 증가
const putBookView = async({ bookId, memberId} : putBookPath) => {
  const result = await instance.put(`/book/${bookId}/${memberId}/view`);
  return result.data
}

export const usePutBook = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: ({ bookId, memberId }: putBookPath) => putBookView({ bookId, memberId }),
    onSuccess: () => {
      queryClient.invalidateQueries();
    },
  });
  return mutation
}