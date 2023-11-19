import Heading from "@/components/Heading";
import Header from "../components/Header";
import "../styles/globals.css";
import { QueryClient, QueryClientProvider} from "react-query"
import { SessionProvider } from "next-auth/react"
import {Cloudinary} from "@cloudinary/url-gen";
import Script from "next/script";

const queryClient = new QueryClient();

function MyApp({Component, pageProps: {session, ...pageProps}}) {
  const cld = new Cloudinary({cloud: {cloudName: 'dmmj64ogm'}});
    return (
      <SessionProvider session={session}>
      <div className="bg-black min-h-screen  pt-[64px] overflow-x-hidden">
      <Script src="https://widget.cloudinary.com/v2.0/global/all.js" />

          <Heading></Heading>
          <QueryClientProvider client={queryClient}>
          <Header></Header>
            <Component {...pageProps} />
          </QueryClientProvider>


      </div>
      </SessionProvider>
    );
  }

  export default MyApp