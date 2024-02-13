import { instance } from 'src/libs/instance';
import { QUERY_KEY } from '@/constants/queryKey';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useFetch } from '@/utils/reactQuery';

//TODO: api아직 안나온상태라서 endpoint, params임의로 설정한 값임. 수정필요

//결제정보 조회
const getPayment = async (id: number) => {
  const result = await instance.get(`payment/${id}`);
  return result.data;
};

export const useGetOrder = (id: number) => {
  return useFetch(QUERY_KEY.payment, getPayment, id)
};

//주문 등록
const postPayment = async (option: { id: number; data: string }) => {
  const { id, data } = option;
  const result = await instance.post(`payment/${id}`, {
    data,
  });
  return result.data;
};

export const usePostOrder = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (option: { id: number; data: string }) => postPayment(option),
    onSuccess: () => {
      queryClient.invalidateQueries();
    },
  });
  return mutation;
};

//주문 수정
export const putPayment = async (option: { id: number; data: string }) => {
  const { id, data } = option;
  const result = await instance.put(`payment/${id}`, {
    data,
  });
  return result.data;
};

export const usePutPayment = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (option: { id: number; data: string }) => putPayment(option),
    onSuccess: () => {
      queryClient.invalidateQueries();
    },
  });
  return mutation;
};

//주문 삭제
export const deletePayment = async (id: number) => {
  const result = await instance.delete(`payment/${id}`);
  return result.data;
};

export const useDeletePayment = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (id: number) => deletePayment(id),
    onSuccess: () => {
      queryClient.invalidateQueries();
    },
  });
  return mutation;
};
