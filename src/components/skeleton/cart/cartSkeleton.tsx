import MainLayout from '@/components/layout/mainLayout';
import Image from 'next/image';
import CheckBoxIcon from '@/public/icons/CheckBox.svg';

function CartSkeleton() {
  const arr = Array.from({ length: 20 }).map((_, index) => index);
  return (
    <MainLayout>
      <div className="w-full max-w-[1200px]">
        <div className="relative w-full">
          <div
            className="flex w-full gap-x-30 px-60 mobile:flex-col mobile:gap-x-10 mobile:px-15 tablet:gap-x-20
                tablet:px-40">
            <div
              className="mb-120 mt-40 grid w-full flex-1 grid-cols-1 gap-x-20 gap-y-20 mobile:mt-20
                  mobile:grid-cols-1 mobile:gap-y-10 tablet:mt-20 tablet:grid-cols-1">
              <div className="h-27 text-20 font-bold text-black">장바구니</div>
              <div className="flex h-20 justify-between">
                <div className="flex gap-x-8">
                  <div>
                    <Image
                      src={
                       
                          CheckBoxIcon
                      }
                      alt="체크아이콘"
                      width={20}
                      height={20}
                    />
                  </div>
                  <span className="text-14 text-gray-4">전체선택</span>
                </div>
                <span
                  className="cursor-pointer font-normal text-black"
                  >
                  선택항목 삭제
                </span>
              </div>
              {arr.map((_, index) => (
                <div
                  key={index}
                  className="h-291 animate-pulse rounded-[5px]  border border-gray-1 bg-gray-1 mobile:h-228 tablet:h-239 "></div>
              ))}
            </div>
            <div
              className="sticky mt-127 flex h-300  w-340 animate-pulse flex-col
        rounded-[10px] border-2 border-solid border-gray-1 bg-gray-1 p-30 mobile:mb-165 mobile:mt-20
        mobile:w-full mobile:p-20 tablet:mt-110 tablet:w-216 tablet:p-20"></div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default CartSkeleton;
