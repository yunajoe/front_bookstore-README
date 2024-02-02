import BookRating from '@/components/book/bookRating/bookRating';
import PreviewBookInfo from '@/components/book/previewBookInfo/previewBookInfo';
import MainLayout from '@/components/layout/mainLayout';
import useInfinite from '@/hooks/useInfinite';
import { myWishListData } from '@/pages/api/wishMock';

import Image from 'next/image';
import { useEffect, useState } from 'react';

type WishListData = {
  id: number;
  image: string;
  title: string;
  author: string;
  rating: number;
  genre: string;
  price: number;
};

function fetchNextData(start: number, end: number) {
  const dataByScreen = myWishListData.wishListArray.slice(start, end);
  return dataByScreen;
}
const START = 0;
function CartPage() {
  const [end, setEnd] = useState(8);
  const [wishListData, setWishListData] = useState(
    () => fetchNextData(START, end) || [],
  );
  const [ref, isIntersecting] = useInfinite();

  useEffect(() => {
    if (isIntersecting && wishListData.length >= end) {
      setEnd((num) => num + 8);
      setWishListData((prev) => [...prev, ...fetchNextData(end, end + 8)]);
    }
  }, [isIntersecting]);

  const [selectedItemArr, setSelectedItemArr] = useState<WishListData[]>([]);

  const resetSelectedItemArr = () => setSelectedItemArr([]);

  const filteredDataByTargetId = (arr: WishListData[], targetId: number) =>
    arr.filter((arrItem) => arrItem.id === targetId);

  const filteredDataByNotTargetId = (arr: WishListData[], targetId: number) =>
    arr.filter((arrItem) => arrItem.id !== targetId);

  const handleDeleteSelectedItems = () => {
    const filteredData = wishListData.filter((item) => {
      return selectedItemArr.map((picked) => picked.id).indexOf(item.id) === -1;
    });
    setWishListData(filteredData);
    resetSelectedItemArr();
  };

  return (
    <div className="w-full flex flex-col items-center">
      <div className="max-w-[1200px] w-full">
        <div>헤더1</div>
        <div>헤더2</div>
        <div className="max-w-[1200px] w-full border-2 border-solid border-red">
          <div
            className="flex mobile:flex-col px-60 tablet:px-40 mobile:px-15 gap-x-30 tablet:gap-x-20
              mobile:gap-x-10">
            <div
              className="grid grid-cols-1 tablet:grid-cols-1 mobile:grid-cols-1 gap-x-20 tablet: gap-y-20
                mobile:gap-y-10">
              <div className="text-black text-20 font-bold mt-40">
                장바구니({wishListData.length})
              </div>
              <div className="flex justify-between">
                <div className="flex gap-x-8">
                  <div
                    className="cursor-pointer"
                    onClick={() => {
                      if (wishListData.length === selectedItemArr.length) {
                        resetSelectedItemArr();
                      } else {
                        setSelectedItemArr([...wishListData]);
                      }
                    }}>
                    <Image
                      src={
                        wishListData.length === selectedItemArr.length
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
                <span className="text-black font-normal cursor-pointer">
                  선택항목 삭제
                </span>
              </div>
              {wishListData.map((item) => {
                const selectedItems = filteredDataByTargetId(
                  selectedItemArr,
                  item.id,
                );
                const pickedNum = selectedItems.map((item) => item.id)[0];
                return (
                  <div
                    key={item.id}
                    className={`relative w-[710px] tablet:w-452 mobile:w-330 flex items-center pt-40 pb-43 pr-82
                      border-2 ${item.id === pickedNum ? 'border-green' : 'border-gray-1'} bg-white
                      rounded-[10px]`}>
                    <div
                      className="absolute top-20 right-20 mobile:top-10 cursor-pointer"
                      onClick={() => {
                        const filteredWishListData = filteredDataByNotTargetId(
                          wishListData,
                          item.id,
                        );
                        setWishListData(filteredWishListData);
                      }}>
                      <Image
                        src="/icons/Close.svg"
                        alt="엑스"
                        width={24}
                        height={24}
                      />
                    </div>
                    <div
                      className="mx-20 mobile:mx-10"
                      onClick={() => {
                        setSelectedItemArr((prev) => [...prev, item]);
                        const targetIdx = selectedItemArr.findIndex(
                          (clickedItem) => clickedItem.id === item.id,
                        );

                        if (targetIdx !== -1) {
                          selectedItemArr.splice(targetIdx, 1);
                          setSelectedItemArr([...selectedItemArr]);
                        }
                      }}>
                      <div className="cursor-pointer">
                        <Image
                          src={
                            item.id === selectedItems[0]?.id
                              ? '/icons/CheckedCheckBox.svg'
                              : '/icons/CheckBox.svg'
                          }
                          alt="체크아이콘"
                          width={20}
                          height={20}
                        />
                      </div>
                    </div>
                    <div className="flex items-end">
                      <div className="flex gap-x-20 rounded-[10px]">
                        <PreviewBookInfo size="sm" />
                        <div className="w-274 mobile:w-147 flex flex-col gap-y-8 mobile:w-">
                          <div className="text-15 text-black font-bold break-all line-clamp-2">
                            {item.title}
                          </div>
                          <span className="text-gray-3 whitespace-nowrap text-ellipsis overflow-hidden">
                            {item.author}
                          </span>
                          <span className="text-14 text-color font-bold">
                            {item.price.toLocaleString()}원
                          </span>
                          <div
                            className="flex justify-center gap-x-6 border-2 border-solid border-gray-1 w-72
                              rounded-[5px] pt-10 pb-10">
                            <div>-</div>
                            <div>3</div>
                            <div>+</div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col border-2 border-solid border-red items-end gap-y-8 place-items-end">
                        <span>배송비 3,000원</span>
                        <span>{item.price.toLocaleString()}원</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div
              className="flex flex-col w-340 tablet:w-216 mobile:w-330 h-308 tablet:h-288 mobile:h-288
                mobile:mt-20 border-2 border-solid border-gray-1 p-30 tablet:p-20 mobile:p-20
                mt-127 rounded-[10px]">
              <div className="flex justify-between border-2 border-solid border-red mb-20">
                <span className="text-black font-normal text-15">
                  총 상품 금액
                </span>
                <span className="text-black font-bold text-15">23,500원</span>
              </div>
              <div className="flex justify-between border-2 border-solid border-red mb-20">
                <span className="text-black font-normal text-15">
                  총 배송비
                </span>
                <span className="text-black font-bold text-15">+ 3,000원</span>
              </div>
              <div className="flex justify-between border-2 border-solid border-red mb-30">
                <span className="text-black font-normal text-15">
                  총 할인 금액
                </span>
                <span>23,500원</span>
              </div>
              <div className="flex justify-between s border-2 border-solid border-red mb-40">
                <span className="text-green font-bold text-15">결제 금액</span>
                <span className="text-green font-bold text-25">23,500원</span>
              </div>
              {/* h가 안되는 이유는? padding이 안되는 잉유는*/}
              <button className="border-2 border-solid border-red text-center bg-green text-white rounded-[5px]">
                결제하기(1)
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
