import Image from 'next/image';
import KebabImg from '@/public/icons/Kebab.svg';
import { MutableRefObject, useRef, useState } from 'react';
import useShowDropDown from '@/hooks/useShowDropDown';
import KebabDropDownButton, {
  KebabDropDownButtonProps,
} from '@/components/button/kebab/kebabDropDownButton';
import AlertModal from '@/components/modal/alertModal';

function KebabButton({ title1, title2 }: KebabDropDownButtonProps) {
  const ref = useRef() as MutableRefObject<HTMLImageElement>;
  const [showOptions, setShowOptions] = useShowDropDown(ref, false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  console.log(isModalOpen);

  const handleButtonClick = () => {
    setIsModalOpen(!isModalOpen);
    console.log('클릭!');
  };

  const handleKebabClick = () => {
    setShowOptions(!showOptions);
  };

  return (
    <>
      <Image
        className="absolute top-23 right-20"
        src={KebabImg}
        alt="케밥버튼"
        onClick={handleKebabClick}
        ref={ref}
      />
      {showOptions && <KebabDropDownButton title1={title1} title2={title2} onClickTitle1={handleButtonClick}/>}
      {isModalOpen && (
        <AlertModal
          title="정말삭제하시겠습니까"
          description="삭제하면 되돌릴 수 없습니다."
          onClick={handleButtonClick}
        />
      )}
    </>
  );
}

export default KebabButton;
