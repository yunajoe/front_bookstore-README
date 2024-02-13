import FindAddress from '@/components/modal/findAddress';
import { useState } from 'react';
interface SearchAddressButtonProps {
  onClick: () => void;
}

function SearchAddressButton({ onClick }: SearchAddressButtonProps) {
  // const [isFindAddressModalOpen, setIsFindAddressModalOpen] = useState(false);
  // const handleFindAddressModalOpen = () => {
  //   setIsFindAddressModalOpen(!isFindAddressModalOpen);
  //   console.log('modal');
  // };

  return (
    <button
      className="flex-center inline-flex h-48 w-108 rounded-[5px] border border-green text-15 text-green"
      onClick={onClick}>
      주소 검색
      {/* {isFindAddressModalOpen && (
        <FindAddress onClick={handleFindAddressModalOpen} />
      )} */}
    </button>
  );
}

export default SearchAddressButton;
