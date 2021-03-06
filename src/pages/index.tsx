import React from "react";
import Head from "next/head";
import HomeComponent from "sections/home";
import Link from "next/link";
import { gql, GraphQLClient } from "graphql-request";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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
        ssr={true}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={5000}
      >
        {homeData.banners.map((items) => (
          <div className="" key={items?.id}>
            <a href={items?.url} target="_blank" rel="noreferrer">
              <img src={items?.image?.url} alt={items?.title} />
            </a>
          </div>
        ))}
      </Carousel>
      <HomeComponent />
      <div className="bg-white" id="ourTeam">
        <div className="max-w-7xl mx-auto py-16 px-4 text-center sm:px-6 lg:px-8 lg:py-12">
          <div className="space-y-12">
            <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
              <h2 className="text-3xl sm:text-4xl font-semibold text-brandPink font-heading">
                ನಮ್ಮ ತಜ್ಞರನ್ನು ಭೇಟಿ ಮಾಡಿ
              </h2>
              <p className="text-md sm:text-xl text-brandDark font-content">
                ನಮ್ಮ ಫಲವತ್ತತೆ ತಜ್ಞರ ತಂಡವು ಅವರ ವ್ಯಾಪಕವಾದ ಕ್ಲಿನಿಕಲ್ ಅನುಭವ ಮತ್ತು
                ಸಂಶೋಧನಾ ಕೊಡುಗೆಗಳು ಮತ್ತು ಅತ್ಯಂತ ಸವಾಲಿನ ಫಲವತ್ತತೆ ಪ್ರಕರಣಗಳಿಗೆ
                ಚಿಕಿತ್ಸೆ ನೀಡುವಲ್ಲಿ ಅವರ ಯಶಸ್ಸಿಗೆ ಹೆಸರುವಾಸಿಯಾಗಿದೆ.
              </p>
            </div>
            <ul className="mx-auto space-y-0 grid grid-cols-2 sm:gap-16 sm:space-y-0 md:grid-col-2 lg:grid-cols-4 lg:max-w-7xl">
              {homeData?.doctors.map((item) => {
                return (
                  <li
                    key={item?.id}
                    className="transition-all duration-500 hover:shadow-2xl rounded-xl mb-2 "
                  >
                    <Link
                      href={`/doctors/${item?.slug}`}
                      passHref
                      scroll={false}
                    >
                      <a>
                        <div className="space-y-4">
                          <img
                            className="mx-auto h-32 w-32 my-auto rounded-full xl:w-44 xl:h-44 mt-4"
                            src={item?.image?.url}
                            alt={item?.name}
                          />
                          <div className="space-y-4">
                            <div className="text-xl leading-6 font-medium space-y-1">
                              <h3 className="text-brandDark font-heading">
                                {item?.name}
                              </h3>
                              <p className="text-brandPurpleDark text-sm font-content">
                                {item?.qualification}
                              </p>
                              <p className="text-brandPink text-sm font-content pb-2">
                                {item?.designation}
                              </p>
                            </div>
                          </div>
                        </div>
                      </a>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

export const getServerSideProps = async () => {
  const url = process.env.ENDPOINT;
  const graphQLClient = new GraphQLClient(url, {
    headers: {
      Authorization: `Bearer ${process.env.GRAPH_CMS_TOKEN}`,
    },
  });
  const query = gql`
    query {
      doctors(locales: [kn, en]) {
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
  };
};
