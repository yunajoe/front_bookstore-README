import React from 'react'

function VacantCustomLayout() {
  return (       
    <div className="flex flex-col bg-gray-6 items-center justify-center h-482 tablet:h-324 mobile:h-205">
      <div className="mb-25">
        <p className="font-bold text-20 text-black">해당하는 맞춤도서가 없습니다.</p>
        <p className="font-normal text-14 text-gray-4">선택한 선호장르의 책 데이터가 없습니다</p>
      </div>
        <button className="w-287 h-50 text-center rounded-[5px] bg-white text-green text-14 font-normal border border-solid border-green py-13 px-45">선호장르선택하러가기</button>                
    </div>             
  )
}

export default VacantCustomLayout
