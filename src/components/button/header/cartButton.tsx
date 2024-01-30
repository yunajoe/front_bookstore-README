import Image from 'next/image';
import IconCart from '@/public/icons/CartIcon.svg';
import Link from 'next/link';

interface CardChipProps {
  numItemsOfCart: number;
}

function CartButton({ numItemsOfCart }: CardChipProps) {
  return (
    <Link href="/cart">
      <button className="flex relative items-center w-16 h-16 tablet:w-24 tablet:h-24 pc:w-24 pc:h-24">
        <div className="relative w-full h-full items-center">
          <Image src={IconCart} alt="장바구니 이미지" fill />
          {numItemsOfCart && (
            <div
              className="absolute bottom-8 pc:bottom-11 tablet:bottom-11 left-12 tablet:left-17
                pc:left-17 bg-green text-white rounded-full p-1 text-10 tablet:text-12
                pc:text-12 w-12 h-12 tablet:w-26 tablet:h-26 pc:w-26 pc:h-26 flex items-center
                justify-center">
              {numItemsOfCart}
            </div>
          )}
        </div>
      </button>
    </Link>
  );
}

export default CartButton;
