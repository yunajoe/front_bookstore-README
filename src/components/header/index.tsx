import Link from 'next/link';
import CartButton from './cartButton';
import SearchInput from './searchInput';
import MyPageButton from './myPageButton';
import CategoryButton from '@/components/header/categoryButton';
import SignInButton from './signInButton';
import SignOutButton from './signOutButton';
import SignUpButton from './signUpButton';
import { ReactElement } from 'react';
import { HeaderProps } from '@/pages/api/mock';

function Separator() {
  return (
    <div className="mobile:hidden inline-block border-r w-1 h-14 border-gray-1" />
  );
}

// 로그인하지 않은 상태의 헤더
function NonLoggedInHeader() {
  return (
    <div
      className="flex tablet:mx-60 justify-between min-w-fit max-w-full items-center h-50 mx-16
        tablet:h-100 pc:h-100 pc:mx-110">
      <div className="text-18 pc:text-24 text-green font-bold tablet:text-24">
        Read Me
      </div>
      <SearchInput />
      <div className="inline-flex items-center tablet:gap-40 pc:gap-40">
        <SignInButton />
        <Separator />
        <SignUpButton />
      </div>
    </div>
  );
}

// 로그인한 상태의 헤더
function LoggedInHeader({ numItemsOfCart }: { numItemsOfCart: number }) {
  return (
    <div
      className="flex tablet:mx-60 justify-between min-w-fit max-w-full items-center h-50 mx-16
        tablet:h-100 pc:h-100 pc:mx-110">
      <div className="text-18 pc:text-24 text-green font-bold tablet:text-24">
        Read Me
      </div>
      <SearchInput />

      <div className="inline-flex gap-10 tablet:gap-26 pc:gap-26 items-center">
        <SignOutButton />
        <Separator />
        <CartButton numItemsOfCart={numItemsOfCart} />
        <MyPageButton />
      </div>
    </div>
  );
}

// HeaderTab component
function HeaderTab() {
  return (
    <div className="flex items-center border-gray-3 border-y w-full h-40 tablet:h-70 pc:h-70">
      <div className="mx-16 tablet:mx-60 pc:mx-110">
        <CategoryButton />
      </div>
      <div
        className="text-14 tablet:text-16 pc:text-16 inline-flex gap-18 pc:gap-40 tablet:gap-30
          pc:mx-[3%]">
        <Link href="/bestsellers"> 베스트</Link>
        <Link href="/latest"> 신간</Link>
        <Link href="/custom">맞춤도서</Link>
        <div className="inline-block border-r w-1 h-14 border-gray-1" />
        <Link href="/community"> 커뮤니티</Link>
      </div>
    </div>
  );
}

//헤더 레이아웃
function HeaderLayout({ children }: { children: ReactElement }) {
  return (
    <div className="flex-row h-90 tablet:h-170 pc:h-170">
      {children} <HeaderTab />
    </div>
  );
}

// 헤더 컴포넌트
function Header({ isLoggedIn, numItemsOfCart }: HeaderProps) {
  return isLoggedIn && numItemsOfCart ? (
    <HeaderLayout>
      <LoggedInHeader numItemsOfCart={numItemsOfCart} />
    </HeaderLayout>
  ) : (
    <HeaderLayout>
      <NonLoggedInHeader />
    </HeaderLayout>
  );
}

export default Header;
