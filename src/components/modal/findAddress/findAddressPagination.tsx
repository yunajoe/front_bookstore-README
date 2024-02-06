import { Address } from '@/types/address';
import AddressItem from './AddressItem';

function FindAddressPagination({ addressData }: { addressData: Address[] }) {
  return (
    <div className='overflow-scroll'>
      {addressData?.map((data) => (
         <AddressItem zipNo={data.zipNo} roadAddr={data.roadAddr} jibunAddr={data.jibunAddr} />
      ))}
    </div>
  );
}

export default FindAddressPagination;
