import SidebarLayout from '@/components/layout/sidebarLayout';
import Spacing from '@/components/container/spacing/spacing';
import EventSection from '@/components/container/eventSection/eventSection';
import CategoryCarousel from '@/components/carousel/categoryCarousel';
import { carouselMockData } from '@/pages/api/mock/carouselMock';
import { responsive } from '@/utils/checkResponsiveEnv';
import SubCategoryBookList from '@/components/container/categoryBookList/subCategoryBookList';
import BestSellerSection from '@/components/container/bestsellerSection/bestsellerSection';
import { useGetBook } from '@/api/book';
import { BookData } from '@/types/api/book';
import { useRouter } from 'next/router';

function CategoryPage() {
  const { data: bestsellers } = useGetBook({
    endpoint: `1/sub`,
    params: {
      bookId: '0',
      limit: '10',
      sort: 'BESTSELLER',
      ascending: false,
    },
  });

  const bestList: Array<BookData> = bestsellers ? bestsellers.data.books : [];

  return (
    <SidebarLayout>
      <Spacing height={[0, 0, 20]} />

      <EventSection
        adsSizeClassName="w-[525px] h-[483px] tablet:w-297 tablet:h-275 mobile:w-330 mobile:h-178"
        eventSizeClassName="w-[340px] h-[483px] tablet:w-194 tablet:h-275 mobile:w-330 mobile:h-90"
      />
      <Spacing height={[60, 40, 40]} />

      <CategoryCarousel data={carouselMockData} responsive={responsive} />
      <BestSellerSection page="category" bookList={bestList} />

      <SubCategoryBookList />
    </SidebarLayout>
  );
}

export default CategoryPage;
