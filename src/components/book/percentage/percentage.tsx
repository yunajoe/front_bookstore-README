/** 퍼센트를 보여주는 컴포넌트
 * 상품상세페이지 하단 리뷰창에서 쓰임
 * 재사용성을 위해 width, height 지정가능하게 설정했습니다. 순서대로 데탑, 타블렛, 모바일 환경일 때의 크기를 적어주세요
 */

interface PercentageProps {
  num: number;
  total: number;
  width?: [number, number, number];
  height?: [number, number, number];
}

function Percentage({
  num,
  total,
  width = [100, 100, 100],
  height = [6, 6, 6],
}: PercentageProps) {
  const BackgroundStyle = `bg-gray-1 rounded-[56px] w-[${width[0]}px] tablet:w-${width[1]} mobile:w-[${width[2]}px] h-[6px]`;
  return (
    <div>
      <div className={BackgroundStyle}>
        <div className="bg-green h-6 rounded-full dark:bg-blue-500 w-50"></div>
      </div>
      데탑 타블렛에선 180 6 크기 모바일은 100 6 average rating을 반올림했을 때
      나오는 숫자가 가장 많은 표를 받은 점수겠지.. percentage
    </div>
  );
}

export default Percentage;
