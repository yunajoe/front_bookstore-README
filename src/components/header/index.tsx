import Link from 'next/link';
import CartButton from './cartButton'
import SearchInput from './searchInput';
import MyPageButton from './myPageButton';
import CategoryButton from './categoryButton';
import LoginButton from './loginButton';
import LogOutButton from './logOutButton';
import SignUpButton from './signUpButton';
interface HeaderProps {
  isLoggedIn: boolean;
  numItemsOfCart?: number;
}

function Seperator() {
  return <div className="mobile:hidden inline-block border-r w-1 h-14 border-gray-1" />;
}

// 로그인하지 않은 상태의 헤더
function NonLoggedInHeader() {
  return (
    <div className="flex-row h-90 tablet:h-170 pc:h-170">
      <div className="flex justify-between items-center min-w-fit max-w-full h-50 tablet:h-100 pc:h-100 mx-30 tablet:mx-60 pc:mx-110">
        <div className="mobile:text-18 pc:text-24 text-green text-20 tablet:text-24 font-bold">
          Read Me
        </div>
        <SearchInput />
        <div className="inline-flex items-center tablet:gap-40 pc:gap-40">
          <LoginButton/>
          <Seperator />
          <SignUpButton/>
        </div>
      </div>
      <HeaderTab />
    </div>
  );
}

// 로그인한 상태의 헤더
function LoggedInHeader({ numItemsOfCart }: { numItemsOfCart: number }) {
  return (
    <div className="flex-row h-90 tablet:h-170 pc:h-170">
      <div className="flex justify-between min-w-fit max-w-full items-center h-50 tablet:h-100 pc:h-100 mx-30 tablet:mx-60 pc:mx-110">
        <div className="text-18 pc:text-24 text-green font-bold tablet:text-24">Read Me</div>
        <SearchInput />
        <div className="inline-flex gap-26 items-center">
          <LogOutButton/>
          <Seperator/>
          <CartButton numItemsOfCart={numItemsOfCart} />
          <MyPageButton />
        </div>
      </div>
      <HeaderTab />
    </div>
  );
}
// 카테고리 및 네비게이션 탭
function HeaderTab() {
  return (
    <div className="border-gray-3 border-y">
      <div className="mx-40 tablet:mx-60 pc:mx-110 gap-40 tablet:gap-80 pc:gap-200 flex items-center h-40 tablet:h-70 pc:h-70">
        <CategoryButton />
        <div className="text-14 tablet:text-16 pc:text-16 tablet:text-16 inline-flex items-center justify-evenly gap-18 pc:gap-40 tablet:gap-30">
            <Link href="/bestsellers" > 베스트</Link>
            <Link href="/latest" > 신간</Link>
            <Link href="/custom">맞춤도서</Link>
          <div className="inline-block border-r w-1 h-14 border-gray-1" />
            <Link href="/community"> 커뮤니티</Link>
        </div>
      </div>
    </div>
  );
}
// 헤더 컴포넌트
function Header({ isLoggedIn, numItemsOfCart }: HeaderProps) {
  return isLoggedIn && numItemsOfCart ? (
    <LoggedInHeader numItemsOfCart={numItemsOfCart} />
  ) : (
    <NonLoggedInHeader />
  );
}

export default Header;
