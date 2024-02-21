import { MyReviewType } from '@/types/bookReviewType';
import MyReviewCard from './myReviewCard';

interface MyReviewCardListProps {
  myReviewData: MyReviewType[];
}

function MyReviewCardList({ myReviewData }: MyReviewCardListProps) {
  console.log(myReviewData);
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
            reviewId={review?.reviewId}
          />
        </div>
      ))}
    </div>
  );
}
export default MyReviewCardList;
