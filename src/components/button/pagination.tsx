import { MouseEvent, useState } from 'react';
import Image from 'next/image';
import PrevPageIcon from '@/public/icons/PrevIcon.svg';
import NextPageIcon from '@/public/icons/NextIcon.svg';
import usePagination from '@/hooks/usePagination';
import { useAtom } from 'jotai';
import { addressCurrentPageAtom } from '@/store/state';

function Pagination({ totalCount }: { totalCount: number }) {
  const {
    pageArrays,
    currentPage,
    currentPageArrayIndex,
    goToNextPageArray,
    goToPrevPageArray,
    changeCurrentPage,
  } = usePagination(totalCount);

  return (
    <div className="flex-center">
      {currentPageArrayIndex > 0 && (
        <Image
          src={PrevPageIcon}
          alt="이전"
          width={22}
          height={22}
          onClick={goToPrevPageArray}
        />
      )}
      <div className="flex-center gap-20 w-200">
        {pageArrays[currentPageArrayIndex]?.map((page) => (
          <span
            key={page + 1}
            className={`${currentPage === page ? 'text-green' : 'text-gray-4'}`}
            onClick={() => changeCurrentPage(page)}>
            {page}{' '}
          </span>
        ))}
      </div>
      {currentPageArrayIndex < pageArrays.length - 1 && (
        <Image
          src={NextPageIcon}
          alt="다음"
          width={22}
          height={22}
          onClick={goToNextPageArray}
        />
      )}
    </div>
  );
}

export default Pagination;
