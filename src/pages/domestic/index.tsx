/** 카테고리 페이지 > 국내 > 전체*/

import SidebarLayout from '@/components/layout/sidebarLayout';
import Spacing from '@/components/container/spacing/spacing';
import { carouselMockData } from '../api/mock/carouselMock';
import { responsive } from '@/utils/checkResponsiveEnv';
import CategoryCarousel from '@/components/carousel/categoryCarousel';
import CategoryBookList from '@/components/list/categoryBookList/categoryBookList';

export default function DomesticPage() {
  return (
      <div className='flex flex-col mobile:flex-center'>
    <SidebarLayout isDomestic={true}>
        
      <Spacing height={[0, 0, 20]} />
      
      <article>
        <div
          role="temp"
          className="h-[483px] w-[895px] bg-gray-1 mobile:h-[278px] mobile:w-[330px] tablet:h-[275px]
            tablet:w-[511px]">
          광고 넣을 곳!!!!!
        </div>
      </article>
      
      <Spacing height={[60, 40, 40]} />

      <CategoryCarousel data={carouselMockData} responsive={responsive} />
      
      <Spacing height={[120, 80, 80]} />

      <article className="flex flex-col gap-50 mobile:gap-20 tablet:gap-40">
        <h1 className="text-20 text-black">베스트셀러 넣을 곳</h1>
        <div
          role="temp"
          className="h-[500px] w-[895px] bg-gray-1 mobile:w-[330px]
          tablet:w-[511px]"></div>
      </article>
        
        <Spacing height={[120, 80, 80]} />
        
        <CategoryBookList />
        
    </SidebarLayout>
          </div>
  );
}
