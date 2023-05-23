import React, { useState } from "react";
import { Toaster } from "react-hot-toast";

import { Layout } from "../components";
import "../styles/globals.css";
import { StateContext } from "../context/StateContext";
import Router from "next/router";
import Loading from "@/components/Loading";
import { createPortal } from "react-dom";
function MyApp({ Component, pageProps }) {
  const [loading, setloading] = useState(false);
  Router.onRouteChangeStart = (url) => {
    // Some page has started loading
    setloading(true);
  };
  Router.onRouteChangeComplete = (url) => {
    // Some page has finished loading
    setloading(false);
  };

  return (
    <StateContext>
      <Layout>
        <Toaster />
        {loading && createPortal(<Loading />, document.getElementById("top"))}
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  );
}

export default MyApp;
