import Carousel from '@/components/carousel/carousel';
import CategoryCarousel from '@/components/carousel/categoryCarousel';
import { carouselMockData } from '@/pages/api/mock/carouselMock';
import { responsive, categoryResponsive } from '@/utils/checkResponsiveEnv';

function TestPage() {
  return (
    <>
      <Carousel data={carouselMockData} responsive={responsive} />
      <CategoryCarousel
        data={carouselMockData}
        responsive={categoryResponsive}
      />
    </>
  );
}

export default TestPage;
