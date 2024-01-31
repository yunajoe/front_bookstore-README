import MobileSidebarTabButton from '../button/sidebar/mobileSidebarTabButton';
import SidebarCategoryButton from '../button/sidebar/sidebarCategoryButton';

interface CategoryLayoutProps {
  isDomestic: boolean;
  location?: string;
}

function Sidebar({ isDomestic = true, location }: CategoryLayoutProps) {
  return (
    <aside className="mobile:flex mobile:justify-between">
      <SidebarCategoryButton isDomestic={isDomestic} />
      <MobileSidebarTabButton isDomestic={isDomestic} location={location} />
    </aside>
  );
}

export default Sidebar;
