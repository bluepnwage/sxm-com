import type { AppProps } from "next/app";
import { useEffect } from "react";

export default function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/sw.js").then(event => {
        if (event.installing) {
          console.log("Service worker installing");
        } else if (event.active) {
          console.log("Service worker active");
        } else {
          console.log("an error occured");
        }
      });
    }
  }, []);
  return <Component {...pageProps} />;
}
