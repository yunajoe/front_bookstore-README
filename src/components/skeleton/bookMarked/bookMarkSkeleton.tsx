import MainLayout from '@/components/layout/mainLayout';
import Image from 'next/image';
import CheckBoxIcon from '@/public/icons/CheckBox.svg';

function BookMarkSkeleton() {
  const arr = Array.from({ length: 20 }).map((_, index) => index);
  return (
    <div className="w-full max-w-[1200px]">
      <div className="mt-20 flex w-full flex-col px-60 mobile:px-15 tablet:px-40">
        <div className="text-20 font-bold text-black">찜목록</div>
        <div className="my-23 flex justify-between mobile:my-18 tablet:my-23">
          <div className="flex gap-x-8">
            <div className="h-20 w-20 cursor-pointer">
              <Image
                src={CheckBoxIcon}
                alt="체크아이콘"
                width={20}
                height={20}
              />
            </div>
            <span className="text-14 text-gray-4">전체선택</span>
          </div>
          <span className="cursor-pointer text-14 font-normal text-black">
            선택항목 삭제
          </span>
        </div>
        <div
          className="tablet: grid grid-cols-2 gap-x-20 gap-y-20 mobile:grid-cols-1 mobile:gap-y-10
                      tablet:grid-cols-1">
          {arr.map((_, index) => (
            <div
              key={index}
              className="h-291 animate-pulse rounded-[5px]  border border-gray-1 bg-gray-1 mobile:h-228 tablet:h-239 "></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BookMarkSkeleton;
