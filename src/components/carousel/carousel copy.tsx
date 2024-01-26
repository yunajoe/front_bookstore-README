import React from 'react';

function Carousel({ data, numVisible }) {
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
              <img src={item.imageUrl} alt="이미지" />
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Carousel;
