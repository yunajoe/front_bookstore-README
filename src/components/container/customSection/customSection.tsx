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
import Spacing from '../spacing/spacing';
import Link from 'next/link';

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
    <div className="flex-center w-full bg-pink">
      <div className="flex-center w-full max-w-[1200px] mobile:h-[940px] mobile:flex-col  tablet:h-[655px] tablet:flex-col pc:flex pc:h-500 pc:items-center">
        <GenreSelection
          genreList={genreList}
          selectedGenreId={selectedGenreId}
          setSelectedGenreId={setSelectedGenreId}
        />
        {genreList.length === 0 ? null : getRandomCustomBookList?.data
            ?.length === 0 ? (
          <VacantCustomLayout />
        ) : (
          <div className="mobile:flex-center flex flex-wrap gap-x-30 mobile:mx-15  mobile:mb-60 mobile:mt-40 mobile:w-360 mobile:gap-x-10 mobile:gap-y-35 mobile:pr-15 tablet:mt-63 tablet:gap-x-20 pc:mr-60 pc:justify-between">
            {getRandomCustomBookList.data?.map(
              (book: CusTomBookType, index: number) => {
                return (
                  <div key={book.bookId}>
                    {index === 3 && (
                      <div className="text-right mobile:hidden tablet:hidden">
                        <Link href="/custom" className="text-primary">
                          더보기
                        </Link>
                      </div>
                    )}
                    {index === 1 && (
                      <div className="text-right tablet:hidden pc:hidden">
                        <Link href="/custom" className="text-primary">
                          더보기
                        </Link>
                      </div>
                    )}
                    <div className="mobile:hidden tablet:hidden">
                      <PreviewBookInfo
                        size="md"
                        bookId={book.bookId}
                        image={book.bookImgUrl}
                        title={book.bookTitle}
                        authorList={book.authors}
                        isUnit={true}
                      />
                    </div>
                    <div className=" pc:hidden">
                      <PreviewBookInfo
                        size="lg"
                        bookId={book.bookId}
                        image={book.bookImgUrl}
                        title={book.bookTitle}
                        authorList={book.authors}
                        isUnit={true}
                      />
                    </div>
                  </div>
                );
              },
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default CustomSection;
