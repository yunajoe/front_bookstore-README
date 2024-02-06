import instance from 'src/libs/instance';

export type PostMemberType = {
  name: string;
  nickname: string;
  email: string;
  password: string;
};

export const postMember = async ({
  name,
  nickname,
  email,
  password,
}: PostMemberType) => {
  await instance.post('/member', {
    name,
    nickname,
    email,
    password,
  });
};
