import { getToken } from 'next-auth/jwt';
import { getSession } from 'next-auth/react';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const withAuthList = [
  '/mypage/(.*)', // '/mypage'로 시작하는 모든 경로
  '/bookmarked/(.*)', // '/bookmarked'로 시작하는 모든 경로
  '/cart/(.*)', // '/cart'로 시작하는 모든 경로
  '/community/writeme', // 정확히 '/community/writeme'와 매칭
];
const withOutAuthList = ['/signin', '/signup'];

const withAuth = async (req: NextRequest, token: boolean) => {
  const url = req.nextUrl.clone();
  const { pathname } = req.nextUrl;

  if (!token) {
    url.pathname = '/signin';
    url.search = `callbackUrl=${pathname}`;

    return NextResponse.redirect(url);
  }
};

const withOutAuth = async (req: NextRequest, token: boolean, to: string | null) => {
  const url = req.nextUrl.clone();
  if (token) {
    url.pathname = to ?? '/';
    url.search = '';

    return NextResponse.redirect(url);
  }
};

export default async function middleware(req: NextRequest) {
  const token = await getToken({req});
  const { pathname } = req.nextUrl;
  
  const { searchParams } = req.nextUrl;
  const callbackUrl = searchParams.get('callbackUrl');
  
  const isWithAuth = withAuthList.some((pattern) => {
    // 패턴을 정규식으로 변환합니다. '^'는 문자열 시작을 나타냅니다.
    const regex = new RegExp(`^${pattern}`);
    return regex.test(pathname);
  });

  const isWithOutAuth = withOutAuthList.includes(pathname);
  console.log(token)
  
  if (isWithAuth) return withAuth(req, !!token);
  if (isWithOutAuth) return withOutAuth(req, !!token, callbackUrl);
}

// 미들웨어가 실행될 특정 pathname을 지정하면, 해당 pathname에서만 실행 가능
export const config = {
  matcher : [...withAuthList, ...withOutAuthList],
};