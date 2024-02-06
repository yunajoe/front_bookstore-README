import SearchInput from '@/components/input/searchInput';
import DoFindAddress from '@/components/modal/findAddress/doFindAddress';
import NotFindAddress from '@/components/modal/findAddress/notFindAddress';
import FindAddressPagination from './findAddressPagination';
import { getAddress } from 'src/api/address';
import { useState } from 'react';
import { Address } from '@/types/address';

function FindAddressForm() {
  const [address, setAddress] = useState();

  const handleSearch = async(search : string) => {
    const result = await getAddress(search);
    setAddress(result)
  }

  return (
    <div className="flex flex-col w-full gap-20 overflow-scroll">
      <SearchInput
        width="full"
        height="48"
        rounded="5"
        placeholder="도로명, 지명, 건물명 검색"
        onSearch={handleSearch}
      />
      {address ? <FindAddressPagination addressData={address} /> : <NotFindAddress />}
    </div>
  );
}

export default FindAddressForm;
