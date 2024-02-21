import TermsCheckbox from '@/components/container/terms/terms';
import TotalPrice from '@/components/card/totalPaymentCard/totalPrice';
import { REQUIRED_FOR_PAYMENT } from 'src/constants/sign';
import useCalculateTotalPrice from '@/hooks/common/useCalculateTotalPrice';
import useCalculateProductsPrice from '@/hooks/common/useCalculateProductsPrice';
import PaymentButton from '@/components/button/payment/paymentButton';
interface TotalPriceCardProps {
  checkbox?: boolean;
  button?: boolean;
  color?: string;
  delivery?: number;
  discount?: number;
}
// tablet:w-688 mobile:w-330
//TODO : TotalPrice컴포넌트의 price props, RegisterButton 가격 TotalPriceCardProps로 받아야함
function TotalPriceCard({
  checkbox = true,
  button = true,
  color,
  discount = 0,
}: TotalPriceCardProps) {
  const bookPrice = useCalculateProductsPrice();
  const delivery = bookPrice > 30000 ? 0 : 3000;
  const totalPrice = useCalculateTotalPrice({
    delivery: delivery,
    discount: discount,
  });

  return (
    <div className="flex w-full flex-col gap-20 rounded-[10px] border border-gray-1 p-30 mobile:p-20 pc:sticky pc:top-280">
      <TotalPrice title="총 상품 금액" price={bookPrice.toLocaleString()} />
      <TotalPrice title="총 배송비" price={delivery.toLocaleString()} />
      <TotalPrice title="총 할인 금액" price={discount.toLocaleString()} />
      <TotalPrice
        title="결제 금액"
        price={totalPrice.toLocaleString()}
        font="font-bold"
        text="text-20"
        color={color}
      />
      {checkbox && (
        <TermsCheckbox
          entire="전체동의(필수)"
          checkContent={REQUIRED_FOR_PAYMENT}
          useFormContextProps={false}
          showLastButton={false}
        />
      )}

      {button && <PaymentButton />}
    </div>
  );
}

export default TotalPriceCard;
