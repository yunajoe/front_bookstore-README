import { instance } from 'src/libs/instance';

type SocialType = "KAKAO" | "NAVER" | "GOOGLE";

// 소셜 auth api
export const getSocialAuth = async (socialType: SocialType) => {
  const result = await instance.get(`social/auth/${socialType}`);
  return result.data;
};

export const getSocialLogin = async (socialType: SocialType, code: string) => {
  const result = await instance.get(`social/login/${socialType}?code=${code}`);
  return result.data;
};
