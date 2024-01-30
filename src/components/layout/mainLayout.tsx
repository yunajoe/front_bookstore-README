import Header from '@/components/header/index';
import ScrollToTopButton from '@/components/button/scrollToTopButton';

function MainLayout() {
  return (
    <div className="flex-col justify-center">
      <Header isLoggedIn={true} numItemsOfCart={1} />
      <div
        className="bg-green h-480 w-[1080px] mt-40 mb-87 flex-center tablet:w-[688px] tablet:mb-80
          mobile:w-330 mobile:mb-20 mx-auto">
        div두개있는 젤 위에꺼
      </div>
      <div className="bg-gray-3 h-482 w-[1200px] flex-center mx-auto tablet:w-full mobile:w-full">
        맞춤도서
      </div>
      <div className="bg-green h-[581px] w-[1200px] flex-center mx-auto tablet:w-full mobile:w-full">
        신간도서
      </div>
      <div className="bg-gray-3 h-[633px] w-[1200px] flex-center mx-auto tablet:w-full mobile:w-full">
        실시간 인기 도서
      </div>
      <div
        className="bg-green h-[800px] w-[1080px] mt-120 flex-center mx-auto tablet:w-[688px]
          mobile:w-330">
        베스트셀러
      </div>
      <ScrollToTopButton />
    </div>
  );
}

export default MainLayout;
