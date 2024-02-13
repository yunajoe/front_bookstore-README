import { deleteBookMarkItem, getBookMarkList } from '@/api/bookmark';
import BookRating from '@/components/book/bookRating/bookRating';
import PreviewBookInfo from '@/components/book/previewBookInfo/previewBookInfo';
import MainLayout from '@/components/layout/mainLayout';
import useInfinite from '@/hooks/useInfinite';
import { useInfiniteQuery, useMutation} from '@tanstack/react-query';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { THOUSAND_UNIT } from 'src/constants/price';
const USER_ID = 3
const LIMIT = 8
type WishListData = {   
  bookId: number
  bookTitle: string
  publishedDate: string
  bookImgUrl: string
  authors: string[]
  description: string
  categories: string[]
  averageRating: number
  price: number
  bookmarkCount: number
  reviewCount: number
  viewCount: number
  quantityCount: any
  publisher: string
  createDate: string
  updateDate: string
  bookmarkId: number
}   

const threeDigitCommma = (value: string | number) => {
  return value.toString().replace(THOUSAND_UNIT, ",");
}   

function BookMarkedPage() {   
  const [wishListData, setWishListData] = useState<WishListData[]>([]);
  const [selectedItemArr, setSelectedItemArr] = useState<WishListData[]>([]);
  const [ref, isIntersecting] = useInfinite()

  const {
    data,     
    status,
    fetchNextPage,   
    fetchPreviousPage,
    hasNextPage,  
  } = useInfiniteQuery({
    queryKey: ['bookMarkUserId', USER_ID],  
    queryFn: async ({ pageParam }) => {
      const result = await getBookMarkList(USER_ID, pageParam, LIMIT);
      return {
        ...result,
        pageParam: pageParam,
      }
    },
    getNextPageParam: (lastPage) => {
      // {status: 200, message: 'Success', data: {…}}
      console.log("cursorId", lastPage.data.cursorId)
      return lastPage.data.cursorId === -1 ? undefined : lastPage.pageParam + 1
    },
    initialPageParam: 0,
  })   

  const deleteBookMarkItemMutation = useMutation({
     mutationFn: (bookmarkId:string)=> deleteBookMarkItem(bookmarkId)
  })    

   const selectedBookMarkIds= selectedItemArr.map((item)=> item.bookmarkId)

  useEffect(() => {
    if (data && status === "success") {
      const bookmarkList = data?.pages.reduce((sum, page) => {
        if (Array.isArray(page?.data?.bookmarks)) {
          return [...sum, ...page.data.bookmarks];
        }
        return sum;
      }, []);
      setWishListData(bookmarkList);
    }
  }, [data]);     


  useEffect(() => {
    //     getNextPageParam 의 return값이 hasNextPAge
    if (isIntersecting && hasNextPage) {
      // page값 + 1
      fetchNextPage()
    }
  }, [isIntersecting])     

  const resetSelectedItemArr = () => setSelectedItemArr([]);

  const filteredDataByTargetId = (arr: WishListData[], targetId: number) =>
    arr.filter((arrItem) => arrItem.bookmarkId === targetId);

  const filteredDataByNotTargetId = (arr: WishListData[], targetId: number) =>
    arr.filter((arrItem) => arrItem.bookmarkId !== targetId);

  const handleDeleteSelectedItems = () => {
    const selectedBookMarkIds= selectedItemArr.map((item)=> item.bookmarkId)
    deleteBookMarkItemMutation.mutate(selectedBookMarkIds.join(","))
    const filteredData = wishListData.filter((item) => {
      return selectedItemArr.map((picked) => picked.bookmarkId).indexOf(item.bookmarkId) === -1;
    });
    setWishListData(filteredData);
    resetSelectedItemArr();
  };

  if (status === "error") return "error"


  return (
    <div className="w-full flex flex-col items-center">
      <div className="max-w-[1200px] w-full">
        <MainLayout>
          <div className="flex flex-col px-60 mobile:px-15 tablet:px-40">
            <div className="text-black text-20 font-bold">
              찜목록({wishListData.length})
            </div>
            <div className="flex justify-between my-23 mobile:my-18 tablet:my-23">
              <div className="flex gap-x-8">
                <div
                  className="cursor-pointer w-20 h-20"
                  onClick={() => {
                    if (wishListData.length === selectedItemArr.length) {
                      resetSelectedItemArr();
                    } else {
                      setSelectedItemArr([...wishListData]);
                    }
                  }}>
                  <Image
                    src={
                      wishListData.length === selectedItemArr.length
                        ? '/icons/CheckedCheckBox.svg'
                        : '/icons/CheckBox.svg'
                    }
                    alt="체크아이콘"
                    width={20}
                    height={20}
                  />
                </div>
                <span className="text-gray-4 text-14">전체선택</span>
              </div>
              <span
                className="text-black text-14 font-normal cursor-pointer"
                onClick={() => handleDeleteSelectedItems()}>
                선택항목 삭제
              </span>
            </div>
            <div
              className="grid grid-cols-2 tablet:grid-cols-1 mobile:grid-cols-1 gap-x-20 tablet: gap-y-20
                mobile:gap-y-10">
              {wishListData.map((item) => {         
                const selectedItems = filteredDataByTargetId(
                  selectedItemArr,
                  item.bookmarkId,
                );
                const pickedNum = selectedItems.map((item) => item.bookmarkId)[0];       
                return (
                  <div
                    key={item.bookmarkId + "bookmarkList"}
                    className={`relative flex items-center pt-40 pb-43 pr-82 border-2 ${item.bookmarkId === pickedNum ? 'border-green' : 'border-gray-1'
                      } bg-white rounded-[10px]`}>
                    <div
                      className="absolute top-20 right-20 mobile:top-10 right-10 cursor-pointer"
                      onClick={() => {  
                        deleteBookMarkItemMutation.mutate(String(item.bookmarkId))
                        const filteredWishListData = filteredDataByNotTargetId(
                          wishListData,
                          item.bookmarkId,
                        );
                        setWishListData(filteredWishListData);
                      }}>
                      <Image
                        src="/icons/Close.svg"
                        alt="엑스"
                        width={24}
                        height={24}
                      />
                    </div>
                    <div
                      className="mx-20 mobile:mx-10 w-20"
                      onClick={() => {
                        setSelectedItemArr((prev) => [...prev, item]);
                        const targetIdx = selectedItemArr.findIndex(
                          (clickedItem) => clickedItem.bookmarkId === item.bookmarkId,
                        );

                        if (targetIdx !== -1) {
                          selectedItemArr.splice(targetIdx, 1);
                          setSelectedItemArr([...selectedItemArr]);
                        }
                      }}>
                      <div className="cursor-pointer w-20 h-20">
                        <Image
                          src={
                            item.bookmarkId === selectedItems[0]?.bookmarkId
                              ? '/icons/CheckedCheckBox.svg'
                              : '/icons/CheckBox.svg'
                          }
                          alt="체크아이콘"
                          width={20}
                          height={20}
                        />
                      </div>
                    </div>
                    <div className="flex gap-x-20 rounded-[10px]">
                      <PreviewBookInfo size="sm" />
                      <div className="w-274 mobile:w-147 flex flex-col gap-y-8 mobile:w-">
                        <div className="text-15 text-black font-bold break-all line-clamp-2">
                          {item.bookTitle}
                        </div>
                        <span className="text-gray-3 whitespace-nowrap text-ellipsis overflow-hidden">
                          {item.authors.join(",")}
                        </span>
                        <div className="flex">
                          <BookRating rating={item.averageRating} />
                        </div>
                        <span className="text-14">[{item.categories.join(", ")}]</span>
                        <span className="text-14 text-color font-bold">
                          {threeDigitCommma(item.price)}원
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </MainLayout>
      </div>
      <div ref={ref}>여기</div>
    </div>
  );
}

export default BookMarkedPage;
