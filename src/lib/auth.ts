import { type NextAuthConfig } from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';

export const authConfig: NextAuthConfig = {
  trustHost: true,
  providers: [GithubProvider, GoogleProvider],
  pages: {
    signIn: '/login',
  },
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async session({ token, session }) {
      if (token) {
        session.user.id = token.id as string;
        session.user.name = token.name;
        session.user.email = token.email!;
        session.user.image = token.picture;
      }

      console.log('★★★ session ★★★');
      console.log({ session });

      return session;
    },
  },
};
