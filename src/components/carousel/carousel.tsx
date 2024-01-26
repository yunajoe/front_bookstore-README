import React, { useEffect, useRef, useState } from 'react';

// https://jjester.tistory.com/86
// https://stackoverflow.com/questions/70700031/clientwidth-function-in-react
const Mycard = (props) => {
  return (
    <div className="min-w-300 max-w-300 h-400 bg-black m-10 text-white">
      Mycard No. {props.cardno}
    </div>
  );
};

function Carousel() {
  //   offsetWidth: border를 포함한 width
  // scrollWidth: scroll할 수 있는 숨겨진 영역을 합한 width
  // clientWidth: width(border, scroll bar 포함하지 않음)

  const [box, setBox] = useState();
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current!;
    let width = element?.clientWidth;
    console.log(width);
    setBox(element);
  }, []);

  const btnpressprev = () => {
    // let width = box!.clientWidth;
    // box.scrollLeft = box.scrollLeft - width;
    // console.log(width);
  };

  const btnpressnext = () => {
    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft + width;
    console.log(width);
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

export default Carousel;
