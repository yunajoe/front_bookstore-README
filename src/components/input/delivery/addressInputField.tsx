// AddressInputField 컴포넌트
interface AddressInputFieldProps {
  value: string;
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function AddressInputField({
  value,
  placeholder,
  onChange,
}: AddressInputFieldProps) {
  return (
    <input
      type="text"
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      className="pointer-events-none mr-12 h-48 w-120 rounded-[5px] border border-gray-1 bg-gray-5
        pl-12 text-gray-2 mobile:mr-10"
    />
  );
}

export default AddressInputField;
