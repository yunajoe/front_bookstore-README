import { useGetMyReviewList } from '@/api/member';
import MyReviewCardList from '@/components/card/bookReviewCard/myReviewCardList';
import MainLayout from '@/components/layout/mainLayout';
import { myReviews } from '@/pages/api/mock/myReviewMock';

export default function MyReviewPage() {
  const { data, isLoading, isError } = useGetMyReviewList(1);
  console.log(data);
  let reviewList = data ?? [];
  return (
    <MainLayout>
      <div className="mx-auto flex w-full flex-col justify-center px-60 py-20 mobile:px-15 mobile:py-0 tablet:px-40">
        {data && data.length > 0 ? (
          <MyReviewCardList myReviewData={myReviews} />
        ) : (
          <div className="flex-center pt-120 mobile:pt-80">
            작성한 리뷰가 없어요!
          </div>
        )}
      </div>
    </MainLayout>
  );
}
