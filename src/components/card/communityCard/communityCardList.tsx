import { CommunityCardsProps } from '@/types/communityCardType';
import CommunityCard from './communityCard';

interface CommunityCardListProps {
  communityData: CommunityCardsProps[];
  kebab?: boolean;
}

function CommunityCardList({ communityData, kebab }: CommunityCardListProps) {
  return (
    <div className="grid auto-rows-auto grid-cols-3 gap-20 mobile:grid-cols-1 tablet:grid-cols-2">
      {communityData?.map((card) => (
        <CommunityCard
          key={card.bookInfo.bookId}
          profileImg={card.writer.profileImg}
          userNickname={card.writer.nickname}
          createAt={card.createDate}
          bookCover={card.bookInfo.bookImgUrl}
          bookTitle={card.bookInfo.bookTitle}
          review={card.content}
          kebab={kebab}
        />
      ))}
    </div>
  );
}
export default CommunityCardList;
