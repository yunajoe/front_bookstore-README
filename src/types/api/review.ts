export interface ReviewSortType {
  sortType?:
    | 'STAR'
    | 'NEWEST'
}
export interface ReviewParams extends ReviewSortType {
  offset?: string;
  limit?: string; // 페이지당 가져올 데이터 수 입니다.
  ascending?: true | false; //정렬 오름차(true) 내림차(false) 기준입니다.
}

export interface ReviewData {
  reviewId: number;
  content: string;
  reviewRating: number;
  createDate: string;
  updateDate: string;
  userNickname: string;
  profileImg?: string | null;
}


export interface MyReviewData {
  reviewId: number;
  bookId: number;
  authors: string[];
  reviewRating: number;
  updateDate: string;
  bookImgUrl: string;
  bookTitle: string;
  content: string;
}