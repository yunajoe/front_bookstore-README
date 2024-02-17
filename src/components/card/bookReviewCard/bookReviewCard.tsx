/** 책 상세페이지에 들어갈 리뷰 컴포넌트 */
import Image from 'next/image';
import BookRating from '@/components/book/bookRating/bookRating';
import TestImage1 from '@/public/images/SampleBookCover1.jpeg';
import { ReviewData } from '@/types/api/review';

interface BookReviewProfileType {
  userNickname: string;
  profileImg?: string | null;
  reviewRating: number;
  createDate: string;
}

function BookReviewProfile({
  userNickname,
  profileImg,
  reviewRating,
  createDate,
}: BookReviewProfileType) {
  return (
    <div className="flex items-start justify-between">
      <div className="flex gap-12">
        <div className="relative h-48 w-48 overflow-hidden rounded-[50%] border-[1px] border-gray-5">
          <Image
            src={profileImg ?? TestImage1}
            alt="리뷰 작성자 프로필 이미지"
            fill
          />
        </div>
        <div className="flex flex-col items-start justify-start gap-4">
          <h3 className="text-14 font-bold text-gray-4">{userNickname}</h3>
          <BookRating rating={reviewRating} />
        </div>
      </div>
      <div className="text-12 text-gray-4">{createDate}</div>
    </div>
  );
}

function BookReviewCard({
  createDate,
  profileImg,
  userNickname,
  updateDate,
  content,
  reviewRating,
}: ReviewData) {
  return (
    <div
      role="card-container"
      className="relative flex min-h-120 w-full min-w-330 max-w-[710px] justify-start gap-12
        rounded-xl border-2 border-gray-1 p-20 mobile:min-h-108 mobile:w-330 mobile:border-x-0
        mobile:border-b mobile:border-t-0 mobile:p-0 mobile:pb-12">
      <div className="flex w-full flex-col gap-12">
        <BookReviewProfile
          createDate={createDate}
          userNickname={userNickname ?? '익명이'}
          profileImg={profileImg}
          reviewRating={reviewRating}
        />
        <div role="content" className="text-pretty text-14 text-gray-3">
          {content}
        </div>
      </div>
    </div>
  );
}
export default BookReviewCard;
