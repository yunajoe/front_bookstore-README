import { ReactNode, useEffect } from 'react';
import ScrollToTopButton from '../button/scrollToTopButton';
import { useAtom } from 'jotai';
import { pointVisibleAtom } from '@/store/state';
import useInfinite from '@/hooks/useInfinite';
import Header from '../header';

interface MyOrderPageLayoutProps {
  main: ReactNode;
}

function OrderPageLayout({ main }: MyOrderPageLayoutProps) {
  const [ref, isIntersecting] = useInfinite();
  const [, setPointVisible] = useAtom(pointVisibleAtom);

  useEffect(() => {
    setPointVisible(isIntersecting);
  }, [isIntersecting]);

  return (
    <>
      <div role="container">
        <Header isLoggedIn={false} />

        <div role="content" style={{ overflowY: 'auto' }}>
          {' '}
          {/* 여기에 스타일을 추가합니다 */}
          <div className="h-1" ref={ref} />
          {main}
          <ScrollToTopButton />
        </div>
      </div>
    </>
  );
}

export default OrderPageLayout;
