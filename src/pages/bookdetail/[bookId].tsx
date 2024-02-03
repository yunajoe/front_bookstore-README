import { useRouter } from 'next/router';

import MainLayout from '@/components/layout/mainLayout';
import BookDetailCard from '@/components/card/bookDetailCard/bookDetailCard';
import BookDetailNav from '@/components/button/bookDetailNav';
import { BookDetailMock1 } from '../api/mock/bookDetailMock';
import { useState } from 'react';
import { BookDetailNavLocationType } from '@/types/bookDetailtype';

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
      <BookDetailNav
        reviewNum={BookDetailMock1.reviewNum}
        location={location}
        setLocation={setLocation}
      />
      <section className="flex flex-col w-full p-40 mobile:p-19">
        <h3>BookDetailNav에 따라 상품정보를 보여주든가</h3>
        <h3>BookDetailNav에 따라 리뷰를 보여주든가</h3>
        <h3>BookDetailNav에 따라 배송교환환불을 보여주든가</h3>
      </section>
    </MainLayout>
  );
}
