import MyReviewCard from './myReviewCard';
import { MyReviewData } from '@/types/api/review';

interface MyReviewCardListProps {
  myReviewData: MyReviewData[];
}

function MyReviewCardList({ myReviewData }: MyReviewCardListProps) {
  return (
    <div className="flex flex-col gap-20 mobile:gap-25">
      {myReviewData.map((review) => (
        <div className="flex-center">
          <MyReviewCard
            authors={review?.authors}
            bookId={review?.bookId}
            bookImgUrl={review?.bookImgUrl}
            bookTitle={review?.bookTitle}
            content={review?.content}
            reviewRating={review?.reviewRating}
            updateDate={review?.updateDate}
            reviewId={review?.reviewId}
          />
        </div>
      ))}
    </div>
  );
}
export default MyReviewCardList;
