import RegisterButton from '@/components/button/register/registerButton';
import ShippingAddressSection from '@/components/container/shippingAddressSection/shippingAddressSection';
import BookPaymentCardList from '@/components/card/bookPaymentCard/bookPaymentCardList';
import { ReactElement } from 'react';
import MainLayout from '@/components/layout/mainLayout';
import TotalPriceCard from '@/components/card/totalPaymentCard';
import Link from 'next/link';
import { basketItemList } from '@/store/state';
import { useAtomValue } from 'jotai';

export default function Order() {
  const items = useAtomValue(basketItemList);
  return (
    <div className="flex w-full justify-center">
      <div className=" flex h-full w-full justify-center mobile:flex-col tablet:flex-col pc:gap-x-93">
        <div className="flex-center mx-60 flex-col pc:mb-[603px]">
          <ShippingAddressSection />

          <div className="mt-60">
            <BookPaymentCardList bookData={items} label="주문 상품" />
          </div>
        </div>
        <div className="sticky top-177 mx-40 mb-180 mobile:mt-80 tablet:mt-80">
          <TotalPriceCard />
        </div>
        <Link
          className="flex-center sticky bottom-0 h-70 w-full border-t border-gray-1 bg-white pc:hidden"
          href="/paymented">
          <div className="mx-40 flex w-full">
            <RegisterButton>결제하기</RegisterButton>
          </div>
        </Link>
      </div>
    </div>
  );
}
Order.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
