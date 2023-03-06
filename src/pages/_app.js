import "@/styles/globals.css";
import { useEffect } from "react";
import TagManager from "react-gtm-module";

export default function App({ Component, pageProps }) {
  const gtmTd = process.env.NEXT_PUBLIC_GTM || "";
  const tagManagerArgs = {
    gtmTd,
  };

  useEffect(() => {
    TagManager.initialize(tagManagerArgs);
  }, []);

  return <Component {...pageProps} />;
}
