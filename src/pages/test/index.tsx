import PreviewBookInfo from '@/components/book/previewBookInfo/previewBookInfo';
import BookOverviewCard from '@/components/card/bookOverviewCard/bookOverViewCard';
import CommunityCard from '@/components/card/communityCard/communityCard';
import AddCommunityCard from '@/components/modal/addCommunityCard';
import AddReview from '@/components/modal/addReview';
import AlertModal from '@/components/modal/alertModal';
import FindAddress from '@/components/modal/findAddress';
import { bookOverviewsMock } from '@/pages/api/mock/bestSellerMock';
import { useState } from 'react';
const bookOverviews = bookOverviewsMock;

function TestPage() {
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [isFindAddressModalOpen, setIsFindAddressModalOpen] = useState(false);
  const [isAlertModalOpen, setIsAlertModalOpen] = useState(false);
  const [isAddCommunityCardModalOpen, setIsAddCommunityCardModalOpen] = useState(false);

  const handleReviewModalOpen = () => {
    setIsReviewModalOpen(!isReviewModalOpen);
  }

  const handleFindAddressModalOpen = () => {
    setIsFindAddressModalOpen(!isFindAddressModalOpen);
  }

  const handleAlertModalOpen = () => {
    setIsAlertModalOpen(!isAlertModalOpen)
  }

  const handleAddCommunityCardModalOpen = () => {
    setIsAddCommunityCardModalOpen(!isAddCommunityCardModalOpen)
  }

  return (
    <div className="flex flex-col gap-20 p-20">
      <BookOverviewCard
        book={bookOverviews[0]?.book}
        like={bookOverviews[0]?.like}
      />
      <BookOverviewCard
        book={bookOverviews[1]?.book}
        like={bookOverviews[1]?.like}
      />
      <BookOverviewCard
        book={bookOverviews[2]?.book}
        like={bookOverviews[2]?.like}
      />
      <BookOverviewCard
        book={bookOverviews[3]?.book}
        like={bookOverviews[3]?.like}
      />
      <BookOverviewCard
        book={bookOverviews[4]?.book}
        like={bookOverviews[4]?.like}
      />
      <button onClick={handleReviewModalOpen} className='border border-black w-full h-50 bg-green flex-center'>리뷰 모달 열려라</button>
      {isReviewModalOpen && <AddReview onClick={handleReviewModalOpen} />}

      <button onClick={handleFindAddressModalOpen} className='border border-black w-full h-50 bg-green flex-center'>주소 검색하기 모달 열려라</button>
      {isFindAddressModalOpen && <FindAddress onClick={handleFindAddressModalOpen} />}
      
      <button onClick={handleAlertModalOpen} className='border border-black w-full h-50 bg-green flex-center'>삭제하기 모달 열려라</button>
      {isAlertModalOpen && <AlertModal title="정말 삭제하시겠습니까?" description="삭제한 글은 복구할 수 없습니다." onClick={handleAlertModalOpen} />}
      
      <button onClick={handleAddCommunityCardModalOpen} className='border border-black w-full h-50 bg-green flex-center'>커뮤니티 글쓰기 모달 열려라</button>
      {isAddCommunityCardModalOpen && <AddCommunityCard  onClick={handleAddCommunityCardModalOpen} />}
      
    </div>
  );
}

export default TestPage;
