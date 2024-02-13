import axios from "axios";

export const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  }
})

instance.defaults.headers.common["Authorization"] = "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJBQ0NFU1NfVE9LRU4iLCJpYXQiOjE3MDc4MTYwNDQsImV4cCI6MTcwNzgxNzg0NCwiZW1haWwiOiJ5dW5ham9lQGdtYWlsLmNvbSJ9.C1YtIi6I4q6BvpDSA5p1KQRPUL-qY-rbWsGnBFeXoNezrE4Rbj9M0IgAndyVAv714RMxZSIsfvATjwcuJSP6tA"