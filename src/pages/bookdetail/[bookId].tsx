import { useRouter } from 'next/router';

import MainLayout from '@/components/layout/mainLayout';
import BookDetailCard from '@/components/card/bookDetailCard/bookDetailCard';

export default function BookDetailPage() {
  const router = useRouter();
  const { bookId } = router.query;
  return (
    <MainLayout>
      <section className="flex flex-col w-full p-40 mobile:p-19">
        <BookDetailCard bookId={bookId as string} />
        <article>
          상품구매 컴포넌트 넣을 곳, 화면에서 안보이면 sticky되게끔 구현
        </article>
        <article>BookDetailNav 컴포넌트 넣을 곳</article>
        <article>
          <h3>BookDetailNav에 따라 상품정보를 보여주든가</h3>
          <h3>BookDetailNav에 따라 리뷰를 보여주든가</h3>
          <h3>BookDetailNav에 따라 배송교환환불을 보여주든가</h3>
        </article>
      </section>
    </MainLayout>
  );
}
