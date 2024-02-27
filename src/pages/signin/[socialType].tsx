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

  const { data, isSuccess, isError, error } = useQuery({
    queryKey: [''],
    queryFn: () => getSocialLogin(myType, code as string),
    enabled: !!code,
    retry: 10,
  });

  const handleSocialLogin = async () => {
    if (data) {
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
    if (isError) {
      console.log('error found!!: ', error);
    }
    if (isSuccess) {
      console.log('success found!!: ', isSuccess);
    }
  };
  useEffect(() => {
    handleSocialLogin();
  }, []);

  return;
}

export default SocialPage;
