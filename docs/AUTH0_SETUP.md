# Auth0 Setup Guide

This guide will help you set up Auth0 authentication for the Template Manager application.

## Prerequisites

- An Auth0 account (sign up at [auth0.com](https://auth0.com))
- Your Next.js application running locally

## Step 1: Create an Auth0 Application

1. Log in to your Auth0 dashboard
2. Navigate to "Applications" → "Applications"
3. Click "Create Application"
4. Choose "Single Page Application" (SPA)
5. Give your application a name (e.g., "Template Manager")
6. Click "Create"

## Step 2: Configure Auth0 Application Settings

1. In your Auth0 application settings, configure the following:

### Allowed Callback URLs

```
http://localhost:3000/api/auth/callback
```

### Allowed Logout URLs

```
http://localhost:3000
```

### Allowed Web Origins

```
http://localhost:3000
```

## Step 3: Set Environment Variables

Create a `.env.local` file in your project root with the following variables:

```env
# Auth0 Configuration
AUTH0_SECRET='use [openssl rand -hex 32] to generate a 32 bytes value'
AUTH0_BASE_URL='http://localhost:3000'
AUTH0_ISSUER_BASE_URL='https://YOUR_AUTH0_DOMAIN'
AUTH0_CLIENT_ID='YOUR_AUTH0_CLIENT_ID'
AUTH0_CLIENT_SECRET='YOUR_AUTH0_CLIENT_SECRET'
```

### Generate AUTH0_SECRET

Run this command to generate a secure secret:

```bash
openssl rand -hex 32
```

### Get Your Auth0 Values

1. **AUTH0_ISSUER_BASE_URL**: Found in your Auth0 application settings
   - Format: `https://your-tenant.auth0.com`
2. **AUTH0_CLIENT_ID**: Found in your Auth0 application settings
3. **AUTH0_CLIENT_SECRET**: Found in your Auth0 application settings

## Step 4: Test Authentication

1. Start your development server:

   ```bash
   npm run dev
   ```

2. Navigate to `http://localhost:3000`

3. Click "Sign In" to test the authentication flow

4. After successful authentication, you should be redirected back to the application

## Step 5: Production Configuration

For production deployment, update your environment variables:

```env
AUTH0_BASE_URL='https://your-domain.com'
AUTH0_ISSUER_BASE_URL='https://your-tenant.auth0.com'
AUTH0_CLIENT_ID='your-client-id'
AUTH0_CLIENT_SECRET='your-client-secret'
```

And update your Auth0 application settings with your production URLs:

### Allowed Callback URLs

```
https://your-domain.com/api/auth/callback
```

### Allowed Logout URLs

```
https://your-domain.com
```

### Allowed Web Origins

```
https://your-domain.com
```

## Features Implemented

- ✅ User authentication with Auth0
- ✅ Login/logout functionality
- ✅ Protected routes with middleware
- ✅ User profile management
- ✅ Session management
- ✅ Authentication state handling
- ✅ Responsive UI components

## Components Created

- `AuthProvider`: Wraps the app with Auth0 context
- `LoginButton`: Handles login/logout UI
- `ProtectedRoute`: Protects routes from unauthenticated access
- `UserProfile`: Displays user information
- `Header`: Navigation with authentication
- `useAuth`: Custom hook for authentication state

## API Routes

- `/api/auth/login`: Initiates Auth0 login
- `/api/auth/logout`: Logs out user
- `/api/auth/callback`: Handles Auth0 callback
- `/api/auth/me`: Gets current user session

## Testing Authentication

1. Visit the homepage and click "Sign In"
2. Complete the Auth0 authentication flow
3. You should be redirected back to the application
4. The header should show your name and a logout button
5. Visit `/profile` to see your user information
6. Try accessing protected routes without authentication

## Troubleshooting

### Common Issues

1. **"Invalid redirect_uri" error**

   - Check that your callback URL is correctly configured in Auth0
   - Ensure the URL matches exactly (including protocol and port)

2. **"Invalid client" error**

   - Verify your AUTH0_CLIENT_ID and AUTH0_CLIENT_SECRET are correct
   - Check that your Auth0 application is properly configured

3. **CORS errors**

   - Ensure your Allowed Web Origins includes your domain
   - Check that your AUTH0_BASE_URL matches your application URL

4. **Session not persisting**
   - Verify your AUTH0_SECRET is properly set
   - Check that cookies are enabled in your browser

### Debug Mode

To enable debug logging, add this to your `.env.local`:

```env
AUTH0_LOG_LEVEL=debug
```

## Security Considerations

- Keep your AUTH0_SECRET secure and never commit it to version control
- Use environment variables for all sensitive configuration
- Regularly rotate your Auth0 client secrets
- Implement proper error handling for authentication failures
- Consider implementing role-based access control (RBAC) for different user types
