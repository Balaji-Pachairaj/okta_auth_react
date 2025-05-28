const oktaConfig = {
    clientId: '0oaowuf2ddZQdh9vz5d7',
    issuer: 'https://dev-94118446.okta.com/oauth2/default',
    redirectUri: window.location.origin + '/login/callback',
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
  };


  
  
  export default oktaConfig;