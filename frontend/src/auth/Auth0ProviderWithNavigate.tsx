import { AppState, Auth0Provider, User } from "@auth0/auth0-react";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const Auth0ProviderWithNavigate = ({ children }: Props) => {
  const domain = import.meta.env.VITE_AUTH_0_DOMAIN;
  const clientId = import.meta.env.VITE_AUTH_0_CLIENT_ID;
  const redirectUri = import.meta.env.VITE_AUTH_0_CALLBACK_URL;

  if (!domain || clientId || redirectUri) {
    throw new Error("Unable to initialize Auth 0");
  }

  const onRedirectCallback = (appState?: AppState, user?: User) => {
    console.log("user", user);
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: redirectUri,
      }}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithNavigate;
