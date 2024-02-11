import TermsCheckbox from "@/components/container/terms/terms";
import TotalPrice from "./totalPrice"
import RegisterButton from "@/components/button/register/registerButton";

function TotalPriceCard() {
  return (
    <div>
      <TotalPrice title="총 상풒 금액" price="23500" />
      <TotalPrice title="총 배송비" price="+3000" />
      <TotalPrice title="총 할일 금액" price="-3000" />
      <TotalPrice title="결제 금액" price="23500" />
      <TermsCheckbox />
      <RegisterButton>23500원 결제하기</RegisterButton>
    </div>
  );
}

export default TotalPriceCard