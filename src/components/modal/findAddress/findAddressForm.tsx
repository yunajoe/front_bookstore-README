import SearchInput from '@/components/input/searchInput';
import DoFindAddress from '@/components/modal/findAddress/doFindAddress';
import NotFindAddress from '@/components/modal/findAddress/notFindAddress';
import FindAddressPagination from './findAddressPagination';
import { getAddress } from 'src/api/address';
import { useState } from 'react';

function FindAddressForm() {
  const [address, setAddress] = useState();

  const handleSearch = async() => {
    const result = await getAddress('정관1로');
    setAddress(result)
  }
  
  console.log(address)

  return (
    <div className="flex flex-col w-full gap-20">
      <SearchInput
        width="full"
        height="48"
        rounded="5"
        placeholder="도로명, 지명, 건물명 검색"
        onClick={handleSearch}
      />
      <FindAddressPagination />
    </div>
  );
}

export default FindAddressForm;
