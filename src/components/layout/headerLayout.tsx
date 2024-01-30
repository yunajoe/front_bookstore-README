import NavigationTab from '@/components/header/navigationTab';
import useInfinite from '@/hooks/useInfinite';
import { headerVisibleAtom } from '@/store/state';
import { useAtom } from 'jotai';
import { ReactElement } from 'react';

function HeaderLayout({ children }: { children: ReactElement }) {
  const [ref, isIntersecting] = useInfinite();
  const [, setHeaderVisible] = useAtom(headerVisibleAtom);

  setHeaderVisible(isIntersecting);

  return (
    <div className="min-w-fit max-w-full sticky top-0 flex-row h-90 tablet:h-170 pc:h-170 bg-white">
      {children} <NavigationTab />
    </div>
  );
}

export default HeaderLayout;
