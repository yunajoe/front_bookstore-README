import CommunityLayout from '@/layouts/communityLayout';
import { communityCards } from '@/pages/api/mock/mock';

function Community() {
  return <CommunityLayout communityData={communityCards} isSelected='피드' />;
}

export default Community;
