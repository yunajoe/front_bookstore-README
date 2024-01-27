/* 실시간 인기도서 책 컴포넌트 */

import Link from 'next/link';
import Image from 'next/image';

import BookAuthor from '@/components/book/bookAuthor/bookAuthor';
import BookRating from '@/components/book/bookRating/bookRating';
import { TodayBestBookCardType } from '@/types/cardType';

function TodayBestBook({ ...bookData }: TodayBestBookCardType) {
  return (
    <div
      role="card-container"
      className="bg-white max-w-350 h-240 px-40 pt-40 rounded-xl border-2 border-gray-1 tablet:pt-30 tablet:px-30 tablet:h-220
        mobile:w-300 mobile:h-181 mobile:px-20 mobile:pt-20">
      <Link
        href={`/book/${bookData.productId}`}
        className="flex justify-start items-start gap-20 mobile:gap-10">
        <div
          role="img-section"
          className="relative w-112 h-170 mobile:w-93 mobile:h-141 bg-white flex-center">
          {bookData.bookImg ? (
            <Image
              src={bookData.bookImg}
              alt="책 표지 이미지"
              layout="fill"
              objectFit="contain"
              className="relative"
            />
          ) : (
            <div className="w-112 h-170 bg-gray-1 mobile:w-93 mobile:h-141"></div>
          )}
        </div>
        <div className="flex flex-col justify-start items-start">
          <div className="w-127 text-15 text-gray-7 font-bold pb-4 line-clamp-2">
            {bookData.title}
          </div>
          <BookAuthor authorList={bookData.author} />
          <BookRating rating={bookData.rating} />
          <p className="text-13 text-gray-3 pb-8">{bookData.genre}</p>
          <p className="text-14 font-bold text-gray-7">{bookData.price} 원</p>
        </div>
      </Link>
    </div>
  );
}

export default TodayBestBook;
