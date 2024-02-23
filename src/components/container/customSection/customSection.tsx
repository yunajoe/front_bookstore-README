import { useEffect, useMemo, useState } from 'react';
import { CusTomBookType, PreferredGenre } from '@/types/customPageType';
import PreviewBookInfo from '@/components/book/previewBookInfo/previewBookInfo';
import { filteredBooks } from '@/utils/compareBooks';
import VacantCustomLayout from '@/components/layout/vacantCustomLayout';
import { useQuery } from '@tanstack/react-query';
import { getCustomCategoryList } from '@/api/category';
import { getRandomBookList } from '@/api/book';
import Skeleton from '@/components/skeleton/customSkeleton/skeleton';
import GenreSelection from './genreSelection';

function CustomSection() {
  const [selectedGenreId, setSelectedGenreId] = useState<string | null>(null);
  const cusTomSelectedGenreListQuery = useQuery({
    queryKey: ['category'],
    queryFn: () => getCustomCategoryList(),
    select: (data) => data.data,
  });

  const genreList = useMemo(() => {
    try {
      const shuffledGenres = cusTomSelectedGenreListQuery.data.memberCategory
        .sort(() => Math.random() - 0.5)
        .slice(0, 3);
      return shuffledGenres.map((item: PreferredGenre) => {
        return {
          categoryId: item.categoryId,
          title: item.subName,
        };
      });
    } catch (error) {
      return [];
    }
  }, [cusTomSelectedGenreListQuery.data]);

  const selectedCategoryIds = selectedGenreId ? selectedGenreId : '';

  const getRandomCustomBookList = useQuery({
    queryKey: ['randomBook', selectedGenreId],
    queryFn: () => getRandomBookList(selectedCategoryIds, true),
    enabled: !!selectedCategoryIds,
    select: (data) => filteredBooks(data.data.books),
  });

  useEffect(() => {
    try {
      if (cusTomSelectedGenreListQuery.data.memberCategory.length) {
        const shuffledGenres = cusTomSelectedGenreListQuery.data.memberCategory
          .sort(() => Math.random() - 0.5)
          .slice(0, 3);
        setSelectedGenreId(shuffledGenres[0].categoryId);
      }
    } catch (error) {
      setSelectedGenreId(null);
    }
  }, [cusTomSelectedGenreListQuery.data]);

  if (
    cusTomSelectedGenreListQuery.isLoading ||
    !cusTomSelectedGenreListQuery.data.memberCategory
  )
    return <Skeleton />;

  return (
    <div className="flex w-full flex-col">
      <div className="">
        <div className="text-24 font-bold">
          <span className="text-primary">맞춤 </span>도서를 가져왔어요
        </div>
        <div className="text-gray-3">선호 장르 분석을 통해 도서를 추천해요</div>
      </div>
      <GenreSelection
        genreList={genreList}
        selectedGenreId={selectedGenreId}
        setSelectedGenreId={setSelectedGenreId}
      />
      {genreList.length === 0 ? null : getRandomCustomBookList?.data?.length ===
        0 ? (
        <VacantCustomLayout />
      ) : (
        <div className="grid grid-cols-5 gap-x-30 gap-y-40 mobile:grid-cols-2 mobile:gap-x-10 mobile:gap-y-30 mobile:pr-15 tablet:grid-cols-4 tablet:gap-x-20">
          {getRandomCustomBookList.data?.map((book: CusTomBookType) => {
            return (
              <div key={book.bookId}>
                <PreviewBookInfo
                  size="lg"
                  bookId={book.bookId}
                  image={book.bookImgUrl}
                  title={book.bookTitle}
                  authorList={book.authors}
                  price={book.price}
                  isUnit={true}
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default CustomSection;
