import { deleteBasketItem } from '@/api/cart';
import { useMutation, useQueryClient } from '@tanstack/react-query';

function useDeleteBasketQuery() {
  const queryClient = useQueryClient();
  const deleteBasketItemMutation = useMutation({
    mutationFn: (basketItemId: string) => deleteBasketItem(basketItemId),
    onSuccess: () => queryClient.invalidateQueries(),
  });
  return deleteBasketItemMutation;
}

export default useDeleteBasketQuery;
