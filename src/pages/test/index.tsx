import CommunityCard from '@/components/card/communityCard/communityCard';
import DropDown from '@/components/dropDown/dropDown';
import SampleProfile from '@/public/images/SampleBookCover1.jpeg';
import SampleBookCover from '@/public/images/SampleBookCover4.jpeg';

//한줄씩 밑으로 추가될거에용
function TestPage() {
  return (
    <div className="grid auto-rows-auto gap-20 p-40">  
      <DropDown />
      <CommunityCard
        profileImg={SampleProfile}
        userNickname="리드미"
        createAt="2024.01.25"
        bookCover={SampleBookCover}
        bookTitle="책이름"
        review="리뷰입니다"
      />
    </div>
  );
}

export default TestPage;
