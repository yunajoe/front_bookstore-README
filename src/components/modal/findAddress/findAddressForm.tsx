import ModalSearchInput from '@/components/input/modalSearchInput';
import DoFindAddress from '@/components/modal/findAddress/doFindAddress';
import NotFindAddress from '@/components/modal/findAddress/notFindAddress';
import FindAddressPagination from './findAddressPagination';
import { getAddress } from 'src/api/address';
import { useState } from 'react';

function FindAddressForm() {
  const [address, setAddress] = useState();

  const handleSearch = async (search: string) => {
    const result = await getAddress(search);
    setAddress(result);
  };

  return (
    <div className="flex flex-col w-full gap-20 overflow-scroll">
      <ModalSearchInput
        placeholder="도로명, 지명, 건물명 검색"
        onSearch={handleSearch}
      />
      {address ? (
        <FindAddressPagination addressData={address} />
      ) : (
        <NotFindAddress />
      )}
    </div>
  );
}

export default FindAddressForm;
