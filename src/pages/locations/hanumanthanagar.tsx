import React from "react";
import { gql, GraphQLClient } from "graphql-request";
import Link from "next/link";
import Head from "next/head";
import BreadCrumbs from "components/breadcrumbs";
import Share from "components/share";

const HanumanthaNagar = ({ doctors }) => {
  return (
    <div>
      <Head>
        {/* Primary Tags */}

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>
          ಗರ್ಭಗುಡಿ ಐವಿಎಫ್ ಸೆಂಟರ್ , ಹನುಮಂತನಗರ | ಭಾರತದ ಅತ್ಯುತ್ತಮ ಐವಿಎಫ್ ಮತ್ತು
          ಫಲವತ್ತತೆ ಆಸ್ಪತ್ರೆ
        </title>
        <meta
          name="title"
          content="ಗರ್ಭಗುಡಿ ಐವಿಎಫ್ ಸೆಂಟರ್ , ಹನುಮಂತನಗರ | ಭಾರತದ ಅತ್ಯುತ್ತಮ ಐವಿಎಫ್ ಮತ್ತು ಫಲವತ್ತತೆ ಆಸ್ಪತ್ರೆ"
        />
        <meta
          name="description"
          content="ಅತ್ಯಂತ ಪ್ರತಿಷ್ಠಿತ ಐವಿಎಫ್ ಆಸ್ಪತ್ರೆಗಳಲ್ಲಿ ಒಂದೆಂಬ ಗೌರವವನ್ನು ಗರ್ಭಗುಡಿ
          ಪಡೆದುಕೊಂಡಿದೆ. ಸಾಧ್ಯವಿರುವ ಪ್ರತಿಯೊಂದು ಸಂತಾನೋತ್ಪತ್ತಿ ಚಿಕಿತ್ಸೆ ಮತ್ತು
          ವಿಶ್ವದರ್ಜೆಯ ಸೌಕರ್ಯಗಳನ್ನು ಜನರಿಗೆ ಪೂರೈಸುತ್ತದೆ"
        />

        {/* Open Graph / Facebook */}

        <meta
          property="og:title"
          content="ಗರ್ಭಗುಡಿ ಐವಿಎಫ್ ಸೆಂಟರ್ , ಹನುಮಂತನಗರ | ಭಾರತದ ಅತ್ಯುತ್ತಮ ಐವಿಎಫ್ ಮತ್ತು
          ಫಲವತ್ತತೆ ಆಸ್ಪತ್ರೆ"
        />
        <meta property="og:site_name" content="GarbhaGudi IVF Centre" />
        <meta property="og:url" content="https://garbhagudi.com" />
        <meta
          property="og:description"
          content="ಅತ್ಯಂತ ಪ್ರತಿಷ್ಠಿತ ಐವಿಎಫ್ ಆಸ್ಪತ್ರೆಗಳಲ್ಲಿ ಒಂದೆಂಬ ಗೌರವವನ್ನು ಗರ್ಭಗುಡಿ
          ಪಡೆದುಕೊಂಡಿದೆ. ಸಾಧ್ಯವಿರುವ ಪ್ರತಿಯೊಂದು ಸಂತಾನೋತ್ಪತ್ತಿ ಚಿಕಿತ್ಸೆ ಮತ್ತು
          ವಿಶ್ವದರ್ಜೆಯ ಸೌಕರ್ಯಗಳನ್ನು ಜನರಿಗೆ ಪೂರೈಸುತ್ತದೆ"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/garbhagudiivf/image/upload/v1643277077/Locations/1280x500_HN_wql2mm.jpg"
        />

        {/* Twitter*/}

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@garbhagudiivf" />
        <meta
          name="twitter:title"
          content="GarbhaGudi IVF Centre, Hanumanthanagar | Best IVF & Fertility Hospital
          in India"
        />
        <meta
          name="twitter:description"
          content="GarbhaGudi is a place where dreams come alive, hopes never fade, and possibilities never end. We ceaselessly work to help you cherish the golden moment of holding your little bundles of joy."
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/garbhagudiivf/image/upload/v1643277077/Locations/1280x500_HN_wql2mm.jpg"
        />
      </Head>
      <BreadCrumbs
        text1="Locations"
        link1="/locations/fertility-experts"
        text2="Hanumanthanagar"
        link2="#"
        link3={""}
        text3={""}
        link4={""}
        text4={""}
      />
      <section className="text-gray-600 body-font relative max-w-7xl mx-auto">
        <h1 className="text-center text-2xl md:text-4xl font-heading pt-8 font-bold">
          ಹನುಮಂತನಗರ
        </h1>
        <div>
          <img
            src="https://res.cloudinary.com/garbhagudiivf/image/upload/v1643277077/Locations/1280x500_HN_wql2mm.jpg"
            alt="banner"
            className="rounded-xl mt-4"
          />
          <p className="my-10 text-md sm:text-lg font-content mx-auto px-6 sm:px-0">
            ಅತ್ಯಂತ ಪ್ರತಿಷ್ಠಿತ ಐವಿಎಫ್ ಆಸ್ಪತ್ರೆಗಳಲ್ಲಿ ಒಂದೆಂಬ ಗೌರವವನ್ನು ಗರ್ಭಗುಡಿ
            ಪಡೆದುಕೊಂಡಿದೆ. ಸಾಧ್ಯವಿರುವ ಪ್ರತಿಯೊಂದು ಸಂತಾನೋತ್ಪತ್ತಿ ಚಿಕಿತ್ಸೆ ಮತ್ತು
            ವಿಶ್ವದರ್ಜೆಯ ಸೌಕರ್ಯಗಳನ್ನು ಜನರಿಗೆ ಪೂರೈಸುತ್ತದೆ. ತರಬೇತಿ ಪಡೆದ ಮತ್ತು
            ಅನುಭವಿ ಸ್ತ್ರೀರೋಗತಜ್ಞರು, ಪುರುಷರೋಗಶಾಸ್ತ ತಜ್ಞರು, ದಾದಿಯರು, ಸಲಹೆಗಾರರು,
            ಭ್ರೂಣಶಾಸ್ತ್ರಜ್ಞರು ಮತ್ತು ಲ್ಯಾಬ್ ತಂತ್ರಜ್ಞರು ಸೇರಿದಂತೆ ನಮ್ಮ
            ಸಂತಾನೋತ್ಪತ್ತಿ ಆರೋಗ್ಯ ಶುಶ್ರೂಷೆ ತಂಡಗಳ ಬಗ್ಗೆ ನಾವು ಹೆಮ್ಮೆಪಡುತ್ತೇವೆ.
            ಗರ್ಭಗುಡಿ ಕುಟುಂಬದ ಪ್ರತಿಯೊಬ್ಬ ಸದಸ್ಯರು ತಮ್ಮ ಕ್ಷೇತ್ರಗಳಲ್ಲಿ ಉತ್ಕೃಷ್ಟ
            ಸಾಧನೆ ಮಾಡುತ್ತಾರೆ ಮತ್ತು ಆರೋಗ್ಯಶುಶ್ರೂಷೆ ಚಿಕಿತ್ಸೆಗಳು ಮತ್ತು ಪರಿಹಾರಗಳನ್ನು
            ಅತ್ಯಂತ ಹೆಚ್ಚಿನ ಕಾಳಜಿ ಮತ್ತು ನಿಖರತೆಯೊಂದಿಗೆ ಒದಗಿಸುತ್ತಾರೆ. ಕೇಂದ್ರವು ಅದರ
            ಸಮಗ್ರ ಆರೈಕೆ ಜಾಲ, ಮೌಲ್ಯಮಾಪನ, ರೋಗನಿರ್ಣಯ, ಯಶಸ್ಸಿನ ದರಗಳು, ಉನ್ನತ
            ವೈಜ್ಞಾನಿಕ ತಂತ್ರಗಳು ಮತ್ತು ಸಮಾಲೋಚನೆ ಬೆಂಬಲಕ್ಕಾಗಿ ಗುರುತಿಸಲ್ಪಟ್ಟಿದೆ.
            ಗರ್ಭಗುಡಿಯು ಊಸೈಟ್/ಎಂಬ್ರಿಯೋ ಕಲ್ಚರ್, ಬ್ಲಾಸ್ಟೋಸಿಸ್ಟ್ ಕಲ್ಚರ್ ಮತ್ತು
            ಟ್ರಾನ್ಸ್ಫರ್, ಐಸಿಎಸ್‌ಐ, ಎಂಬ್ರಿಯೋ ಕ್ರಯೋಪ್ರೆಸರ್ವೇಶನ್, ಮತ್ತು ಲೇಸರ್
            ಅಸಿಸ್ಟೆಡ್ ಹಾಚಿಂಗ್ ನಂತಹ ಉನ್ನತ ತಂತ್ರಜ್ಞಾನಗಳೊಂದಿಗೆ ಕಾರ್ಯ
            ನಿರ್ವಹಿಸುತ್ತದೆ. ಐಯುಐ, ಐವಿಎಫ್, ಐಸಿಎಸ್‌ಐ ಮತ್ತು ಪುರುಷ ರೋಗಶಾಸ್ತç
            ಸೇವೆಗಳಂತಹ ಪ್ರಮುಖ ಕಾರ್ಯವಿಧಾನಗಳ ಜೊತೆಗೆೆ್ತçöಐವಿಎಫ್ ಮತ್ತು ಐಸಿಎಸ್‌ಐ ನಂತರ
            ಗರ್ಭಾವಸ್ಥೆಯ ಸಾಧ್ಯತೆಗಳನ್ನು ಸುಧಾರಿಸಲು ಕೇಂದ್ರವು ಹಲವಾರು ಅತ್ಯಾಧುನಿಕ
            ತಂತ್ರಜ್ಞಾನಗಳನ್ನು ಸಾದರಪಡಿಸುತ್ತದೆ. ಈ ಹಿಂದೆ ಅನೇಕ ವೈಫಲ್ಯಗಳನ್ನು ಹೊಂದಿರುವ
            ರೋಗಿಗಳಲ್ಲಿಯೂ ಕೂಡ ಇದು ಗರ್ಭಾವಸ್ಥೆಯ ಸಾಧ್ಯತೆಗಳನ್ನು ಹೆಚ್ಚಿಸುತ್ತದೆ.
            ಜಾಗತಿಕವಾಗಿ ಲಭ್ಯವಿರುವುದಕ್ಕೆ ಸಮನಾಗಿ ಭಾರತದಲ್ಲಿ ಉನ್ನತೀಕರಿಸಿದ ಸಹಾಯಕ
            ಸಂತಾನೋತ್ಪತ್ತಿ ತಂತ್ರಜ್ಞಾನವನ್ನು (ಎಆರ್‌ಟಿ) ಪೂರೈಸುವುದು ಕೇಂದ್ರದ ಅಂತಿಮ
            ಗುರಿಯಾಗಿದೆ.
          </p>
        </div>
        <div className="py-6 flex flex-wrap lg:flex-nowrap inset-0 ">
          <div className="lg:w-1/2 md:w-full bg-white flex flex-col md:ml-auto w-full pb-8 md:mt-0 min-h-max">
            <p className="text-center font-qs text-2xl font-semibold mb-10 mt-7 lg:mt-0">
              ಹನುಮಂತನಗರದಲ್ಲಿರುವ ಫಲವತ್ತತೆ ತಜ್ಞರು
            </p>
            <div className="mx-auto space-y-0 grid grid-cols-2 sm:gap-y-10 sm:gap-x-32 sm:space-y-0 lg:grid-cols-2 lg:max-w-7xl col-span-full">
              {doctors.map((item) => {
                if (item.location?.includes("HanumanthaNagar")) {
                  return (
                    <div className="text-center" key={item?.id}>
                      <Link href={`/doctors/${item?.slug}`} passHref>
                        <div>
                          <div className="space-y-4">
                            <img
                              className="mx-auto h-40 w-40 my-auto rounded-full mt-4"
                              src={item?.image.url}
                              alt={item?.name}
                            />
                            <div className="space-y-4">
                              <div className="text-lg leading-6 font-medium space-y-1">
                                <h3 className="text-brandDark font-content">
                                  {item?.name}
                                </h3>
                                <p className="text-brandPurple text-sm font-content">
                                  {item?.qualification}
                                </p>
                                <p className="text-brandPink text-sm font-content">
                                  {item?.designation}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  );
                }
              })}
            </div>
          </div>
          <div className="lg:w-1/2 bg-gray-300 rounded-3xl overflow-hidden p-2 lg:p-10 flex items-end justify-start relative h-[44rem] md:ml-auto w-full">
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0"
              frameBorder="0"
              loading="lazy"
              title="map"
              scrolling="no"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15553.886019164418!2d77.556468!3d12.9416527!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x61c537027ad19840!2sGarbhaGudi%20IVF%20Centre%2C%20Hanumanthanagar.!5e0!3m2!1sen!2sin!4v1641896590112!5m2!1sen!2sin"
            ></iframe>
            <div className="bg-white relative flex flex-wrap py-6 rounded-3xl shadow-3xl">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-sm font-qs">
                  ವಿಳಾಸ
                </h2>
                <p className="mt-1 font-content">
                  ಸುಭಶ್ರೀ ಕಾಂಪ್ಲೆಕ್ಸ್, ೨೧೦/ಎ, ಕುಮಾರಸ್ವಾಮಿ ದೇವಸ್ಥಾನ ರಸ್ತೆ, ೨ನೇ
                  ಬ್ಲಾಕ್, ೧ ನೇ ಘಟ್ಟ , ಬನಶಂಕರಿ ೧ನೇ ಹಂತ , ಬನಶಂಕರಿ, ಬೆಂಗಳೂರು,
                  ಕರ್ನಾಟಕ ೫೬೦೦೫೦
                </p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="font-semibold text-gray-900 tracking-widest text-sm font-qs">
                  ಇಮೇಲ್
                </h2>
                <a className="text-indigo-500 leading-relaxed">
                  <a
                    href="mailto:dreams@garbhagudi.com"
                    className="text-brandPink font-qs"
                  >
                    dreams@garbhagudi.com
                  </a>
                </a>
                <h2 className="font-semibold text-gray-900 tracking-widest text-sm mt-4 font-qs">
                  ಕರೆ ಮಾಡಿ
                </h2>
                <p className="leading-relaxed font-qs">
                  <a href="tel:+918880000909">+91 888 000 0909</a>
                </p>
                <h2 className="font-semibold text-gray-900 tracking-widest text-sm mt-4 font-qs">
                  ವಾಟ್ಸ್ಯಾಪ್ಪ್
                </h2>
                <p className="leading-relaxed font-qs">
                  <a
                    href="https://wa.me/918884183338?text=Hi."
                    target="_blank"
                    rel="noreferrer"
                  >
                    +91 888 418 3338
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <Share pinmedia="https://res.cloudinary.com/garbhagudiivf/image/upload/v1643277077/Locations/1280x500_HN_wql2mm.jpg" />
        <h1 className="text-center text-2xl md:text-4xl font-heading py-8 font-bold mx-auto">
          ವರ್ಚುವಲ್ ಪ್ರವಾಸ
        </h1>
        <ul className="mx-auto grid grid-cols-1 sm:gap-x-0 py-8 px-2 lg:grid-cols-3 max-w-7xl">
          <li>
            <div className="space-y-4">
              <div className="bg-gray-300 rounded-3xl overflow-hidden sm:mr-10 p-10 relative h-[24rem] mx-auto mt-4">
                <iframe
                  width="100%"
                  height="100%"
                  className="absolute inset-0"
                  frameBorder="0"
                  loading="lazy"
                  title="map"
                  scrolling="no"
                  src="https://www.google.com/maps/embed?pb=!4v1641896675471!6m8!1m7!1sCAoSLEFGMVFpcFBVM2JkNHlVUWFwQnhhU1ZtLTlzYXBDT3Q1S3FVRW55cEp2RXcy!2m2!1d12.941557910849!2d77.556447015539!3f220.45!4f10.689999999999998!5f0.8108372072620882"
                ></iframe>
              </div>
            </div>
          </li>
          <li>
            <div className="space-y-4">
              <div className="bg-gray-300 rounded-3xl overflow-hidden sm:mr-10 p-10 relative h-[24rem] mx-auto mt-4">
                <iframe
                  width="100%"
                  height="100%"
                  className="absolute inset-0"
                  frameBorder="0"
                  loading="lazy"
                  title="map"
                  scrolling="no"
                  src="https://www.google.com/maps/embed?pb=!4v1641896711595!6m8!1m7!1sCAoSLEFGMVFpcE1FaHNzU01obk9MZ29Pd1lLRHdIZzRLZHRoU29JNVJwSkZzTGVI!2m2!1d12.941569557224!2d77.556440079272!3f266.56!4f-15.400000000000006!5f0.5970117501821992"
                ></iframe>
              </div>
            </div>
          </li>
          <li>
            <div className="space-y-4">
              <div className="bg-gray-300 rounded-3xl overflow-hidden sm:mr-10 p-10 relative h-[24rem] mx-auto mt-4">
                <iframe
                  width="100%"
                  height="100%"
                  className="absolute inset-0"
                  frameBorder="0"
                  loading="lazy"
                  title="map"
                  scrolling="no"
                  src="https://www.google.com/maps/embed?pb=!4v1641896761566!6m8!1m7!1sCAoSLEFGMVFpcE53VS1CVEs4YXVJLVZxb0dZYl9hcklldFFmT01rZnZRRjYwUXpM!2m2!1d12.941567795806!2d77.556419421466!3f104.6934585571289!4f0!5f0.7820865974627469"
                ></iframe>
              </div>
            </div>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default HanumanthaNagar;

export const getStaticProps = async () => {
  const url = process.env.ENDPOINT;
  const graphQLClient = new GraphQLClient(url, {
    headers: {
      Authorization: `Bearer ${process.env.GRAPH_CMS_TOKEN}`,
    },
  });
  const query = gql`
    query {
      doctors {
        name
        qualification
        slug
        location
        image {
          url
        }
        medicalRegNo
        id
        designation
      }
    }
  `;
  const data = await graphQLClient.request(query);
  const doctors = data.doctors;
  return {
    props: {
      doctors,
    },
    revalidate: 180,
  };
};
