import Image from 'next/image';
import Link from 'next/link';
import IconProfile from '@/public/icons/ProfileIcon.svg';
import KebabDropDownButton from '../kebab/kebabDropDownButton';
import useShowDropDown from '@/hooks/useShowDropDown';
import { MutableRefObject, useRef } from 'react';

function MyPageButton() {
  const ref = useRef() as MutableRefObject<HTMLImageElement>;
  const [showOptions, setShowOptions] = useShowDropDown(ref, false);

  const handleKebabClick = () => {
    setShowOptions(!showOptions);
  };

  const handleMyPageClick = () => {
    // MyPage 버튼이 클릭되었을 때 페이지로 이동
    console.log('MyPage 버튼 클릭됨');
  };

  const handleLogoutClick = () => {
    // 로그아웃 버튼이 클릭되었을 때 할 동작
    console.log('로그아웃 버튼 클릭됨');
  };

  return (
    <div className="flex items-center">
      <Image
        src={IconProfile}
        alt="케밥버튼"
        onClick={handleKebabClick}
        ref={ref}
      />
      {showOptions && (
        <KebabDropDownButton
          title1={<Link href="/mypage">마이페이지</Link>}
          title2="로그아웃"
          onClickTitle1={handleMyPageClick}
          onClickTitle2={handleLogoutClick}
        />
      )}
    </div>
  );
}

export default MyPageButton;
