import { BookMarkListData } from "@/types/wishPageType";
import Image from "next/image";
import { SetStateAction } from "react";

type BookMarkedHeaderProps = {
  wishListData: BookMarkListData[];
  selectedItemArr: BookMarkListData[];
  resetSelectedItemArr: Function;
  setSelectedItemArr: React.Dispatch<SetStateAction<BookMarkListData[]>>;
  handleDeleteSelectedItems: Function;
};    

function BookMarkedHeader({
    wishListData,
    selectedItemArr,
    resetSelectedItemArr,
    setSelectedItemArr,
    handleDeleteSelectedItems,
}: BookMarkedHeaderProps) {
    return (
        <div className="my-23 flex justify-between mobile:my-18 tablet:my-23">
            <div className="flex gap-x-8">
                <div
                    className="h-20 w-20 cursor-pointer"
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
                <span className="text-14 text-gray-4">전체선택</span>
            </div>
            <span
                className="cursor-pointer text-14 font-normal text-black"
                onClick={() => handleDeleteSelectedItems()}>
                선택항목 삭제
            </span>
        </div>
    )
}

export default BookMarkedHeader