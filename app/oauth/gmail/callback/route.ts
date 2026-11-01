import { NextRequest, NextResponse } from 'next/server';

const LOCAL_DELPHOS_CALLBACK =
  'http://192.168.3.143:5100/api/business-mail-settings/google/callback';
const OAUTH_STATE_PATTERN = /^[A-Za-z0-9_-]{43}$/;

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export function GET(request: NextRequest) {
  const state = request.nextUrl.searchParams.get('state') ?? '';
  const code = request.nextUrl.searchParams.get('code');
  const providerError = request.nextUrl.searchParams.get('error');

  if (!OAUTH_STATE_PATTERN.test(state) || (!code && !providerError)) {
    return new NextResponse(
      'La respuesta de Google no es válida. Vuelva a iniciar la conexión desde Delphos.',
      {
        status: 400,
        headers: {
          'Cache-Control': 'no-store',
          'Content-Type': 'text/plain; charset=utf-8',
          'Referrer-Policy': 'no-referrer',
          'X-Content-Type-Options': 'nosniff',
        },
      },
    );
  }

  const localCallback = new URL(LOCAL_DELPHOS_CALLBACK);
  localCallback.searchParams.set('state', state);
  if (code) localCallback.searchParams.set('code', code);
  if (providerError) localCallback.searchParams.set('error', providerError);

  const response = NextResponse.redirect(localCallback, 302);
  response.headers.set('Cache-Control', 'no-store');
  response.headers.set('Referrer-Policy', 'no-referrer');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  return response;
}
