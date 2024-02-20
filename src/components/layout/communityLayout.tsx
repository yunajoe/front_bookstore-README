import MainLayout from '@/components/layout/mainLayout';
import PageTab from '@/components/header/pageTab';
import CommunityCardList from '@/components/card/communityCard/communityCardList';
import useInfinite from '@/hooks/useInfinite';
import useCustomInfiniteQuery from '@/hooks/useCustomInfiniteQuery';
import { getCommunity } from '@/api/community';

interface CommunityLayoutProps {
  isSelected: string;
  kebab?: boolean;
  memberId?: number;
}

function CommunityLayout({
  isSelected,
  kebab,
  memberId = 1,
}: CommunityLayoutProps) {
  const [ref, isIntersecting] = useInfinite();
  const { data, hasNextPage } = useCustomInfiniteQuery({
    endpoint: `${memberId}`,
    queryKey: ['community', `${memberId}`],
    queryFunc: getCommunity,
    initialCursorId: 0,
    limit: 12,
    cursorName: 'cursorId',
    getNextPageParamsFunc: (lastPage) =>
      lastPage.cursorId === -1 ? undefined : lastPage.cursorId,
    refetchTrigger: isIntersecting,
  });

  return (
    <MainLayout>
      <div className="mb-198 flex flex-col">
        <PageTab
          origin="피드"
          originHref="/community"
          add="내 글 보기"
          addHref="/community/writeme"
          isSelected={isSelected}
        />
        <CommunityCardList communityData={data?.pages} kebab={kebab} />
      </div>
      <div
        className={`h-5 w-300 ${hasNextPage ? 'block' : 'hidden'}`}
        ref={ref}></div>
    </MainLayout>
  );
}

export default CommunityLayout;
