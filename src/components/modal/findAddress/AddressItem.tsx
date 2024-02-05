import TitleContentTable from "@/components/modal/addReview/titleContentTable"
import Image from "next/image";
import LineIcon from '@/public/icons/Line.svg';


interface Adr {
  number: string;
  address: string;
  type: string;
  detail: string;
}

function AddressItem({ adr }: { adr: Adr }) {
  return (
    <div>
      <TitleContentTable title1={adr.number} content1={adr.address} title2={adr.type} content2={adr.detail} truncate={false} />
      <Image src={LineIcon} alt="구분선" />
    </div>
  )
}

export default AddressItem