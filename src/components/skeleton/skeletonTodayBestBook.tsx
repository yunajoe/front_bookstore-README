/* 스켈레톤용 실시간 인기도서 책 컴포넌트 */

function SkeletonTodayBestBook() {
  return (
    <div
      role="card-container"
      className="bg-white flex justify-start items-start gap-20 mobile:gap-10 max-w-350 h-240
        px-40 pt-40 rounded-xl border-2 border-gray-1 mobile:w-334 mobile:h-220
        mobile:px-30 mobile:pt-30">
      <div
        role="img-section"
        className="relative w-112 mobile:w-93 bg-gray-1 rounded-xl animate-pulse">
        <div className="h-150 mobile:h-144"></div>
      </div>
      <div className="flex flex-col gap-8 animate-pulse">
        <h1 className="w-140 h-30 bg-gray-1 rounded-xl"></h1>
        <p className="w-80 h-19 bg-gray-1 rounded-xl"></p>
        <p className="w-70 h-20 bg-gray-1 rounded-xl"></p>
        <p className="w-50 h-18 bg-gray-1 rounded-xl"></p>
        <p className="w-60 h-15 bg-gray-1 rounded-xl"></p>
      </div>
    </div>
  );
}

export default SkeletonTodayBestBook;
