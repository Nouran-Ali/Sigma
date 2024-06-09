import '@/styles/globals.css';
import '@/styles/about.css';
import '@/styles/our_work.css';
import '@/styles/contact.css';
import Layout from './../comps/Layout';
import { useTranslation, I18nextProvider } from 'react-i18next';
import { useEffect } from 'react';
import Script from 'next/script';
import { useRouter } from 'next/router';
import i18n from './../comps/i18n';

const GA_TRACKING_ID = 'AW-16563666109';

const handleRouteChange = (url) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  });
};

export default function App({ Component, pageProps }) {
  const [t, i18n] = useTranslation();
  const router = useRouter();

  useEffect(() => {
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />

      <I18nextProvider i18n={i18n}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </I18nextProvider>
    </>
  );
}