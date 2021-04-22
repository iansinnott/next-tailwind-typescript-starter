import Head from "next/head";

export default function Home() {
  return (
    <div className={""}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={"h-screen flex flex-col justify-center items-center"}>
        <h1 className={""}>WEE</h1>

        <button className="btn">Click me for surprises</button>
      </main>
    </div>
  );
}
