export interface KebabDropDownButtonProps {
  title1: string;
  title2: string;
  color?: string;
}

function KebabDropDownButton({
  title1,
  title2,
  color = 'red',
}: KebabDropDownButtonProps) {
  return (
    <div
      className="flex-center flex-col absolute top-48 right-20 w-108 h-84 border-[1px]
        border-solid border-gray-1 rounded-[5px] bg-white">
      <div
        className="hover:bg-gray-5 text-gray-11 flex-center justify-start pl-15 w-full h-full
          text-14 border-b-[1px] border-solid border-gray-1 rounded-t-[5px]">
        {title1}
      </div>
      <div
        className={`hover:bg-gray-5 text-${color} flex-center justify-start pl-15 w-full h-full
          text-14 rounded-b-[5px]`}>
        {title2}
      </div>
    </div>
  );
}

export default KebabDropDownButton;
