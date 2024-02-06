import React from 'react';
import NavigationTab from '@/components/header/navigationTab';
import MyPageTab from '@/components/header/mypageTab';
import { useRouter } from 'next/router';

interface HeaderLayoutProps {
  isLoggedIn: boolean;
  children: React.ReactNode;
}

function HeaderLayout({ isLoggedIn, children }: HeaderLayoutProps) {
  const router = useRouter();
  const isMypage = router.pathname.startsWith('/mypage');

  return (
    <div className="sticky top-0 z-50 h-90 w-full min-w-fit flex-row bg-white tablet:h-170 pc:h-170">
      {children}
      {isMypage ? <MyPageTab /> : <NavigationTab isLoggedIn={isLoggedIn} />}
    </div>
  );
}

export default HeaderLayout;
