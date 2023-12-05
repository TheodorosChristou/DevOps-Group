// _app.tsx
import { AppProps } from 'next/app';
import Heading from "@/components/Heading";
import '../styles/globals.css';
import '../styles/markdown.css'
import { QueryClient, QueryClientProvider } from 'react-query';
import { SessionProvider } from 'next-auth/react';
import { Cloudinary } from '@cloudinary/url-gen';
import Script from 'next/script';
import dynamic from 'next/dynamic';
import { init } from '@sentry/nextjs';
import { I18nextProvider } from 'react-i18next';
import ConsentPopup from '../components/CookieConsent'
import i18n from '../i18n'; // Adjust the path accordingly
import GoogleAnalytics from "@/components/GoogleAnalytics";

const queryClient = new QueryClient();
init({
  dsn: "https://26a8fb92c1f4ddf9fc67d46918e9401c@o4506270187585536.ingest.sentry.io/4506292870840320",
});
function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const cld = new Cloudinary({ cloud: { cloudName: 'dmmj64ogm' } });
  const Header = dynamic(() => import('../components/Header'), { ssr:false} )
  return (
    <SessionProvider session={session}>
      <I18nextProvider i18n={i18n}>
        <div className="bg-black min-h-screen pt-[64px] overflow-x-hidden">
          <Script src="https://widget.cloudinary.com/v2.0/global/all.js" />
          <Heading />
           <GoogleAnalytics GA_MEASUREMENT_ID="G-4WX1KY97EQ"></GoogleAnalytics>
          <ConsentPopup />
          <QueryClientProvider client={queryClient}>
            <Header />
            <Component {...pageProps} />
          </QueryClientProvider>
        </div>
        </I18nextProvider>
    </SessionProvider>
  );
}

export default MyApp;