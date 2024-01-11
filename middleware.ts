import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  const csp = `default-src 'self'; 
               script-src 'self' 'unsafe-eval' 'unsafe-inline'; 
               style-src 'self' 'unsafe-inline'; 
               img-src 'self' data:; 
               connect-src 'self';`;

  response.headers.set('Content-Security-Policy', csp);
  return response;
}
