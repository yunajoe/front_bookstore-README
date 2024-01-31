import BookRating from '@/components/book/bookRating/bookRating';
import { myWishListData } from '@/pages/api/mock';
import Image from 'next/image';
import { useState } from 'react';

function WishListPage() {
  const [resdata, setResData] = useState(myWishListData.whishListArray);

  const [itemArr, setItemArr] = useState([]);

  const handleDeleteSelectedItems = () => {
    const filteredData = resdata.filter((item) => {
      return itemArr.map((picked) => picked.id).indexOf(item.id) === -1;
    });
    setResData(filteredData);
  };

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
                className="cursor-pointer"
                onClick={() => {
                  if (resdata.length === itemArr.length) {
                    setItemArr([]);
                  } else {
                    setItemArr([...resdata]);
                  }
                }}>
                <Image
                  src={
                    resdata.length === itemArr.length
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
            {resdata.map((item) => {
              const selectedItems = itemArr.filter(
                (clickedItem) => clickedItem.id === item.id,
              );

              const pickedNum = selectedItems.map((item) => item.id)[0];

              return (
                // 아래부분 border를 변경해야함
                <div
                  key={item.id}
                  className={`relative flex items-center pt-40 pb-43 pr-82 border-2 ${
                    item.id === pickedNum ? 'border-green' : 'border-gray-1'
                  } bg-white rounded-[10px]`}>
                  <div
                    className="absolute top-20 right-20 mobile:top-10 right-10 cursor-pointer"
                    onClick={() => {
                      const aa = resdata.filter((data) => data.id !== item.id);
                      setResData(aa);
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
                      setItemArr((prev) => [...prev, item]);
                      const targetIdx = itemArr.findIndex(
                        (clickedItem) => clickedItem.id === item.id,
                      );

                      if (targetIdx !== -1) {
                        itemArr.splice(targetIdx, 1);
                        setItemArr([...itemArr]);
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
                    <div className="flex flex-col gap-x-8 border-solid border-2 border-blue">
                      <span className="w-200 mobile:w-147 text-ellipsis overflow-hidden">
                        {item.title}
                        sdfsdfsdfsfdsfsdfsdfsfsfdsdfsfssdfsdfsdfsdfsdfsdfsdf
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
