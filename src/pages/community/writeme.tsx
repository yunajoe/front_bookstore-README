import CommunityCard from '@/components/card/communityCard/communityCard';
import { myCommunityCard } from '@/pages/api/mock';
import { ReactElement } from 'react';
import MainLayout from '@/components/layout/mainLayout';
import PageTab from '@/components/header/pageTab';

function WriteMe() {
  return (
    <div
      className="grid grid-cols-3 auto-rows-auto tablet:grid-cols-2 mobile:grid-cols-1 gap-20 mb-198">
      {myCommunityCard.map((my) => (
        <CommunityCard
          key={my.id}
          profileImg={my.profileImg}
          userNickname={my.userNickname}
          createAt={my.createAt}
          bookCover={my.bookCover}
          bookTitle={my.bookTitle}
          review={my.review}
          kebab={true}
        />
      ))}
    </div>
  );
}

export default WriteMe;

WriteMe.getLayout = function getLayout(page: ReactElement) {
  return (
    <MainLayout>
      <PageTab
        origin="피드"
        originHref="."
        add="내 글 보기"
        addHref="/community/writeme"
      />
      {page}
    </MainLayout>
  );
};