import { useState } from 'react';
import Link from 'next/link';

import { getBook } from '@/api/book';
import PreviewBookInfo from '@/components/book/previewBookInfo/previewBookInfo';
import DropDown from '@/components/dropDown/dropDown';
import SkeletonPreviewBookInfo from '@/components/skeleton/previewBookInfo/skeleton';
import useCarouselEnv from '@/hooks/useCarouselEnv';
import useInfinite from '@/hooks/useInfinite';
import useCustomInfiniteQuery from '@/hooks/useCustomInfiniteQuery';

import { BOOK_OLDER_STANDARD } from 'src/constants/orderList';
import useCheckCategoryUrl from '@/hooks/useCheckCategoryUrl';

const CURRENT_ORDER = {
  sort: 'VIEW',
  ascending: false,
};

function MainCategoryBookList() {
  const { env } = useCarouselEnv();
  const [selectedOrder, setSelectedOrder] = useState('조회순');
  const [currentOrder, setCurrentOrder] = useState(CURRENT_ORDER);
  const [apiRef, isIntersecting] = useInfinite();
  const { mainId } = useCheckCategoryUrl();

  const { data, isFetchingNextPage, hasNextPage } = useCustomInfiniteQuery({
    endpoint: `${mainId}/main`,
    queryKey: [selectedOrder, String(mainId), 'main-category-book-list'],
    queryFunc: getBook,
    initialCursorId: 0,
    cursorName: 'bookId',
    sort: currentOrder.sort,
    ascending: currentOrder.ascending,
    refetchTrigger: isIntersecting,
    getNextPageParamsFunc: (lastPage) =>
      lastPage?.data.books.length <= 1 || lastPage?.data.cursorId <= 0
        ? undefined
        : lastPage.data.books[lastPage.data.books.length - 1].bookId,
    selectFunc: (data) => {
      return (data.pages ?? []).flatMap((page) => {
        if (page?.data?.books.length < 2) return page?.data?.books;
        if (hasNextPage) {
          return page?.data?.books.slice(0, page.data.books.length - 1);
        } else {
          return page?.data?.books.slice(0, page.data.books.length);
        }
      });
    },
  });

  const onSelectedOrder = (menu: string) => {
    setSelectedOrder(menu);
    if (menu === '조회순')
      setCurrentOrder((prev) => {
        return { ...prev, sort: 'VIEW', ascending: false };
      });
    if (menu === '신상품순')
      setCurrentOrder((prev) => {
        return { ...prev, sort: 'NEWEST', ascending: false };
      });
    if (menu === '별점순')
      setCurrentOrder((prev) => {
        return { ...prev, sort: 'STAR', ascending: false };
      });
    if (menu === '리뷰 많은순')
      setCurrentOrder((prev) => {
        return { ...prev, sort: 'REVIEW', ascending: false };
      });
    if (menu === '낮은 가격순')
      setCurrentOrder((prev) => {
        return { ...prev, sort: 'PRICE', ascending: true };
      });
    if (menu === '높은 가격순')
      setCurrentOrder((prev) => {
        return { ...prev, sort: 'PRICE', ascending: false };
      });
  };

  return (
    <article className="relative flex h-fit flex-col gap-50 pb-30 mobile:gap-20 tablet:gap-40">
      <div className="flex items-center justify-between">
        <h1 className="text-20 text-black">모든 도서</h1>
        <div className="z-20">
          <DropDown
            menus={BOOK_OLDER_STANDARD}
            selectedItem={selectedOrder}
            onSelectedItem={onSelectedOrder}
          />
        </div>
      </div>

      <div
        className="grid h-fit w-[895px]
           grid-flow-row auto-rows-auto grid-cols-5 gap-x-20 gap-y-40 mobile:w-[330px] mobile:grid-cols-2 mobile:gap-y-0 tablet:w-[511px] tablet:grid-cols-3 ">
        {data?.map((book) => {
          return (
            <Link
              href={`/bookdetail/${book.bookId}`}
              key={book.bookId}
              className="h-fit w-fit">
              <PreviewBookInfo
                image={book.bookImgUrl}
                title={book.bookTitle}
                authorList={book.authors}
                price={book.price}
                size={env === 'desktop' ? 'md' : 'lg'}
                bookId={book.bookId}
              />
            </Link>
          );
        })}
      </div>
      {(isFetchingNextPage || isIntersecting) && (
        <div
          className="grid min-h-400 w-[895px]
           grid-flow-row auto-rows-auto grid-cols-5 gap-x-20 gap-y-40 mobile:w-[330px] mobile:grid-cols-2 mobile:gap-y-0 tablet:w-[511px] tablet:grid-cols-3 ">
          {' '}
          {[0, 1, 2].map((el) => {
            return <SkeletonPreviewBookInfo key={el} />;
          })}
        </div>
      )}
      <div
        className={`h-5 w-300 ${hasNextPage ? 'block' : 'hidden'}`}
        ref={apiRef}></div>
    </article>
  );
}

export default MainCategoryBookList;
