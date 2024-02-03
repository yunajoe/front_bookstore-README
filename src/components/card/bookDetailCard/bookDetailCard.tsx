/** 책 상세페이지에 들어갈 카드 컴포넌트
 *
 */

import BookAuthor from '@/components/book/bookAuthor/bookAuthor';
import BookCategory from '@/components/book/bookCategory/bookCategory';
import BookPrice from '@/components/book/bookPrice/bookPrice';
import BookRating from '@/components/book/bookRating/bookRating';
import LikeButton from '@/components/button/likeButton';
import Spacing from '@/components/container/spacing/spacing';
import { BookDetailMock1 } from '@/pages/api/mock/bookDetailMock';
import Image from 'next/image';
import { useState } from 'react';

function BookDetailCard({ bookId = '' }) {
  // TODO bookId로 react query를 통해 book detail data를 받는 코드를 짜야 함. 지금은 목업데이터만 연결함
  const [isLiked, setIsLiked] = useState(BookDetailMock1.isBookmarked || false);
  const [likeCount, setIsLikeCount] = useState(
    BookDetailMock1.bookmarkNum || 0,
  );

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
    if (!isLiked) setIsLikeCount((prevCount) => prevCount + 1);
    else setIsLikeCount((prevCount) => prevCount - 1);
  };

  return (
    <section className="flex justify-start gap-20 items-start mobile:flex-col">
      <article
        role="img"
        className="bg-[#F5F5F5] relative w-[525px] h-[797px] tablet:min-w-[334px]
          tablet:max-w-[334px] tablet:h-[526px] mobile:min-w-[330px] mobile:max-w-[330px]
          mobile:h-[500px]">
        <Image
          src={BookDetailMock1.imageUrl ?? ''}
          alt="책 표지 이미지"
          fill
          objectFit="contain"
          objectPosition="top"
        />
      </article>

      <article
        role="info"
        className="flex flex-col justify-start items-start grow mobile:w-full">
        <BookCategory categories={BookDetailMock1.categoryList} />
        <Spacing height={[4, 4, 4]} />
        <div className="flex justify-between items-center w-full gap-20">
          <h3 className="font-bold text-[22px] text-gray-4 text-pretty">
            {BookDetailMock1.title}
          </h3>
          <div className="flex justify-center gap-24">
            <div className="flex-center flex-col">
              <LikeButton onClick={handleLikeClick} isLiked={isLiked} />
              {likeCount}
            </div>
            <button className="relative w-30 h-30">
              <Image src="/icons/ShareIcon.svg" fill alt="공유 버튼" />
            </button>
          </div>
        </div>
        <Spacing height={[12, 12, 12]} />
        <BookAuthor authorList={BookDetailMock1.authors} />
        <div className="h-[1px] w-full bg-gray-1 max-w-[525px] my-20 mobile:my-12"></div>
        <div className="text-14 text-gray-3">
          {BookDetailMock1.publisher} | {BookDetailMock1.publishedAt}
        </div>
        <Spacing height={[12, 12, 12]} />

        <div role="rating" className="flex gap-6">
          <BookRating rating={BookDetailMock1.rating} size="md" />
          <span className="relative top-12 text-gray-3 text-14">
            ({BookDetailMock1.reviewNum})
          </span>
          <span className="text-green font-bold text-[24px]">
            {BookDetailMock1.rating}
          </span>
        </div>
        <Spacing height={[12, 12, 12]} />
        <BookPrice
          price={BookDetailMock1.price}
          isBold={true}
          fontSize={32}
          fontColor="text-gray-4"
          hasUnit={true}
        />
      </article>
      <div></div>
    </section>
  );
}

export default BookDetailCard;
