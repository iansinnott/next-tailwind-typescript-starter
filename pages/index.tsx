import Head from "next/head";
import { useState } from "react";
import Modal from "../components/Modal";

export default function Home() {
  const [open, setOpen] = useState(false);
  const onClose = () => setOpen(false);
  return (
    <div className={""}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-screen flex flex-col justify-center items-center">
        <h1 className="mb-8">WEE</h1>

        <button
          onClick={() => setOpen(true)}
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Click me for surprises
        </button>
        <Modal open={open} onClose={onClose} />
      </main>
    </div>
  );
}
