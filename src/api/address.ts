import axios from 'axios';

export async function getAddress(searchWord: string) {
  const params = {
    confmKey: 'U01TX0FVVEgyMDI0MDIwNjE2MDA1MTExNDQ5NjM=',
    currentPage: 0,
    countPerPage: 10,
    keyword: searchWord,
    resultType: 'json',
  };

  try {
    const response = await axios.get(`/address/addrlink/addrLinkApiJsonp.do`, {
      params: params,
    });

    const result = response?.data;  

    //({results:~}) 식으로 데이터가 나와서 정규식으로 괄호안 데이터를 뽑아내려고함
    const regex = /\(([^)]+)\)/;
    const matches = result.match(regex);

    if (matches) {
      const content = matches[1];

      return content;  //{results:~} 형식의 데이터가 반환됨
    }
  } catch (error) {
    console.error(error);
  }
}
