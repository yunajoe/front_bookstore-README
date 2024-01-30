import Image from 'next/image';
import IconCart from '@/public/icons/CartIcon.svg';
import Link from 'next/link';

interface CardChipProps {
  numItemsOfCart: number;
}

function CartButton({ numItemsOfCart }: CardChipProps) {
  return (
    <Link href="/cart">
      <button className="flex relative items-center w-14 h-14 tablet:w-24 tablet:h-24 pc:w-24 pc:h-24">
        <div className="relative w-full h-full items-center">
          <Image src={IconCart} alt="장바구니 이미지" fill />
          {numItemsOfCart && (
            <div
              className="absolute bottom-8 pc:bottom-12 tablet:bottom-12 left-10 tablet:left-17
                pc:left-17 bg-green text-white rounded-full p-1 text-10 tablet:text-12
                pc:text-12 w-14 h-14 tablet:w-16 tablet:h-16 pc:w-16 pc:h-16 flex items-center
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
