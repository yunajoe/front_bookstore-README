/** 마이페이지에 들어갈 내가 쓴 리뷰 컴포넌트 */

import { useState } from 'react';
import Image from 'next/image';

import BookRating from '@/components/book/bookRating/bookRating';
import BookAuthor from '@/components/book/bookAuthor/bookAuthor';
import { MyReviewType } from '@/types/bookReviewType';
import KebabButton from '@/components/button/kebab/kebabButton';
import BookTitle from '@/components/book/bookTitle/bookTitle';

function MyReviewCard({
  bookId,
  bookImgUrl,
  bookTitle,
  authors,
  content,
  reviewId,
}: MyReviewType) {
  const [isSummarized, setIsSummarized] = useState(true);
  return (
    <div className="flex min-h-140 w-full max-w-[1080px] flex-col mobile:min-h-115 mobile:w-330 tablet:max-w-[710px]">
      <div
        role="card-container"
        className="relative flex justify-start gap-12
        rounded-xl border-2 border-gray-1 p-20 mobile:border-none
        mobile:p-0">
        <div className="flex w-full gap-12">
          <div
            role="book-img"
            className="relative h-102 min-w-102 bg-gray-1 text-center mobile:h-75 mobile:min-w-75">
            <Image src={bookImgUrl} alt="book sample image" layout="fill" />
          </div>
          <div className="flex w-4/5 flex-col items-start justify-start gap-4">
            <BookTitle
              title={bookTitle}
              fontSize={15}
              classNames="max-w-[860px] w-[90%] truncate whitespace-nowrap mobile:w-220 line-clam-1"
            />
            <BookAuthor authorList={[authors]} classNames="line-clamp-2" />
            <div className="absolute right-0 top-0 h-18 w-18 mobile:-right-10 mobile:-top-20">
              <KebabButton title1="수정하기" title2="삭제하기" id={reviewId} />
            </div>
            <div className="flex-center gap-10 whitespace-nowrap">
              <BookRating rating={5} />
              <span className="text-14 text-gray-2">{'2020-01-02'}</span>
            </div>
            <div
              role="content-div"
              className={`top-10 flex mobile:relative mobile:-left-87 mobile:w-full ${
                isSummarized ? 'w-[90%]' : 'w-full mobile:w-[120%]'
              }`}>
              <div
                role="content"
                className={`text-14 text-gray-3 ${isSummarized ? `truncate` : 'w-full whitespace-normal break-words'}`}>
                {content}
              </div>
            </div>
            {isSummarized && (
              <button
                onClick={() => setIsSummarized(false)}
                className="absolute bottom-23 right-20 whitespace-nowrap text-14 text-primary
                mobile:-bottom-3 mobile:right-0">
                더보기
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="pt-32  tablet:hidden pc:hidden">
        <div className="h-1 w-full border border-gray-1"></div>
      </div>
    </div>
  );
}

export default MyReviewCard;
