import Navigation from '@/components/header/navigation';
import useInfinite from '@/hooks/useInfinite';
import { headerVisibleAtom } from '@/store/state';
import { useAtom } from 'jotai';
import { ReactElement } from 'react';

function HeaderLayout({ children }: { children: ReactElement }) {
  const [ref, isIntersecting] = useInfinite();
  const [, setHeaderVisible] = useAtom(headerVisibleAtom);

  setHeaderVisible(isIntersecting);

  return (
    <div className="flex-row h-90 tablet:h-170 pc:h-170" ref={ref}>
      {children} <Navigation />
    </div>
  );
}

export default HeaderLayout;
