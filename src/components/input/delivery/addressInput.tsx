import SearchAddressButton from '@/components/button/delivery/searchAddressButton';
import FindAddress from '@/components/modal/findAddress';
import { useState } from 'react';
import { useAtom } from 'jotai'; // Jotai의 useAtom 함수를 불러옵니다.
import { zipNoAtom, roadAddrAtom, jibunAddrAtom } from '@/store/address';

interface AddressInputProps {
  isDefault: boolean;
  addressLines: string[];
  onClick: () => void;
}

function AddressInput({ isDefault, addressLines, onClick }: AddressInputProps) {
  const [zipNo] = useAtom(zipNoAtom); // Jotai atom의 값을 읽어옵니다.
  const [roadAddr] = useAtom(roadAddrAtom);
  const [jibunAddr] = useAtom(jibunAddrAtom);

  const [isFindAddressModalOpen, setIsFindAddressModalOpen] = useState(false);
  const handleFindAddressModalOpen = () => {
    setIsFindAddressModalOpen(!isFindAddressModalOpen);
  };

  return (
    <div className={`flex text-16 text-gray-3 ${isDefault ? '' : ''}`}>
      <label htmlFor="address" className="mr-66 inline-flex pc:mt-12">
        주소
      </label>
      <div className="flex flex-col gap-y-12">
        <div className="flex items-center">
          <input
            type="text"
            id="addressLine1"
            value={`${isDefault ? addressLines[0] : zipNo}`}
            className="pointer-events-none mr-12 h-48 w-180 rounded-[5px] border border-gray-1 bg-gray-5
            pl-12 text-gray-2"
            disabled={isDefault}
          />
          <SearchAddressButton onClick={handleFindAddressModalOpen} />
          {!isDefault && isFindAddressModalOpen && (
            <FindAddress onClick={handleFindAddressModalOpen} />
          )}
        </div>
        <input
          type="text"
          id="addressLine2"
          value={`${isDefault ? addressLines[1] : roadAddr}`}
          className="pointer-events-none mt-2 h-48 w-462 rounded-[5px] border
           border-gray-1 bg-gray-5 pl-12
          text-gray-2"
          disabled={isDefault}
        />
        <input
          type="text"
          id="addressLine3"
          placeholder={`${isDefault ? '' : '상세주소 입력'}`}
          value={`${isDefault ? addressLines[2] : ''}`}
          className={`flex-center mt-2 h-48 w-462 rounded-[5px] border border-gray-1 bg-gray-5 pl-12 text-16 text-gray-2 ${
            isDefault ? 'pointer-events-none' : 'bg-white'
          }`}
          disabled={isDefault}
        />
      </div>
    </div>
  );
}

export default AddressInput;
