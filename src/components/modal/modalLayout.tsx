import { ReactNode } from "react";
import { createPortal } from "react-dom";

interface ModalLayoutProps {
  children: ReactNode;
  onClick: () => void;
}

function ModalLayout({ children, onClick }: ModalLayoutProps) {
  return (
    <>
      {createPortal(
        <div role="overlay" className="fixed top-0 left-0 w-screen h-screen flex-center z-[100]" >
          <div className="absolute w-full h-full bg-black opacity-60" onClick={onClick} />
          <div role="modalContainer" className="bg-white rounded-[10px] z-[150]">
            {children}
          </div>
        </div>,
        document.getElementById('portal') as HTMLDivElement
      )}
    </> 
  )
}

export default ModalLayout