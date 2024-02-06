import TitleContentTable from "@/components/modal/addReview/titleContentTable"
import Image from "next/image";
import LineIcon from '@/public/icons/Line.svg';
import { Address } from "@/types/address";


function AddressItem({ zipNo, roadAddr, jibunAddr }: Address) {
  return (
    <>
      <TitleContentTable title1={zipNo} content1={roadAddr} content2={jibunAddr} truncate={false} green={true} black={true} gap={8} />
      <Image src={LineIcon} alt="구분선" />
    </>
  )
}

export default AddressItem