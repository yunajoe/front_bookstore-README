import { BookCache, BookParams } from '@/types/api/book';
import { useQuery } from '@tanstack/react-query';
import { QUERY_KEY } from 'src/constants/queryKey';
import { instance } from 'src/libs/instance';

interface GetBookOption {
  endpoint: string;
  params: BookParams;
}

//책 전체 가져오기, 도서 단일 조회, 책 페이징 조회,
const getBook = async (option: GetBookOption) => {
  const { endpoint, params } = option;
  const result = await instance.get(`book/${endpoint}`, {
    params,
  });
  return result.data;
};

export const useGetBook = (option: GetBookOption) => {
  const { data, ...props } = useQuery({
    queryKey: [QUERY_KEY.book, option],
    queryFn: () => getBook(option),
    enabled: true,
  })
  return {data, ...props}
}
