import ModalLayout from "./modalLayout";

interface AddCommunityCardProps {
  onClick: () => void;
}

function AddCommunityCard({ onClick } : AddCommunityCardProps) {
  return (
    <ModalLayout onClick={onClick}>
      <div className="w-200 h-400 bg-white">
        글쓰기모달
      </div>
    </ModalLayout>
  )
}

export default AddCommunityCard