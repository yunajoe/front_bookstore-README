import CarouselCard from '@/components/carousel/carouselCard';
import { useCallback, useEffect, useRef, useState } from 'react';

function Carousel({ data, responsive }) {
  const [carouselElement, setCarouselElement] = useState(null);

  // for 반응형에 따른 이미지 사이즈 구하는 용도
  const [carouselContainer, setCarouselContainer] = useState({
    width: 0,
    height: 0,
  });
  // 환경 env
  const [env, setEnv] = useState('');
  // carCoutatOnce
  const [currentIndex, setCurrentIndex] = useState(0);

  // console.log(data, currentIndex);
  const ref = useRef(null);
  useEffect(() => {
    const element = ref.current!;
    if (ref.current) {
      // 요소도 따로 저장
      setCarouselElement(element);
      // width, hegiht도 따로 저장 (for반응형)
      const { width, height } = element.getBoundingClientRect();
      setCarouselContainer({ width, height });
    }
  }, []);

  useEffect(() => {
    const cardNums = Math.floor(
      carouselContainer.width / responsive[env]?.imageSize.width,
    );

    setCurrentIndex(cardNums);
  }, [env]);

  const btnpressprev = () => {};
  const btnpressnext = () => {
    console.log('next버튼클릭');
    if (currentIndex === data.length - 1) return;
    const nextIndex = currentIndex + 1;
    setCurrentIndex(nextIndex);
  };

  console.log(currentIndex);
  const calculateEnv = useCallback((carouselContainer) => {
    let w = carouselContainer.width;
    switch (w) {
      case 1080:
        setEnv('desktop');
        break;
      case 688:
        setEnv('tablet');
        break;
      case 330:
        setEnv('mobile');
        break;
      default:
        return;
    }
    return env;
  }, []);

  useEffect(() => {
    calculateEnv(carouselContainer);
  }, [carouselContainer, calculateEnv]);

  return (
    <div className="bg-white relative overflow-hidden w-[1200px] tablet:w-[768px] mobile:w-360">
      <div
        className="flex justify-between border-solid border-2 border-[black] mx-60 tablet:mx-40
          mobile:mx-15 mb-40 mobile:mb-20">
        <span>신간도서</span>
        <span className="text-green">더보기</span>
      </div>
      <div className="flex flex-row items-center mx-24 tablet:mx-14 mobile:mx-15">
        <button
          onClick={btnpressprev}
          className="w-10 h-full flex justify-center items-center bg-transparent mobile:hidden">
          <p
            className="text-2xl bg-opacity-40 bg-white shadow-md rounded-lg text-black w-10 h-10
              cursor-pointer">
            &lt;
          </p>
        </button>
        <div className="mx-26 tablet:mx-16 overflow-x-hidden mobile:mx-0">
          <div
            ref={ref}
            className="flex scroll-smooth border-solid border-2 border-red">
            {data.map((item, index) => (
              <CarouselCard key={index} {...item} env={env} />
            ))}
          </div>
        </div>
        <button
          onClick={btnpressnext}
          className="w-10 h-full flex justify-center items-center bg-transparent right-0
            mobile:hidden">
          <p
            className="text-2xl bg-opacity-40 bg-white shadow-md rounded-lg text-black w-10 h-10
              cursor-pointer">
            &gt;
          </p>
        </button>
      </div>
    </div>
  );
}

export default Carousel;
