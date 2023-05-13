"use client";

import Head from "next/head";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { useState } from "react";

export default function Home() {
  const googleApiToken = process.env.GOOGLE_API_TOKEN;
  const [isSignedIn, setSignIn] = useState(false);

  function renderMain(isAuthenticated) {
    if (isAuthenticated) {
      return <>some body</>;
    } else {
      return (
        <GoogleOAuthProvider clientId={googleApiToken}>
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              setSignIn(true);
              console.log(credentialResponse);
            }}
            onError={() => {
              console.log("Login Failed");
            }}
          />
        </GoogleOAuthProvider>
      );
    }
  }

  return (
    <div>
      <Head>
        <title>Home Task for Arcadia</title>
      </Head>
      <header>some header</header>
      <main>{renderMain(isSignedIn)}</main>
      <footer>some footer</footer>
    </div>
  );
}
