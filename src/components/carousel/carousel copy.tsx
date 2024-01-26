import React from 'react';
// 책 아이템이 163px
// 데스크탑 사이즈는 1300
// tablet 사이즈는 768
// mobile아지는 360
        // className="min-w-102 h-102 bg-gray-1 text-center mobile:min-w-75 mobile:h-75">
function Carousel({ data, numVisible }) {
  console.log('data', data);
  return (
    <div className="w-[1200px] bg-white border-solid border-2 border-[black] px-60 py-60">
      <div className="flex justify-between border-solid border-2 border-[black] mb-40">
        <span>신간도서</span>
        <span className="text-green">더보기</span>
      </div>
      <div className="border-solid border-2 border-red w-1080 h-321 flex">
        {data.map((item) => {
          return (
            <>
              W
              <img src={item.imageUrl} alt="이미지" />
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Carousel;
