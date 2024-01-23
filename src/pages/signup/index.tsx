import RegisterButton from '@/components/button/RegisterButton';
import SocialCircle from '@/components/socialCircle/SocialCircle';
import Link from 'next/link';

function SignUp() {
  return (
    <div className="w-full min-h-dvh bg-white flex-center">
      <div className="max-w-[390px] flex-1 flex flex-col items-center gap-y-10 px-[15px] ">
        <div className="h-[64px] flex-center">
          <p className="text-green font-bold text-2xl ">Read Me</p>
        </div>
        <p className="text-[#363636] font-bold text-xl">회원가입</p>
        <div className="w-full flex flex-col items-center  gap-y-[20px] text-[#767676] rounded-[10px] border-solid border-2 border-[#DBDBDB] py-5">
          <p className="text-center text-xs">SNS로 간편하게 로그인/회원가입</p>
          <div className="w-[184px] flex justify-between">
            <SocialCircle />
            <SocialCircle />
            <SocialCircle />
          </div>
        </div>
        {/* TODO: input ID, 비밀번호, 비밀번호 확인, 닉네임 */}
        {/* TODO: 약관동의  */}
        <RegisterButton>회원가입</RegisterButton>
        <div className="flex gap-x-1">
          <p className="text-[#767676]">이미 아이디가 있으신가요?</p>
          <Link href="/signin" className="text-green font-normal">
            로그인
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
