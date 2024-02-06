import React from 'react';

interface TabButtonProps {
  selected: boolean;
  onClick: () => void;
  title: string;
  isSmall?: boolean;
}

function TabButton({ selected, onClick, title, isSmall }: TabButtonProps) {
  const fontStyle = `${isSmall ? 'text-16 mobile:text-12' : 'text-18 mobile:text-14'}`;
  return (
    <button
      className={`${fontStyle} font-bold ${selected ? 'text-green' : 'text-black'}`}
      onClick={onClick}>
      {title}
    </button>
  );
}

export default TabButton;
