import { Key, useEffect, useState } from 'react';
import Link from 'next/link';
import CustomGenreButton from '@/components/button/genre/customGenreButton';
import PreviewBookInfo from '@/components/book/previewBookInfo/previewBookInfo';
import RecommendationContent from './recommendationContent';
import { CustomSectionMockData } from '@/pages/api/mock/customSectionMock';
interface CustomSectionProps {
  isLoggedIn: boolean;
  isGenreSelected: boolean;
}

function CustomSection({ isLoggedIn, isGenreSelected }: CustomSectionProps) {
  const [selectedGenre, setSelectedGenre] = useState<string | null>(
    CustomSectionMockData[0].category,
  );
  const [selectedBookList, setSelectedBookList] = useState<
    { bookId: number; title: string; authorList: string[]; bookImg: string }[]
  >([]);

  useEffect(() => {
    // 처음 렌더링 시 selectedGenre에 해당하는 bookList 설정
    const initialSelectedData = CustomSectionMockData.find(
      (data) => data.category === selectedGenre,
    );
    setSelectedBookList(
      initialSelectedData ? initialSelectedData.bookList : [],
    );
  }, [selectedGenre]);

  const handleGenreClick = (genre: string) => {
    setSelectedGenre((prevGenre) => (prevGenre === genre ? null : genre));
  };

  if (!isLoggedIn) {
    return (
      <div className="flex-col flex-center h-482 bg-gray-1 w-full">
        <RecommendationContent />
        <Link
          className="flex-center w-256 h-50 text-green text-14 bg-white border border-green
            rounded-[5px]"
          href="/signin">
          로그인하고 맞춤 도서 추천받기
        </Link>
      </div>
    );
  }

  if (isLoggedIn && !isGenreSelected) {
    return (
      <div className="flex-col flex-center h-482 bg-gray-1 w-full">
        <RecommendationContent />
        <Link
          className="flex-center w-256 h-50 text-green text-14 bg-white border border-green
            rounded-[5px]"
          href="/mypage">
          선호 장르 선택하러 가기
        </Link>
      </div>
    );
  }

  return (
    <div className="flex-center w-full h-500 gap-x-76 relative bg-gray-1">
      <div className="flex-col flex-center w-347">
        <div className="font-bold text-24 mb-8">
          <span className="text-green">맞춤도서</span>를 가져왔어요
        </div>
        <div className="mb-30 text-gray-4">
          선호 장르 분석을 통해 도서를 추천해요
        </div>
        <div className="flex-center flex-wrap w-260 gap-10">
          {CustomSectionMockData.map((data) => (
            <CustomGenreButton
              key={data.category}
              title={data.category}
              selected={selectedGenre === data.category}
              onSelect={handleGenreClick}
            />
          ))}
        </div>
      </div>

      <div className="flex gap-x-20 h-320">
        {selectedBookList.length > 0 && (
          <>
            {selectedBookList.map(
              (book: {
                bookId: Key | null | undefined;
                title: string | undefined;
                authorList: string[] | undefined;
                bookImg: string | undefined;
              }) => (
                <PreviewBookInfo
                  key={book.bookId}
                  size={'md'}
                  title={book.title}
                  authorList={book.authorList}
                  image={book.bookImg || ''}
                />
              ),
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default CustomSection;
