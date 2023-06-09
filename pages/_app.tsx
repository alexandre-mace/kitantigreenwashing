import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });
import { init } from "@socialgouv/matomo-next";
import { useEffect } from "react";

const MATOMO_URL = "https://climatelab.matomo.cloud/";
const MATOMO_SITE_ID = "7";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    init({ url: MATOMO_URL, siteId: MATOMO_SITE_ID });
  }, []);

  return (
    <main className={inter.className}>
      <Component {...pageProps} />
    </main>
  );
}
