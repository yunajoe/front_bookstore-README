import BookRating from '@/components/book/bookRating/bookRating';
import Percentage from '@/components/book/percentage/percentage';

interface ReviewOverviewCardProps {
  rating: number;
  reviewNum: number;
  ratingDist: [number, number, number, number, number];
}

function ReviewOverviewCard({
  rating,
  reviewNum,
  ratingDist,
}: ReviewOverviewCardProps) {
  return (
    <div
      className="bg-[#F5F5F5] h-210 max-w-[710px] w-full rounded-[10px] flex-center mobile:w-330
        mobile:h-151">
      <div className="flex-center flex-col gap-8">
        <h3 className="font-bold text-[24px] text-gray-4">{rating}</h3>
        <BookRating rating={rating} size="md" />
      </div>
      <div>
        <Percentage num={2} total={5} />
      </div>
    </div>
  );
}

export default ReviewOverviewCard;
