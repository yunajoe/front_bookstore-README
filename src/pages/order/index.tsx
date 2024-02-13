import RegisterButton from '@/components/button/register/registerButton';
import TotalPriceCard from '@/components/card/totalPaymentCard';
import OrderPageLayout from '@/components/layout/orderLayout';
import ShippingAddressSection from '@/components/container/shippingAddressSection/shippingAddressSection';
import MainLayout from '@/components/layout/mainLayout';
import BookPaymentCardList from '@/components/card/bookPaymentCard/bookPaymentCardList';
import { bookOrderTestData } from '@/pages/api/mock/bookOrderMock';

const testData = bookOrderTestData;

export default function Order() {
  return (
    // <OrderPageLayout
    //   main={
    <div>
      <div className="mx-60 flex h-full w-5/6 mobile:flex-col tablet:flex-col pc:gap-x-93">
        <div className="flex-center flex-col pc:w-1/2">
          <ShippingAddressSection />
          <div className="mt-60">
            <BookPaymentCardList
              bookData={testData.orderData[0].bookData}
              label="주문상품"
            />
            <BookPaymentCardList
              bookData={testData.orderData[0].bookData}
              label="주문상품"
            />
            <BookPaymentCardList
              bookData={testData.orderData[0].bookData}
              label="주문상품"
            />
            <BookPaymentCardList
              bookData={testData.orderData[0].bookData}
              label="주문상품"
            />
          </div>
        </div>
        <div className="sticky top-100 mobile:mt-80 tablet:mt-80 pc:w-1/2">
          <TotalPriceCard />
        </div>
        <div className="sticky bottom-0 h-70 w-full bg-white pc:hidden">
          <RegisterButton>결제하기</RegisterButton>
        </div>
      </div>
    </div>
  );
}
