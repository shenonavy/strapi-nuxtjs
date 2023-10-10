import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  const navigate = useRouter();

  const pathName =
    navigate.pathname === "/" ? "Home" : navigate.pathname.substring(1);

  return (
    <>
      <Head>
        
      </Head>
      <Component {...pageProps} />
    </>
  );
}
