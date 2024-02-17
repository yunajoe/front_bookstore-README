import Link from 'next/link';
import PreviewBookInfo from '@/components/book/previewBookInfo/previewBookInfo';
import { BookData } from '@/types/api/book';

interface BestSellerSectionProps {
  page: 'main' | 'category'; // page props 추가
  bookList?: Array<BookData> | [];
}

function BestSellerSection({ page, bookList }: BestSellerSectionProps) {
  // page 값이 'main'이면 mx 값을 표시해주고, 아니면 제거합니다.
  const mxClass = page === 'main' ? 'tablet:mx-40' : '';

  return (
    <div
      className={`flex-col mobile:mx-15 mobile:my-80 mobile:w-330 ${mxClass} tablet:my-120
        tablet:w-[690px] pc:my-120 pc:w-[1080px]`}>
      <div className="flex justify-between mobile:mb-20 tablet:mb-40 pc:mb-50">
        <div className="text-20 font-bold">베스트셀러</div>
        <Link href="/domestic/bestseller" className="text-green">
          더보기
        </Link>
      </div>
      <div className="flex-center flex flex-wrap gap-x-10 gap-y-62 tablet:hidden pc:gap-x-30">
        {bookList?.map((book, index) => (
          <PreviewBookInfo
            key={book.bookId}
            size={page === 'main' ? 'lg' : 'md'}
            title={book.bookTitle}
            image={book.bookImgUrl}
            authorList={book.authors}
            ranking={index + 1}
            bookId={book.bookId}
          />
        ))}
      </div>

      <div className="flex w-full flex-wrap justify-start gap-x-20 gap-y-62 mobile:hidden pc:hidden">
        {bookList?.map((book, index) => (
          <PreviewBookInfo
            key={book.bookId}
            size={'sm'}
            title={book.bookTitle}
            image={book.bookImgUrl}
            authorList={book.authors}
            ranking={index + 1}
            bookId={book.bookId}
          />
        ))}
      </div>
    </div>
  );
}

export default BestSellerSection;
