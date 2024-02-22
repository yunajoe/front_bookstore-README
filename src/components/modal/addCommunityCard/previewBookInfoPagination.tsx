import PreviewBookInfo from '@/components/book/previewBookInfo/previewBookInfo';
import Pagination from '@/components/button/pagination';
//TODO: api 연결 후 수정해야함
import { bookOverviewsMock } from '@/pages/api/mock/bestSellerMock';
import { CurrentPageStateAtom } from '@/store/state';
import { useAtom } from 'jotai';
import { useGetPageBook } from '@/api/book';
import { useEffect, useState } from 'react';
import { BookData } from '@/types/api/book';

function PreviewBookInfoPagination({search} : {search : string}) {
  const [CurrentPage, setCurrentPage] = useAtom(CurrentPageStateAtom);
  const [bookOverviews, setBookOverviews] = useState<BookData[]>([])
  
  const {data} = useGetPageBook({
    navigationMethod: 'PAGINATION', 
    sortType: 'BESTSELLER',
    ascending: false,
    offset: String(CurrentPage - 1),
    limit: String(4),
    search,
  })

  useEffect(() => {
    setBookOverviews(data?.books)
  },[data])

  return (
    <>
      <div className="flex">
        {bookOverviews?.map((bookOverview, index) => (
          <PreviewBookInfo
            key={index}
            size="sm"
            image={bookOverview.bookImgUrl}
            title={bookOverview.bookTitle}
            authorList={bookOverview.authors}
            alignCenter
            bookId={bookOverview.bookId}
          />
        ))}
      </div>
      <Pagination totalCount={data?.total} standard={4} />
    </>
  );
}

export default PreviewBookInfoPagination;
