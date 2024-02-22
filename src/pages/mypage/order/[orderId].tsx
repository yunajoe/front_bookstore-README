import OrderCompletedSection from '@/components/container/orderCompletedSection';
import MainLayout from '@/components/layout/mainLayout';
import { ReactElement } from 'react';

function MyPageOrderDetail() {
  return <OrderCompletedSection paymentDetail={false} />;
}

export default MyPageOrderDetail;

MyPageOrderDetail.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
