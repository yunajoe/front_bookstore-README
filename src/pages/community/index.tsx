import CommunityLayout from '@/components/layout/communityLayout';
import { communityCards } from '@/pages/api/mock';

// export async function getServerSideProps() {
//   const response = getCommunity();
//   const communityData = response.data;

//   return (
//     props: {
//       communityData;
//     }
//   )
// };
//  위에처럼 데이터 받아서 props로 내려줄 예정. 지금은 mock data 사용중임

function Community() {
  return <CommunityLayout communityData={communityCards} isSelected='피드' />;
}

export default Community;
