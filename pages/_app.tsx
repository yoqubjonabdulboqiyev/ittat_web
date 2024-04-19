import { useEffect } from "react";
import Head from "next/head";
import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import { queryClient } from "@/utilities/queryClient";
import { QueryClientProvider } from "react-query";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import AOS from "aos";
import "@splidejs/react-splide/css";

import "aos/dist/aos.css";
import "@/styles/index.scss";
import { MAIN_SEO } from "@/seo/main.seo";
const SEO_DATA = MAIN_SEO();
function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({ duration: 550 });
  }, []);

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Head>
          <title>IT TAT</title>
          <link rel="icon" href="/logo.png" />
          <meta name="title" content={SEO_DATA.uz} />
          <meta name="description" content={SEO_DATA.uz} />

          <meta name="twitter:title" content="IT TAT" />
          <meta name="twitter:description" content={SEO_DATA.uz} />
          <meta name="twitter:image" content="" />

          <meta name="og:title" content="IT TAT" />
          <meta name="og:description" content={SEO_DATA.uz} />
          <meta name="og:image" content="" />

          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
          />
        </Head>
        <Header />
        <Component {...pageProps} />
        <Toaster containerStyle={{ zIndex: "100000" }} />
        <Footer />
      </QueryClientProvider>
    </>
  );
}

export default appWithTranslation(App);

// Convert into NextJS ✅
// Add translations ✅
// Fix animations bug ✅
// Connect Netlify and Ahost ✅, wait, check ✅
// Add HTTPS
// Send message modal ✅
// Register modal
//   make inputs ✅
//   send to back on click ✅ wait for back to fix CORS
//
//
// Our Team: slider ✅
//
//
//
//
//
