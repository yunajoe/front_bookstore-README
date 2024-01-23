import RegisterButton from '@/components/button/RegisterButton';
import { PasswordInput, TextInput } from '@/components/signInput/SignInput';
import SocialCircle from '@/components/socialCircle/SocialCircle';
import TermsCheckbox from '@/components/terms/terms';
import { SignValueType } from '@/types/signType';
import Link from 'next/link';
import { FormProvider, useForm } from 'react-hook-form';

function SignUp() {
  const method = useForm<SignValueType>({
    mode: 'onBlur',
    defaultValues: {
      email: '',
      password: '',
      repassword: '',
      nickname: '',
    },
  });
  const {
    register,
    handleSubmit,
    setError,
    getValues,
    formState: { errors },
  } = method;

  const passwordValue = getValues('password');
  const rePasswordValue = getValues('repassword');

  console.log('pasdsfdsf', passwordValue, rePasswordValue);
  const onSubmit = () => {
    setError('email', {
      type: 'manual',
      message: '이메일 형식에 맞지 않습니다',
    });
    setError('password', {
      type: 'manual',
      message: '비밀번호는 영문, 숫자를 포함해 8자 이상으로 지어주세요.',
    });

    if (passwordValue !== rePasswordValue) {
      setError('repassword', {
        type: 'manual',
        message: '비밀번호가 다릅니다',
      });
    }

    setError('nickname', {
      type: 'manual',
      message: '닉네임은 3자 이상, 8자 이하로 지어주세요.',
    });
  };

  return (
    <FormProvider {...method}>
      <div className="w-full min-h-dvh bg-white flex-center">
        <div className="max-w-[390px] flex-1 flex flex-col items-center gap-y-10 px-[15px] ">
          <div className="h-[64px] flex-center">
            <p className="text-green font-bold text-2xl ">Read Me</p>
          </div>
          <p className="text-[#363636] font-bold text-xl">회원가입</p>
          <div className="w-full flex flex-col items-center  gap-y-[20px] text-[#767676] rounded-[10px] border-solid border-2 border-[#DBDBDB] py-5">
            <p className="text-center text-xs">
              SNS로 간편하게 로그인/회원가입
            </p>
            <div className="w-[184px] flex justify-between">
              <SocialCircle />
              <SocialCircle />
              <SocialCircle />
            </div>
          </div>
          {/* TODO: input ID, 비밀번호, 비밀번호 확인, 닉네임 */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full flex flex-col items-center gap-y-10">
            <label className="text-[#363636] text-16 font-bold text-left w-full">
              이메일
            </label>
            <TextInput
              id="email"
              placeholder="이메일"
              register={register}
              isRequired={true}
              pattern={/[a-z0-9]+@[a-z]+.[a-z]{2,3}/i}
            />
            {errors.email?.message && (
              <p className="text-14 text-red w-full text-left">
                {errors.email.message}
              </p>
            )}
            {/* 비밀번호 */}
            <label className="text-[#363636] text-16 font-bold text-left w-full">
              비밀번호
            </label>
            <p className="text-[#0e0d0d] text-15 text-left w-full">
              영문, 숫자를 포함한 8자 이상의 비밀번호
            </p>
            <PasswordInput
              id="password"
              placeholder="비밀번호"
              register={register}
              isRequired={true}
              pattern={/^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/i}
              isError={errors.password}
            />
            {errors.password?.message && (
              <p className="text-14 text-red w-full text-left">
                {errors.password.message}
              </p>
            )}
            {/* 비밀번호확인 */}
            <label className="text-[#363636] text-16 font-bold text-left w-full">
              비밀번호확인
            </label>
            <PasswordInput
              id="repassword"
              placeholder="비밀번호확인"
              register={register}
              isRequired={true}
              isError={errors.repassword}
            />
            {errors.repassword?.message && (
              <p className="text-14 text-red w-full text-left">
                {errors.repassword.message}
              </p>
            )}
            {/* 닉네임 */}
            <label className="text-[#363636] text-16 font-bold text-left w-full">
              닉네임
            </label>
            <p className="text-[#767676] text-15 text-left w-full">
              다른 유저와 중복되지 않는 닉네임
            </p>
            <TextInput
              id="nickname"
              placeholder="닉네임"
              register={register}
              isRequired={true}
              pattern={/^[가-힣ㄱ-ㅎㅏ-ㅣa-zA-Z0-9]{3,8}$/i}
              isError={errors.nickname}
            />
            {errors.nickname?.message && (
              <p className="text-14 text-red w-full text-left">
                {errors.nickname.message}
              </p>
            )}
            <TermsCheckbox />
            <RegisterButton>회원가입</RegisterButton>
          </form>
          <div className="flex gap-x-1">
            <p className="text-[#767676]">이미 아이디가 있으신가요?</p>
            <Link href="/signin" className="text-green font-normal">
              로그인
            </Link>
          </div>
        </div>
      </div>
    </FormProvider>
  );
}

export default SignUp;
