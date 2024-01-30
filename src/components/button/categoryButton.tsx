import Image from 'next/image';
import IconCategory from '@/public/icons/CategoryIcon.svg';

interface CategoryButtonProps {
  onClick: () => void;
}
function CategoryButton({ onClick }: CategoryButtonProps) {
  return (
    <button className="inline-flex flex-center gap-10" onClick={onClick}>
      <Image src={IconCategory} width={18} height={18} alt="카테고리 버튼" />
      <div className="mobile:hidden">카테고리</div>
    </button>
  );
}
export default CategoryButton;
