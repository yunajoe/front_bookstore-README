import { useState } from "react";
import ModalLayout from "./modalLayout";

interface AlertModalProps {
  title: string;
  description: string;
}

function AlertModal({ title, description }: AlertModalProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = () => {
    setIsModalOpen(!isModalOpen);
  }

  return (
    <ModalLayout onClick={handleButtonClick}>
      <div className="flex-center flex-col">
        <p>{title}</p>
        <span>{description}</span>
        <button onClick={handleButtonClick}>취소, 삭제</button>
      </div>
    </ModalLayout>
  )
}

export default AlertModal