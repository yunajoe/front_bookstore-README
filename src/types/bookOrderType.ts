import { StaticImageData } from 'next/image';

// interface BookOrderType {
//   book: {
//     productId: number;
//     title: string;
//     imageUrl?: string | null | StaticImageData;
//     cost: number;
//     authors: string[] | null;
//   };
//   order: {
//     deliveryStatus: string;
//     address: string;
//     orderCount: number;
//   };
// }

// export type { BookOrderType };

export type OrderBookData = {
  orderId: number;
  orderBook: OrderBook[];
  createTime: string;
  updateTime: string;
};

export type OrderBook = {
  orderBookId: number;
  bookId: number;
  bookTitle: string;
  authors: string;
  price: number;
  quantity: number;
};
