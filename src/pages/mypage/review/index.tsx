import { useGetMyReviewList } from '@/api/member';
import MyReviewCardList from '@/components/card/bookReviewCard/myReviewCardList';
import MainLayout from '@/components/layout/mainLayout';
import SkeletonBookOverviewCard from '@/components/skeleton/bookOverviewCard/skeleton';

export default function MyReviewPage() {
  const { data, isLoading } = useGetMyReviewList(1);
  let reviewList = data ?? [];
  console.log(reviewList);

  return (
    <MainLayout>
      <div className="mx-auto flex w-full flex-col justify-center px-60 pb-100 mobile:px-15 tablet:px-40">
        {isLoading ? (
          Array.from({
            length: 5,
          }).map((_, index) => (
            <div key={index} className="h-fit w-fit pb-20 mobile:pb-30">
              <SkeletonBookOverviewCard size="sm" />
            </div>
          ))
        ) : reviewList && reviewList?.length > 0 ? (
          <MyReviewCardList myReviewData={reviewList} />
        ) : (
          <div className="flex-center pt-120 mobile:pt-80">
            작성한 리뷰가 없어요!
          </div>
        )}
      </div>
    </MainLayout>
  );
}
