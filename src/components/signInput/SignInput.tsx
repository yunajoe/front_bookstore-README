/* Text input 컴포넌트와 Password input 컴포넌트

params: 
  - id: required, string
  - placeholder: optional, string
  - register: required, 
  - isRequired: required, boolean
  - isError: required, boolean
  - pattern: optional,
  - validate: optional, 

returns: component
*/

import { useState } from 'react';
import Image from 'next/image';
import { ValidationRule } from 'react-hook-form';

interface InputProps {
  id: string;
  placeholder: string;
  register: any;
  isRequired?: boolean;
  isError?: boolean;
  pattern?: ValidationRule<RegExp>;
  validate?: { check: () => string | undefined };
}

function TextInput({
  id,
  placeholder,
  register,
  isRequired,
  isError,
  pattern,
  validate,
}: InputProps) {
  return (
    <div className="relative w-full">
      <input
        id={id}
        type="text"
        placeholder={placeholder}
        {...register(id, {
          required: { isRequired },
          pattern: { ...pattern },
          validate: { ...validate },
        })}
        className={`py-12 w-full
        autofill:bg-white 
        border-b border-gray-3 focus:border-green ${isError ? 'border-red' : ''}
        outline-none`}
      />
    </div>
  );
}

function PasswordInput({
  id,
  placeholder,
  register,
  isRequired,
  isError,
  pattern,
  validate,
}: InputProps) {
  const [isView, setIsView] = useState(false);

  return (
    <div className="relative  w-full">
      <button type="button" className="absolute top-18 right-14">
        <Image
          onClick={() => setIsView(!isView)}
          src={isView ? 'icons/eye-open.svg' : 'icons/eye-close.svg'}
          alt="eye"
          width={16}
          height={16}
        />
      </button>
      <input
        id={id}
        type={isView ? 'text' : 'password'}
        placeholder={placeholder}
        {...register(id, {
          required: { isRequired },
          pattern: { ...pattern },
          validate: { ...validate },
        })}
        className={`py-12 w-full
        autofill:bg-white 
        border-b border-gray-3 focus:border-green ${isError ? 'border-red' : ''}
        outline-none`}
      />
    </div>
  );
}

export { TextInput, PasswordInput };
