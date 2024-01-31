import CommunityCard from '@/components/card/communityCard/communityCard';
import { communityCards } from '@/pages/api/mock';
import MainLayout from '@/components/layout/mainLayout';
import { ReactElement } from 'react';
import Link from 'next/link';

function Community() {
  return (
    <>
      <div className='flex items-center justify-between w-169 h-27'>
        <Link href='' >피드</Link>
        <div className="inline-block border-r w-1 h-14 mt-4 border-gray-1" />
        <Link href='/community/writeme' >내 글 보기</Link>
      </div>
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
    </>
  );
}

export default Community;

Community.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
