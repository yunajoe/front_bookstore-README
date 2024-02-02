import { myCommunityCard } from '@/pages/api/mock/mock';
import CommunityLayout from '@/layouts/communityLayout';

function WriteMe() {
  return <CommunityLayout communityData={myCommunityCard} isSelected='내 글 보기' kebab={true} />;
}

export default WriteMe;
