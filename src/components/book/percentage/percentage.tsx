/** 퍼센트를 보여주는 컴포넌트
 * 재사용성을 위해 width, height 지정가능하게 설정했습니다. 순서대로 데탑, 타블렛, 모바일 환경일 때의 크기를 적어주세요
 */

interface PercentageProps {
  num: number; // 숫자
  total: number; // 총량
}

function Percentage({ num, total }: PercentageProps) {
  const BackgroundStyle = `bg-gray-1 rounded-[56px] w-160 mobile:w-100 h-[6px] relative`;
  let percent = total > 0 ? Math.ceil((num * 100) / total) : 0;
  const InnerStyle = `bg-green h-6 rounded-full`;
  return (
    <div className={BackgroundStyle}>
      <div className={InnerStyle} style={{ width: `${percent}%` }}></div>
    </div>
  );
}

export default Percentage;
