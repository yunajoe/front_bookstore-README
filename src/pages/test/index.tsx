import CommunityCard from '@/components/card/communityCard/communityCard';
import SampleProfile from '@/public/images/SampleBookCover1.jpeg';
import SampleBookCover from '@/public/images/SampleBookCover4.jpeg';
import Header from '@/components/header';
import PreviewBookInfo from '@/components/book/previewBookInfo/previewBookInfo';
import TestImage1 from '@/public/images/SampleBookCover1.jpeg';
import TestImage2 from '@/public/images/SampleBookCover3.jpeg';

//한줄씩 밑으로 추가될거에용
function TestPage() {
  return (
    <div className="grid auto-rows-auto gap-20 p-40">
      <CommunityCard
        profileImg={SampleProfile}
        userNickname="리드미"
        createAt="2024.01.25"
        bookCover={SampleBookCover}
        bookTitle="책이름"
        review="리뷰입니다"
      />
      <PreviewBookInfo
        title="어머 이책 사야해!"
        authorList={['이승연', '작가얌', '작가2', '작가3', '작가3', '작가3']}
        size="lg"
        ranking={10}
        category="가정/육아"
        price={123456789}
      />
      <PreviewBookInfo
        title="어머 이책 사야해!"
        authorList={['이승연', '작가얌', '작가2', '작가333']}
        size="md"
        ranking={30}
        image={TestImage2}
      />
      <PreviewBookInfo
        title="겁나 비싼 책"
        authorList={['이승연', '작가얌', '작가2', '작가3']}
        size="sm"
        ranking={100}
        image={TestImage1}
      />
      <Header isLoggedIn={false} />
      <Header isLoggedIn={true} numItemsOfCart={3} />
    </div>
  );
}

export default TestPage;
