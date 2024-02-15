import TermsCheckbox from '@/components/container/terms/terms';
import TotalPrice from '@/components/card/totalPaymentCard/totalPrice';
import RegisterButton from '@/components/button/register/registerButton';
import { REQUIRED_FOR_PAYMENT } from 'src/constants/sign';

interface TotalPriceCardProps {
  checkbox?: boolean;
  button?: boolean;
  color?: string;
}
// tablet:w-688 mobile:w-330
//TODO : TotalPrice컴포넌트의 price props, RegisterButton 가격 TotalPriceCardProps로 받아야함
function TotalPriceCard({
  checkbox = true,
  button = true,
  color,
}: TotalPriceCardProps) {
  return (
    <div className="flex w-full flex-col gap-20 rounded-[10px] border border-gray-1 p-30 mobile:p-20 pc:sticky pc:top-280">
      <TotalPrice title="총 상풒 금액" price="23500" />
      <TotalPrice title="총 배송비" price="+3000" />
      <TotalPrice title="총 할일 금액" price="-3000" />
      <TotalPrice
        title="결제 금액"
        price="23500"
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
      {button && (
        <div className="mobile:hidden tablet:hidden">
          <RegisterButton>23500원 결제하기</RegisterButton>
        </div>
      )}
    </div>
  );
}
