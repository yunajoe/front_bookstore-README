import { ReactNode } from "react";
import { createPortal } from "react-dom";

interface ModalLayoutProps {
  children: ReactNode;
  onClick: () => void;
}

function ModalLayout({children, onClick} : ModalLayoutProps) {
  return (
    <>
      {createPortal(
        <div role="overlay" className="top-0 left-0 w-full h-full flex-center bg-black opacity-60" onClick={onClick}>
          <div role="modalContainer" className="bg-white rounded-[10px]" >
            {children}
          </div>
        </div>,
        document.getElementById('modal-root') as HTMLElement
      )}
    </> 
  )
}

export default ModalLayout