import { postLogin } from '@/api/member';
import NextAuth from 'next-auth/next';
import CredentialsProvider from 'next-auth/providers/credentials';


export default NextAuth({
  providers: [
    CredentialsProvider({
      id: 'signin-credentials',
      name: 'credentials',
      type:'credentials',
      credentials: {
        email: { type: 'text' },
        password: { type: 'password' },
      },
      async authorize(credentials): Promise<any> {
        const data = {
          email: credentials?.email,
          password: credentials?.password,
        };

        const response = await postLogin(data);
        console.log(response)

        if (!response) throw new Error('Wrong User');

        if (response.status === 200 && response.data.Authentication) {
          return { token: response.Authentication.split(' ')[1]};
        } else {
          // 로그인 실패 시 처리
          throw new Error('Login failed!');
        }
      },
    }),
  ],
  // callbacks: {
  //   async jwt({ token, user }) {
  //     return { ...token, ...user };
  //   },
  //   async session({ session, token }) {
  //     session.user = token as any;
  //     return session;
  //   },
  // },
  pages: {
    signIn: '/signin',
  },
});
