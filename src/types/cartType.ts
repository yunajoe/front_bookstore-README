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
  bookId: number;
  bookImgUrl: string;
  bookTitle: string;
  price: number;
  quantity: number;
  authors: string[];
};
