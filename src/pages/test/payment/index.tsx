import TitleContentCard from "@/components/card/titleContentCard";
import { DELIVERY_INFO, PAYMENT_INFO } from "src/constants/payment";

//TODO : data 받을 예정. 예시임
const DcontentData = [
  '리드미',
  '01012345678',
  '(12345) 경남 성남시 분당구 불정로 6 그린팩토리',
  '부재 시 경비실에 맡겨주세요',
];

const PcontentData = [
  '신용카드',
  '22,500원',
]

function Payment() {
  return (
    <>
      <TitleContentCard title="배송지 정보" titleData={DELIVERY_INFO} contentData={DcontentData} />
      <TitleContentCard title="결제 정보" titleData={PAYMENT_INFO} contentData={PcontentData} />
    </>
  );
}

export default Payment;
