import { Signup, Login, ChangePassword, ChangeImage } from '@/types/api/member';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { QUERY_KEY } from 'src/constants/queryKey';
import { instance } from 'src/libs/instance';

//회원가입
export const postSignup = async (data: Signup) => {
  const result = await instance.post('/member', data);
  return result.data;
};

//로그인
export const postLogin = async (data: Login) => {
  const result = await instance.post('/member/sign-in', data);
  return result.data.data;
};

//회원조회
const getMember = async (id: number) => {
  const result = await instance.get(`/member/${id}`);
  return result.data.data;
};

export const useGetMember = (id: number) => {
  const { data, ...props } = useQuery({
    queryKey: ['member', `${id}`],
    queryFn: () => getMember(id),
    enabled: true,
  })
  return {data, ...props};
};


//비밀번호 수정
const putPassword = async (data: ChangePassword) => {
  const result = await instance.put('/member/password', data);
  return result.data;
};

export const usePutPassword = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (data:ChangePassword) => putPassword(data),
    onSuccess: () => {
      queryClient.invalidateQueries();
    } 
  })
  return mutation;
}

//프로필이미지 수정
const putProfileImage = async (data: ChangeImage) => {
  const result = await instance.put('/member/profile', data);
  return result.data;
};

export const usePutProfileImage = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (data: ChangeImage) => putProfileImage(data),
    onSuccess: () => {
      queryClient.invalidateQueries();
    },
  });
  return mutation;
};