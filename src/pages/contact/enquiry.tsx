import React from "react";
import Head from "next/head";
import Image from "next/image";
import Form from "components/search/Form";

const IndexPage = () => {
  return (
    <div>
      <Head>
        {/* Primary Tags */}

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Enquiry Form | GarbhaGudi</title>
        <meta name="title" content="Enquiry Form | GarbhaGudi IVF Centre" />
        <meta
          name="description"
          content="GarbhaGudi is a chain of new generation infertility treatment hospitals equipped with state-of-the-art cutting-edge technology to address infertility."
        />
        <link
          rel="alternate"
          hrefLang="kn"
          href="https://kannada.garbhagudi.com/contact/enquiry"
        />
        <link
          rel="alternate"
          hrefLang="x-default"
          href="https://www.garbhagudi.com/contact/enquiry"
        />
        <link
          rel="canonical"
          href="https://kannada.garbhagudi.com/contact/enquiry"
        />
        {/* Open Graph / Facebook */}

        <meta property="og:title" content="Enquiry Form" />
        <meta property="og:site_name" content="GarbhaGudi IVF Centre" />
        <meta property="og:url" content="https://garbhagudi.com" />
        <meta
          property="og:description"
          content="GarbhaGudi is a chain of new generation infertility treatment hospitals equipped with state-of-the-art cutting-edge technology to address infertility."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/garbhagudiivf/image/upload/v1757330189/GG_Popup_Image-01_ykvac7.webp"
        />

        {/* Twitter*/}

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@garbhagudiivf" />
        <meta name="twitter:title" content="Enquiry Form" />
        <meta
          name="twitter:description"
          content="GarbhaGudi is a chain of new generation infertility treatment hospitals equipped with state-of-the-art cutting-edge technology to address infertility."
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/garbhagudiivf/image/upload/v1757330189/GG_Popup_Image-01_ykvac7.webp"
        />
      </Head>

      <div className="max-w-7xl mx-auto">
        <Image
          src="https://res.cloudinary.com/garbhagudiivf/image/upload/v1757330189/GG_Popup_Image-01_ykvac7.webp"
          alt="formBanner"
          className="md:max-w-2xl mt-4 mx-auto"
          width={1024}
          height={400}
        />
        <div className="bg-gray-800 max-w-2xl mx-auto">
          <h1 className="text-3xl text-center text-white font-lexend pt-4">
            Enquiry Form
          </h1>
          <Form />
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
