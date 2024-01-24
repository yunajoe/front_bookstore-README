import { useState } from 'react';
import Image from 'next/image';

import BookRating from '@/components/bookComponents/bookRating/bookRating';
import BookAuthor from '@/components/bookComponents/bookAuthor/bookAuthor';
import { BookReviewType } from '@/types/bookReviewType';

function BookReviewCard({ book, review }: BookReviewType) {
  const [isSummarized, setIsSummarized] = useState(true);

  return (
    <div
      role="card-container"
      className="w-full max-w-[1080px] min-w-330 border-gray-1 border-2 min-h-140 p-20 rounded-xl
        flex justify-start gap-12 relative mobile:p-0 mobile:min-h-105
        mobile:border-none">
      <div className="flex gap-12">
        <div
          role="book-img"
          className="min-w-102 h-102 bg-gray-1 text-center mobile:min-w-75 mobile:h-75">
          {book.imageUrl ? (
            <Image src={book.imageUrl} alt="book sample image" layout="fill" />
          ) : (
            <>이미지 없음</>
          )}
        </div>
        <div className="flex flex-col justify-start items-start gap-4 w-full">
          <div
            role="book-title"
            className="text-15 font-normal truncate whitespace-nowrap mobile:w-180">
            {book.title}
          </div>
          <BookAuthor authorList={book.authors} />
          <div className="flex-center gap-12 absolute right-20 mobile:right-0">
            <button>
              <Image src="/icons/EditIcon.svg" alt="" width={24} height={24} />
            </button>
            <button>
              <Image
                src="/icons/DeleteIcon.svg"
                alt=""
                width={24}
                height={24}
              />
            </button>
          </div>
          <div className="flex-center gap-10 whitespace-nowrap">
            <BookRating rating={review.reviewRating} />
            <span className="text-gray-4 text-14">{review.createdAt}</span>
          </div>
          <div
            role="content-div"
            className={`flex justify-between mobile:relative mobile:-left-87 top-10l ${
              isSummarized
                ? 'w-11/12 tablet:w-3/5 mobile:w-3/6'
                : 'mobile:min-w-330 mobile:max-w-550'
            }`}>
            <p
              role="content"
              className={`text-gray-3 text-14 min-w-0 ${isSummarized ? `truncate pr-20` : ''}`}>
              {review.reviewContent}
            </p>
          </div>
          {isSummarized && (
            <button
              onClick={() => setIsSummarized(false)}
              className="text-green text-14 whitespace-nowrap absolute right-20 bottom-23
                mobile:bottom-10 mobile:right-0">
              더보기
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default BookReviewCard;
