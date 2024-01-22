/*회원가입 폼 컴포넌트 

params: void
returns: component
*/

import { useForm } from 'react-hook-form';

import { PasswordInput, TextInput } from '@/components/signInput/SignInput';
import { emailReg, passwordReg, nicknameReg } from '@/utils/checkReg';

interface SignupFormType {
  email: string;
  password: string;
  passwordRepeat: string;
  nickname: string;
}

function SignupForm() {
  const {
    register,
    formState: { errors },
    getValues,
    setError,
    handleSubmit,
  } = useForm<SignupFormType>({
    mode: 'onBlur',
    defaultValues: {
      email: '',
      password: '',
      passwordRepeat: '',
      nickname: '',
    },
  });

  const emailPattern = {
    value: emailReg,
    message: '이메일 형식에 맞지 않습니다.',
  };
  const passwordPattern = {
    value: passwordReg,
    message: '비밀번호는 영문, 숫자를 포함해 8자 이상으로 지어주세요.',
  };
  const passwordRepeatValidate = {
    check: () => {
      if (getValues('password') !== getValues('passwordRepeat')) {
        return '비밀번호가 일치하지 않습니다.';
      }
    },
  };
  const nicknamePattern = {
    value: nicknameReg,
    message: '닉네임은 3자 이상, 8자 이하로 지어주세요.',
  };

  /* 로그인 제출 버튼 함수

  로그인 성공 시 handleValidSubmit 실행
  로그인 실패 시 handleInvalidSubmit 실행
  */
  const handleValidSubmit = () => {};
  const handleInvalidSubmit = () => {
    setError('email', { message: '중복되는 이메일입니다.' });
    setError('nickname', { message: '중복되는 닉네임입니다.' });
  };

  return (
    <form
      onSubmit={handleSubmit(handleValidSubmit, handleInvalidSubmit)}
      className="flex flex-col gap-[40px] justify-center items-start w-[300px]">
      <div className="relative flex flex-col gap-[12px] w-full">
        <label htmlFor="email" className="text-black font-bold	">
          이메일
        </label>
        <TextInput
          id="email"
          placeholder="이메일"
          register={register}
          isRequired={true}
          isError={!!errors.email}
          pattern={emailPattern}
        />
        {errors.email && (
          <p className="text-rose-500 absolute text-sm -bottom-6 whitespace-nowrap">
            {errors.email.message}
          </p>
        )}
      </div>
      <div className="relative flex flex-col gap-[5px] w-full">
        <label htmlFor="password" className="text-black font-bold	">
          비밀번호
        </label>
        <p className="text-gray-500 text-sm	">
          영문, 숫자를 포함한 8자 이상의 비밀번호
        </p>
        <PasswordInput
          id="password"
          placeholder="비밀번호"
          register={register}
          isRequired={true}
          isError={!!errors.password}
          pattern={passwordPattern}
        />
        {errors.password && (
          <p className="text-rose-500 absolute -bottom-6 text-sm	whitespace-nowrap">
            {errors.password.message}
          </p>
        )}
      </div>
      <div className="relative flex flex-col gap-[12px] w-full">
        <label htmlFor="passwordRepeat" className="text-black font-bold	">
          비밀번호 확인
        </label>
        <PasswordInput
          id="passwordRepeat"
          placeholder="비밀번호 확인"
          register={register}
          isRequired={true}
          isError={!!errors.passwordRepeat}
          validate={passwordRepeatValidate}
        />
        {errors.passwordRepeat && (
          <p className="text-rose-500 absolute -bottom-6 text-sm	whitespace-nowrap">
            {errors.passwordRepeat.message}
          </p>
        )}
      </div>
      <div className="relative flex flex-col gap-[5px] w-full">
        <label htmlFor="nickname" className="text-black font-bold	">
          닉네임
        </label>
        <p className="text-gray-500 text-sm	">
          다른 유저와 중복되지 않는 닉네임
        </p>
        <TextInput
          id="nickname"
          placeholder="닉네임"
          register={register}
          isRequired={true}
          isError={!!errors.nickname}
          pattern={nicknamePattern}
        />
        {errors.nickname && (
          <p className="text-rose-500 absolute -bottom-6 text-sm	whitespace-nowrap">
            {errors.nickname.message}
          </p>
        )}
      </div>
      <button className="text-white w-[300px] bg-lime-500 py-3 border">
        회원가입
      </button>
    </form>
  );
}

export default SignupForm;
