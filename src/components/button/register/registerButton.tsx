import React, { MouseEventHandler } from 'react';

type ButtonProps = {
  type?: 'submit' | 'reset' | 'button' | undefined;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
  color?: string;
  height?: number;
  text?: number;
};

function RegisterButton({ type, onClick, children, color = 'green', height = 50, text = 17}: ButtonProps) {
  return (
    <button
      type={type}
      className={`h-${height} w-full text-center bg-${color} rounded-[5px] text-${text} text-white py-8`}
      onClick={onClick}>
      {children}
    </button>
  );
}
export default RegisterButton;
