import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { signIn } from 'next-auth/react';

import { SocialType, getSocialLogin } from '@/api/social';

function SocialPage() {
  const router = useRouter();
  const { socialType, code } = router.query;
  const myType: SocialType =
    socialType === 'kakao'
      ? 'KAKAO'
      : socialType === 'google'
        ? 'GOOGLE'
        : 'NAVER';

  console.log('type: ', myType);
  console.log('code: ', code);
  const { data } = useQuery({
    queryKey: [''],
    queryFn: () => getSocialLogin(myType, code as string),
    enabled: !!code,
    retry: 3,
  });

  const handleSocialLogin = async () => {
    if (!data) {
      router.push('/signin');
      return;
    } else {
      let token = data ? data?.Authentication.substr(7) : '';
      const result = await signIn('social-credentials', {
        email: data?.email,
        socialType: myType,
        memberId: data?.memberId,
        accessToken: token,
        redirect: false,
        callbackUrl: '/',
      });
      console.log(result);
      router.push('/');
    }
  };

  useEffect(() => {
    handleSocialLogin();
  }, []);

  return;
}

export default SocialPage;
