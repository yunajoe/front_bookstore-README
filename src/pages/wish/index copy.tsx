import BookRating from '@/components/book/bookRating/bookRating';
import Header from '@/components/header';
import { myWishListData } from '@/pages/api/mock';
import Image from 'next/image';
import { useState } from 'react';

type WishListData = {
  id: number;
  image: string;
  title: string;
  author: string;
  rating: number;
  genre: string;
  price: number;
};

function WishListPage() {
  const [wishListData, setWishListData] = useState<WishListData[]>(
    myWishListData.wishListArray,
  );

  const [selectedItemArr, setSelectedItemArr] = useState<WishListData[]>([]);

  const handleDeleteSelectedItems = () => {
    const filteredData = wishListData.filter((item) => {
      return selectedItemArr.map((picked) => picked.id).indexOf(item.id) === -1;
    });
    setWishListData(filteredData);
    setSelectedItemArr([]);
  };

  return (
    <div className="w-full flex flex-col items-center">
      <div className="max-w-[1200px] border-solid border-2 border-green">
        <Header isLoggedIn={false} numItemsOfCart={0} />
        <div className="flex flex-col border-solid border-2 border-red mobile:px-15 tablet: px-40">
          <div className="text-black text-20 font-bold">
            찜목록({wishListData.length})
          </div>
          <div className="flex justify-between my-23 mobile:my-18 tablet:my-23">
            <div className="flex gap-x-8">
              <div
                className="cursor-pointer"
                onClick={() => {
                  if (wishListData.length === selectedItemArr.length) {
                    setSelectedItemArr([]);
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
              className="text-black text-14 font-normal cursor-pointer"
              onClick={() => handleDeleteSelectedItems()}>
              선택항목 삭제
            </span>
          </div>
          <div className="grid grid-cols-2 tablet:grid-cols-1 mobile:grid-cols-1 gap-20 mobile:gap-y-10">
            {wishListData.map((item) => {
              const selectedItems = selectedItemArr.filter(
                (clickedItem) => clickedItem.id === item.id,
              );
              const pickedNum = selectedItems.map((item) => item.id)[0];
              return (
                <div
                  key={item.id}
                  className={`relative flex items-center pt-40 pb-43 pr-82 border-2 ${
                    item.id === pickedNum ? 'border-green' : 'border-gray-1'
                  } bg-white rounded-[10px]`}>
                  <div
                    className="absolute top-20 right-20 mobile:top-10 right-10 cursor-pointer"
                    onClick={() => {
                      const filteredWishListData = wishListData.filter(
                        (data) => data.id !== item.id,
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
                    className="mx-20"
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
                  <div className="flex gap-x-20 rounded-[10px]">
                    <img
                      src={item.image}
                      alt=""
                      width="112"
                      height="170"
                      className="object-cover aspect-[112/170]"
                    />
                    <div className="w-274 mobile:w-147 flex flex-col gap-y-8 mobile:w-">
                      <div className="text-black text-bold break-all line-clamp-2">
                        {item.title}
                      </div>
                      <span className="text-gray-3 whitespace-nowrap text-ellipsis overflow-hidden">
                        {item.author}
                      </span>
                      <div className="flex">
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
