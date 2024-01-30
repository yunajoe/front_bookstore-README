import NavigationTab from '@/components/header/navigationTab';
import { ReactElement } from 'react';

function HeaderLayout({ children }: { children: ReactElement }) {
  return (
    <div
      className="min-w-fit max-w-full sticky top-0 flex-row h-90 tablet:h-170 pc:h-170 bg-white
        z-50">
      {children} <NavigationTab />
    </div>
  );
}

export default HeaderLayout;
