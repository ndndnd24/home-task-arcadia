"use client";

import Head from "next/head";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { useState } from "react";
import MapComponent from "@/components/Cesium";

export default function Home() {
  const googleApiToken = process.env.GOOGLE_API_TOKEN;
  const [isSignedIn, setSignIn] = useState(false);

  function renderMain(isAuthenticated) {
    if (isAuthenticated) {
      return <MapComponent />;
    } else {
      return (
        <div style={{ height: "90vh" }} id="google-auth-button">
          <GoogleOAuthProvider clientId={googleApiToken}>
            <GoogleLogin
              onSuccess={(credentialResponse) => {
                setSignIn(true);
                // console.log(credentialResponse);
              }}
              onError={() => {
                console.log("Login Failed");
              }}
            />
          </GoogleOAuthProvider>
        </div>
      );
    }
  }

  return (
    <div>
      <Head>
        <title>Home Task for Arcadia</title>
      </Head>
      <header style={{ height: "5vh" }} id="app-header">
        <div>Home Task for Arcadia by ND</div>
      </header>
      <main>{renderMain(isSignedIn)}</main>
      <footer style={{ height: "5vh" }} id="app-footer">
        <div>
          <p>Powered by NextJS, CesiumJS, GoogleOAuth.</p>
          <p>Created by Dávid Németh, 2023.</p>
        </div>
      </footer>
    </div>
  );
}
