import React from "react";
import "../styles/globals.css";
import Footer from "components/footer/footer";
import Nav from "components/header/header";
import FloatPhone from "components/FloatPhone";
import SalesIQ from "components/SalesIQ";
import TagManager from "react-gtm-module";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Loading from "components/Loading";
import Head from "next/head";
import FloatRequestCallBack from "components/FloatRequestCallBack";
import FloatPhoneFooter from "components/FloatPhoneFooter";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = React.useState(false);

  useEffect(() => {
    TagManager.initialize({ gtmId: "GTM-MJRF25D" });
  }, []);

  useEffect(() => {
    const start = () => {
      setLoading(true);
    };
    const end = () => {
      setLoading(false);
    };
    router.events.on("routeChangeStart", start);
    router.events.on("routeChangeComplete", end);
    router.events.on("routeChangeError", end);
    return () => {
      router.events.off("routeChangeStart", start);
      router.events.off("routeChangeComplete", end);
      router.events.off("routeChangeError", end);
    };
  }, [router.events]);

  const path = router.asPath.endsWith("/index") ? "" : router.asPath;

  return (
    <>
      <Head>
        <link
          rel="alternate"
          href={`https://kannada.garbhagudi.com${path}`}
          hrefLang="en-us"
        />
        <link rel="canonical" href={`https://kannada.garbhagudi.com${path}`} />
        <meta httpEquiv="content-language" content="en-gb"></meta>
      </Head>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <Nav />
          <main className="min-h-screen">
            <Component {...pageProps} />
          </main>
          <SalesIQ />
          <FloatPhone />
          <FloatRequestCallBack />
          <FloatPhoneFooter />
          <Footer />
        </div>
      )}
    </>
  );
}

export default MyApp;
