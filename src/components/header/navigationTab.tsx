import { useState } from 'react';
import CategoryTabButton from '../button/header/categoryTabButton';
import CategoryTab from '@/components/header/categoryTab';
import Link from 'next/link';
import WritePostButton from '../button/header/writePostButton';

function NavigationTab() {
  const [isCategoryTabVisible, setCategoryTabVisibility] = useState(false);

  const toggleCategoryTab = () => {
    setCategoryTabVisibility((prevVisibility) => !prevVisibility);
  };

  return (
    <>
      <div className="flex items-center h-40 tablet:h-70 pc:h-70 border-gray-3 border-y">
        <div className="flex justify-between items-center text-14 tablet:text-16 pc:text-16">
          <div className="mx-16 tablet:mx-90 pc:mx-110">
            <CategoryTabButton onClick={toggleCategoryTab} />
          </div>
          <div className="flex gap-18 pc:gap-40 tablet:gap-30">
            <Link href="/bestsellers"> 베스트</Link>
            <Link href="/newest"> 신간</Link>
            <Link href="/custom">맞춤도서</Link>
            <div className="inline-block border-r w-1 h-14 border-gray-1" />
            <Link href="/community"> 커뮤니티</Link>
          </div>
          <div className="flex items-center justify-end">
            <WritePostButton />
          </div>
        </div>
      </div>
      {isCategoryTabVisible && <CategoryTab />}
    </>
  );
}

export default NavigationTab;
