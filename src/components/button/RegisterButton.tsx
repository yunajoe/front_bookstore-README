import React, { MouseEventHandler } from 'react';

type ButtonProps = {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
};

function RegisterButton({ onClick, children }: ButtonProps) {
  return (
    <button
      className="h-[50px] w-full text-center bg-[#66C57B] rounded-[5px] text-[17px] text-[#FFF]"
      onClick={onClick}>
      {children}
    </button>
  );
}

export default RegisterButton;
