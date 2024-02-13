import axios from "axios";

export const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  }
})  

instance.defaults.headers.common["Authorization"] = "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJBQ0NFU1NfVE9LRU4iLCJpYXQiOjE3MDc3OTEzMDcsImV4cCI6MTcwNzc5MzEwNywiZW1haWwiOiJ5dW5ham9lQGdtYWlsLmNvbSJ9.RPGNu4CxyOFEViCgVcTi-kYeIdjTpdKgkslMMo3FfAv7g3aNdiH-LerNmQe7p7qZpWMmYWaCToxmiDcNAZpLVg" 