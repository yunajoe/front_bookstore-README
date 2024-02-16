import { getToken } from 'next-auth/jwt';
import { getSession } from 'next-auth/react';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const withAuthList = [
  '/mypage/(.*)',
  '/bookmarked/(.*)',
  '/cart/(.*)',
  '/community/writeme',
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

const withOutAuth = async (
  req: NextRequest,
  token: boolean,
  to: string | null,
) => {
  const url = req.nextUrl.clone();
  if (token) {
    url.pathname = to ?? '/';
    url.search = '';

    return NextResponse.redirect(url);
  }
};

export default async function middleware(req: NextRequest) {
  const token = await getToken({ req });
  console.log(token)
  const { pathname } = req.nextUrl;

  const { searchParams } = req.nextUrl;
  const callbackUrl = searchParams.get('callbackUrl');

  const isWithAuth = withAuthList.some((pattern) => {
    const regex = new RegExp(`^${pattern}`);
    return regex.test(pathname);
  });

  const isWithOutAuth = withOutAuthList.includes(pathname);

  if (isWithAuth) return withAuth(req, !!token);
  if (isWithOutAuth) return withOutAuth(req, !!token, callbackUrl);
}

// 미들웨어가 실행될 특정 pathname을 지정하면, 해당 pathname에서만 실행 가능
export const config = {
  matcher: [...withAuthList, ...withOutAuthList],
};
