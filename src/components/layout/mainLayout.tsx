import Header from '@/components/header/index';
import { ReactNode, useEffect, useState } from 'react';
import ScrollToTopButton from '@/components/button/scrollToTopButton';
import useInfinite from '@/hooks/useInfinite';
import { useAtom } from 'jotai';
import { memberIdAtom, pointVisibleAtom } from '@/store/state';
import { useGetMember } from '@/api/member';
import { getSession } from 'next-auth/react';

interface MainLayoutProps {
  children: ReactNode;
}

function MainLayout({ children }: MainLayoutProps) {
  const [ref, isIntersecting] = useInfinite();
  const [, setPointVisible] = useAtom(pointVisibleAtom);
  const memberId = useAtom(memberIdAtom); 
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (memberId) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  },[])

  useEffect(() => {
    setPointVisible(isIntersecting);
  }, [isIntersecting]);
  
  return (
    <>
      <Header isLoggedIn={isLoggedIn} numItemsOfCart={1} />
      <div className="relative grid auto-rows-auto place-items-center">
        <div className="h-20 w-300" ref={ref} />
        {children}
        <ScrollToTopButton />
      </div>
    </>
  );
}

export default MainLayout;
