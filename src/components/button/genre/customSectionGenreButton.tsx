export type CustomGenreButtonProps = {
  categoryId: string;
  title: string;
  selected: boolean;
  onClick: () => void;
};

function CustomSectionGenreButton({
  categoryId,
  title,
  selected,
  onClick,
}: CustomGenreButtonProps) {
  const handleClick = () => {
    onClick();
  };

  return (
    <button
      className={`text-13 flex-center h-33 w-fit whitespace-nowrap rounded-[53px] border bg-white ${
        selected ? 'border-primary text-primary' : 'border-gray-1'
      } pc:text-14`}
      onClick={handleClick}>
      <div className="mx-30">{title}</div>
    </button>
  );
}

export default CustomSectionGenreButton;
