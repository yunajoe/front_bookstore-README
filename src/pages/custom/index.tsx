import MainLayout from '@/components/layout/mainLayout';
import Image from 'next/image';
import { ReadMeGenreList } from '@/pages/api/mock';
import { ReactNode, useEffect, useState } from 'react';
import { CusTomBookType, SelectedBookType } from '@/types/customPageType';
import PreviewBookInfo from '@/components/book/previewBookInfo/previewBookInfo';
import CustomPageGenreButton from '@/components/button/genre/customPageGenreButton';
import { customMockResult } from '@/pages/api/mock/customPageMock';
import Link from 'next/link';
import { filteredBooks } from '@/utils/compareBooks';
import ToolTip from '@/components/dropDown/toolTip';

function CustomPage() {
  const [bookArray, setBookArray] = useState<CusTomBookType[]>([]);
  const [filterBooksArray, setFilterBookArray] = useState<CusTomBookType[]>([]);
  const [genreArr, setGenreArr] = useState<SelectedBookType[]>([]);
  const genres = ReadMeGenreList.genreList;

  const handledFilteredGenreBooks = (selectedGenreList: SelectedBookType[]) => {
    const filteredBooksList = selectedGenreList.reduce<CusTomBookType[]>(
      (acc, book) => {
        const selectedTitle = book.title;
        const selectedGenreBooks = bookArray.filter((book) => {
          const [_, genre] = book.categories;
          return selectedTitle === genre;
        });
        return [...acc, ...selectedGenreBooks];
      },
      [],
    );

    return filteredBooksList;
  };

  useEffect(() => {
    if (customMockResult.status === 200) {
      const books = customMockResult.data.books;
      setBookArray(books);
      const genres = ReadMeGenreList.genreList;
      const selectedItem = genres.filter((genre) => genre.selected);
      setGenreArr(selectedItem);
      const filteredItem = handledFilteredGenreBooks(selectedItem);
      const filteredBooksList = filteredBooks(filteredItem);
      setFilterBookArray(filteredBooksList);
    }
  }, [bookArray]);

  useEffect(() => {
    const filteredItem = handledFilteredGenreBooks(genreArr);
    const filteredBooksList = filteredBooks(filteredItem);
    setFilterBookArray(filteredBooksList);
  }, [genreArr.length]);

  return (
    <div className="flex-1">
      <div className="flex w-full flex-col items-center">
        <MainLayout>
          <div className="w-full max-w-[1200px]">
            <CustomPageContentsLayout>
              <div
                className="no-scrollbar mb-40 mt-30 flex w-full flex-wrap gap-8
                  mobile:flex-nowrap mobile:overflow-auto">
                {genreArr.length > 0 ? (
                  genres.map((genre, index) => {
                    const { title } = genre;
                    const selectedTitleArr = genreArr.map((item) => item.title);
                    return (
                      <div key={index}>
                        <CustomPageGenreButton
                          title={genre.title}
                          selected={selectedTitleArr.includes(title)}
                          editMode={true}
                          onClick={() => {
                            if (!selectedTitleArr.includes(title)) {
                              setGenreArr((prev) => [
                                ...prev,
                                {
                                  title,
                                  selected: true,
                                },
                              ]);
                            } else {
                              if (genreArr.length > 1) {
                                setGenreArr((prev) =>
                                  prev.filter((genre) => genre.title !== title),
                                );
                              }
                            }
                          }}
                        />
                      </div>
                    );
                  })
                ) : (
                  <>
                    <div className="mt-120 flex w-full flex-col items-center gap-y-10 mobile:mt-80">
                      <div className="mb-20 flex flex-col items-center">
                        <div className="text-20">
                          <span className="font-bold text-green">
                            맞춤 도서
                          </span>
                          <span className="font-bold text-black">
                            를 추천받아 보세요!
                          </span>
                        </div>
                        <div>선호 장르 분석을 통해 도서를 추천해드려요</div>
                      </div>
                      <div className="rounded-[5px] border-2 border-green px-45 py-13 text-green">
                        <Link href="/signin">선호 장르 선택하러 가기</Link>
                      </div>
                    </div>
                  </>
                )}
              </div>
              <div
                className="grid grid-cols-5 gap-x-30 gap-y-40 mobile:grid-cols-2 mobile:gap-x-10
                  mobile:gap-y-30 mobile:pr-15 tablet:grid-cols-4 tablet:gap-x-20">
                {filterBooksArray?.map((book) => {
                  return (
                    <div key={book.bookId}>
                      <PreviewBookInfo
                        size="lg"
                        title={book.bookTitle}
                        authorList={book.authors}
                        category={[book.categories[1]].join('')}
                        price={book.price}
                        bookId={book.bookId}
                      />
                    </div>
                  );
                })}
              </div>
            </CustomPageContentsLayout>
          </div>
        </MainLayout>
      </div>
    </div>
  );
}

type CustomPageContentsLayoutProps = {
  children: ReactNode;
};
const CustomPageContentsLayout = ({
  children,
}: CustomPageContentsLayoutProps) => {
  return (
    <div className="w-full px-60 mobile:w-360 mobile:px-0 mobile:pl-15">
      <div className="mt-20 flex w-full items-center justify-start gap-x-10">
        <div className="text-20 font-bold text-black">
          내 취향대로 인기도서 골라보기
        </div>
        <ToolTip toolTipText="지난일정기간동안..~ 한 순위입니다">
          <div>
            <Image
              src="/icons/Info.svg"
              alt="정보아이콘"
              width={20}
              height={20}
            />
          </div>
        </ToolTip>
      </div>
      {children}
    </div>
  );
};

export default CustomPage;
