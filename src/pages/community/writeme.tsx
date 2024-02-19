import CommunityLayout from '@/components/layout/communityLayout';
import { useSession } from 'next-auth/react';

function WriteMe() {
  const { data: session } = useSession();
  
  return (
    <CommunityLayout
      isSelected="내 글 보기"
      kebab={true}
      memberId={session?.memberId}
    />
  );
}

export default WriteMe;
