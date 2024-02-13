import TitleContentTable from '@/components/modal/addReview/titleContentTable';
import Image from 'next/image';
import LineIcon from '@/public/icons/Line.svg';
import { Address } from '@/types/address';
import { useAtom } from 'jotai';
import {
  setAddressData,
  zipNoAtom,
  roadAddrAtom,
  jibunAddrAtom,
} from '@/store/address';

interface AddressItemProps {
  zipNo: string;
  roadAddr: string;
  jibunAddr: string;
}

function AddressItem({ zipNo, roadAddr, jibunAddr }: AddressItemProps) {
  const [, setAddress] = useAtom(setAddressData);
  const [zipNoState] = useAtom(zipNoAtom); // Jotai atom의 값을 읽어옵니다.
  const [roadAddrState] = useAtom(roadAddrAtom);
  const [jibunAddrState] = useAtom(jibunAddrAtom);

  const chooseAddress = () => {
    setAddress({ zipNo, roadAddr, jibunAddr });
  };

  // Jotai atom의 값이 업데이트될 때마다 해당 값을 콘솔에 출력합니다.
  console.log('zipNoState:', zipNoState);
  console.log('roadAddrState:', roadAddrState);
  console.log('jibunAddrState:', jibunAddrState);

  return (
    <>
      <TitleContentTable
        title1={zipNo}
        content1={roadAddr}
        content2={jibunAddr}
        onClick={chooseAddress}
        button={true}
        green={true}
        black="text-black font-light"
        gap={8}
      />
      <Image src={LineIcon} alt="구분선" />
    </>
  );
}

export default AddressItem;
