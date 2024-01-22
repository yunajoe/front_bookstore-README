import RegisterButton from '@/components/button/RegisterButton';
import SocialCircle from '@/components/socialCircle/SocialCircle';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

function SignIn() {
  const [isClick, setIsClick] = useState(false);
  return (
    <div className="w-full min-h-dvh flex justify-center items-center bg-[#FFF]">
      <div className="max-w-[300px] flex-1 flex flex-col items-center gap-y-10 ">
        <div className="flex h-[64px] justify-center items-center">
          <p className="text-[#66C57B] font-[700] text-2xl ">Read Me</p>
        </div>
        <div className="w-full flex flex-col">
          <input placeholder="이메일" />
          <input placeholder="비밀번호" />
        </div>
        <div className="w-full flex">
          <input
            id="loginSaved"
            type="checkbox"
            className="invisible w-[1px] h-[1px] m-[-1px]"
          />
          <label
            htmlFor="loginSaved "
            className="flex justify-center items-center">
            <div
              onClick={() => setIsClick(!isClick)}
              className={`flex justify-center items-center ${isClick ? 'bg-slate-300' : ''} rounded-full w-5 h-5 border-solid border-2  border-[#DBDBDB] cursor-pointer`}>
              {isClick && (
                <Image
                  alt=""
                  src="/images/ico_checkbox_active@2x.png"
                  width={10}
                  height={7}
                />
              )}
            </div>
          </label>
          <p className="mx-2 font-[15px] text-[#363636]">로그인 상태 유지</p>
        </div>
        <RegisterButton>로그인</RegisterButton>
        <div className="flex gap-x-1">
          <p className="text-[#767676]">아이디가 없으신가요?</p>
          <Link href="/signup" className="text-[#66C57B] font-[500]">
            회원가입
          </Link>
        </div>
        <div className="flex flex-col gap-y-[20px] text-[#767676] ">
          <p className="text-center text-xs">SNS로 로그인/회원가입</p>
          <div className="w-[184px] flex justify-between">
            <SocialCircle />
            <SocialCircle />
            <SocialCircle />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
