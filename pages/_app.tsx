import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Inter } from "@next/font/google";
import { MatomoProvider, createInstance } from "@datapunt/matomo-tracker-react";

const inter = Inter({ subsets: ["latin"] });

const instance = createInstance({
  urlBase: "https://climatelab.matomo.cloud/",
  trackerUrl: "https://climatelab.matomo.cloud/matomo.php",
  siteId: 7,
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    // @ts-ignore
    <MatomoProvider value={instance}>
      <main className={inter.className}>
        <Component {...pageProps} />
      </main>
    </MatomoProvider>
  );
}
