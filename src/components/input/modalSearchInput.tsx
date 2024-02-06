import Image from 'next/image';
import SearchIcon from '@/public/icons/SearchIcon.svg';
import { useEffect, useState } from 'react';

interface SearchInput {
  placeholder?: string;
  onSearch?: (searchTerm: string) => void;
}

function ModalSearchInput({ placeholder, onSearch }: SearchInput) {
  const [value, setValue] = useState('');
  const [debouncedValue, setDebouncedValue] = useState(value);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  // Debounce
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, 1000); // 1초 대기

    return () => {
      clearTimeout(handler);
    };
  }, [value]);

  const handleSearch = () => {
    if (onSearch) {
      onSearch(debouncedValue);
    }
  };

  return (
    <div className={'relative inline-flex z-10 w-full'}>
      <input
        className={`w-full h-48 border border-gray-1 px-18 py-12 max-w-full pr-20 text-16 font-light
          rounded-[5px]`}
        placeholder={`${placeholder ? placeholder : ''}`}
        value={value}
        onChange={(e) => handleInputChange(e)}
      />
      <div
        className="absolute w-12 h-12 tablet:h-15 tablet:w-15 pc:h-15 pc:w-15 top-1/2
          mobile:right-6 right-12 transform -translate-y-1/2"
        onClick={handleSearch}>
        <Image src={SearchIcon} fill alt="검색 아이콘" />
      </div>
    </div>
  );
}

export default ModalSearchInput;
