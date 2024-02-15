import axios from 'axios';
import { GetServerSidePropsContext } from 'next';

const isServer = () => {
  return typeof window === 'undefined';
};

let accessToken = '';
let context = {};

export const setAccessToken = (_accessToken: string) => {
  accessToken = _accessToken;
};

export const getAccessToken = () => accessToken;

export const setContext = (_context: GetServerSidePropsContext) => {
  context = _context;
};

export const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
