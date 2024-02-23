interface WriteButtonProps {
  onClick: () => void;
}
function WritePostButton({onClick }: WriteButtonProps) {
  return (
    <button
      className="flex-center text-primary border-primary relative ml-auto h-40 w-108 rounded-md
        border text-14 mobile:hidden"
      onClick={onClick}>
      글쓰기
    </button>
  );
}

export default WritePostButton;
