import PreviewBookInfo from '@/components/book/previewBookInfo/previewBookInfo';
import Pagination from '@/components/button/pagination';
import { CurrentPageStateAtom, chooseBookIdAtom } from '@/store/state';
import { useAtom } from 'jotai';
import { useGetBook, useGetPageBook } from '@/api/book';
import { useEffect, useState } from 'react';
import { BookData } from '@/types/api/book';

function PreviewBookInfoPagination({ search }: { search: string}) {
  const [CurrentPage] = useAtom(CurrentPageStateAtom);
  const [bookOverviews, setBookOverviews] = useState<BookData[]>([]);
  const [chooseBookId, setChooseBookId] = useAtom(chooseBookIdAtom);
  const [chooseBook, setChooseBook] = useState<BookData>();
  
  const { data } = useGetPageBook({
    navigationMethod: 'PAGINATION',
    sortType: 'BESTSELLER',
    ascending: false,
    offset: String(CurrentPage - 1),
    limit: window.innerWidth <= 768 ? String(3) : String(4),
    search,
  });

  const { data: chooseBookData } = useGetBook({
    endpoint: String(chooseBookId),
    params: {},
  });

  useEffect(() => {
    setChooseBook(chooseBookData?.data);
  }, [chooseBookData]);

  useEffect(() => {
    setBookOverviews(data?.books);
  }, [data]);

  return (
    <>
      <div className="flex w-[608px] justify-between mobile:w-291">
        {!chooseBook &&
          bookOverviews?.map((bookOverview, index) => (
            <PreviewBookInfo
              key={index}
              size="xs"
              image={bookOverview.bookImgUrl}
              title={bookOverview.bookTitle}
              authorList={bookOverview.authors}
              alignCenter
              bookId={bookOverview.bookId}
              community={true}
              onClick={() => setChooseBookId(bookOverview.bookId)}
            />
          ))}
        {chooseBook && (
          <PreviewBookInfo
            size="xs"
            image={chooseBook.bookImgUrl}
            title={chooseBook.bookTitle}
            authorList={chooseBook.authors}
            community={true}
          />
        )}
      </div>
      {!chooseBook && bookOverviews && (
        <Pagination totalCount={data?.total} standard={4} />
      )}
    </>
  );
}

export default PreviewBookInfoPagination;
