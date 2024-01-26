import { ReactElement } from 'react';
import MainLayout from '@/components/layout/mainLayout';
import { NextPageWithLayout } from '@/pages/_app';

function Home() {
  return (
    //메인페이지 각 컴포넌트 넣을자리에 div로 표시만 해둠
    <>
      <div className="bg-green h-480 w-[1080px] mt-40 mb-87 flex-center">div두개있는 젤 위에꺼</div>
      <div className="bg-gray-3 h-482 w-[1200px] flex-center">맞춤도서</div>
      <div className="bg-green h-[581px] w-[1200px] flex-center">신간도서</div>
      <div className="bg-gray-3 h-[633px] w-[1200px] flex-center">실시간 인기 도서</div>
      <div className="bg-green h-[800px] w-[1080px] mt-120 flex-center">베스트셀러</div>
    </>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default Home;
