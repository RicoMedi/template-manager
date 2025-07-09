import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const { pathname } = new URL(request.url);
  const auth0 = pathname.split('/').pop();
  
  if (auth0 === 'login') {
    // Redirect to Auth0 login
    const auth0Domain = process.env.AUTH0_ISSUER_BASE_URL;
    const clientId = process.env.AUTH0_CLIENT_ID;
    const baseUrl = process.env.AUTH0_BASE_URL;
    
    if (!auth0Domain || !clientId || !baseUrl) {
      return NextResponse.json({ error: 'Auth0 configuration missing' }, { status: 500 });
    }
    
    const redirectUri = `${baseUrl}/api/auth/callback`;
    const loginUrl = `${auth0Domain}/authorize?response_type=code&client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=openid profile email`;
    
    return NextResponse.redirect(loginUrl);
  }
  
  if (auth0 === 'logout') {
    // Redirect to Auth0 logout
    const auth0Domain = process.env.AUTH0_ISSUER_BASE_URL;
    const clientId = process.env.AUTH0_CLIENT_ID;
    const returnTo = process.env.AUTH0_BASE_URL;
    
    if (!auth0Domain || !clientId || !returnTo) {
      return NextResponse.json({ error: 'Auth0 configuration missing' }, { status: 500 });
    }
    
    const logoutUrl = `${auth0Domain}/v2/logout?client_id=${clientId}&returnTo=${encodeURIComponent(returnTo)}`;
    
    return NextResponse.redirect(logoutUrl);
  }
  
  if (auth0 === 'callback') {
    // Handle callback
    const { searchParams } = new URL(request.url);
    const code = searchParams.get('code');
    const baseUrl = process.env.AUTH0_BASE_URL;
    
    if (!baseUrl) {
      return NextResponse.json({ error: 'Auth0 configuration missing' }, { status: 500 });
    }
    
    if (code) {
      // Exchange code for tokens
      // This is a simplified version - you'll need to implement token exchange
      return NextResponse.redirect(`${baseUrl}/dashboard`);
    }
    
    return NextResponse.redirect(`${baseUrl}/login?error=callback_failed`);
  }
  
  return NextResponse.json({ error: 'Invalid auth0 parameter' }, { status: 400 });
} 