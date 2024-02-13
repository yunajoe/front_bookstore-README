// 받는 분 입력 필드 컴포넌트
interface RecipientInputProps {
  isDefault: boolean;
  value: string;
  handleChange: () => void;
}
function RecipientInput({
  isDefault,
  value,
  handleChange,
}: RecipientInputProps) {
  return (
    <div className="flex text-16 text-gray-3">
      <label htmlFor="recipient" className="mr-45 inline-flex items-center">
        받는 분
      </label>
      <input
        type="text"
        id="recipient"
        value={value}
        placeholder="이름"
        className={`flex-center h-48 w-160 rounded-[5px] border border-gray-1 pl-12 ${
          isDefault ? 'pointer-events-none  bg-gray-5 text-gray-2' : ''
        }`}
        onChange={handleChange}
        disabled={isDefault}
      />
    </div>
  );
}

export default RecipientInput;
