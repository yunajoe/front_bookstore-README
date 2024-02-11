import TermsCheckbox from "@/components/container/terms/terms";
import TotalPrice from "@/components/card/totalPaymentCard/totalPrice"
import RegisterButton from "@/components/button/register/registerButton";
import { REQUIRED_FOR_PAYMENT } from "src/constants/sign";

function TotalPriceCard() {
  return (
    <div className="flex flex-col w-432 gap-20">
      <TotalPrice title="총 상풒 금액" price="23500" />
      <TotalPrice title="총 배송비" price="+3000" />
      <TotalPrice title="총 할일 금액" price="-3000" />
      <TotalPrice title="결제 금액" price="23500" />
      <TermsCheckbox entire="전체동의(필수)" checkContent={REQUIRED_FOR_PAYMENT} useFormContextProps={false} showLastButton={true} />
      <RegisterButton>23500원 결제하기</RegisterButton>
    </div>
  );
}

export default TotalPriceCard