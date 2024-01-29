import CarouselCard from '@/components/carousel/carouselCard';
import { EnvType, NewBook, ResponSive } from '@/types/carouselType';
import registDragEvent from '@/utils/registerDragEvent';
import Image from 'next/image';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
const CARD_MARGIN_VALUE = 20;

type CarouselProps = {
  data: NewBook[];
  responsive: ResponSive;
};

const inrange = (v: number, min: number, max: number) => {
  if (v < min) return min;
  if (v > max) return max;
  return v;
};

function Carousel({ data, responsive }: CarouselProps) {
  const [carouselContainer, setCarouselContainer] = useState({
    width: 0,
    height: 0,
  });
  const [env, setEnv] = useState<EnvType>('desktop');
  const [transDelta, setTransDelta] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const CONTENT_WIDTH = responsive[env]?.imageSize.width!;
  const ref = useRef<HTMLDivElement>(null);
  const carouselElement = ref.current;

  const calcContentWidthValue = Math.floor(CONTENT_WIDTH + CARD_MARGIN_VALUE);

  const transformCarousel = (currentIndex: number) => {
    if (carouselElement) {
      carouselElement.style.transform = `translateX(${currentIndex * (calcContentWidthValue * -1)}px)`;
    }
  };

  const btnpressprev = () => {
    if (currentIndex < 1) return;
    const prevIndex = currentIndex - 1;
    setCurrentIndex(prevIndex);
    transformCarousel(prevIndex);
  };

  const calcMaxPageValue = () => {
    let width = carouselElement?.clientWidth!;
    const visibleItemsCount = Math.ceil(
      width / (CONTENT_WIDTH + CARD_MARGIN_VALUE),
    );  
    return data.length - visibleItemsCount;
  };

  const maxPage = useMemo(() => {
    try {
      return calcMaxPageValue();
    } catch (e) {
      return 0;
    }
  }, [env, currentIndex]);

  const btnpressnext = () => {
    const maxPageValue = calcMaxPageValue();
    if (currentIndex === maxPageValue) return;
    const nextIndex = currentIndex + 1;
    setCurrentIndex(nextIndex);
    transformCarousel(nextIndex);
  };

  const calculateEnv = useCallback(() => {
    window.addEventListener('resize', () => {
      let w = window.innerWidth;
      if (w < 768) {
        setEnv('mobile');
      } else if (w < 1200) {
        setEnv('tablet');
      } else {
        setEnv('desktop');
      }
    });
  }, [carouselContainer]);

  const resetCurrentIndex = useCallback(() => {
    setCurrentIndex(0);
  }, []);

  useEffect(calculateEnv, [calculateEnv]);
  useEffect(resetCurrentIndex, [env]);

  useEffect(() => {
    const element = ref.current!;
    if (ref.current) {
      const { width, height } = element?.getBoundingClientRect() || {};
      setCarouselContainer({ width, height });
    }
  }, []);

  return (
    <div className="bg-white relative overflow-hidden w-[1200px] tablet:w-[768px] mobile:w-360">
      <div
        className="flex items-center justify-between mx-60 tablet:mx-40 mobile:mx-15 mb-40
          mobile:mb-20">
        <span className="text-black text-20">신간도서</span>
        <span className="text-green text-16">더보기</span>
      </div>
      <div className="flex flex-row items-center mx-24 tablet:mx-14 mobile:mx-15">
        <button
          onClick={btnpressprev}
          className="w-10 h-full flex justify-center items-center bg-transparent mobile:hidden">
          <div className="w-10 h-16 relative">
            <Image
              className="cursor-pointer"
              src={
                currentIndex === 0
                  ? '/icons/CarouselLeftInActivateArrow.svg'
                  : '/icons/CarouselLeftActivateArrow.svg'
              }
              alt="왼쪽화살표"
              fill
            />
          </div>
        </button>
        <div className="mx-27 tablet:mx-16 mobile:mx-0 overflow-x-hidden scroll-smooth">
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
                if (carouselElement) {
                  carouselElement.style.transform = `translateX(${transDelta + calcWidth * -currentIndex}px)`;
                  setTransDelta(boundaryDelta);
                }
              },
              onDragEnd: (deltaX) => {
                const maxIndex = maxPage;
                if (deltaX < 0) {
                  const boundaryIndex = inrange(currentIndex + 1, 0, maxIndex);
                  setCurrentIndex(boundaryIndex);
                  const calcWidth = Math.floor(
                    CONTENT_WIDTH + CARD_MARGIN_VALUE,
                  );
                  if (carouselElement) {
                    carouselElement.style.transform = `translateX(${boundaryIndex * (calcWidth * -1)}px)`;
                  }
                }
                if (deltaX > 0) {
                  const boundaryIndex = inrange(currentIndex - 1, 0, maxIndex);
                  setCurrentIndex(boundaryIndex);
                  const calcWidth = Math.floor(
                    CONTENT_WIDTH + CARD_MARGIN_VALUE,
                  );
                  if (carouselElement) {
                    carouselElement.style.transform = `translateX(${boundaryIndex * (calcWidth * -1)}px)`;
                  }
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
          <div className="w-10 h-16 relative">
            <Image
              src={
                currentIndex === maxPage && maxPage !== 0
                  ? '/icons/CarouselRightInActivateArrow.svg'
                  : '/icons/CarouselRightActivateArrow.svg'
              }
              alt="오른쪽화살표"
              fill
            />
          </div>
        </button>
      </div>
    </div>
  );
}

export default Carousel;
