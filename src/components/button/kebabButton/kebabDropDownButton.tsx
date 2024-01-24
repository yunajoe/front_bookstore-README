export interface KebabDropDownButtonProps {
  title1: string;
  title2: string;
}
//TODO : 디자인 및 드롭다운 펼쳐졌을때 위치 수정필요함
function KebabDropDownButton({ title1, title2 }: KebabDropDownButtonProps) {
  return (
    <div className="flex-center flex-col absolute top-43 right-20">
      <div className="border-[1px] border-solid border-black hover:bg-red">
        {title1}
      </div>
      <div className="border-[1px] border-solid border-black hover:bg-red">
        {title2}
      </div>
    </div>
  );
}

export default KebabDropDownButton;
