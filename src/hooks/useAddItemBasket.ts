// 장바구니 담기 버튼 로직
import { useAddToBasket } from './api/useAddToBasket';

interface AddItemBasketProps {
  bookId: number;
  count?: number;
}

function useAddItemBasket({bookId, count = 1}: AddItemBasketProps ) {
    // 장바구니 버튼 로직
  const { addToBasket } = useAddToBasket({
    bookId: bookId,
    count: count,
  });

  const handleAddToBasket = async () => {
    addToBasket();
  };
  return { handleAddToBasket };
}

export default useAddItemBasket