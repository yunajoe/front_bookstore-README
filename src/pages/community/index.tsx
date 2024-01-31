import CommunityCard from '@/components/card/communityCard/communityCard';
import { communityCards } from '@/pages/api/mock';
import { ReactElement } from 'react';
import MainLayout from '@/components/layout/mainLayout';
import PageTab from '@/components/header/pageTab';

function Community() {
  return (
    <div className="grid grid-cols-3 auto-rows-auto tablet:grid-cols-2 mobile:grid-cols-1 gap-20">
      {communityCards.map((card) => (
        <CommunityCard
          key={card.id}
          profileImg={card.profileImg}
          userNickname={card.userNickname}
          createAt={card.createAt}
          bookCover={card.bookCover}
          bookTitle={card.bookTitle}
          review={card.review}
        />
      ))}
    </div>
  );
}

export default Community;

Community.getLayout = function getLayout(page: ReactElement) {
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
