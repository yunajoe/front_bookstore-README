/* 로그인 폼 컴포넌트 

params: void
returns: component
*/

import { useForm } from 'react-hook-form';
import Image from 'next/image';

import { PasswordInput, TextInput } from '@/components/signInput/SignInput';

interface SigninFormType {
  email: string;
  password: string;
}

function SigninForm() {
  const {
    register,
    formState: { errors },
    setError,
    handleSubmit,
  } = useForm<SigninFormType>({
    mode: 'onSubmit',
    defaultValues: {
      email: '',
      password: '',
    },
  });

  /* 로그인 제출 버튼 함수

  로그인 성공 시 handleValidSubmit 실행
  로그인 실패 시 handleInvalidSubmit 실행
  */
  const handleValidSubmit = () => {};
  const handleInvalidSubmit = () => {
    setError('password', { message: '아이디나 비밀번호가 일치하지 않습니다.' });
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(handleValidSubmit, handleInvalidSubmit)}
        className="flex flex-col gap-40 justify-center items-start w-300">
        <div className="flex flex-col gap-14 w-full">
          <TextInput
            id="email"
            placeholder="이메일"
            register={register}
            isRequired={true}
            isError={false}
          />
          <PasswordInput
            id="password"
            placeholder="비밀번호"
            register={register}
            isRequired={true}
            isError={!!errors.password}
          />
        </div>
        <div className="relative">
          {errors.password && (
            <p className="text-red absolute bottom-36 text-14	whitespace-nowrap">
              {errors.password?.message}
            </p>
          )}

          <div className="relative">
            <label htmlFor="signinMaintainCheckbox">
              로그인 상태 유지
              <Image
                src="/icons/check-icon.svg"
                alt=""
                width={10}
                height={6}
                className="absolute z-10 top-6 left-5"
              />
            </label>
            <input
              id="signinMaintainCheckbox"
              type="checkbox"
              className="p-1 relative float-left mr-5 mt-0.5 w-20 h-20 rounded-full
            border-2 border-solid border-gray-3 checked:bg-green checked:border-0
            appearance-none"
            />
          </div>
        </div>
        <button className="text-white bg-green py-12">로그인</button>
      </form>
    </div>
  );
}

export default SigninForm;
