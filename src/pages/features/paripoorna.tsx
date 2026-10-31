import { B612, Lexend, Nunito } from "next/font/google";
import Head from "next/head";
import Cta from "sections/paripoorna/cta";
import Faq from "sections/paripoorna/faq";
import Hero from "sections/paripoorna/hero";
import Inclusions from "sections/paripoorna/inclusions";
import Institution from "sections/paripoorna/institution";
import Offer from "sections/paripoorna/offer";
import Understanding from "sections/paripoorna/understanding";

const head = B612({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-pp-head",
});
const ui = Lexend({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-pp-ui",
});
const body = Nunito({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-pp-body",
});

const TITLE = "ಪರಿಪೂರ್ಣ 2026 | ₹1,75,000ಕ್ಕೆ ಸಂಪೂರ್ಣ IVF ಚಿಕಿತ್ಸೆ*";
const DESCRIPTION =
  "ಗರ್ಭಗುಡಿ IVF ಸೆಂಟರ್‌ನ ಪರಿಪೂರ್ಣ 2026 — ಮೊದಲು ನಿಮ್ಮ ತಾಯ್ತನದ ಪಯಣವನ್ನು ಅರ್ಥ ಮಾಡಿಕೊಳ್ಳಿ; IVF ಅಗತ್ಯವಿದ್ದಲ್ಲಿ ಔಷಧಗಳು ಸೇರಿದಂತೆ ನಿಗದಿತ ವೆಚ್ಚದಲ್ಲಿ ಸಂಪೂರ್ಣ IVF ಚಿಕಿತ್ಸೆ. ಸಂಪರ್ಕಿಸಿ: 9108 9108 32.";
const OG_IMAGE =
  "https://ap-south-1.graphassets.com/ATvkR6mxuRke4HGT9LQrhz/cms8vp44h5aq707pl7oyfbuqd";
const PAGE_URL = "https://kannada.garbhagudi.com/features/paripoorna";

const breadcrumbSchema = JSON.stringify({
  "@context": "https://schema.org/",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://kannada.garbhagudi.com/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Features",
      item: "https://kannada.garbhagudi.com/features",
    },
    { "@type": "ListItem", position: 3, name: "Paripoorna", item: PAGE_URL },
  ],
});

const Paripoorna = () => {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
        <title>{TITLE}</title>
        <meta name="title" content={TITLE} />
        <meta name="description" content={DESCRIPTION} />
        <meta name="theme-color" content="#ef4266" />
        <meta property="og:title" content={TITLE} />
        <meta property="og:site_name" content="GarbhaGudi IVF Centre" />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={OG_IMAGE} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@garbhagudiivf" />
        <meta name="twitter:title" content={TITLE} />
        <meta name="twitter:description" content={DESCRIPTION} />
        <meta name="twitter:image" content={OG_IMAGE} />
        <style>{`html{scroll-padding-top:86px}@media (max-width:640px){html{scroll-padding-top:94px}}`}</style>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: breadcrumbSchema }}
          id="breadcrumbs-jsonld"
        />
      </Head>
      <div
        className={`${head.variable} ${ui.variable} ${body.variable} overflow-x-clip bg-pp-bg font-pp-body text-[17px] leading-[1.75] text-pp-grey antialiased max-[767px]:bg-[#efe7e0] max-[640px]:text-[16px]`}
      >
        <Hero />
        <Understanding />
        <Offer />
        <Inclusions />
        <Cta />
        <Institution />
        <Faq />
      </div>
    </>
  );
};

export default Paripoorna;
