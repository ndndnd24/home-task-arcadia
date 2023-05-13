"use client";

import Head from "next/head";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { useState } from "react";
import MapComponent from "@/components/Cesium";

export default function Home() {
  const googleApiToken = process.env.GOOGLE_API_TOKEN;
  const [isSignedIn, setSignIn] = useState(true);

  function renderMain(isAuthenticated) {
    if (isAuthenticated) {
      return <MapComponent />;
    } else {
      return (
        <div style={{ height: "90vh" }}>
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
      <header style={{ height: "5vh" }} id="app-header">some header</header>
      <main>{renderMain(isSignedIn)}</main>
      <footer style={{ height: "5vh" }} id="app-footer">some footer</footer>
    </div>
  );
}
