import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>MIU LMS</title> {/* Change this to your desired app title */}
        <meta name="description" content="MIU LMS" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
