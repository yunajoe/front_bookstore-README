export interface BookmarkParams {
  memberId: string; // 조회할 회원 아이디입니다.
  offset?: string; // 조회할 페이지 번호입니다.
  limit?: string; // 조회할 페이지당 목록 개수입니다.
  sort?: string; // 조회할 정렬 조건입니다. ex)price
}

export interface postBookmarkPath {
  bookId: number;
  onSuccess?: (data:any) => void;
  onSettle?: (data:any) => void;
  onMutate?: (data:any) => void;
  onError?: (data:any) => void;
}

export interface deleteBookmarkPath {
  bookmarkId: string;
  onSuccess?: (data:any) => void;
  onSettle?: (data:any) => void;
  onMutate?: (data:any) => void;
  onError?: (data:any) => void;
}

export type BookMarkListData = {
  bookId: number;
  bookTitle: string;
  publishedDate: string;
  bookImgUrl: string;
  authors: string[];
  description: string;
  categories: string[];
  averageRating: number;
  price: number;
  bookmarkCount: number;
  reviewCount: number;
  viewCount: number;
  quantityCount: any;
  publisher: string;
  createDate: string;
  updateDate: string;
  bookmarkId: number;
};

export type WishListData = {
  id: number;
  image: string;
  title: string;
  author: string;
  rating: number;
  genre: string;
  price: number;
  clicked?: number;
};
