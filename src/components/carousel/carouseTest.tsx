import React, { useEffect, useRef, useState } from 'react';

const Mycard = (props) => {
  return (
    <div className="min-w-300 max-w-300 h-400 bg-black m-10 text-white">
      Mycard No. {props.cardno}
    </div>
  );
};

function CarouselTest() {
  const [box, setBox] = useState();
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current!;
    // let width = element?.clientWidth;
    // let left = element?.scrollLeft;
    // scrollLeft
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
  return (
    <div className="relative overflow-hidden p-26 product-carousel">
      <button
        className="absolute top-0 w-16 h-full flex justify-center items-center bg-transparent"
        onClick={btnpressprev}>
        <p
          className="text-2xl bg-opacity-40 bg-white shadow-md rounded-lg text-black w-14 h-14
            cursor-pointer">
          &lt;
        </p>
      </button>
      <button
        className="absolute top-0 w-16 h-full flex justify-center items-center bg-transparent
          right-0"
        onClick={btnpressnext}>
        <p
          className="text-2xl bg-opacity-40 bg-white shadow-md rounded-lg text-black w-14 h-14
            cursor-pointer">
          &gt;
        </p>
      </button>

      <div
        ref={ref}
        className="p-0 sm:p-10 flex overflow-x-hidden scroll-smooth product-container">
        <Mycard cardno="1" />
        <Mycard cardno="2" />
        <Mycard cardno="3" />
        <Mycard cardno="4" />
        <Mycard cardno="5" />
        <Mycard cardno="6" />
        <Mycard cardno="7" />
        <Mycard cardno="8" />
        <Mycard cardno="9" />
        <Mycard cardno="10" />
        <Mycard cardno="11" />
        <Mycard cardno="12" />
        <Mycard cardno="13" />
      </div>
    </div>
  );
}

export default CarouselTest;
