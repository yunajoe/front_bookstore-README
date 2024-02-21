import { OrderOverViewItem } from '@/types/deliveryType';
import React from 'react';
// Server Error TypeError: Cannot read properties of undefined (reading '배송 준비중')

//  <span>{delivery['배송 준비중']}</span>  undefined가 에러가 난다
export type OrderOverViewProps = {
  orderView: OrderOverViewItem;
};

function OrderOverView(props: OrderOverViewProps) {
  const delivery = props.orderView!;

  // console.log('ddd', delivery);

  // console.log(delivery?.['배송 준비중']);

  return (
    <div className="flex-center h-144 max-w-[1080px] rounded-[10px] border-2 border-solid border-gray-1 px-90 py-40 mobile:h-85 mobile:p-20 tablet:p-40">
      <div className="flex w-[902px] justify-between rounded-[10px] text-20 text-black mobile:text-12">
        <div className="flex flex-col gap-11 text-center text-gray-4">
          <span>배송 준비중</span>
          <span>{delivery['배송 준비중']}</span>
        </div>
        <div className="flex flex-col gap-11 text-center text-gray-4">
          <span>배송중</span>
          <span>{delivery['배송중']}</span>
        </div>
        <div className="flex flex-col gap-11 text-center text-gray-4">
          <span>배송완료</span>
          <span>{delivery['배송완료']}</span>
        </div>
        <div className="flex flex-col gap-11 text-center text-gray-4">
          <span>교환/환불</span>
          <span>{delivery['교환/환불']}</span>
        </div>
        <div className="flex flex-col gap-11 text-center text-gray-4">
          <span>구매확정</span>
          <span>{delivery['구매확정']}</span>
        </div>
      </div>
    </div>
  );
}

export default OrderOverView;
