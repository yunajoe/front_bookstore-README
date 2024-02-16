import { THOUSAND_UNIT } from 'src/constants/price';

interface BookPriceProps {
  price: number;
}

function BookPrice({ price }: BookPriceProps) {
  return (
    <div className="mt-4 text-14 font-bold text-black">
      {price.toString().replace(THOUSAND_UNIT, ',')}
    </div>
  );
}

export default BookPrice;
