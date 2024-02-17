/** 상품 상세페이지 하위에 들어갈 리뷰 섹션 컴포넌트*/

import { useGetReviewList } from '@/api/review';
import ReviewOverviewCard from '@/components/card/bookReviewCard/reviewOverviewCard';
import BookReviewCard from '@/components/card/bookReviewCard/bookReviewCard';

interface ReviewProps {
  bookId: string;
  ratingDist: [number, number, number, number, number];
  averageRating: number;
  reviewCount: number;
}

function Review({
  bookId,
  ratingDist,
  averageRating,
  reviewCount,
}: ReviewProps) {
  const { data, isLoading, isError } = useGetReviewList({
    bookId: bookId,
    params: {
      offset: '0',
      limit: '8',
      sort: 'NEWEST',
      ascending: false,
    },
  });
  console.log(data?.data);

  return (
    <section className="mobile:flex-center flex flex-col gap-20">
      <h3
        className="flex w-full max-w-[710px] items-start justify-start text-20 font-bold
          text-gray-4 mobile:w-330">
        리뷰
        <span className="pl-10 text-20 font-bold text-green">
          {reviewCount}
        </span>
      </h3>
      <ReviewOverviewCard
        rating={averageRating}
        reviewNum={reviewCount}
        ratingDist={ratingDist}
      />
      <article className="mobile:flex-center flex w-full flex-col gap-20 pt-40 mobile:gap-10">
        {/* {reviewList.map((el) => {
          return (
            <BookReviewCard
              key={el.reviewId}
              createdAt={el.createdAt}
              reviewProfileImg={el.reviewProfileImg}
              userNickname={el.userNickname}
              reviewContent={el.reviewContent}
              reviewRating={el.reviewRating}
              reviewId={el.reviewId}
              isOwner={el.isOwner}
            />
          );
        })} */}
      </article>
      페이지네이션, order드롭다운 아직 구현 안 했습니다, !!
    </section>
  );
}

export default Review;
