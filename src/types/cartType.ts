export type CartItem = {
  basketId: number;
  bookId: number;
  bookImgUrl: string;
  bookTitle: string;
  price: number;
  quantity: number;
  authors: string[];
};

export type PayMentAtom = {
  orderBookId?: number;
  basketId?: number;
  bookId: number;
  bookImgUrl: string;
  bookTitle: string;
  price: number;
  quantity: number;
  authors: string[];
  count: number;
  quantity?: number;
};
