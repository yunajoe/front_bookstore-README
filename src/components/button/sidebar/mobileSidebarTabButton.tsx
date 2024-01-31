import Image from 'next/image';
import { useRef } from 'react';
import useShowDropDown from '@/hooks/useShowDropDown';
import SidebarTab from './sidebarTab';
import useCarouselEnv from '@/hooks/useCarouselEnv';

interface MobileSidebarTabButtonProps {
  isDomestic: boolean;
  location?: string;
}

function MobileSidebarTabButton({
  isDomestic,
  location,
}: MobileSidebarTabButtonProps) {
  const ref = useRef(null);
  const [showOptions, setShowOptions] = useShowDropDown(ref, false);
  const handleClick = () => setShowOptions(!showOptions);
  const { env } = useCarouselEnv();

  return (
    <>
      <button
        ref={ref}
        onClick={handleClick}
        className="pc:hidden tablet:hidden mobile:flex-center mobile:gap-4 text-[13px]">
        {location ?? '전체보기'}
        <Image
          src={`${showOptions ? '/icons/UpArrow.svg' : 'icons/DownArrow.svg'}`}
          alt=""
          width={19}
          height={19}
        />
      </button>
      {(showOptions || env !== 'mobile') && (
        <SidebarTab isDomestic={isDomestic} location={location} />
      )}
    </>
  );
}

export default MobileSidebarTabButton;
