/** 카테고리 페이지 > 국내 > 전체*/

import Advertisement from '@/components/container/advertisement/advertisement';
import MainLayout from '@/components/layout/mainLayout';
import { ORDER_LIST } from 'src/constants/orders';
import OrderDropDown from '@/components/dropDown/tempDropDown';
import Spacing from '@/components/container/spacing/spacing';
import Sidebar from '../sidebar/sidebar';

interface CategoryLayoutProps {
  isDomestic: boolean;
  location?: string;
}

function CategoryLayout({ isDomestic = true, location }: CategoryLayoutProps) {
  return (
    <MainLayout>
      <section
        role="content"
        className="flex items-start flex-col pt-20 pl-245 pr-60 tablet:pr-40 tablet:pl-217
          mobile:pt-0 mobile:px-15">
        <aside
          className="absolute top-40 left-60 tablet:left-40 w-[163px] h-[994px] tablet:w-[155px]
            mobile:static mobile:h-35 mobile:w-full">
          <Sidebar isDomestic={isDomestic} location={location} />
        </aside>
        <Spacing height={[0, 0, 20]} />
        <Advertisement />
        <Spacing height={[60, 40, 40]} />
        <article className="flex flex-col gap-50 tablet:gap-40 mobile:gap-20">
          <h1 className="text-black text-20">신간도서</h1>
          <div
            role="temp"
            className="bg-gray-1 w-[895px] h-[334px] tablet:w-[511px] tablet:h-[336px] mobile:w-[330px]
              mobile:h-[297px]">
            캐러셀 넣을 곳!!!!!
          </div>
        </article>
        <Spacing height={[120, 80, 80]} />
        <article className="flex flex-col gap-50 tablet:gap-40 mobile:gap-20">
          <h1 className="text-black text-20">베스트셀러</h1>
          <div
            role="temp"
            className="bg-gray-1 w-[895px] h-[708px] tablet:w-[511px] tablet:h-[1464px]
              mobile:w-[330px] mobile:h-[1735px]">
            그냥 공백~!!! 나중에 grid로 채우면 될듯~!!
          </div>
        </article>
        <Spacing height={[120, 80, 80]} />
        <article className="flex flex-col gap-50 tablet:gap-40 mobile:gap-20">
          <div className="flex justify-between items-center">
            <h1 className="text-black text-20">모든 도서</h1>
            <OrderDropDown dataList={ORDER_LIST} />
          </div>
          <div
            role="temp"
            className="bg-gray-1 w-[895px] h-[708px] tablet:w-[511px] tablet:h-[1464px]
              mobile:w-[330px] mobile:h-[1735px]">
            그냥 공백~!! 요기도 grid로 채우고 무한스크롤 붙이면 될듯~!!!
          </div>
        </article>
      </section>
    </MainLayout>
  );
}

export default CategoryLayout;
