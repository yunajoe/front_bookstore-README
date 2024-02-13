import { QUERY_KEY } from '@/constants/queryKey';
import { useDelete, useFetch, usePost } from '@/utils/reactQuery';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { instance } from 'src/libs/instance';

//TODO: api아직 안나온상태라서 endpoint, params임의로 설정한 값임. 수정필요

//주문조회
const getOrder = async (id: number) => {
  const result = await instance.get(`order/${id}`);
  return result.data;
};

export const useGetOrder = (id:number) => {
  return useFetch(QUERY_KEY.order, getOrder, id)
}

//주문 등록
//TODO : api 나오면 interface type 수정필요
interface PostOrderOption { id: number; data: string; }

const postOrder = async (option: PostOrderOption) => {
  const { id, data } = option;
  const result = await instance.post(`order/${id}`, {
    data,
  });
  return result.data;
};

export const usePostOrder = (option : PostOrderOption) => {
  return usePost(postOrder, option)
};

//주문 수정
export const putOrder = async (option: { id: number; data: string }) => {
  const { id, data } = option;
  const result = await instance.put(`order/${id}`, {
    data,
  });
  return result.data;
};

export const usePutOrder = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (option: { id: number; data: string }) => putOrder(option),
    onSuccess: () => {
      queryClient.invalidateQueries();
    },
  });
  return mutation;
};

//주문 삭제
export const deleteOrder = async (id: number) => {
  const result = await instance.delete(`order/${id}`);
  return result.data;
};

export const useDeleteOrder = (id:number) => {
  return useDelete(deleteOrder, id)
};