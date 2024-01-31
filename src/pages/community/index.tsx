import Header from '@/components/header';
import CommunityCard from '@/components/card/communityCard/communityCard';
import { communityCards } from '@/pages/api/mock';

function Community() {
  return (
    <div>
      <Header isLoggedIn={false} />
      <Header isLoggedIn={true} numItemsOfCart={4} />
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
    </div>
  );
}

export default Community;
