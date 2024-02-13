import { instance } from 'src/libs/instance';

//찜 조회
export const getCart = async (id: number) => {
  const result = await instance.get(`review/${id}`);
  return result.data;
};


// 해당 userID로 찜 list조회
export const getBookMarkList = async (offset:number, limit: number) => {
  const result = await instance.get(`/bookmark?offset=${offset}&limit=${limit}&sort=price`)
  return result.data  
}   

// 찜 아이템(개별, 다중 삭제)  
export const deleteBookMarkItem = async (bookmarkId:string) => {
  const result = await instance.delete(`/bookmark?bookmarkIds=${encodeURI(bookmarkId)}`)  
  return result.data
}
