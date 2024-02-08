import MainLayout from '@/components/layout/mainLayout';
import Image from 'next/image';
import { ReadMeGenreList } from '@/pages/api/mock';
import GenreButton from '@/components/button/genre/genreButton';
import { useEffect, useState } from 'react';
import { customMockResult } from '@/pages/api/mock/customPageMock';
import { CusTomBookType } from '@/types/customPageType';
import PreviewBookInfo from '@/components/book/previewBookInfo/previewBookInfo';

function CustomPageLayout() {
  const [bookArray, setBookArray] = useState<CusTomBookType[]>(
    customMockResult.data.books,
  );
  const [filterBooksArray, setFilterBookArray] = useState([]);
  const [genreArr, setGenreArr] = useState([]);

  // 마이페이지에서 선택한 장르
  const genres = ReadMeGenreList.genreList;

  const selectedItem = genres.filter((genre) => genre.selected);

  return (
    <div>
      <div className="w-full flex flex-col items-center">
        <div className="max-w-[1200px] w-full">
          <MainLayout>
            <CustomPageContentsLayout>
              <div className="flex flex-wrap w-full gap-8 mb-40">
                {genres.map((genre, index) => {
                  // console.log('gg', genre);
                  const { title, selected } = genre;
                  return (
                    <div
                      key={index}
                      onClick={() => {
                        console.log('태그클릭');
                        setGenreArr((prev) => [...prev, title]);
                      }}>
                      <GenreButton
                        title={genre.title}
                        selected={genre.selected}
                      />
                    </div>
                  );
                })}
              </div>

              <div
                className="grid grid-cols-5 tablet:grid-cols-4 mobile:grid-cols-2 gap-x-30 tablet:gap-x-20
                  mobile:gap-x-10 gap-y-40 mobile:gap-y-30">
                {filterBooksArray?.map((book) => {
                  return (
                    <div key={book.bookId} className="bg-red">
                      <PreviewBookInfo
                        size="lg"
                        // image={book.bookImgUrl}
                        title={book.bookTitle}
                        authorList={book.authors}
                        category={book.categories.join(',')}
                        price={book.price}
                      />
                    </div>
                  );
                })}
              </div>
            </CustomPageContentsLayout>
          </MainLayout>
        </div>
      </div>
    </div>
  );
}

const CustomPageContentsLayout = ({ children }) => {
  return (
    <div className="px-60">
      <div className="w-full flex justify-start gap-x-10 mt-20 mb-30">
        <div className="text-black text-20 font-bold">
          내 취향대로 인기도서 골라보기
        </div>
        <Image src="/icons/Info.svg" alt="정보아이콘" width={20} height={20} />
      </div>
      {children}
    </div>
  );
};

export default CustomPageLayout;
