import Image from 'next/image';
import Link from 'next/link';

import kakaoIcon from 'public/icons/KakaoIcon.svg';
import naverIcon from 'public/icons/NaverIcon.svg';
import googleIcon from 'public/icons/GoogleIcon.svg';

function SocialCircle({ id = 'KAKAO', width = 36, height = 36 }) {
  const authLink =
    id === 'KAKAO'
      ? process.env.NEXT_PUBLIC_KAKAO_AUTH_LINK!
      : id === 'NAVER'
        ? process.env.NEXT_PUBLIC_NAVER_AUTH_LINK!
        : id === 'GOOGLE'
          ? process.env.NEXT_PUBLIC_GOOGLE_AUTH_LINK!
          : '/';

  return (
    <Link
      href={authLink}
      id={id}
      className="flex-center h-48 w-48 rounded-full border-2 border-solid border-gray-1">
      <Image
        id={id}
        src={
          id === 'GOOGLE' ? googleIcon : id === 'NAVER' ? naverIcon : kakaoIcon
        }
        width={width}
        height={height}
        className="flex-center relative"
        alt={id}
      />
    </Link>
  );
}

export default SocialCircle;
