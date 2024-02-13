// 전화번호 입력 필드 컴포넌트
interface PhoneNumberInputProps {
  isDefault: boolean;
  value: string;
  handleChange: (value: string) => void;
}
function PhoneNumberInput({
  isDefault,
  value,
  handleChange,
}: PhoneNumberInputProps) {
  return (
    <div className="flex items-center text-16  text-gray-3">
      <label htmlFor="phoneNumber" className="mr-34 whitespace-nowrap">
        전화번호
      </label>
      <input
        type="text"
        id="phoneNumber"
        value={value}
        placeholder="01012345678"
        className={`h-48 rounded-[5px] border border-gray-1 pl-12  text-gray-2 mobile:w-237 ${
          isDefault ? 'pointer-events-none bg-gray-5' : 'bg-white'
        }`}
        onChange={handleChange}
        disabled={isDefault}
      />
    </div>
  );
}

export default PhoneNumberInput;
