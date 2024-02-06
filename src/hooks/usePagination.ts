import { useState, useEffect } from "react";
import { useAtom } from 'jotai';
import { addressCurrentPageAtom } from '@/store/state';

function usePagination(totalCount: number) {
  const totalPage = Math.ceil(totalCount / 15);
  
  let pages = [];

  for (let i = 1; i <= totalPage; i++) {
    pages.push(i);
  }

  let pageArrays: number[][] = [];

  for (let i = 0; i < pages.length; i += 5) {
    pageArrays.push(pages.slice(i, i + 5));
  }

  // 현재 페이지 배열 인덱스를 관리하기 위한 상태
  const [currentPageArrayIndex, setCurrentPageArrayIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [, setAddressCurrentPage] = useAtom(addressCurrentPageAtom)

  // 이전 페이지 배열로 이동
  const goToPrevPageArray = () => {
    setCurrentPageArrayIndex(currentPageArrayIndex - 1);
    setCurrentPage(pageArrays[currentPageArrayIndex - 1][0]);
  };

  // 다음 페이지 배열로 이동
  const goToNextPageArray = () => {
    setCurrentPageArrayIndex(currentPageArrayIndex + 1);
    setCurrentPage(pageArrays[currentPageArrayIndex + 1][0]);
  };

  //현재 페이지 확인
  const changeCurrentPage = (page: number) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    setAddressCurrentPage(currentPage)
  },[currentPage])

  return {pageArrays, currentPageArrayIndex, currentPage, goToPrevPageArray, goToNextPageArray, changeCurrentPage}
}

export default usePagination