import Image from 'next/image';
import { useRef } from 'react';

import SidebarTab from '@/components/button/sidebar/sidebarTab';
import useShowDropDown from '@/hooks/useShowDropDown';
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
        <div className="w-19 h-19 border-[1px] rounded-[100%] border-gray-1 overflow-hidden">
          <Image
            src={`${showOptions ? '/icons/UpArrow.svg' : 'icons/DownArrow.svg'}`}
            alt="카테고리 펼치기 버튼"
            width={19}
            height={19}
          />
        </div>
      </button>
      {(showOptions || env !== 'mobile') && (
        <SidebarTab isDomestic={isDomestic} location={location} />
      )}
    </>
  );
}

export default MobileSidebarTabButton;
