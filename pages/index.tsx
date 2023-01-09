import Head from 'next/head'
import data from '../data.json'
import CopyToClipboard from "../components/CopyToClipboard";

export default function Home() {
    return (
        <>
            <Head>
                <title>Kit anti greenwashing</title>
                <meta name="description" content="Savoir répondre facilement au greenwashing"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/325/magic-wand_1fa84.png"/>
            </Head>
            <main>

            </main>
            <main className={"pb-48 w-11/12 mx-auto md:w-full"}>
                <header className="flex justify-between">
                    <div></div>
                    <div className="">
                        <a
                            href="https://climatelab.fr/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            par Climate Lab ⚗️
                        </a>
                    </div>
                </header>

                <section className="relative max-w-5xl mx-auto pt-20 sm:pt-24 lg:pt-32">
                    <h1 className="text-slate-900 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center">
                        Kit anti greenwashing 🪄
                    </h1>

                    <p className="mt-6 text-lg text-slate-600 text-center max-w-3xl mx-auto">
                        Démasquez vous-mêmes le greenwashing grâce à des arguments sourcés réutilisables.
                    </p>

                    <div className={"flex justify-center gap-4 mt-6 md:mt-8"}>
                        <a className="inline-flex justify-center rounded-lg text-sm font-semibold py-3 px-4 bg-slate-900 text-white hover:bg-slate-700"
                           href="#kit">Voir le kit 👇️</a>
                    </div>
                </section>

                <section>
                    <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto mt-12 pt-16" id="kit">
                        {data.map((topic, index) => (
                            <div key={index} className="text-center md:text-start">
                                <div className="inline-flex text-5xl h-20 w-20 p-4 items-center justify-center rounded-md bg-white shadow ring-1 ring-slate-900/10">
                                    <div className={topic.iconSizeCorrection ? '-translate-y-1' : ''}>
                                        {topic.icon}
                                    </div>
                                </div>
                                <h2 className="text-2xl font-bold mt-5 mb-3">
                                    {topic.title}
                                </h2>
                                {topic.subtopics.map((subtopic) => (
                                    <div key={topic.title + subtopic.title}>
                                        <h3 className="text-xl font-bold mt-4">
                                            {subtopic.title}
                                        </h3>
                                        {subtopic.tools.map((tool) => (
                                            <div key={tool.content} className="flex items-center justify-between mt-3">
                                                <div>
                                                    <div className={"text-sm"}>
                                                        {tool.content}
                                                    </div>
                                                    <div>
                                                        <a className="text-slate-600 hover:underline hover:text-black text-xs" href={tool.source} target="noopener noreferer">{tool.source}</a>  🔗
                                                    </div>
                                                </div>
                                                <div className={"pl-4"}>
                                                    <CopyToClipboard contentToCopy={`${tool.content} (${tool.source})`}/>
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
    )
}
