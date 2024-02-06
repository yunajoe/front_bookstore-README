import TitleContentTable from '@/components/modal/addReview/titleContentTable';
import Image from 'next/image';
import LineIcon from '@/public/icons/Line.svg';
import Radio from '@/components/input/radio';
import RegisterButton from '@/components/button/register/registerButton';

function GetRefundForm() {

  return (
    <>
      <form>
        <TitleContentTable />
        <Image src={LineIcon} alt="구분선"/>
        <div className='flex'>
          <Radio />
          <Radio />
        </div>
        <TextArea />
        <div>
          환불금액
          얼마
        </div>
      </form> 
      <RegisterButton>교환/환불 신청하기</RegisterButton>
    </>
  )
}

export default GetRefundForm