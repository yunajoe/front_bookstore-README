import Header from '@/components/header';
import CommunityCard from '@/components/card/communityCard/communityCard';
import { communityCards } from '@/pages/api/mock';
import MainLayout from '@/components/layout/mainLayout';
import { ReactElement } from 'react';

function Community() {
  return (
    <div className="grid grid-cols-3 auto-rows-auto tablet:grid-cols-2 mobile:grid-cols-1 gap-20 mt-87">
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
  return <MainLayout>{page}</MainLayout>;
};
