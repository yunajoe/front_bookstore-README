export interface DeliveryInfo {
  address: string;
  createDate: String;
  deliveryId: number;
  deliveryStatus: string;
  email: string;
  memberId: number;
  message: string;
  name: string;
  nickname: string;
  orderDto: DeliveryOrderBook;
  paymentAmount: number;
  paymentMethod: string;
  phone: string;
  socialId: number | null;
  updateDate: string;
}

interface DeliveryOrderBook {
  orderId: number;
  orderBook : DeliveryOrderBookInfo[]
}

export interface DeliveryOrderBookInfo {
  authors: string;
  bookId: number;
  bookImgUrl: string;
  bookTitle: string;
  orderBookId: number;
  price: number;
  quantity: number;
}