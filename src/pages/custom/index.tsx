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

// 이 페이지에서 필요한거 =>  책 이미지, 제목, 작가, 장르, 가격,  viewCount(조회수), bookmarkcount(찜갯수)
// 문제 마지막 한개 선택된 장르에 해당되는 책이 아무것도 없을떄는?
function CustomPage() {
  const [bookArray, setBookArray] = useState<CusTomBookType[]>([]);
  const [filterBooksArray, setFilterBookArray] = useState<CusTomBookType[]>([]);
  const [genreArr, setGenreArr] = useState<SelectedBookType[]>([]);
  const genres = ReadMeGenreList.genreList;

  const handledFilteredGenreBooks = (selectedGenreList: SelectedBookType[]) => {
    const filteredBooksList = selectedGenreList.reduce((acc, book) => {
      const selectedTitle = book.title;
      const selectedGenreBooks = bookArray.filter((book) => {
        const [_, genre] = book.categories;
        return selectedTitle === genre;
      });
      return [...acc, ...selectedGenreBooks];
    }, [] as CusTomBookType[]);

    return filteredBooksList;
  };

  useEffect(() => {
    if (customMockResult.status === 200) {
      const books = customMockResult.data.books;
      setBookArray(books);
      // 마이페이지에서 가져온 선호 장르리스트들
      const genres = ReadMeGenreList.genreList;
      // const notingGenres = [];
      // const selectedItem = notingGenres.filter((genre) => genre.selected);
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
      <div className="w-full flex flex-col items-center">
        <div className="max-w-[1200px] w-full">
          <MainLayout>
            <CustomPageContentsLayout>
              <div
                className="flex flex-wrap w-full gap-8 mt-30 mb-40 mobile:flex-nowrap
                  mobile:overflow-scroll">
                {genreArr.length > 0 ? (
                  genres.map((genre, index) => {
                    const { title, selected } = genre;
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
                  <div className="mt-120 mobile:mt-80 flex flex-col gap-y-10">
                    <div className="flex flex-col items-center">
                      <div>맞춤 도서를 추천받아 보세요!</div>
                      <div>선호 장르 분석을 통해 도서를 추천해드려요</div>
                    </div>
                    <div className="px-45 py-13 text-green rounded-[5px] border-green">
                      <Link href="/signin">로그인하고 맞춤 도서 추천받기</Link>
                    </div>
                  </div>
                )}
              </div>
              <div
                className="grid grid-cols-5 tablet:grid-cols-4 mobile:grid-cols-2 gap-x-30 tablet:gap-x-20
                  mobile:gap-x-10 gap-y-40 mobile:gap-y-30 mobile:pr-15">
                {filterBooksArray?.map((book) => {
                  return (
                    <div key={book.bookId}>
                      <PreviewBookInfo
                        size="lg"
                        title={book.bookTitle}
                        authorList={book.authors}
                        category={[book.categories[1]].join('')}
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

type CustomPageContentsLayoutProps = {
  children: ReactNode;
};

const CustomPageContentsLayout = ({
  children,
}: CustomPageContentsLayoutProps) => {
  return (
    <div className="px-60 mobile:px-0 mobile:pl-15 mobile:w-360">
      <div className="w-full flex justify-start items-center gap-x-10 mt-20">
        <div className="text-black text-20 font-bold">
          내 취향대로 인기도서 골라보기
        </div>
        <div>
          <Image
            src="/icons/Info.svg"
            alt="정보아이콘"
            width={20}
            height={20}
          />
        </div>
      </div>
      {children}
    </div>
  );
};

export default CustomPage;
