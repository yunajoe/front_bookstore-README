/* 로그인 폼 컴포넌트 

params: void
returns: component
*/

import { useForm } from 'react-hook-form';

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
        className="flex flex-col gap-[40px] justify-center items-start  w-[300px]">
        <div className="flex flex-col gap-[13px]">
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
            <p className="text-rose-500 absolute bottom-8 text-sm	whitespace-nowrap">
              {errors.password?.message}
            </p>
          )}
          <input
            id="signinMaintainCheckbox"
            type="checkbox"
            className="p-1 relative float-left mr-1 mt-0.5 w-[20px] h-[20px] rounded-full
             border-2 border-solid border-neutral-300 checked:bg-lime-500 
             appearance-none"
          />
          <label className="text-black" htmlFor="signinMaintainCheckbox">
            로그인 상태 유지
          </label>
        </div>
        <button className="text-white w-[300px] bg-lime-500 py-3 border">
          로그인
        </button>
      </form>
    </div>
  );
}

export default SigninForm;
