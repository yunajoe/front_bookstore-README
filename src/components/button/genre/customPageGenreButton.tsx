export type CustomGenreButtonProps = {
  categoryId: string;
  title: string;
  selected: boolean;
  editMode?: boolean;
  onClick: (e: boolean) => void;
};

function CustomPageGenreButton({
  categoryId,
  title,
  selected,
  editMode,
  onClick,
}: CustomGenreButtonProps) {
  const handleClick = () => {
    if (editMode) onClick(!selected);
  };

  return (
    <button
      className={`text-13 flex-center h-33 w-fit whitespace-nowrap rounded-[53px] border ${
        selected ? 'text-primary border-green' : 'border-gray-1'
      } pc:text-14 ${editMode ? 'desktop:hover:border-green desktop:hover:text-primary tablet:hover:text-primary tablet:hover:border-green' : ''}`}
      onClick={handleClick}>
      <div className="mx-30">{title}</div>
    </button>
  );
}

export default CustomPageGenreButton;
