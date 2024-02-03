/** 상품 상세페이지 하위에 들어갈 리뷰 섹션 컴포넌트
 *
 *
 */
import {
  ReviewListMock1,
  BookDetailMock1,
} from '@/pages/api/mock/bookDetailMock';
import ReviewOverviewCard from '../card/bookReviewCard/reviewOverviewCard';

function Review({ bookId = '' }) {
  // TODO reqct query를 통해 book 상세 정보와 review 리스트를 받아올 것

  return (
    <div>
      <ReviewOverviewCard
        rating={ReviewListMock1.averageRating}
        reviewNum={ReviewListMock1.reviewNum}
        ratingDist={ReviewListMock1.ratingDist}
      />
      <></>
    </div>
  );
}

export default Review;
