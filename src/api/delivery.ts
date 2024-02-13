import { QUERY_KEY } from '@/constants/queryKey';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { instance } from 'src/libs/instance';

//배달상태조회
const getDelivery = async (id: number) => {
  const result = await instance.get(`delivery/${id}`);
  return result.data;
};

export const useGetDelivery = (id: number) => {
  const { data, ...props } = useQuery({
    queryKey: [QUERY_KEY.delivery],
    queryFn: () => getDelivery(id),
    enabled: true,
  });
  return { data, ...props };
};

//배달 등록
//TODO: api아직 안나온상태라서 endpoint, params임의로 설정한 값임. 수정필요
const postDelivery = async (option: { id: number; data: string }) => {
  const { id, data } = option;
  const result = await instance.post(`delivery/${id}`, {
    data,
  });
  return result.data;
};

export const usePostDelivery = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (option: { id: number; data: string }) => postDelivery(option),
    onSuccess: () => {
      queryClient.invalidateQueries();
    },
  });
  return mutation;
};

//배달상태 수정
const putDelivery = async (option: { id: number; data: string }) => {
  const { id, data } = option;
  const result = await instance.put(`delivery/${id}`, {
    data,
  });
  return result.data;
};

export const usePutDelivery = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (option: { id: number; data: string }) => putDelivery(option),
    onSuccess: () => {
      queryClient.invalidateQueries();
    },
  });
  return mutation;
};
