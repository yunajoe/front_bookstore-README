// import axios from "axios";

// export const instance = axios.create({
//   baseURL: process.env.NEXT_PUBLIC_API_URL,
//   headers: {
//     'Content-Type': 'application/json',
//   },
// });



import { postLogin } from "@/api/member";
import axios from "axios";

export const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  }
})

instance.interceptors.response.use((config) => {
  return config;
}, () => {
  refetchToken();
});  

const refetchToken = async () => {
  const token = await postLogin({
    email: 'yunajoe@gmail.com',
    password: "12345678abc",
  }); 
  instance.defaults.headers.common["Authorization"] = token.Authentication
}


