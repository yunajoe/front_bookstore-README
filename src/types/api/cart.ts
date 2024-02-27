export type CartItem = {
  basketId: number;
  bookId: number;
  bookImgUrl: string;
  bookTitle: string;
  price: number;
  count: number;
  authors: string[];
};

export type PayMentAtom = {
  orderBookId?: number;
  basketId?: number;
  bookId: number;
  bookImgUrl: string;
  bookTitle: string;
  price: number;
  quantity?: number;
<<<<<<< HEAD:src/types/cartType.ts
=======
  count?: number;
>>>>>>> develop:src/types/api/cart.ts
  authors: string[];
  count: number;
};
