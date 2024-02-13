import OrderCompletedSection from '@/components/container/orderCompletedSection';
import TotalPriceCard from '@/components/card/totalPaymentCard';
import RegisterButton from '@/components/button/register/registerButton';

function Payment() {
  return (
    <div className="flex h-full justify-center px-60 py-40 mobile:px-15 mobile:py-20">
      <OrderCompletedSection />
      <TotalPriceCard />
      <div className="sticky bottom-0 pc:hidden">
        <RegisterButton>23500원 결제하기</RegisterButton>
      </div>
    </div>
  );
}

export default Payment;
