import useCalculateProductsPrice from '@/hooks/common/useCalculateProductsPrice';
import useCalculateTotalPrice from '@/hooks/common/useCalculateTotalPrice';
import { useRouter } from 'next/router';
interface PaymentButtonProps {
  type?: 'mobile' | 'pc';
}
function PaymentButton({ type }: PaymentButtonProps) {
  const router = useRouter();
  const bookPrice = useCalculateProductsPrice();
  const delivery = bookPrice > 30000 ? 0 : 3000;
  const totalPrice = useCalculateTotalPrice({
    delivery: delivery,
    discount: 0,
  });
  // 결제창 함수
  function kakaoPay(useremail: string, username: string) {
    if (typeof window !== 'undefined') {
      const IMP = window.IMP;
      const today = new Date();
      const hours = today.getHours(); // 시
      const minutes = today.getMinutes(); // 분
      const seconds = today.getSeconds(); // 초
      const milliseconds = today.getMilliseconds();
      const makeMerchantUid =
        `${hours}` + `${minutes}` + `${seconds}` + `${milliseconds}`;

      IMP.init('imp33057768'); // 가맹점 식별코드
      IMP.request_pay(
        {
          pg: 'kakaopay.TC0ONETIME', // PG사 코드표에서 선택
          pay_method: 'card', // 결제 방식
          merchant_uid: 'IMP' + makeMerchantUid, // 결제 고유 번호
          name: '리드미', // 제품명
          amount: totalPrice, // 가격
          buyer_email: useremail,
          buyer_name: username,
        },
        async function (rsp) {
          if (rsp.success) {
            //결제 성공시
            console.log(rsp + '결제성공');
            router.push('/paymented');
            //결제 성공시 프로젝트 DB저장 요청

            if (rsp.status === 200) {
              // DB저장 성공시
              alert('결제 완료!');
              window.location.reload();
            } else {
              // 결제완료 후 DB저장 실패시
              alert(
                `error:[${rsp.status}]\n결제요청이 승인된 경우 관리자에게 문의바랍니다.`,
              );
              // DB저장 실패시 status에 따라 추가적인 작업 가능성
            }
          } else if (rsp.success === false) {
            // 결제 실패시
            alert(rsp.error_msg);
          }
        },
      );
    }
  }

  // 결제 함수 호출
  function handlePaymentButtonClick() {
    const user_email = 'ayjislove@gmail.com';
    const username = '안윤진';
    kakaoPay(user_email, username);
  }
  if (type == 'mobile')
    return (
      <button
        className="flex-center sticky bottom-0 z-[100] h-70 border-t border-gray-1 bg-white pc:hidden"
        onClick={handlePaymentButtonClick}>
        <div className="flex-center mx-40 h-50 w-full bg-primary text-white">
          {totalPrice.toLocaleString()}원 결제하기
        </div>
      </button>
    );
  return (
    <button
      className="flex-center h-70 w-full border-t border-gray-1 bg-primary  text-white mobile:hidden tablet:hidden"
      onClick={handlePaymentButtonClick}>
      {totalPrice.toLocaleString()}원 결제하기
    </button>
  );
}

export default PaymentButton;
