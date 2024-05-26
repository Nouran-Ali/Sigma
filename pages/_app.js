import '@/styles/globals.css';
import '@/styles/about.css';
import '@/styles/our_work.css';
import '@/styles/contact.css';
import { Head } from 'next/document';
import Layout from './../comps/Layout';
import { useTranslation } from 'react-i18next';
import { i18n } from '../comps/i18n';
import { GoogleAnalytics } from '@next/third-parties/google';
import { useEffect } from 'react';

export default function App({ Component, pageProps }) {
  const [t, i18n] = useTranslation();

  return (
    <html>
      <body>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </body>
      <GoogleAnalytics gaId="AW-16575167565" />
    </html>
  );
}