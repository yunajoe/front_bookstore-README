import { useRouter } from 'next/router';
import MainLayout from '@/components/layout/mainLayout';

function Search() {
  const router = useRouter();
  const { term } = router.query;

  return (
    <MainLayout>
      <h1>검색 결과: {term}</h1>
      {/* 여기에 검색 결과를 표시하는 코드를 작성하세요 */}
    </MainLayout>
  );
}

export default Search;
