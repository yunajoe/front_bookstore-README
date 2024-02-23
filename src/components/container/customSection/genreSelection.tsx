import React from 'react';
import CustomSectionGenreButton from '@/components/button/genre/customSectionGenreButton';
import { SelectedGenre } from '@/types/customPageType';
import Link from 'next/link';

interface GenreSelectionProps {
  genreList: SelectedGenre[];
  selectedGenreId: string | null;
  setSelectedGenreId: React.Dispatch<React.SetStateAction<string | null>>;
}

function GenreSelection({
  genreList,
  selectedGenreId,
  setSelectedGenreId,
}: GenreSelectionProps) {
  return (
    <div className="no-scrollbar mb-40 mt-30 flex w-full flex-wrap gap-8 mobile:flex-nowrap mobile:overflow-auto">
      {genreList.length > 0 ? (
        genreList?.map((genre: SelectedGenre) => {
          return (
            <div key={genre.categoryId}>
              <CustomSectionGenreButton
                categoryId={genre.categoryId}
                title={genre.title}
                selected={selectedGenreId === genre.categoryId}
                onClick={() => setSelectedGenreId(genre.categoryId)}
              />
            </div>
          );
        })
      ) : (
        <>
          <div className="mt-120 flex h-482 w-full flex-col items-center justify-center gap-y-10 bg-gray-6 mobile:mt-80 mobile:h-205 tablet:h-324">
            <div className="mb-20 flex flex-col items-center">
              <div className="text-20">
                <span className="font-bold text-primary">맞춤 도서</span>
                <span className="font-bold text-black">
                  를 추천받아 보세요!
                </span>
              </div>
              <div>선호 장르 분석을 통해 도서를 추천해드려요</div>
            </div>
            <div className="rounded-[5px] border-2 border-primary bg-white px-45 py-13 text-primary">
              <Link href="/mypage/setting/selectGenre">
                선호 장르 선택하러 가기
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default GenreSelection;
