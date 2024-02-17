/* 스켈레톤용 리뷰 컴포넌트 */
import { SKELETON_COMMON_STYLE } from 'src/constants/style/skeletonCommonStyle';

function SkeletonBookReviewCard() {
  return (
    <div
      role="card-container"
      className={`flex h-120 w-full max-w-[710px] flex-col gap-12 border-2 border-gray-5 p-20`}>
      <div className="flex gap-12">
        <div
          className={`${SKELETON_COMMON_STYLE} h-48 w-48 rounded-[999px]`}></div>
        <div className="flex flex-col gap-4">
          <div className={`${SKELETON_COMMON_STYLE} h-20 w-40`}></div>
          <div className={`${SKELETON_COMMON_STYLE} h-20 w-65`}></div>
        </div>
      </div>
      <div className={`${SKELETON_COMMON_STYLE} h-30 w-full`}></div>
    </div>
  );
}

export default SkeletonBookReviewCard;
