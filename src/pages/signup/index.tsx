import Link from 'next/link';

function SignUp() {
  return (
    <div className="w-full min-h-dvh flex justify-center items-center bg-[#FFF]">
      <div className="max-w-[390px] flex-1 flex flex-col items-center gap-y-10 px-[15px] ">
        <div className="flex h-[64px] justify-center items-center">
          <p className="text-[#66C57B] font-[700] text-2xl ">Read Me</p>
        </div>
        <p className="text-[#363636] font-[700] text-xl">회원가입</p>
        <div className="w-full flex flex-col items-center  gap-y-[20px] text-[#767676] rounded-[10px] border-solid border-2 border-[#DBDBDB] py-5">
          <p className="text-center text-xs">SNS로 간편하게 로그인/회원가입</p>
          <div className="w-[184px] flex justify-between">
            <div className="w-[48px] h-[48px] rounded-full border-solid border-2 border-[#DBDBDB]"></div>
            <div className="w-[48px] h-[48px] rounded-full border-solid border-2 border-[#DBDBDB]"></div>
            <div className="w-[48px] h-[48px] rounded-full border-solid border-2 border-[#DBDBDB]"></div>
          </div>
        </div>
        {/* TODO: input ID, 비밀번호, 비밀번호 확인, 닉네임 */}
        {/* TODO: 약관동의  */}
        <button className="h-[50px] w-full text-center bg-[#66C57B] rounded-[5px] text-[17px] text-[#FFF]">
          회원가입
        </button>
        <div className="flex gap-x-1">
          <p className="text-[#767676]">이미 아이디가 있으신가요?</p>
          <Link href="/signin" className="text-[#66C57B] font-[500]">
            로그인
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
