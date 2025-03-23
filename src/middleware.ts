import { NextResponse } from 'next/server';
import { auth } from '@/auth';

export const config = {
  // matcher: [
  //   '/((?!_next|sign-in|sign-up|api|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
  // ],
  matcher: ['/dashboard/:path', '/editor/:path', '/login', '/register'],
};

export default auth(async (request) => {
  const { auth, nextUrl } = request;
  // console.log('★★★ middleware ★★★');
  // console.log({ auth, nextUrl });

  const isAuth = !!auth;
  const isAuthPage = nextUrl.pathname.startsWith('/login') || nextUrl.pathname.startsWith('/register');

  if (isAuth && isAuthPage) {
    return NextResponse.redirect(new URL('/dashboard', nextUrl));
  }

  if (!isAuth && !isAuthPage) {
    return NextResponse.redirect(new URL('/login', nextUrl));
  }

  return NextResponse.next();
});
