import NextAuth from 'next-auth';
import GitHub from 'next-auth/providers/github';
import CredentialsProvider from "next-auth/providers/credentials"

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [GitHub]
});
