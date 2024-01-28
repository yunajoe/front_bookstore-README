import CarouselCard from '@/components/carousel/carouselCard';
import { EnvType, NewBook, ResponSive } from '@/types/carouselType';
import registDragEvent from '@/utils/registerDragEvent';
import { useCallback, useEffect, useRef, useState } from 'react';
const CARD_MARGIN_VALUE = 20;

type CarouselProps = {
  data: NewBook[];
  responsive: ResponSive;
};

function Carousel({ data, responsive }: CarouselProps) {
  const [carouselElement, setCarouselElement] = useState<HTMLDivElement>('');

  // for 반응형에 따른 이미지 사이즈 구하는 용도
  const [carouselContainer, setCarouselContainer] = useState({
    width: 0,
    height: 0,
  });
  // 환경 env
  const [env, setEnv] = useState<EnvType>('desktop');
  const [transDelta, setTransDelta] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const CONTENT_WIDTH = responsive[env]?.imageSize.width!;
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = ref.current!;
    if (ref.current) {
      // 요소도 따로 저장
      setCarouselElement(element);
      // width, hegiht도 따로 저장 (for반응형)
      const { width, height } = element?.getBoundingClientRect() || {};
      setCarouselContainer({ width, height });
    }
  }, []);

  useEffect(() => {
    setCurrentIndex(0);
  }, [env]);

  const moveRightSlide = () => {
    const calcWidth = Math.floor(CONTENT_WIDTH + CARD_MARGIN_VALUE);
    carouselElement.style.transform = `translateX(${(currentIndex + 1) * (calcWidth * -1)}px)`;
  };

  const moveLeftSlide = () => {
    const calcWidth = Math.floor(CONTENT_WIDTH + CARD_MARGIN_VALUE);
    carouselElement.style.transform = `translateX(${(currentIndex - 1) * (calcWidth * -1)}px)`;
  };

  const btnpressprev = () => {
    if (currentIndex === 0) return;
    const prevIndex = currentIndex - 1;
    setCurrentIndex(prevIndex);
    moveLeftSlide();
  };
  const btnpressnext = () => {
    let width = carouselElement.clientWidth;
    const visibleItemsCount = Math.floor(
      width / (CONTENT_WIDTH + CARD_MARGIN_VALUE),
    );
    const maxPageValue = data.length - visibleItemsCount;
    if (currentIndex === maxPageValue) return;
    const nextIndex = currentIndex + 1;
    setCurrentIndex(nextIndex);
    moveRightSlide();
  };

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
  const inrange = (v: number, min: number, max: number) => {
    if (v < min) return min;
    if (v > max) return max;
    return v;
  };

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
        <div className="mx-26 tablet:mx-16 mobile:mx-0 overflow-x-hidden scroll-smooth">
          <div
            className="flex scroll-smooth transition-transform"
            ref={ref}
            {...registDragEvent({
              onDragChange: (deltaX) => {
                const boundaryDelta = inrange(
                  deltaX,
                  -(CONTENT_WIDTH + CARD_MARGIN_VALUE),
                  CONTENT_WIDTH + CARD_MARGIN_VALUE,
                );
                const calcWidth = Math.floor(CONTENT_WIDTH + CARD_MARGIN_VALUE);
                carouselElement.style.transform = `translateX(${transDelta + calcWidth * -currentIndex}px)`;
                setTransDelta(boundaryDelta);
              },
              onDragEnd: (deltaX) => {
                const maxIndex = data.length - 2;

                if (deltaX < 0) {
                  const boundaryIndex = inrange(currentIndex + 1, 0, maxIndex);
                  setCurrentIndex(boundaryIndex);
                  const calcWidth = Math.floor(
                    CONTENT_WIDTH + CARD_MARGIN_VALUE,
                  );
                  carouselElement.style.transform = `translateX(${boundaryIndex * (calcWidth * -1)}px)`;
                }
                if (deltaX > 0) {
                  const boundaryIndex = inrange(currentIndex - 1, 0, maxIndex);
                  setCurrentIndex(boundaryIndex);
                  const calcWidth = Math.floor(
                    CONTENT_WIDTH + CARD_MARGIN_VALUE,
                  );
                  carouselElement.style.transform = `translateX(${boundaryIndex * (calcWidth * -1)}px)`;
                }
              },
            })}>
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
