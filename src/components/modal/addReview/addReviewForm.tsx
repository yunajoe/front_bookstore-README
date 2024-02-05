import BookRating from "@/components/book/bookRating/bookRating";
import RegisterButton from "@/components/button/register/registerButton";
import Textarea from "@/components/input/textarea";
import TitleContentTable from "@/components/modal/addReview/titleContentTable";
import Image from "next/image";
import LineIcon from '@/public/icons/Line.svg';

function AddReviewForm() {
  return (
    <>
      <form className="flex flex-col w-full gap-40 overflow-scroll scroll">
        <TitleContentTable title1="책 제목" content1="스물 아홉 생일, 1년 후 죽기로 결심하다" title2='저자' content2='이제니' />
        <Image src={LineIcon} alt="구분선" />
        <div className="flex flex-col justify-between text-16 text-b-b h-87">
          별점 평가
          <BookRating rating={0} size='lg' onClick={true} className='flex items-center justify-start gap-13 h-52 w-full'/>
        </div>
        <Textarea height={274}/>
      </form>
      <RegisterButton>리뷰 작성하기</RegisterButton>
    </>
  )
}

export default AddReviewForm;
