import { myCommunityCard } from '@/pages/api/mock';
import CommunityLayout from '@/components/layout/communityLayout';

// export async function getServerSideProps() {
//   const response = getMyCommunity();
//   const communityData = response.data;

//   return (
//     props: {
//       communityData;
//     }
//   )
// };
//  위에처럼 데이터 받아서 props로 내려줄 예정. 지금은 mock data 사용중임

function WriteMe() {
  return <CommunityLayout communityData={myCommunityCard} isSelected='내 글 보기' kebab={true} />;
}

export default WriteMe;
