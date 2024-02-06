import MainLayout from '@/components/layout/mainLayout';
import Image from 'next/image';
import { ReadMeGenreList } from '@/pages/api/mock';
import GenreButton from '@/components/button/genre/genreButton';
import { useState } from 'react';
import EditToggleButton from '@/components/button/editToggleButton';

function CustomPage() {
  const genres = ReadMeGenreList.genreList;
  const [isEditMode, setEditMode] = useState(false);
  const handleEditModeToggle = () => {
    setEditMode((prev) => !prev);
  };

  console.log('dddd', genres);
  return (
    <div>
      <div className="w-full flex flex-col items-center">
        <div className="max-w-[1200px] w-full">
          <MainLayout>
            <div className="flex gap-x-10 mt-20">
              <div className="text-black text-20 font-bold">
                내 취향대로 인기도서 골라보기
              </div>
              <Image
                src="/icons/Info.svg"
                alt="정보아이콘"
                width={20}
                height={20}
              />
            </div>
          </MainLayout>
        </div>
      </div>
      {/* 태그부터~ 시작 아래부터 분리 */}
      <div className="flex mt-30 overflow-hidden">
        {genres.map((genre, index) => (
          <GenreButton
            key={index}
            title={genre.title}
            selected={genre.selected}
            editMode={isEditMode}
          />
        ))}
      </div>
      <div></div>
    </div>
  );
}

export default CustomPage;
