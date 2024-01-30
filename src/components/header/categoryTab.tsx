import { SetStateAction, useState } from 'react';
import Link from 'next/link';
import {
  CategoryProps,
  ReadMeForeignCategoryList,
  ReadMeDomesticCategoryList,
} from '@/pages/api/mock';

import SelectedAllButton from '../button/header/selectedAllButton';
import CategoryButton from '../button/header/categoryButton';

function CategoryTab() {
  const [selectedCategory, setSelectedCategory] = useState('domestic'); // 'domestic' 또는 'foreign'
  const [selectedAll, setSelectedAll] = useState('국내도서 전체보기');
  const [categoryList, setCategoryList] = useState(
    ReadMeDomesticCategoryList.categoryList,
  );

  const handleCategoryClick = (categoryType: SetStateAction<string>) => {
    if (categoryType === 'domestic') {
      setSelectedCategory('domestic');
      setCategoryList(ReadMeDomesticCategoryList.categoryList);
      setSelectedAll('국내도서 전체보기');
    } else if (categoryType === 'foreign') {
      setSelectedCategory('foreign');
      setCategoryList(ReadMeForeignCategoryList.categoryList);
      setSelectedAll('외국도서 전체보기');
    }
  };

  const getButtonStyle = (categoryType: string) => ({
    borderBottom:
      selectedCategory === categoryType ? '2px solid green' : '2px solid black',
    color: selectedCategory === categoryType ? 'green' : 'black',
    marginBottom: '-25px',
    zIndex: 2, // 카테고리 탭과 버튼의 border 가 겹친 부분에서 border를 위로 띄우기 위함
  });

  const getLinkLayoutClass = () => {
    return 'bg-white pc:grid pc:grid-cols-4 pc:gap-4 tablet:grid tablet:grid-cols-4 tablet:gap-4 mobile:grid mobile:grid-cols-2 mobile:gap-4';
  };

  console.log(selectedCategory);

  return (
    <div
      className="bg-white z-50 pc:w-[600px] tablet:w-[600px] mx-16 tablet:mx-90 pc:mx-110 border
        border-t-0 rounded-md relative">
      <div className="flex flex-wrap space-x-96 border-b">
        <div className="flex mx-30 tablet:h-60 pc:h-60 items-center relative">
          <CategoryButton
            label="국내도서"
            onClick={() => {
              handleCategoryClick('domestic');
              setCategoryList(ReadMeDomesticCategoryList.categoryList);
            }}
            style={getButtonStyle('domestic')}
          />
          <CategoryButton
            label="외국도서"
            onClick={() => {
              handleCategoryClick('foreign');
              setCategoryList(ReadMeForeignCategoryList.categoryList);
            }}
            style={getButtonStyle('foreign')}
          />
          <SelectedAllButton
            selectedCategory={selectedCategory}
            selectedAll={selectedAll}
          />
        </div>
      </div>
      <div
        className={`flex flex-wrap mx-30 tablet:h-320 pc:h-320 ${getLinkLayoutClass()}`}>
        {categoryList.map(({ title, link }) => (
          <Category key={link} title={title} link={link} />
        ))}
      </div>
    </div>
  );
}

export default CategoryTab;

function Category({ title, link }: CategoryProps) {
  console.log(link);
  return (
    <Link key={link} href={link}>
      {title}
    </Link>
  );
}
