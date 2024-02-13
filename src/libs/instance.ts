import axios from "axios";

export const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  }
})  

instance.defaults.headers.common["Authorization"] = `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJBQ0NFU1NfVE9LRU4iLCJpYXQiOjE3MDc3ODU3OTgsImV4cCI6MTcwNzc4NzU5OCwiZW1haWwiOiJ5dW5ham9lQGdtYWlsLmNvbSJ9.Qwk-XoGdFAJilBP0TEaRkUfUzPl4IpSTnMyhvrJbxtx8eMWCLq-XpKLbqXUpgglHDS_HVBn9lswlfaYp3yRL1Q`