// @ts-nocheck

import Head from "next/head";
import data from "../data.json";
import CopyToClipboard from "../components/CopyToClipboard";
import Image from "next/image";
import { useEffect, useState } from "react";
import Script from "next/script";

let listeningToKeyboard = false;

export default function Home() {
  const [keyPressed, setKeyPressed] = useState<string | null>(null);

  useEffect(() => {
    if (listeningToKeyboard) return;
    listeningToKeyboard = true;
    document.addEventListener("keydown", (event) => {
      if (event.isComposing || event.keyCode === 229) {
        return;
      }
      handleScrollToSection(event.key);
    });
  }, []);

  const handleScrollToSection = (key: string) => {
    const section = document.querySelector("#" + key);
    if (!section) return;
    setKeyPressed(key);
    section.scrollIntoView({ behavior: "smooth", block: "start" });
    setTimeout(() => {
      setKeyPressed(null);
    }, 1000);
  };


  return (
    <>
      <Head>
        <title>Kit anti greenwashing</title>
        <meta
          name="description"
          content="Savoir répondre facilement au greenwashing"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="https://em-content.zobj.net/thumbs/240/apple/325/magic-wand_1fa84.png"
        />
        <script>
          var _paq = window._paq = window._paq || [];
          /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
          _paq.push(['trackPageView']);
          _paq.push(['enableLinkTracking']);
          (function() {
          var u="https://climatelab.matomo.cloud/";
          _paq.push(['setTrackerUrl', u+'matomo.php']);
          _paq.push(['setSiteId', '7']);
          var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
          g.async=true; g.src='//cdn.matomo.cloud/climatelab.matomo.cloud/matomo.js'; s.parentNode.insertBefore(g,s);
        })();
        </script>

      </Head>
      <main></main>
      <main className={"mx-auto w-11/12 pb-48 md:w-full"}>
        <header className="flex justify-between">
          <div></div>
          <div className="flex items-center p-6">
            <div className={"mr-3"}>un outil du</div>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center rounded-xl py-2 px-4 transition-all hover:bg-slate-200"
              href="https://climatelab.fr"
            >
              <Image
                className="logo-img mr-1"
                src="https://em-content.zobj.net/thumbs/240/apple/285/alembic_2697-fe0f.png"
                alt="Alambic"
                width="27"
                height="27"
              />{" "}
              ClimateLab
            </a>
          </div>
        </header>

        <section className="relative mx-auto max-w-5xl pt-20 sm:pt-24 lg:pt-32">
          <h1 className="text-center text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Kit anti greenwashing 🪄
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-center text-lg text-slate-600">
            Démasquez vous-mêmes le greenwashing grâce à des arguments sourcés
            réutilisables.
          </p>

          <div className={"mt-6 flex justify-center gap-4 md:mt-8"}>
            <a
              className="inline-flex justify-center rounded-lg bg-slate-900 py-3 px-4 text-sm font-semibold text-white hover:bg-slate-700"
              href="#kit"
            >
              Voir le kit 👇️
            </a>
          </div>
        </section>

        <section className={"mx-auto mt-12 max-w-sm md:max-w-5xl"}>
          <div className="mx-auto grid gap-x-4 gap-y-0.5 md:grid-cols-4">
            {data
              .sort((topicA, topicB) => (topicA.title > topicB.title ? 1 : -1))
              .map((topic, index) => (
                <div
                  key={index + "summary"}
                  className="flex flex-col text-center md:text-start"
                >
                  <div
                    className={
                      "inline-flex cursor-pointer items-center rounded-lg bg-white p-1 hover:shadow hover:ring-1 hover:ring-slate-900/10"
                    }
                    onClick={() =>
                      handleScrollToSection(getNavigationIdentifier(topic))
                    }
                  >
                    <div className="mr-1 inline-flex h-8 w-8 items-center justify-center rounded-md bg-white p-2 text-xl">
                      <div
                        className={
                          topic.iconSizeCorrection ? "-translate-y-1" : ""
                        }
                      >
                        {topic.icon}
                      </div>
                    </div>
                    <div>
                      <div
                        data-after={getNavigationIdentifier(topic)}
                        className={`relative mb-1 inline-block text-sm font-medium after:absolute after:-right-8 after:top-1/2 after:flex after:h-[calc(1.175rem)] after:w-[calc(1.175rem)] after:-translate-y-1/2 after:items-center after:justify-center after:rounded-md after:font-mono after:text-xs after:font-semibold after:text-slate-700 after:shadow-sm after:transition-all after:content-[attr(data-after)] ${
                          keyPressed === getNavigationIdentifier(topic)
                            ? "after:ring-2 after:ring-slate-900"
                            : "after:ring-1 after:ring-slate-900/5"
                        }`}
                      >
                        {topic.title}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </section>

        <section>
          <div
            className="mx-auto mt-12 grid max-w-[90%] gap-12 pt-16 md:grid-cols-3"
            id="kit"
          >
            {data
              .sort((topicA, topicB) => (topicA.title > topicB.title ? 1 : -1))
              .map((topic, index) => (
                <div
                  key={index}
                  className="flex flex-col text-center md:text-start"
                  id={getNavigationIdentifier(topic)}
                >
                  <div className="icon-wrapper-animation inline-flex h-20 w-20 items-center justify-center rounded-md bg-white p-4 text-5xl shadow ring-1 ring-slate-900/10">
                    <div
                      className={
                        topic.iconSizeCorrection ? "-translate-y-1" : ""
                      }
                    >
                      {topic.icon}
                    </div>
                  </div>
                  <div>
                    <h2
                      data-after={getNavigationIdentifier(topic)}
                      className={`relative mt-5 mb-3 inline-block text-2xl font-bold after:absolute after:-right-10 after:top-1/2 after:flex after:h-[calc(1.375rem+1px)] after:w-[calc(1.375rem+1px)] after:-translate-y-1/2 after:items-center after:justify-center after:rounded-md after:font-mono after:text-sm after:font-bold after:text-slate-700 after:shadow-sm after:transition-all after:content-[attr(data-after)] ${
                        keyPressed === getNavigationIdentifier(topic)
                          ? "after:ring-2 after:ring-slate-900"
                          : "after:ring-1 after:ring-slate-900/5"
                      }`}
                    >
                      {topic.title}
                    </h2>
                  </div>
                  {topic.subtopics.map((subtopic) => (
                    <div key={topic.title + subtopic.title}>
                      <h3 className={`mt-4 text-xl font-bold`}>
                        {subtopic.title}
                      </h3>
                      {subtopic.tools.map((tool) => (
                        <div
                          key={tool.content}
                          className="mt-3 flex items-center justify-between"
                        >
                          <div className={"max-w-full"}>
                            <div className={"text-sm"}>{tool.content}</div>
                            <div>
                              <a
                                className="break-all text-xs text-slate-600 hover:text-black hover:underline"
                                href={tool.source}
                                target="noopener noreferer"
                              >
                                {tool.source}
                              </a>{" "}
                              🔗
                            </div>
                          </div>
                          <div className={"max-w-full pl-4"}>
                            <CopyToClipboard
                              contentToCopy={`${tool.content} (${tool.source})`}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              ))}
          </div>
        </section>
      </main>
    </>
  );
}

const getNavigationIdentifier = (topic: any) => {
  if (topic.navigationIdentifier) {
    return topic.navigationIdentifier;
  }
  return topic.title.charAt(0).toLowerCase();
};
