import { ReactElement } from 'react';
import MainLayout from '@/components/layout/mainLayout';
import { NextPageWithLayout } from '@/pages/_app';

function Home() {
  return (
    //메인페이지 각 컴포넌트 넣을자리에 div로 표시만 해둠
    <>
      <div className="bg-green h-480 w-[1080px] mt-40 mb-87">A</div>
      <div className="bg-gray-3 h-482 w-[1200px]">B</div>
      <div className="bg-green h-[581px] w-[1200px]">C</div>
      <div className="bg-gray-3 h-[633px] w-[1200px]">D</div>
      <div className="bg-green h-[800px] w-[1080px] mt-120 ">E</div>
    </>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default Home;
