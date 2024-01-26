import Header from '@/components/header/index';
import { ReactNode } from 'react';

interface MainLayoutProps {
  children: ReactNode;
}

function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <Header />
      <div className="grid auto-rows-auto place-items-center">{children}</div>
    </>
  );
}

export default MainLayout;
