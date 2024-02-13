// 배송 요청사항 input
import React from 'react';

interface DeliveryRequestInputProps {
  placeholder?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  disabled?: boolean;
}

const DeliveryRequestInput: React.FC<DeliveryRequestInputProps> = ({
  placeholder,
  value,
  onChange,
  className,
  disabled,
}) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={className}
      disabled={disabled}
    />
  );
};

export default DeliveryRequestInput;
