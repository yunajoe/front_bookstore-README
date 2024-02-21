import { postLogin, postSignup } from '@/api/member';
import { Login, Signup } from '@/types/api/member';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { AxiosError } from 'axios';

function useSignUpMutation() {
  const router = useRouter();
  const loginMutation = useMutation({
    mutationFn: (data: Login) => postLogin(data),
    // onSuccess: () => router.push('/'),
  });

  const createMemberMutation = useMutation({
    mutationFn: async (personData: Signup) => {
      await postSignup(personData);
      return personData;
    },
    onSuccess(data) {
      loginMutation.mutate({
        email: data.email,
        password: data.password,
      });
    },
    onError(error) {
      if (error instanceof AxiosError) {
        const message = error?.response?.data?.message;
        alert(message);
      }
    },
  });
  return {
    createMemberMutation,
  };
}

export default useSignUpMutation;
