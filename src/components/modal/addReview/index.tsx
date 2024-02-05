import ModalContainer from "../modalContainer"
import ModalLayout from "../modalLayout"
import AddReviewForm from "./addReviewForm";

interface AddReviewProps {
  onClick: () => void;
}

function AddReview({onClick} : AddReviewProps) {
  return (
    <ModalLayout onClick={onClick}>
      <ModalContainer onClick={onClick} title="리뷰 작성하기">
        <AddReviewForm />
      </ModalContainer>
    </ModalLayout>
  )
}

export default AddReview