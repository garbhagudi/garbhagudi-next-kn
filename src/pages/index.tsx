import React from "react";
import Head from "next/head";
import HomeComponent from "sections/home";
import Link from "next/link";
import { gql, GraphQLClient } from "graphql-request";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import Faq from "sections/home/faq";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const responsive2 = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Home = ({ homeData }) => {
  return (
    <div>
      <Head>
        {/* Primary Tags */}

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>
          ಗರ್ಭಗುಡಿ ಐವಿಎಫ್ ಸೆಂಟರ್ | ಭಾರತದ ಅತ್ಯುತ್ತಮ ಐವಿಎಫ್ ಮತ್ತು ಫಲವತ್ತತೆ
          ಆಸ್ಪತ್ರೆ
        </title>
        <meta
          name="title"
          content="ಗರ್ಭಗುಡಿ ಐವಿಎಫ್ ಸೆಂಟರ್ | ಭಾರತದ ಅತ್ಯುತ್ತಮ ಐವಿಎಫ್ ಮತ್ತು ಫಲವತ್ತತೆ
          ಆಸ್ಪತ್ರೆ"
        />
        <meta
          name="description"
          content="
          ಗರ್ಭಗುಡಿ ಹೊಸ ಪೀಳಿಗೆಯ ಬಂಜೆತನ ಚಿಕಿತ್ಸಾ ಆಸ್ಪತ್ರೆಗಳ ಸರಣಿಯಾಗಿದ್ದು, ಈ ನಿರಂತರವಾಗಿ ಹೆಚ್ಚುತ್ತಿರುವ ಬಂಜೆತನ ಸಮಸ್ಯೆಯನ್ನು ಪರಿಹರಿಸಲು ಅತ್ಯಾಧುನಿಕ ಮೂಲಸೌಕರ್ಯ ಮತ್ತು ಅತ್ಯಾಧುನಿಕ ತಂತ್ರಜ್ಞಾನವನ್ನು ಹೊಂದಿದೆ."
        />

        {/* Open Graph / Facebook */}

        <meta
          property="og:title"
          content="ಗರ್ಭಗುಡಿ ಐವಿಎಫ್ ಸೆಂಟರ್ | ಭಾರತದ ಅತ್ಯುತ್ತಮ ಐವಿಎಫ್ ಮತ್ತು ಫಲವತ್ತತೆ
          ಆಸ್ಪತ್ರೆ"
        />
        <meta property="og:site_name" content="GarbhaGudi IVF Centre" />
        <meta property="og:url" content="https://garbhagudi.com" />
        <meta
          property="og:description"
          content=" ಗರ್ಭಗುಡಿ ಹೊಸ ಪೀಳಿಗೆಯ ಬಂಜೆತನ ಚಿಕಿತ್ಸಾ ಆಸ್ಪತ್ರೆಗಳ ಸರಣಿಯಾಗಿದ್ದು, ಈ ನಿರಂತರವಾಗಿ ಹೆಚ್ಚುತ್ತಿರುವ ಬಂಜೆತನ ಸಮಸ್ಯೆಯನ್ನು ಪರಿಹರಿಸಲು ಅತ್ಯಾಧುನಿಕ ಮೂಲಸೌಕರ್ಯ ಮತ್ತು ಅತ್ಯಾಧುನಿಕ ತಂತ್ರಜ್ಞಾನವನ್ನು ಹೊಂದಿದೆ."
        />
        <meta property="og:type" content="website" />
        <meta
          name="google-site-verification"
          content="tKpr-jxpo3IifynpRX_Zj_Pga1UX_b2FZgsioh17ARI"
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/garbhagudiivf/image/upload/v1643802154/SEO/OG_images_Home_pct8yc.jpg"
        />

        {/* Twitter*/}

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@garbhagudiivf" />
        <meta
          name="twitter:title"
          content="ಗರ್ಭಗುಡಿ ಐವಿಎಫ್ ಸೆಂಟರ್ | ಭಾರತದ ಅತ್ಯುತ್ತಮ ಐವಿಎಫ್ ಮತ್ತು ಫಲವತ್ತತೆ
          ಆಸ್ಪತ್ರೆ"
        />
        <meta
          name="twitter:description"
          content=" ಗರ್ಭಗುಡಿ ಹೊಸ ಪೀಳಿಗೆಯ ಬಂಜೆತನ ಚಿಕಿತ್ಸಾ ಆಸ್ಪತ್ರೆಗಳ ಸರಣಿಯಾಗಿದ್ದು, ಈ ನಿರಂತರವಾಗಿ ಹೆಚ್ಚುತ್ತಿರುವ ಬಂಜೆತನ ಸಮಸ್ಯೆಯನ್ನು ಪರಿಹರಿಸಲು ಅತ್ಯಾಧುನಿಕ ಮೂಲಸೌಕರ್ಯ ಮತ್ತು ಅತ್ಯಾಧುನಿಕ ತಂತ್ರಜ್ಞಾನವನ್ನು ಹೊಂದಿದೆ."
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/garbhagudiivf/image/upload/v1643802154/SEO/OG_images_Home_pct8yc.jpg"
        />

        {/* Google */}
        <meta
          name="google-site-verification"
          content="mzhcIRsJx6D4QkbJJp3Tepas8Lyv6sJLWmGb0DvKOrw"
        />
      </Head>
      <Carousel
        responsive={responsive}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        ssr={true}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={5000}
      >
        {homeData.banners.map((items) => (
          <div className="" key={items?.id}>
            <a href={items?.url} target="_blank" rel="noreferrer">
              <Image
                src={items?.image?.url}
                alt={items?.title}
                width={1920}
                height={630}
                className="w-full h-full"
              />
            </a>
          </div>
        ))}
      </Carousel>
      <HomeComponent />
      <div className="bg-neutral-50" id="ourTeam">
        <div className="px-4 py-16 mx-auto text-center max-w-[1366px] sm:px-6 lg:px-8 lg:py-12">
          <div className="space-y-12">
            <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-brandDark font-heading">
                ನಮ್ಮ ತಜ್ಞರನ್ನು ಭೇಟಿ ಮಾಡಿ
              </h2>
              <p className="text-base text-brandDark font-content">
                ನಮ್ಮ ಫಲವತ್ತತೆ ತಜ್ಞರ ತಂಡವು ಅವರ ವ್ಯಾಪಕವಾದ ಕ್ಲಿನಿಕಲ್ ಅನುಭವ ಮತ್ತು
                ಸಂಶೋಧನಾ ಕೊಡುಗೆಗಳು ಮತ್ತು ಅತ್ಯಂತ ಸವಾಲಿನ ಫಲವತ್ತತೆ ಪ್ರಕರಣಗಳಿಗೆ
                ಚಿಕಿತ್ಸೆ ನೀಡುವಲ್ಲಿ ಅವರ ಯಶಸ್ಸಿಗೆ ಹೆಸರುವಾಸಿಯಾಗಿದೆ.
              </p>
            </div>
            <div className="hidden lg:grid grid-cols-2 mx-auto space-y-0 sm:gap-8 sm:space-y-0 lg:grid-cols-6">
              {homeData?.doctors.map((item: any) => {
                return (
                  <div
                    key={item?.id}
                    className="transition-all duration-500 hover:scale-125"
                  >
                    <Link href={`/fertility-experts/${item?.slug}`} passHref>
                      <div className="space-y-4">
                        <div className="relative w-44 h-44 mx-auto">
                          <div className="h-full w-full absolute rounded-full bg-gradient-to-br from-brandPink3/80 to-purple-500/40 animate-rotate bg-[length: 400%]"></div>
                          <Image
                            className="rounded-full  shadow-champaigne drop-shadow-2xl bg-transparent"
                            src={item?.image?.url}
                            alt={item?.imageAlt || item?.name}
                            width={400}
                            height={400}
                            loading="lazy"
                          />
                        </div>
                        <div className="space-y-0.5">
                          <h3 className="text-brandDark text-lg font-heading font-bold">
                            {item?.name}
                          </h3>
                          <p className="text-xs text-purple-900 font-content">
                            {item?.qualification}
                          </p>
                          <div className="pb-2 text-sm text-brandPink font-content drop-shadow-2xl shadow-black">
                            {item?.designation}
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
            <div className="lg:hidden">
              <Carousel
                responsive={responsive2}
                ssr={true}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={5000}
              >
                {homeData?.doctors.map((item: any) => {
                  return (
                    <div
                      key={item?.id}
                      className="mb-2 transition-all duration-500 rounded-xl "
                    >
                      <Link href={`/fertility-experts/${item?.slug}`} passHref>
                        <div className="space-y-4">
                          <Image
                            className="w-56 h-56 mx-auto my-auto mt-4 transition-all duration-500 rounded-full xl:w-44 xl:h-44 hover:scale-110"
                            src={item?.image?.url}
                            alt={item?.name || item?.imageAlt}
                            width={500}
                            height={500}
                            loading="lazy"
                          />
                          <div className="space-y-4">
                            <div className="space-y-1 text-lg font-medium leading-6">
                              <h3 className="text-brandDark font-content">
                                {item?.name}
                              </h3>
                              <p className="text-sm text-brandPurpleDark font-content">
                                {item?.qualification}
                              </p>
                              <p className="pb-2 text-sm text-brandPink font-content">
                                {item?.designation}
                              </p>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  );
                })}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <Faq />
    </div>
  );
};

export default Home;

export const getStaticProps = async () => {
  const url = process.env.ENDPOINT;
  const graphQLClient = new GraphQLClient(url, {
    headers: {
      Authorization: `Bearer ${process.env.GRAPH_CMS_TOKEN}`,
    },
  });
  const query = gql`
    query {
      doctors(orderBy: order_ASC) {
        name
        qualification
        slug
        image {
          url
        }
        medicalRegNo
        id
        designation
      }
      banners(orderBy: order_ASC) {
        title
        id
        url
        order
        image {
          url
        }
      }
    }
  `;

  const data = await graphQLClient.request(query);
  const homeData = data;

  return {
    props: {
      homeData,
    },
    revalidate: 10,
  };
};
