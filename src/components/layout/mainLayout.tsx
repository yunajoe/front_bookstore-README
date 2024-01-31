import Header from '@/components/header/index';
import { ReactNode } from 'react';
import ScrollToTopButton from '@/components/button/scrollToTopButton';
import useInfinite from '@/hooks/useInfinite';
import { useAtom } from 'jotai';
import { pointVisibleAtom } from '@/store/state';

interface MainLayoutProps {
  children: ReactNode;
}

function MainLayout({ children }: MainLayoutProps) {
  const [ref, isIntersecting] = useInfinite();
  const [, setPointVisible] = useAtom(pointVisibleAtom);

  setPointVisible(isIntersecting);
  // TODO 한 번 얘기해볼 필요가 있어보임...!! grid와 h20으로 인해 예기치못한 padding이 생김
  return (
    <>
      <Header isLoggedIn={true} numItemsOfCart={1} />
      <div className="relative grid auto-rows-auto place-items-center">
        <div className="w-300 h-20" ref={ref} />
        {children}
        <ScrollToTopButton />
      </div>
    </>
  );
}

export default MainLayout;
