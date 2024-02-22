import PreviewBookInfo from '@/components/book/previewBookInfo/previewBookInfo';
import Pagination from '@/components/button/pagination';
import { CurrentPageStateAtom } from '@/store/state';
import { useAtom } from 'jotai';
import { useGetPageBook } from '@/api/book';
import { useEffect, useState } from 'react';
import { BookData } from '@/types/api/book';

function PreviewBookInfoPagination({search} : {search : string}) {
  const [CurrentPage] = useAtom(CurrentPageStateAtom);
  const [bookOverviews, setBookOverviews] = useState<BookData[]>([])
  console.log(window.innerWidth)
  
  const {data} = useGetPageBook({
    navigationMethod: 'PAGINATION', 
    sortType: 'BESTSELLER',
    ascending: false,
    offset: String(CurrentPage - 1),
    limit: window.innerWidth <= 769 ? String(3) : String(4),
    search,
  })

  useEffect(() => {
    setBookOverviews(data?.books)
  },[data])

  return (
    <>
      <div className="flex justify-between w-[608px] mobile:w-291">
        {bookOverviews?.map((bookOverview, index) => (
          <PreviewBookInfo
            key={index}
            size="xs"
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
