/* 오늘의 도서 캐러셀 컴포넌트

params: 
  - dataList: required, Array, 캐러셀에 넣을 배열, 최소 length 가 2 이상만 가능
  - sliderWidth: required, number, 캐러셀 컴포넌트 크기
  - sliderHeight: required, number, 캐러셀 컴포넌트 높이
  - componentWidth: required, number, 캐러셀 안에 들어갈 img나 컴포넌트의 크기(만약 캐러셀 안에 꽉 차게 요소를 넣을 거면 sliderWidth와 같은 값을 넣으면 됨)
  - auto: optional, boolean, 자동으로 캐러셀이 넘겨지게 하려면 true 값을 주세요
  - sec: optional, number, auto true 속성을 줄 때 몇 초 간격으로 넘겨줄지 초단위로 값을 주세요, 예를 들어 5초면 5만 입력 (5000 아님)

returns: component
*/

import withSlider from 'src/hocs/withSlider';
import TodayBestBook from '@/components/card/todayBestBookCard/TodayBestBookCard';

interface SliderProps {
  dataList: Array<any>;
  sliderWidth: number;
  sliderHeight: number;
  componentWidth: number;
  auto?: boolean;
  sec?: number;
}

const TodayBestSlider = ({
  dataList,
  sliderWidth,
  sliderHeight,
  componentWidth,
  auto,
  sec,
}: SliderProps) =>
  withSlider(
    TodayBestBook,
    dataList,
    sliderWidth,
    sliderHeight,
    componentWidth,
    auto,
    sec,
  );

export default TodayBestSlider;
