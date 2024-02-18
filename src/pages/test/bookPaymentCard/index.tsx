import BookPaymentCardList from '@/components/card/bookPaymentCard/bookPaymentCardList';
import { bookOrderTestData2 } from '@/pages/api/mock/bookOrderMock';
const testData = bookOrderTestData2;

// orderId에 해당하는 데이터를 넘겨주기
export default function TestBookPaymentCard() {
  return <BookPaymentCardList bookData={testData} label="주문상품" />;
}
