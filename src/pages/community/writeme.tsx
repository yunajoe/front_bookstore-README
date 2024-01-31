import CommunityCard from '@/components/card/communityCard/communityCard';
import { myCommunityCard } from '@/pages/api/mock';

function WriteMe() {
  return (
    <div
      className="grid grid-cols-3 auto-rows-auto tablet:grid-cols-2 mobile:grid-cols-1 gap-20
        mt-87">
      {myCommunityCard.map((my) => (
        <CommunityCard
          key={my.id}
          profileImg={my.profileImg}
          userNickname={my.userNickname}
          createAt={my.createAt}
          bookCover={my.bookCover}
          bookTitle={my.bookTitle}
          review={my.review}
        />
      ))}
    </div>
  );
}

export default WriteMe;
