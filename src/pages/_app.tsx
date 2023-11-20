// _app.tsx
import { AppProps } from 'next/app';
import Heading from "@/components/Heading";
import Header from "../components/Header";
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n'; // Adjust the path accordingly
import '../styles/globals.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import { SessionProvider } from 'next-auth/react';
import { Cloudinary } from '@cloudinary/url-gen';
import Script from 'next/script';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const cld = new Cloudinary({ cloud: { cloudName: 'dmmj64ogm' } });

  return (
    <SessionProvider session={session}>
      <I18nextProvider i18n={i18n}>
        <div className="bg-black min-h-screen pt-[64px] overflow-x-hidden">
          <Script src="https://widget.cloudinary.com/v2.0/global/all.js" />
          <Heading />
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
