import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
import Cta from "sections/gg-care/cta";
import FAQ from "sections/paripoorna/faq";
import Home from "sections/paripoorna/home";
import Steps from "sections/paripoorna/steps";
import TermsConditions from "sections/paripoorna/tandc";
import Head from "next/head";

const Paripoorna = () => {
  return (
    <div>
      <Head>
        {/* Primary Tags */}

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>
          ಪರಿಪೂರ್ಣ | ನಿಮ್ಮ IVF ಚಿಕಿತ್ಸೆ ಮೇಲೆ ₹1,11,111 ರಿಯಾಯಿತಿ ಪಡೆಯಿರಿ
        </title>
        <meta
          name="title"
          content="ಪರಿಪೂರ್ಣ | ನಿಮ್ಮ IVF ಚಿಕಿತ್ಸೆ ಮೇಲೆ ₹1,11,111 ರಿಯಾಯಿತಿ ಪಡೆಯಿರಿ"
        />
        <meta
          name="description"
          content="ಗರ್ಭಗುಡಿ ನಿಮ್ಮ ಕನಸುಗಳು ನಿಜವಾಗುವ ಸ್ಥಳ, ನಿಮ್ಮ ತಾಯ್ತನದ ಕನಸನ್ನು ನನಸು ಮಾಡಲು ಬಂದಿದೆ ಪರಿಪೂರ್ಣ IVF ಮೇಲೆ ಭಾರಿ ರಿಯಾಯ್ತಿ. ನಿಮ್ಮ ತಾಯ್ತನದ ಕನಸು ಈಗ ಸುಲಭ"
        />

        {/* Open Graph / Facebook */}

        <meta
          property="og:title"
          content="ಪರಿಪೂರ್ಣ | ನಿಮ್ಮ IVF ಚಿಕಿತ್ಸೆ ಮೇಲೆ ₹1,11,111 ರಿಯಾಯಿತಿ ಪಡೆಯಿರಿ"
        />
        <meta property="og:site_name" content="GarbhaGudi IVF Centre" />
        <meta property="og:url" content="https://garbhagudi.com" />
        <meta
          property="og:description"
          content="ಗರ್ಭಗುಡಿ ನಿಮ್ಮ ಕನಸುಗಳು ನಿಜವಾಗುವ ಸ್ಥಳ, ನಿಮ್ಮ ತಾಯ್ತನದ ಕನಸನ್ನು ನನಸು ಮಾಡಲು ಬಂದಿದೆ ಪರಿಪೂರ್ಣ IVF ಮೇಲೆ ಭಾರಿ ರಿಯಾಯ್ತಿ. ನಿಮ್ಮ ತಾಯ್ತನದ ಕನಸು ಈಗ ಸುಲಭ"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/garbhagudiivf/image/upload/v1731247437/paripoorna/Paripoorna_English_tfrujt.webp"
        />

        {/* Twitter*/}

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@garbhagudiivf" />
        <meta
          name="twitter:title"
          content="ಪರಿಪೂರ್ಣ | ನಿಮ್ಮ IVF ಚಿಕಿತ್ಸೆ ಮೇಲೆ ₹1,11,111 ರಿಯಾಯಿತಿ ಪಡೆಯಿರಿ"
        />
        <meta
          name="twitter:description"
          content="ಗರ್ಭಗುಡಿ ನಿಮ್ಮ ಕನಸುಗಳು ನಿಜವಾಗುವ ಸ್ಥಳ, ನಿಮ್ಮ ತಾಯ್ತನದ ಕನಸನ್ನು ನನಸು ಮಾಡಲು ಬಂದಿದೆ ಪರಿಪೂರ್ಣ IVF ಮೇಲೆ ಭಾರಿ ರಿಯಾಯ್ತಿ. ನಿಮ್ಮ ತಾಯ್ತನದ ಕನಸು ಈಗ ಸುಲಭ"
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/garbhagudiivf/image/upload/v1731247437/paripoorna/Paripoorna_English_tfrujt.webp"
        />
      </Head>

      <div className="bg-[url('https://res.cloudinary.com/garbhagudiivf/image/upload/v1669643962/Banner/Bunting_kgdona.webp')] bg-no-repeat bg-contain overflow-x-hidden">
        <Home />
        <Steps />
        <FAQ />
        <TermsConditions />
        <Cta />
      </div>
    </div>
  );
};
export default Paripoorna;
