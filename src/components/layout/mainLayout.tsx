import Header from '@/components/header/index';
import { ReactNode } from 'react';
import ScrollToTopButton from '@/components/button/scrollToTopButton';

interface MainLayoutProps {
  children: ReactNode;
}

function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <Header isLoggedIn={true} numItemsOfCart={1} />
      <div className="relative grid auto-rows-auto place-items-center tablet:max-w-[768px]">
        {children}
        <ScrollToTopButton />
      </div>
    </>
  );
}

export default MainLayout;
