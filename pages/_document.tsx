import { Html, Head, Main, NextScript } from "next/document";
import { MatomoProvider, createInstance } from "@datapunt/matomo-tracker-react";

const instance = createInstance({
  urlBase: "https://climatelab.matomo.cloud/",
  trackerUrl: "https://climatelab.matomo.cloud/matomo.php",
  siteId: 7,
});

export default function Document() {
  return (
    // @ts-ignore
    <MatomoProvider value={instance}>
      <Html lang="fr" className={"scroll-smooth"}>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    </MatomoProvider>
  );
}
