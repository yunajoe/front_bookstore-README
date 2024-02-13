import { PostBasketParams } from '@/types/api/basket';
import { postBookmarkPath } from '@/types/api/bookmark';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { QUERY_KEY } from 'src/constants/queryKey';
import { instance } from 'src/libs/instance';

//장바구니 조회
const getBasket = async (memberId: number) => {
  const result = await instance.get(`basket/${memberId}`);
  return result.data;
};

export const useGetCart = (memberId:number) => {
  const { data, ...props } = useQuery({
    queryKey: [QUERY_KEY.cart],
    queryFn: () => getBasket(memberId),
    enabled: true,
  })
  return {data, ...props}
}

//장바구니 추가
const postBasket = async ({bookId, memberId} : PostBasketParams) => {
  const result = await instance.post(`basket/${bookId}/${memberId}`);
  return result.data;
};

export const usePostCart = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: ({bookId, memberId} : PostBasketParams) => postBasket({bookId, memberId}),
    onSuccess: () => {
      queryClient.invalidateQueries()
    },
  })
  return mutation
}

//장바구니 물건 삭제
const deleteBasket = async (basketId: number) => {
  const result = await instance.delete('/basket', {
    params: basketId,
  });
  return result.data;
};

export const useDeleteBasket = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (basketId:number) => deleteBasket(basketId),
    onSuccess: () => {
      queryClient.invalidateQueries()
    },
  })
  return mutation
}
