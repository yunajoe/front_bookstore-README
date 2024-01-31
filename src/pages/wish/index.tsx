// desktop에서는 2x 4
//  tablet에서는 1 x 4
// mobile에서는  1 x 4

import BookRating from '@/components/book/bookRating/bookRating';
import { myWishListData } from '@/pages/api/mock';
import Image from 'next/image';
import { useEffect, useState } from 'react';

function WishListPage() {
  const resdata = myWishListData.whishListArray;
  const [isAllItemsClick, setAllItemsClick] = useState(false);
  const [itemArr, setItemArr] = useState([]);

  const [isClick, setIsClick] = useState(false);

  // 전체선택을 하면은 모든 아이템들이 check
  // 다중선택 가능하게함
  // 전체선택 후에 개별 아이템들을 선택하면은 그 선택한 아이템만 초록색 check가 되구 나머지는 하얀색 check루 변함

  // 이게 true이면서
  // console.log('전체선택의유무', isAllItemsClick, itemArr);
  // 전체선택이 false이면은 check를 다 안해야 하는게 맞는다
  // 하지만, false이면은 item이 선택이
  // 개별 선택후 => 전체석태 => 전체 체크 표시
  // 그 후 전체선택 (false) => 다 해제되어야함
  // useEffect(() => {
  //   if (!isAllItemsClick && itemArr.length) {
  //     setItemArr([]);
  //   }
  // }, [itemArr]);

  return (
    <div className="w-full flex flex-col items-center">
      <div className="max-w-[1200px] border-solid border-2 border-green">
        <div>웹헤더</div>
        <div>카테고리헤더</div>
        <div className="flex flex-col border-solid border-2 border-red mobile:px-15 tablet: px-40">
          <div className="text-black text-20 font-bold">
            찜목록({resdata.length})
          </div>
          <div className="flex justify-between my-23 mobile:my-18 tablet:my-23">
            <div className="flex gap-x-8">
              <div
                onClick={() => {
                  setAllItemsClick(!isAllItemsClick);
                }}>
                <Image
                  src={
                    isAllItemsClick
                      ? '/icons/CheckedCheckBox.svg'
                      : '/icons/CheckBox.svg'
                  }
                  alt="체크아이콘"
                  width={20}
                  height={20}
                />
              </div>
              <span className="text-gray-4 text-14">전체선택</span>
            </div>
            <span className="text-black text-14 font-normal">
              선택항목 삭제
            </span>
          </div>
          <div className="grid grid-cols-2 tablet:grid-cols-1 mobile:grid-cols-1 gap-20 mobile:gap-y-10">
            {resdata.map((item) => {
              const selectedItems = itemArr.filter(
                (clickedItem) => clickedItem.id === item.id,
              );

              return (
                <div
                  key={item.id}
                  className="relative flex items-center pt-40 pb-43 pr-82 border-2 border-gray-1 bg-white
                    rounded-[10px]">
                  <div className="absolute top-20 right-20 mobile:top-10 right-10">
                    <Image
                      src="/icons/Close.svg"
                      alt="엑스"
                      width={24}
                      height={24}
                    />
                  </div>
                  <div
                    className="mx-20"
                    onClick={() => {
                      setIsClick(!isClick);
                      setItemArr((prev) => [...prev, item]);

                      const targetIdx = itemArr.findIndex(
                        (clickedItem) => clickedItem.id === item.id,
                      );
                      if (targetIdx !== -1) {
                        itemArr.splice(targetIdx, 1);
                        setItemArr([...itemArr]);
                      }
                      if (isAllItemsClick) {
                        setAllItemsClick(false);
                      }
                    }}>
                    <Image
                      src={
                        isAllItemsClick || item.id === selectedItems[0]?.id
                          ? '/icons/CheckedCheckBox.svg'
                          : '/icons/CheckBox.svg'
                      }
                      alt="체크아이콘"
                      width={20}
                      height={20}
                    />
                  </div>
                  <div className="flex gap-x-20 rounded-[10px] border-solid border-2 border-green">
                    <img
                      src={item.image}
                      alt=""
                      width="112"
                      height="170"
                      className="object-cover aspect-[112/170]"
                    />
                    <div className="flex flex-col gap-x-8 border-solid border-2 border-blue">
                      <span className="w-200 mobile:w-147 text-ellipsis overflow-hidden">
                        {item.title}
                      </span>
                      <span className="text-gray-3">{item.author}</span>
                      <div className="flex-start">
                        <BookRating rating={item.rating} />
                      </div>
                      <span className="text-14">[{item.genre}]</span>
                      <span className="text-14 text-color text-bold">
                        {item.price.toLocaleString()}원
                      </span>
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
