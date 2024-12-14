import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getLocale, locales } from './config/i18n';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  
  // Skip locale redirect for public assets
  if (pathname.includes('.')) {
    return NextResponse.next();
  }
  
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);
    return NextResponse.redirect(
      new URL(`/${locale}${pathname === '/' ? '' : pathname}`, request.url)
    );
  }
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
