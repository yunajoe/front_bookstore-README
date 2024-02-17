import { THOUSAND_UNIT } from 'src/constants/price';

interface BookPaymentCostProps {
  orderCount: number | undefined;
  cost: number;
  mobileHidden?: boolean;
}

function BookPaymentCost({
  orderCount,
  cost,
  mobileHidden,
}: BookPaymentCostProps) {
  if (!orderCount) orderCount = 1;
  return (
    <div
      role="payment"
      className={`ml-auto mt-auto ${mobileHidden ? 'mobile:hidden' : ''}`}>
      <div className="mb-auto flex items-center gap-12">
        <span className="text-14 text-gray-3">{orderCount}개</span>
        <span className="text-20 font-bold text-black">
          {(orderCount * cost).toString().replace(THOUSAND_UNIT, ',')}원
        </span>
      </div>
    </div>
  );
}

export default BookPaymentCost;
