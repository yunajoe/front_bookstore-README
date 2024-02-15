import { CartItem } from '@/types/cartType';
import { SetStateAction } from 'jotai';
import Image from 'next/image';
import React from 'react'   

type CartPageProps = {
  wishListData: CartItem[];
  selectedItemArr: CartItem[];
  resetSelectedItemArr: Function;
  setSelectedItemArr: React.Dispatch<SetStateAction<CartItem[]>>;
  handleDeleteSelectedItems: Function;
};        

function CartPageHeader({
  wishListData,
  selectedItemArr,
  resetSelectedItemArr,
  setSelectedItemArr,
  handleDeleteSelectedItems,
}: CartPageProps) {   
  return (
    <div className="flex justify-between">
      <div className="flex gap-x-8">
        <div
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
        className="cursor-pointer font-normal text-black"
        onClick={() => handleDeleteSelectedItems()}>
        선택항목 삭제
      </span>
    </div>
  );
}


export default CartPageHeader
