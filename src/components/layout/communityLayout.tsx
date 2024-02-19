import MainLayout from '@/components/layout/mainLayout';
import PageTab from '@/components/header/pageTab';
import CommunityCardList from '../card/communityCard/communityCardList';
import useInfinite from '@/hooks/useInfinite';
import useCustomInfiniteQuery from '@/hooks/useCustomInfiniteQuery';
import { getCommunity} from '@/api/community';

interface CommunityLayoutProps {
  isSelected: string;
  kebab?: boolean;
  memberId?: number;
}

function CommunityLayout({
  isSelected,
  kebab,
  memberId,
}: CommunityLayoutProps) {
    const [ref, isIntersecting] = useInfinite();
    const { data } = useCustomInfiniteQuery({
      endpoint: `${isSelected === '내 글 보기' ? `${memberId}` : null}`,
      queryKey: ['community', `${memberId}`],
      queryFunc: getCommunity,
      initialCursorId: 0,
      cursorName: 'cursorId',
      getNextPageParamsFunc: (lastPage) => lastPage.cursorId === -1 ? undefined : lastPage.cursorId ,
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
        <CommunityCardList communityData={data?.pages[0].cards} kebab={kebab} />
        <div className="border-1 h-100 w-300 border border-red" ref={ref} />
      </div>
    </MainLayout>
  );
}

export default CommunityLayout;
