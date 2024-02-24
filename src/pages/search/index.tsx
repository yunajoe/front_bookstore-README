import { useRouter } from 'next/router';
import SidebarLayout from '@/components/layout/sidebarLayout';
import Spacing from '@/components/container/spacing/spacing';
import EventSection from '@/components/container/eventSection/eventSection';
import SearchBookList from '@/components/container/search/searchBookList';
function Search() {
  const router = useRouter();
  const { term } = router.query;

  return (
    <SidebarLayout>
      <Spacing height={[0, 0, 20]} />
      <EventSection eventSize={'category'} />
      <Spacing height={[120, 80, 80]} />
      <SearchBookList term={term?.toString()} />
    </SidebarLayout>
  );
}

export default Search;
