import '@/styles/globals.css';
import '@/styles/about.css';
import { Head } from "next/document";
import Layout from "./../comps/Layout";

export default function App({ Component, pageProps }) {
  return <>
    {/* <Head>
      <title>Sigma Architectural Contracting</title>
      <meta name="description" content="Generated by create next app" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {/* <link rel="icon" href="/logo.png" />
    </Head> */}
    
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </>
}