/* 메인 페이지에 들어갈 실시간 인기 도서 코너 컴포넌트 */

// TODO - props 없이 내부에서 data fetching을 받도록 구현할 예정으로, 지금은 목업데이터를 쓰게끔 함

import { bookListMock } from '@/components/mocks/todayBestMock';
import TodayBestBook from '@/components/card/todayBestBookCard/TodayBestBookCard';
import SkeletonTodayBestBook from '@/components/skeleton/skeletonTodayBestBook';
import useWindowInnerWidth from '@/hooks/useWindowInnerWidth';
import TodayBestSlider from './todayBestSlider';

function TodayBestCorner() {
  // const { data: bookList, isLoading } = useQuery({
  //     queryKey: [""],
  //     queryFn: () => { },
  // });
  const isLoading = false;
  const bookList = bookListMock;
  const { dynamicWid } = useWindowInnerWidth();

  // isLoading 시 스켈레톤 ui 렌더링
  if (isLoading) {
    return (
      <div className="relative w-full flex justify-start items-center flex-col h-[633px] tablet:h-[833px] mobile:h-268 overflow-hidden">
        <div className=" bg-gray-1 w-full h-270 mobile:h-187 flex-center">
          <h1 className="relative bottom-55 font-bold text-24 mobile:bottom-45 mobile:text-20">
            실시간 인기 도서
          </h1>
        </div>
        <div className="grid grid-rows-2 grid-flow-col gap-20 tablet:grid-rows-3 absolute top-93 tablet:top-133  mobile:top-87">
          {[0, 1, 2, 3, 4, 5].map((key) => {
            return (
              <div
                key={key}
                className={`${key === 2 || key === 3 ? `relative top-40 ` : ` `}tablet:static
                mobile:static`}>
                <SkeletonTodayBestBook />
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // 데탑, 타블렛 환경에선 그냥 TodayBestBook map으로 렌더링, 모바일환경에선 TodayBestSlider 렌더링.
  return (
    <div className="relative w-full flex justify-start items-center flex-col h-[633px] tablet:h-[833px] mobile:h-268">
      <div className=" bg-gray-1 w-full h-270 mobile:h-187 flex-center">
        <h1 className="relative bottom-55 font-bold text-24 mobile:bottom-45 mobile:text-20">
          실시간 인기 도서
        </h1>
      </div>
      <div className="absolute flex-center top-93 tablet:top-133 mobile:top-87">
        <div className="grid grid-rows-2 grid-flow-col gap-20 tablet:grid-rows-3 mobile:hidden">
          {bookList ? (
            <>
              {bookList?.map((book, ind) => {
                return (
                  <div
                    key={book.productId}
                    className={`${ind === 2 || ind === 3 ? 'relative top-40 ' : ' '}tablet:static mobile:static`}>
                    <TodayBestBook {...book} />
                  </div>
                );
              })}
            </>
          ) : (
            <></>
          )}
        </div>
        <div className="hidden mobile:block">
          <TodayBestSlider
            dataList={bookList}
            sliderWidth={dynamicWid}
            sliderHeight={181}
            componentWidth={320}
            auto={true}
            sec={5}
          />
        </div>
      </div>
    </div>
  );
}

export default TodayBestCorner;
