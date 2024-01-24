import Image from 'next/image';
import IconSearch from '@/public/icons/SearchIcon.svg';

function SearchInput() {
  return (
    <div className="relative inline-flex">
        <input className="w-180 tablet:w-300 tablet:h-56 pc:h-56 pc:w-500 tablet:border pc:border border-gray-1 rounded-3xl pl-20 pr-20 py-2" />
        <div className="absolute w-16 h-16 tablet:h-24 tablet:w-24 pc:h-24 pc:w-24 top-1/2 right-16 transform -translate-y-1/2">
          <Image
            src={IconSearch}
            fill
            alt="검색 아이콘"
          />
        </div>
    </div>
  );
}

export default SearchInput;
