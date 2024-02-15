import { postLogin } from '@/api/member';
import NextAuth from 'next-auth/next';
import CredentialsProvider from 'next-auth/providers/credentials';

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        const response = await postLogin({credentials?.email, credentials?.password });
        // console.log(response)

        // if (!response) throw new Error('Wrong User');

        if (response.status === 200 && response.data.Authentication) {
          return { token: response.data.Authentication };
        } else {
          // 로그인 실패 시 처리
          throw new Error('Login failed!');
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      console.log(token)
      return { ...token, ...user };
    },

    async session({ session, token }) {
      session.user = token as any;
      return session;
    },
  },
  pages: {
    signIn: '/signin',
  },
});

