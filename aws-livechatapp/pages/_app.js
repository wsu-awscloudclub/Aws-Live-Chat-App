import "../styles/globals.css";
import React from "react";
import { Amplify } from "aws-amplify";
import awsconfig from "../aws-exports";
Amplify.configure({...awsconfig, ssr: true});

function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default App;
