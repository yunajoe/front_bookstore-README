import Image from 'next/image';
import SearchIcon from '@/public/icons/SearchIcon.svg';

interface SearchInput {
  width?: string; 
  height?: string;
  rounded?: string;
  placeholder?: string;
  onClick?: () => void;
}

function SearchInput({width = '1/2', height='56', rounded = '71', placeholder, onClick} : SearchInput) {
  return (
    <div className={`relative inline-flex z-10 w-${width}`}>
      <input
        className={`w-full h-${height} tablet:h-${height} pc:h-${height} border border-gray-1 rounded-[${rounded}px] px-20 py-2
          max-w-full pr-20 text-16 font-light`}
        placeholder={`${placeholder ? placeholder : ''}`}
      />
      <div
        className="absolute w-12 h-12 tablet:h-15 tablet:w-15 pc:h-15 pc:w-15 top-1/2
          mobile:right-6 right-12 transform -translate-y-1/2" onClick={onClick}>
        <Image src={SearchIcon} fill alt="검색 아이콘" />
      </div>
    </div>
  );
}

export default SearchInput;
