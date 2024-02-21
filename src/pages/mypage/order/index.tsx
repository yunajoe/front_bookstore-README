// alt, shift, o
import { getDeliveryList } from '@/api/delivery';
import BookOrderCardList from '@/components/card/bookOrderCard/bookOrderCardList';
import BookOrderEmptyCard from '@/components/card/bookOrderCard/bookOrderEmptyCard';
import OrderDate from '@/components/container/orderDate/orderDate';
import OrderOverView from '@/components/container/orderDate/orderOverView';
import DropDown from '@/components/dropDown/dropDown';
import MyOrderPageLayout from '@/components/layout/myOrderLayOut';
import { ORDER_DROPDOWN_MENUS } from '@/constants/ORDER_DROPDOWN_MENUS';
import { myOrderStatus } from '@/constants/myOrderStatus';
import { QUERY_KEY } from '@/constants/queryKey';
import { bookOrderTestData } from '@/pages/api/mock/bookOrderMock';
import { DeliveryItem, OrderOverViewItem } from '@/types/deliveryType';
import { useQuery } from '@tanstack/react-query';
import { useMemo, useState } from 'react';

// const { orderData } = bookOrderTestData;

function MyOrderPage() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [selectedItem, setSelectedItem] = useState('전체보기');
  const onSelectedItem = (menu: string) => setSelectedItem(menu);
  const onStartDate = (startDate: Date) => setStartDate(startDate);
  const onEndDate = (endDate: Date) => setEndDate(endDate);

  const getMyOrderQuery = useQuery({
    queryKey: [QUERY_KEY.delivery],
    queryFn: () => getDeliveryList(),
    select: (data) => data.data,
    initialData: { data: [] },
  });

  const myOrderList = useMemo(() => {
    try {
      const result = getMyOrderQuery?.data?.reduce(
        (acc: OrderOverViewItem, item: DeliveryItem) => {
          acc[item.deliveryStatus] += 1;
          return acc;
        },

        { ...myOrderStatus },
      );
      return result;
    } catch (error) {
      return { ...myOrderStatus };
    }
  }, [getMyOrderQuery.data]);

  const person = {
    id: 1,
    name: '유저',
    isPurchased: false,
    firstPurchasedDate: new Date().toString(),
  };

  const orderData = getMyOrderQuery?.data?.map((item) => item.orderDto);

  return (
    <MyOrderPageLayout
      dropDown={
        <DropDown
          menus={ORDER_DROPDOWN_MENUS}
          selectedItem={selectedItem}
          onSelectedItem={onSelectedItem}
        />
      }
      orderDate={
        <OrderDate
          person={person}
          pastDate={selectedItem}
          startDate={startDate}
          endDate={endDate}
          setSelectedItem={setSelectedItem}
          setStartDate={onStartDate}
          setEndDate={onEndDate}
        />
      }
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
