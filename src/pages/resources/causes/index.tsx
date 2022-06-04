import React from "react";
import graphcms from "lib/graphcms";
import Link from "next/link";
import Head from "next/head";

const IndexPage = ({ causes }) => {
  return (
    <div>
      <Head>
        {/* Primary Tags */}

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>ಸಂತಾನೋತ್ಪತ್ತಿ ಸಮಸ್ಯೆಗೆ ಕಾರಣಗಳು | ಗರ್ಭಗುಡಿ</title>
        <meta name="title" content="Treatment | ಗರ್ಭಗುಡಿ ಐವಿಎಫ್ ಕೇಂದ್ರ" />
        <meta
          name="description"
          content="ಸಂತಾನೋತ್ಪತ್ತಿ ಸಮಸ್ಯೆಗೆ ಕಾರಣಗಳು | ಗರ್ಭಗುಡಿ"
        />

        {/* Open Graph / Facebook */}

        <meta
          property="og:title"
          content="Treatment | ಗರ್ಭಗುಡಿ ಐವಿಎಫ್ ಕೇಂದ್ರ"
        />
        <meta property="og:site_name" content="GarbhaGudi IVF Centre" />
        <meta property="og:url" content="https://garbhagudi.com" />
        <meta
          property="og:description"
          content="Treatment options, procedure details and advanced treatment options for male and female infertility treatment available at GarbhaGudi"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/garbhagudiivf/image/upload/v1643802154/SEO/OG_images_Cau_Diag_Treat_d0t3vx.jpg"
        />

        {/* Twitter*/}

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@garbhagudiivf" />
        <meta name="twitter:title" content="Causes | ಗರ್ಭಗುಡಿ ಐವಿಎಫ್ ಕೇಂದ್ರ" />
        <meta
          name="twitter:description"
          content="causes, procedure details and advanced treatment options for male and female infertility treatment available at GarbhaGudi"
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/garbhagudiivf/image/upload/v1643802154/SEO/OG_images_Cau_Diag_Treat_d0t3vx.jpg"
        />
      </Head>
      <div className="max-w-7xl mx-auto text-center text-4xl font-heading pt-12 font-semibold">
        ಸಂತಾನೋತ್ಪತ್ತಿ ಸಮಸ್ಯೆಗೆ ಕಾರಣಗಳು
      </div>
      <p className="max-w-7xl mx-auto text-center pt-6 font-content">
        ಬಂಜೆತನವು ಗಂಡು ಅಥವಾ ಹೆಣ್ಣು ಸಂತಾನೋತ್ಪತ್ತಿ ವ್ಯವಸ್ಥೆಯಲ್ಲಿ ಹಲವಾರು ವಿಭಿನ್ನ
        ಅಂಶಗಳಿಂದ ಉಂಟಾಗಬಹುದು. ಆದಾಗ್ಯೂ, ಬಂಜೆತನದ ಕಾರಣಗಳನ್ನು ವಿವರಿಸಲು ಕೆಲವೊಮ್ಮೆ
        ಸಾಧ್ಯವಿಲ್ಲ.
      </p>
      <div className="max-w-7xl mx-auto py-6 flex sm:py-12">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-10 mx-auto">
          {causes.map((item) => (
            <Link href={`causes/${item?.slug}`} passHref key={item?.id}>
              <div className="border-brandPink w-96 px-4 py-3 border-solid rounded-2xl border-2 flex cursor-pointer hover:bg-brandPink hover:text-white hover:border-transparent transition-colors duration-100 ">
                <div className="w-1/3">
                  <img
                    className="w-24 h-24 object-cover rounded-lg"
                    src={item?.icon?.url}
                    alt={item?.title}
                  />
                </div>
                <div className="w-2/3 flex flex-col justify-center text-center">
                  <p className="font-semibold text-lg font-content">
                    {item?.title}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IndexPage;

export const getStaticProps = async () => {
  const { causes } = await graphcms.request(`
      query {
        causes {
          title
          id
          icon {
            url
          }
          slug
        }
      }
    `);
  return {
    props: {
      causes,
    },
  };
};
