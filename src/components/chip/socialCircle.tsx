import { signIn } from 'next-auth/react';
import Image from 'next/image';
import kakaoIcon from 'public/icons/KakaoIcon.svg';
import naverIcon from 'public/icons/NaverIcon.svg';
import googleIcon from 'public/icons/GoogleIcon.svg';

const socialLogin = (e: any, provider: string) => {
  e.preventDefault();
  signIn(provider);
};

function SocialCircle({ id = 'google', width = 36, height = 36 }) {
  return (
    <button
      id={id}
      onClick={(e) => socialLogin(e, id)}
      className="flex-center h-48 w-48 rounded-full border-2 border-solid border-gray-1">
      <Image
        src={
          id === 'google' ? googleIcon : id === 'naver' ? naverIcon : kakaoIcon
        }
        width={width}
        height={height}
        className="flex-center relative"
        alt={id}
      />
    </button>
  );
}

export default SocialCircle;
