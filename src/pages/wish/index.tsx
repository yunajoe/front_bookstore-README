// desktop에서는 2x 4
//  tablet에서는 1 x 4
// mobile에서는  1 x 4

import BookRating from '@/components/book/bookRating/bookRating';
import { myWishListData } from '@/pages/api/mock';
import Image from 'next/image';

function WishListPage() {
  const resdata = myWishListData.whishListArray;

  // desktop 이미지 container width = 530px height = 240px
  // desktop
  return (
    <div className="w-full flex flex-col items-center">
      <div className="max-w-[1200px] border-solid border-2 border-green">
        <div>웹헤더</div>
        <div>카테고리헤더</div>
        <div className="flex flex-col gap-y-20 mx-60 mt-20 border-solid border-2 border-red">
          <div>찜목록 {resdata.length}</div>
          <div className="flex justify-between">
            <div className="flex gap-x-8">
              <Image
                src="/icons/CheckBox.svg"
                alt="체크아이콘"
                width={20}
                height={20}
              />
              <span>전체선택</span>
            </div>
            <span>선택항목 삭제</span>
          </div>
          <div className="grid grid-cols-2 tablet:grid-cols-1 mobile:grid-cols-1 gap-20">
            {resdata.map((item) => {
              return (
                // 여기서는 grid사용
                <div
                  key={item.id}
                  className="relative flex items-center pt-40 pb-43 pr-82 border-solid border-2 border-blue
                    rounded-[10px]">
                  <div className="absolute top-20 right-20">
                    <Image
                      src="/icons/Close.svg"
                      alt="엑스"
                      width={24}
                      height={24}
                    />
                  </div>
                  <div className="mx-20">
                    <Image
                      src="/icons/CheckBox.svg"
                      alt="체크아이콘"
                      width={20}
                      height={20}
                    />
                  </div>
                  <div className="flex gap-x-20 border-solid border-2 border-green">
                    <img
                      src={item.image}
                      alt=""
                      width="112"
                      height="170"
                      className="object-cover aspect-[112/170]"
                    />
                    <div className="flex flex-col">
                      <span>{item.title}</span>
                      <span>{item.author}</span>
                      <BookRating rating={item.rating} />
                      <span>{item.genre}</span>
                      <span>{item.price}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WishListPage;
