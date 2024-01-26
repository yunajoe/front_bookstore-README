import CarouselCard from '@/components/carousel/carouselCard';
import { useEffect, useRef, useState } from 'react';

function Carousel({ data, responsive, responsiveImages }) {
  // tablet:h-12 mobile:h-12'/
  const [box, setBox] = useState();
  const ref = useRef(null);
  useEffect(() => {
    const element = ref.current!;

    setBox(element);
  }, []);

  const btnpressprev = () => {
    let width = box!.clientWidth;
    console.log('왼쪽 스크롤', box.scrollLeft, width);

    box.scrollLeft = box.scrollLeft - width;
  };
  const btnpressnext = () => {
    let width = box.clientWidth;
    console.log('오른쪽 스크롤', box.scrollLeft, width);
    box.scrollLeft = box.scrollLeft + width;
  };

  console.log('res', responsive);
  console.log('aaa', responsiveImages);
  return (
    <div
      className="relative overflow-hidden p-26 w-[1200px] bg-white border-solid border-2
        border-[black] px-60 py-60">
      <button
        onClick={btnpressprev}
        className="absolute top-0 w-16 h-full flex justify-center items-center bg-transparent">
        <p
          className="text-2xl bg-opacity-40 bg-white shadow-md rounded-lg text-black w-14 h-14
            cursor-pointer">
          &lt;
        </p>
      </button>
      <button
        onClick={btnpressnext}
        className="absolute top-0 w-16 h-full flex justify-center items-center bg-transparent
          right-0">
        <p
          className="text-2xl bg-opacity-40 bg-white shadow-md rounded-lg text-black w-14 h-14
            cursor-pointer">
          &gt;
        </p>
      </button>
      <div className="flex justify-between border-solid border-2 border-[black] mb-40">
        <span>신간도서</span>
        <span className="text-green">더보기</span>
      </div>
      <div
        ref={ref}
        className="p-0 sm:p-10 flex overflow-x-hidden scroll-smooth border-solid border-2
          border-red w-1080 h-321">
        {data.map((item, index) => (
          <CarouselCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
}

export default Carousel;
