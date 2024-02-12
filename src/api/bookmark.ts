import { instance } from 'src/libs/instance';

//찜 조회
export const getCart = async (id: number) => {
  const result = await instance.get(`review/${id}`);
  return result.data;
};


// 해당 userID로 찜 list조회

export const getBookMarkList = async () => {
  // http://15.165.141.22:8080/bookmark?memberId=3&offset=1&limit=10&sort=price

}
