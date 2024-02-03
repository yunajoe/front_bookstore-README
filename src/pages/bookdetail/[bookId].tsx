import { useRouter } from 'next/router';

import MainLayout from '@/components/layout/mainLayout';
import BookDetailCard from '@/components/card/bookDetailCard/bookDetailCard';
import BookDetailNav from '@/components/button/bookDetailNav';
import { BookDetailMock1 } from '../api/mock/bookDetailMock';
import { useState } from 'react';
import { BookDetailNavLocationType } from '@/types/bookDetailtype';
import RefundTerm from '@/components/container/refundTerm/refundTerm';
import BookInformation from '@/components/book/bookInformation/bookInformation';
import ReviewOverviewCard from '@/components/card/bookReviewCard/reviewOverviewCard';
import Review from '@/components/review/review';
import Spacing from '@/components/container/spacing/spacing';

export default function BookDetailPage() {
  const router = useRouter();
  const { bookId } = router.query;
  const [location, setLocation] =
    useState<BookDetailNavLocationType>('information');

  return (
    <MainLayout>
      <section className="flex flex-col w-full p-40 mobile:p-19">
        <BookDetailCard bookId={bookId as string} />
        <article>
          상품구매 컴포넌트 넣을 곳, 화면에서 안보이면 sticky되게끔 구현
        </article>
      </section>
      <Spacing height={[80, 80, 40]} />
      <BookDetailNav
        reviewNum={BookDetailMock1.reviewNum}
        location={location}
        setLocation={setLocation}
      />
      <Spacing height={[80, 80, 40]} />
      <section className="flex flex-col w-full p-40 pt-120 mobile:p-19 mobile:pt-40">
        {location === 'information' && <BookInformation />}
        {location === 'review' && <Review bookId={bookId as string} />}
        {location === 'currency' && <RefundTerm />}
      </section>
    </MainLayout>
  );
}
