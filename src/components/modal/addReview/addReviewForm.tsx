import BookRating from "@/components/book/bookRating/bookRating";
import RegisterButton from "@/components/button/register/registerButton";
import Textarea from "@/components/input/textarea";

function AddReviewForm() {
  return (
    <form className="flex flex-col w-full gap-40">
      <div className="flex flex-col justify-between text-16 text-b-b h-87">
        별점 평가
        <BookRating rating={0} size='lg' onClick={true} className='flex items-center justify-start gap-13 h-52 w-full'/>
      </div>
      <Textarea />
      <RegisterButton>리뷰 작성하기</RegisterButton>
    </form>
  )
}

export default AddReviewForm;
