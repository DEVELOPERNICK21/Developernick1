import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const V2_SUBDOMAINS = ['v2', 'new', 'beta']

function isV2Host(host: string) {
  const hostname = host.split(':')[0].toLowerCase()
  const subdomain = hostname.split('.')[0]
  return V2_SUBDOMAINS.includes(subdomain)
}

export function middleware(request: NextRequest) {
  const host = request.headers.get('host') || ''
  const { pathname } = request.nextUrl

  if (isV2Host(host)) {
    if (pathname === '/' || pathname === '') {
      return NextResponse.rewrite(new URL('/v2', request.url))
    }
  }

  if (!isV2Host(host) && pathname.startsWith('/v2')) {
    return NextResponse.next()
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)'],
}
