import PreviewBookInfo from '@/components/book/previewBookInfo/previewBookInfo';
import MainLayout from '@/components/layout/mainLayout';

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

function CartPage() {
  const [wishListData, setWishListData] = useState(
    myWishListData.wishListArray,
  );

  const [selectedItemArr, setSelectedItemArr] = useState<WishListData[]>([]);
  const [totalAmount, setTotalAmount] = useState(0);

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
  const isThePriceChange = () => {};
  const copyWishListData = wishListData.slice();
  const res = wishListData.filter((item) => {
    return copyWishListData.map((copyItem) => {
      if (copyItem.id === item.id) {
        return item.price !== copyItem.price;
      }
      return;
    });
  });

  useEffect(() => {
    const totalPrice = wishListData.reduce((acc, item) => {
      acc += item.price;
      return acc;
    }, 0);
    setTotalAmount(totalPrice);
  }, []);

  return (
    <div className="w-full flex flex-col items-center">
      <div className="max-w-[1200px] w-full">
        <MainLayout>
          <div className="w-full border-2 border-solid border-red">
            <div
              className="flex mobile:flex-col px-60 tablet:px-40 mobile:px-15 gap-x-30 tablet:gap-x-20
                mobile:gap-x-10">
              <div
                className="flex-1 grid grid-cols-1 tablet:grid-cols-1 mobile:grid-cols-1 gap-x-20 tablet:
                  gap-y-20 mobile:gap-y-10">
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
                  <span
                    className="text-black font-normal cursor-pointer"
                    onClick={() => handleDeleteSelectedItems()}>
                    선택항목 삭제
                  </span>
                </div>
                {wishListData.map((item) => {
                  const selectedItems = filteredDataByTargetId(
                    selectedItemArr,
                    item.id,
                  );
                  const pickedItemId = selectedItems.map((item) => item.id)[0];

                  return (
                    <div
                      key={item.id}
                      className={`flex-1 flex relative items-center pt-40 pb-43 pr-44 mobile:pt-20 mobile:pb-75
                        border-2 ${item.id === pickedItemId ? 'border-green' : 'border-gray-1'} bg-white
                        rounded-[10px]`}>
                      <div
                        className="absolute top-20 right-20 mobile:top-10 mobile:right-10 cursor-pointer"
                        onClick={() => {
                          const filteredWishListData =
                            filteredDataByNotTargetId(wishListData, item.id);
                          setWishListData(filteredWishListData);
                        }}>
                        <Image
                          src="/icons/Close.svg"
                          alt="엑스"
                          width={24}
                          height={24}
                          className="mobile:w-18 h-18"
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
                      <div className="w-full flex flex-1 relative mobile:static">
                        <div className="flex gap-x-20 rounded-[10px]">
                          <PreviewBookInfo size="sm" />
                          <div className="flex flex-col gap-y-8">
                            <div className="flex flex-col">
                              <div
                                className="w-256 tablet:w-196 mobile:w-147 text-15 text-black font-bold break-all
                                  line-clamp-2">
                                {item.title}
                              </div>
                              <div
                                className="w-256 tablet:w-196 mobile:w-147 text-gray-3 whitespace-nowrap text-ellipsis
                                  overflow-hidden">
                                {item.author}
                              </div>
                            </div>
                            <div className="text-14 text-color font-bold mb-12">
                              {item.price.toLocaleString()}원
                            </div>
                            <div
                              className="flex justify-center gap-x-6 w-72 rounded-[5px] py-4 border-2 border-solid
                                border-gray-1">
                              <div
                                className="cursor-pointer"
                                onClick={() => {
                                  const itemIdx = wishListData.findIndex(
                                    (data) => data.id === item.id,
                                  );
                                  let clickedCount =
                                    (wishListData[itemIdx]['clicked'] || 1) - 1;

                                  setWishListData((prev) =>
                                    prev.map((el, index) =>
                                      index === itemIdx
                                        ? { ...el, clicked: clickedCount }
                                        : el,
                                    ),
                                  );
                                }}>
                                -
                              </div>
                              <div>
                                {(item.clicked >= 1 && item.clicked) || 1}
                              </div>
                              <div
                                className="cursor-pointer"
                                onClick={() => {
                                  // 클릭한 아이템의 index
                                  const itemIdx = wishListData.findIndex(
                                    (data) => data.id === item.id,
                                  );
                                  let clickedCount =
                                    (wishListData[itemIdx]['clicked'] || 1) + 1;
                                  setWishListData((prev) =>
                                    prev.map((el, index) =>
                                      index === itemIdx
                                        ? { ...el, clicked: clickedCount }
                                        : el,
                                    ),
                                  );
                                }}>
                                +
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="absolute right-0 bottom-0 flex flex-col items-end mobile:border-t-2
                            border-gray-1 mobile:flex-row mobile:justify-between mobile:w-full mobile:px-20
                            mobile:py-16">
                          {/* <span className="text-gray-3">
                            <span>배송비 </span>
                            <span>3,000원</span>
                          </span> */}
                          <span className="text-black text-20 font-bold">
                            {item.clicked > 0
                              ? item.price * item.clicked
                              : item.price}
                            원
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div
                className="mobile:w-full h-fit flex flex-col w-340 tablet:w-216 mt-127 mobile:mt-20
                  border-2 border-solid border-gray-1 p-30 tablet:p-20 mobile:p-20 rounded-[10px]">
                <div className="flex justify-between border-2 border-solid border-red mb-20">
                  <span className="text-black font-normal text-15">
                    총 상품 금액
                  </span>
                  <span className="text-black font-bold text-15">
                    {totalAmount}
                  </span>
                </div>
                <div className="flex justify-between border-2 border-solid border-red mb-20">
                  <span className="text-black font-normal text-15">
                    총 배송비
                  </span>
                  <span className="text-black font-bold text-15">
                    + 3,000원
                  </span>
                </div>
                <div className="flex justify-between border-2 border-solid border-red mb-30">
                  <span className="text-black font-normal text-15">
                    총 할인 금액
                  </span>
                  <span>23,500원</span>
                </div>
                <div className="flex justify-between border-2 border-solid border-red mb-40">
                  <span className="text-green font-bold text-15">
                    결제 금액
                  </span>
                  <span className="text-green font-bold text-25">23,500원</span>
                </div>

                <button className="text-center bg-green text-white rounded-[5px] py-15">
                  결제하기(1)
                </button>
              </div>
            </div>
          </div>
        </MainLayout>
      </div>
    </div>
  );
}

export default CartPage;
