import React from 'react';
interface CategoryButtonProps {
  label: string;
  onClick: () => void;
  style: React.CSSProperties;
}

function CategoryButton({ label, onClick, style }: CategoryButtonProps) {
  return (
    <button onClick={onClick} style={style} className="gap-x-60">
      <div className="font-bold mb-12" style={{ color: style.color }}>
        {label}
      </div>
    </button>
  );
}

export default CategoryButton;
