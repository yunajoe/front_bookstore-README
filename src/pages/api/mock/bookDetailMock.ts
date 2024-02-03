import { BookReviewType } from "@/types/bookReviewType";
import { BookDetailCardType } from "@/types/cardType";

export const BookDetailMock1: BookDetailCardType = {
  bookId: 112, 
  publishedAt: "2020-01-30",
  orderNum: 13,
  categoryList: ["국내", "과학"],
  title: "재미없는 과학! 재미없는 과학! 재미없는 과학!",
  imageUrl: "/images/SampleBookCover1.jpeg",
  publisher: "상상 출판사",
  price: 12000,
  authors: ["김남길", "최석준"],
  views: 32,
  bookmarkNum: 17,
  reviewNum: 5,
  rating: 4.2,
  isBookmarked: true,
}

export const ReviewListMock1: BookReviewType = {
  bookId: 112,
  averageRating: 4.2,
  ratingDist: [0, 0, 1, 2, 2],
  reviewNum: 5,
  reviewList: [],
}