import { OrderBookData } from '@/types/bookOrderType';
import BookOrderCard from './bookOrderCard';
import OrderCount from '@/components/container/orderDate/orderCount';

interface BookOrderCardListProps {
  orderData: OrderBookData[];
}

function BookOrderCardList({ orderData }: BookOrderCardListProps) {
  if (!orderData) return;

  console.log('orderData', orderData);

  // console.log('ddd', orderData);

  // console.log(
  //   'ddd',
  //   orderData.map((item) => {
  //     console.log('ddd', item);
  //   }),
  // );
  orderData.map((item) => {
    console.log('ii', item.orderBook);
  });

  return (
    <div className="flex max-w-[1080px] flex-col">
      <div className="flex flex-col gap-40">
        {orderData.map((order) => {
          // orderData.bookData 배열 내의 모든 order.orderCount 값을 누적합산
          // const totalOrderCount = order.bookData.reduce(
          //   (acc, curr) => acc + curr.order.orderCount,
          //   0,
          // );

          return (
            <div key={order.orderId} className="flex flex-col gap-20">
              <OrderCount
                orderCount={order.orderBook.length}
                // orderDate={order.orderDate}
                orderId={order.orderId}
              />
              <div className="flex flex-col gap-20">
                {order.orderBook.map((bookData) => (
                  <BookOrderCard
                    key={bookData.bookId}
                    bookTitle={bookData.bookTitle}
                    bookPrice={bookData.price}
                    quantity={bookData.quantity}
                    authors={bookData.authors}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default BookOrderCardList;
