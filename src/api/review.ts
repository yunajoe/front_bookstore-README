import { QUERY_KEY } from '@/constants/queryKey';
import { useFetch } from '@/utils/reactQuery';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { instance } from 'src/libs/instance';

//리뷰조회, 단일조회
const getReview = async (reviewId: number) => {
  const result = await instance.get(`review/${reviewId}`);
  return result.data;
};

export const useGetReview = (reviewId: number) => {
  return useFetch(QUERY_KEY.review, getReview, reviewId)
}

//리뷰 등록
const postReview = async (option: { id: number; data: string }) => {
  const { id, data } = option;
  const result = await instance.post(`review/${id}`, {
    data,
  });
  return result.data;
};

export const usePostReview = (option: { id: number; data: string }) => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: () => postReview(option),
    onSuccess: () => {
      queryClient.invalidateQueries()
    }
  });
  return mutation
};

//리뷰 수정
const putReview = async (option: { id: number; data: string }) => {
  const { id, data } = option;
  const result = await instance.put(`review/${id}`, {
    data,
  });
  return result.data;
};


export const usePutReview = (option: { id: number; data: string }) => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: () => putReview(option),
    onSuccess: () => {
      queryClient.invalidateQueries();
    },
  });
  return mutation;
};

//리뷰 삭제
const deleteReview = async (id: number) => {
  const result = await instance.delete(`review/${id}`);
  return result.data;
};


export const useDeleteReview = (id: number) => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: () => deleteReview(id),
    onSuccess: () => {
      queryClient.invalidateQueries();
    },
  });
  return mutation;
};
