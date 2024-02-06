import axios from 'axios';

export async function getAddress(searchWord: string) {
  const params = {
    confmKey: 'U01TX0FVVEgyMDI0MDIwNjE2MDA1MTExNDQ5NjM=',
    currentPage: 0,
    countPerPage: 10,
    keyword: searchWord,
    resultType: 'json',
  };
  let result;
  try {
    const response = await axios.get(`/address/addrlink/addrLinkApiJsonp.do`, {
      params: params,
    });
    const trimmedDataStr = response.data.substring(1, response.data.length - 1);
    result = JSON.parse(trimmedDataStr).results.juso;
    return result;
  } catch (error) {
    console.error(error);
  }
}

