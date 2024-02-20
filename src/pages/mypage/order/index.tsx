import BookOrderEmptyCard from '@/components/card/bookOrderCard/bookOrderEmptyCard';
import BookOrderCardList from '@/components/card/bookOrderCard/bookOrderCardList';
import OrderOverView from '@/components/container/orderDate/orderOverView';
import MyOrderPageLayout from '@/components/layout/myOrderLayOut';
import { QUERY_KEY } from '@/constants/queryKey';
import {
  bookOrderTestData,
  orderOverViewData,
} from '@/pages/api/mock/bookOrderMock';
import { useQuery } from '@tanstack/react-query';
import { getDeliveryList } from '@/api/delivery';
import { DeliveryItem, OrderOverViewItem } from '@/types/deliveryType';
import { useMemo } from 'react';
import { myOrderStatus } from '@/constants/myOrderStatus';
const { orderData } = bookOrderTestData;

function MyOrderPage() {
  const getMyOrderQuery = useQuery({
    queryKey: [QUERY_KEY.delivery],
    queryFn: () => getDeliveryList(),
    select: (data) => data.data,
    initialData: [],
  });

  const myOrderList = useMemo(() => {
    try {
      return getMyOrderQuery?.data?.reduce(
        (acc: OrderOverViewItem, item: DeliveryItem) => {
          acc[item.deliveryStatus] += 1;
        },
        { ...myOrderStatus },
      );
    } catch (error) {
      return { ...myOrderStatus };
    }
  }, []);

  return (
    <MyOrderPageLayout
      // orderDate={<OrderDate />}
      overview={<OrderOverView orderView={myOrderList} />}
      main={
        orderData ? (
          <BookOrderCardList orderData={orderData} />
        ) : (
          <BookOrderEmptyCard />
        )
      }
    />
  );
}
export default MyOrderPage;
