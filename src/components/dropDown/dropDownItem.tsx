import React, { useCallback } from 'react';
type DropDownItemProps = {
  menu: string;
  setSelectedItem: React.Dispatch<React.SetStateAction<string>>;
  setIsClick: React.Dispatch<React.SetStateAction<boolean>>;
};

function DropDownItem({
  menu,
  setSelectedItem,
  setIsClick,
}: DropDownItemProps) {
  const handleSelectItem = useCallback((text: string) => {
    setSelectedItem(text);
    setIsClick(false);
  }, []);
  return (
    <div>
      <li
        className="h-42 text-14 hover:bg-gray-5 flex items-center pl-16 pr-10"
        onClick={() => handleSelectItem(menu)}>
        {menu}
      </li>
    </div>
  );
}

export default DropDownItem;
