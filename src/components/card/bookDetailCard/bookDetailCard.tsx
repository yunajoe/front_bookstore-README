/** 책 상세페이지에 들어갈 카드 컴포넌트 */

import { BookDetailMock1 as Mock } from '@/pages/api/mock/bookDetailMock';
import BookDetailImg from './bookDetailImg';
import BookDetailInfo from './bookDetailInfo';

function BookDetailCard({ bookId = '' }) {
  return (
    <section className="flex justify-start gap-20 items-start mobile:flex-col mobile:flex-center">
      <BookDetailImg imageUrl={Mock.imageUrl} />
      <article
        role="info"
        className="flex flex-col gap-57 justify-start items-start grow mobile:w-full">
        <BookDetailInfo
          title={Mock.title}
          categoryList={Mock.categoryList}
          authors={Mock.authors}
          isBookmarked={Mock.isBookmarked}
          bookmarkNum={Mock.bookmarkNum}
          publishedAt={Mock.publishedAt}
          publisher={Mock.publisher}
          rating={Mock.rating}
          reviewNum={Mock.reviewNum}
          price={Mock.price}
        />
        <div className="bg-green w-full h-154 tablet:h-150 mobile:w-330 mobile:h-130 mx-auto">
          장바구니버튼, 구매하기버튼, 수량선택 버튼이 들어갈 컴포넌트
          <button className="bg-gray-3">장바구니</button>
          <button className="bg-red">구매하기</button>
        </div>
      </article>
    </section>
  );
}

export default BookDetailCard;
