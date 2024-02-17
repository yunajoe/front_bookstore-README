/** 상품 상세페이지 하위에 들어갈 리뷰 섹션 컴포넌트*/

import { useState } from 'react';

import { useGetReviewList } from '@/api/review';
import ReviewOverviewCard from '@/components/card/bookReviewCard/reviewOverviewCard';
import BookReviewCard from '@/components/card/bookReviewCard/bookReviewCard';
import DropDown from '@/components/dropDown/dropDown';
import { REVIEW_ORDER_STANDARD } from '@/constants/orderList';
import { SortType } from '@/types/api/book';

interface ReviewProps {
  bookId: string;
  ratingDist: [number, number, number, number, number];
  averageRating: number;
  reviewCount: number;
}

const CURRENT_ORDER = {
  sort: 'VIEW' as SortType['sort'],
  ascending: false,
};

function Review({
  bookId,
  ratingDist,
  averageRating,
  reviewCount,
}: ReviewProps) {
  const [selectedOrder, setSelectedOrder] = useState('조회순');
  const [currentOrder, setCurrentOrder] = useState(CURRENT_ORDER);
  const { data, isLoading, isError } = useGetReviewList({
    bookId: bookId,
    params: {
      offset: '0',
      limit: '5',
      sort: currentOrder.sort,
      ascending: currentOrder.ascending,
    },
  });

  const onSelectedOrder = (menu: string) => {
    setSelectedOrder(menu);
    if (menu === '최신순')
      setCurrentOrder((prev) => {
        return { ...prev, sort: 'NEWEST', ascending: false };
      });
    if (menu === '별점 높은순')
      setCurrentOrder((prev) => {
        return { ...prev, sort: 'STAR', ascending: false };
      });
    if (menu === '별점 낮은순')
      setCurrentOrder((prev) => {
        return { ...prev, sort: 'STAR', ascending: true };
      });
  };

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
      <div className="flex justify-end pt-20">
        <div className="z-50 w-120">
          <DropDown
            menus={REVIEW_ORDER_STANDARD}
            selectedItem={selectedOrder}
            onSelectedItem={onSelectedOrder}
          />
        </div>
      </div>
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
    </section>
  );
}

export default Review;
