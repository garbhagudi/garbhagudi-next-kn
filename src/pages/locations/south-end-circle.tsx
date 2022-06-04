import React from "react";
import { gql, GraphQLClient } from "graphql-request";
import Link from "next/link";
import Head from "next/head";
import BreadCrumbs from "components/breadcrumbs";
import Share from "components/share";

const Jayanagar = ({ doctors }) => {
  return (
    <div>
      <Head>
        {/* Primary Tags */}

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>
          ಗರ್ಭಗುಡಿ ಐವಿಎಫ್ ಸೆಂಟರ್, ಸೌತ್ ಎಂಡ್ ಸರ್ಕಲ್ | ಭಾರತದ ಅತ್ಯುತ್ತಮ ಐವಿಎಫ್
          ಮತ್ತು ಫಲವತ್ತತೆ ಆಸ್ಪತ್ರೆ
        </title>
        <meta
          name="title"
          content="ಗರ್ಭಗುಡಿ ಐವಿಎಫ್ ಸೆಂಟರ್, ಸೌತ್ ಎಂಡ್ ಸರ್ಕಲ್ | ಭಾರತದ ಅತ್ಯುತ್ತಮ ಐವಿಎಫ್ ಮತ್ತು ಫಲವತ್ತತೆ ಆಸ್ಪತ್ರೆ"
        />
        <meta
          name="description"
          content="ದೇಶದ ಎಲ್ಲೆಡೆಯ ದಂಪತಿಗಳಿಗೆ ಗರ್ಭಗುಡಿ ಜನಪ್ರಿಯ ಐವಿಎಫ್ ತಾಣವಾಗಿದೆ. ಒಂದೇ
          ಸೂರಿನಡಿ ಸರಳವಾದ ವೈದ್ಯಕೀಯ ನಿರ್ವಹಣೆಯಿಂದ ಶಸ್ತ್ರಚಿಕಿತ್ಸಾ ಚಿಕಿತ್ಸೆಗಳು
          ಮತ್ತು ಎಆರ್‌ಟಿ ವಿಧಾನಗಳವರೆಗೆ, ವೈಯಕ್ತೀಕರಿಸಿದ ಮತ್ತು ಸ್ನೇಹಪರ ವಾತಾವರಣದಲ್ಲಿ
          ಫರ್ಟಿಲಿಟಿ ಮತ್ತು ಸಂತಾನೋತ್ಪತ್ತಿ ಆರೈಕೆ ಸೇವೆಗಳ ಶ್ರೇಣಿಯನ್ನು ಪೂರೈಸುವುದಕ್ಕೆ
          ಕೇಂದ್ರ ಬದ್ಧತೆ ಹೊಂದಿದೆ."
        />

        {/* Open Graph / Facebook */}

        <meta
          property="og:title"
          content="ಗರ್ಭಗುಡಿ ಐವಿಎಫ್ ಸೆಂಟರ್, ಸೌತ್ ಎಂಡ್ ಸರ್ಕಲ್ | ಭಾರತದ ಅತ್ಯುತ್ತಮ ಐವಿಎಫ್ ಮತ್ತು ಫಲವತ್ತತೆ ಆಸ್ಪತ್ರೆ"
        />
        <meta property="og:site_name" content="GarbhaGudi IVF Centre" />
        <meta property="og:url" content="https://garbhagudi.com" />
        <meta
          property="og:description"
          content="ದೇಶದ ಎಲ್ಲೆಡೆಯ ದಂಪತಿಗಳಿಗೆ ಗರ್ಭಗುಡಿ ಜನಪ್ರಿಯ ಐವಿಎಫ್ ತಾಣವಾಗಿದೆ. ಒಂದೇ
          ಸೂರಿನಡಿ ಸರಳವಾದ ವೈದ್ಯಕೀಯ ನಿರ್ವಹಣೆಯಿಂದ ಶಸ್ತ್ರಚಿಕಿತ್ಸಾ ಚಿಕಿತ್ಸೆಗಳು
          ಮತ್ತು ಎಆರ್‌ಟಿ ವಿಧಾನಗಳವರೆಗೆ, ವೈಯಕ್ತೀಕರಿಸಿದ ಮತ್ತು ಸ್ನೇಹಪರ ವಾತಾವರಣದಲ್ಲಿ
          ಫರ್ಟಿಲಿಟಿ ಮತ್ತು ಸಂತಾನೋತ್ಪತ್ತಿ ಆರೈಕೆ ಸೇವೆಗಳ ಶ್ರೇಣಿಯನ್ನು ಪೂರೈಸುವುದಕ್ಕೆ
          ಕೇಂದ್ರ ಬದ್ಧತೆ ಹೊಂದಿದೆ."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/garbhagudiivf/image/upload/v1643277102/Locations/1201x501_SE_sziwh5.jpg"
        />

        {/* Twitter*/}

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@garbhagudiivf" />
        <meta
          name="twitter:title"
          content="GarbhaGudi IVF Centre, South End Circle | Best IVF & Fertility
          Hospital in India"
        />
        <meta
          name="twitter:description"
          content="GarbhaGudi is a place where dreams come alive, hopes never fade, and possibilities never end. We ceaselessly work to help you cherish the golden moment of holding your little bundles of joy."
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/garbhagudiivf/image/upload/v1643277102/Locations/1201x501_SE_sziwh5.jpg"
        />
      </Head>
      <BreadCrumbs
        text1="Locations"
        link1="/locations/fertility-experts"
        text2="South End Circle"
        link2="#"
        link3={""}
        text3={""}
        link4={""}
        text4={""}
      />
      <section className="text-gray-600 body-font relative max-w-7xl mx-auto">
        <h1 className="text-center text-2xl md:text-4xl font-heading pt-8 font-bold">
          ಸೌತ್ ಎಂಡ್ ಸರ್ಕಲ್
        </h1>
        <div>
          <img
            src="https://res.cloudinary.com/garbhagudiivf/image/upload/v1643277102/Locations/1201x501_SE_sziwh5.jpg"
            alt="banner"
            className="rounded-xl mt-4"
          />
          <p className="my-10 text-md sm:text-lg font-content mx-auto px-6 sm:px-0">
            ದೇಶದ ಎಲ್ಲೆಡೆಯ ದಂಪತಿಗಳಿಗೆ ಗರ್ಭಗುಡಿ ಜನಪ್ರಿಯ ಐವಿಎಫ್ ತಾಣವಾಗಿದೆ. ಒಂದೇ
            ಸೂರಿನಡಿ ಸರಳವಾದ ವೈದ್ಯಕೀಯ ನಿರ್ವಹಣೆಯಿಂದ ಶಸ್ತ್ರಚಿಕಿತ್ಸಾ ಚಿಕಿತ್ಸೆಗಳು
            ಮತ್ತು ಎಆರ್‌ಟಿ ವಿಧಾನಗಳವರೆಗೆ, ವೈಯಕ್ತೀಕರಿಸಿದ ಮತ್ತು ಸ್ನೇಹಪರ ವಾತಾವರಣದಲ್ಲಿ
            ಫರ್ಟಿಲಿಟಿ ಮತ್ತು ಸಂತಾನೋತ್ಪತ್ತಿ ಆರೈಕೆ ಸೇವೆಗಳ ಶ್ರೇಣಿಯನ್ನು ಪೂರೈಸುವುದಕ್ಕೆ
            ಕೇಂದ್ರ ಬದ್ಧತೆ ಹೊಂದಿದೆ. ಹಲವಾರು ಸಾವಿರ ಯಶಸ್ವಿ ಐವಿಎಫ್ ಗರ್ಭಧಾರಣೆಯ
            ಕಾರ್ಯದಾಖಲೆಯ ಸಾಧನೆಗೆ ಗರ್ಭಗುಡಿ ಸಾಕ್ಷಿಯಾಗಿ ನಿಂತಿರುವುದಲ್ಲದೇ ವ್ಯಾಪಕ
            ಶ್ರೇಣಿಯ ಸಂತಾನೋತ್ಪತ್ತಿ ಸಮಸ್ಯೆಗಳಿಗೆ ಅತ್ಯಾಧುನಿಕ ವಿಜ್ಞಾನ ಮತ್ತು ಮಾನವೀಯ
            ಸ್ಪರ್ಶದ ವಿಶಿಷ್ಟ ಸಂಯೋಜನೆಯ ಮೂಲಕ ಚಿಕಿತ್ಸೆ ನೀಡುವಲ್ಲಿ ೧೦ಕ್ಕೂ ಹೆಚ್ಚಿನ
            ವರ್ಷಗಳ ಫಲಪ್ರದ ಅನುಭವವನ್ನು ಹೊಂದಿದೆ. ನಿಮ್ಮದೇ ಆದ ಜೈವಿಕ ಮಗುವನ್ನು ಹೊಂದುವ
            ನಿಮ್ಮ ಕನಸನ್ನು ಸಾಧಿಸುವುದಕ್ಕೆ ನಮ್ಮ ಉನ್ನತ ಗುಣಮಟ್ಟದ, ವಿಶ್ವಾಸಾರ್ಹ
            ಫರ್ಟಿಲಿಟಿ ಚಿಕಿತ್ಸೆಯು ಸಹಾಯ ಮಾಡುತ್ತದೆ. ನಾವು ಸಾಧ್ಯವಾದಷ್ಟು ಉತ್ತಮವಾದ
            ಶುಶ್ರೂಷೆ ಪೂರೈಸುತ್ತೇವೆ. ನಿಮ್ಮ ಗರ್ಭಧಾರಣೆಯ ಸಾಧ್ಯತೆಗಳನ್ನು
            ಹೆಚ್ಚಿಸುವುದಕ್ಕಾಗಿ ವೈಯಕ್ತಿಕವಾದ ಚಿಕಿತ್ಸಾಯೋಜನೆಯನ್ನು ಪೂರೈಸುವುದಕ್ಕೆ
            ಕೌಶಲ್ಯಪೂರ್ಣ ವೈದ್ಯರ ನಮ್ಮ ಸಮರ್ಪಿತ ತಂಡವು ನಿಮ್ಮೊಂದಿಗೆ ಸಹಭಾಗಿತ್ವದಲ್ಲಿ
            ಕೆಲಸ ಮಾಡುವುದಲ್ಲದೇ, ನಿಮ್ಮ ಭಾವೋದ್ವೇಗಪೂರ್ಣ ಬಯಕೆಯನ್ನು ಪೂರೈಸಲು ನೆರವು
            ನೀಡುತ್ತದೆ. ಪ್ರತಿ ದಂಪತಿಗಳ ಸಾಟಿಯಿಲ್ಲದ ತೃಪ್ತಿಯ ಖಾತ್ರಿ ಮಾಡಿಕೊಳ್ಳಲು
            ಕೇಂದ್ರವು ಆರಾಮದಾಯಕ ವಾತಾವರಣ ಮತ್ತು ಸಮಗ್ರ ಮಾರ್ಗ ಮತ್ತು ವಿಧಾನವನ್ನು
            ಒದಗಿಸುತ್ತದೆ.
          </p>
        </div>
        <div className="py-6 flex flex-wrap lg:flex-nowrap inset-0 ">
          <div className="lg:w-1/2 md:w-full bg-white flex flex-col md:ml-auto w-full pb-8 md:mt-0 min-h-max">
            <p className="text-center font-qs text-2xl font-semibold mb-10 mt-7 lg:mt-0">
              ಸೌತ್ ಎಂಡ್ ಸರ್ಕಲ್ನಲ್ಲಿರುವ ಫಲವತ್ತತೆ ತಜ್ಞರು
            </p>
            <div className="mx-auto space-y-0 grid grid-cols-2 sm:gap-y-10 sm:gap-x-32 sm:space-y-0 lg:grid-cols-2 lg:max-w-7xl col-span-full">
              {doctors.map((item) => {
                if (item.location?.includes("Jayanagar")) {
                  return (
                    <div className="text-center" key={item?.id}>
                      <Link href={`/doctors/${item?.slug}`} passHref>
                        <a>
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
                        </a>
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
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15554.13494747385!2d77.5796657!3d12.9376617!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1f870d0e467c8c8a!2sGarbhaGudi%20IVF%20Centre%2C%20South%20End%20Circle.!5e0!3m2!1sen!2sin!4v1641897947020!5m2!1sen!2sin"
            ></iframe>
            <div className="bg-white relative flex flex-wrap py-6 rounded-3xl shadow-3xl">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-sm font-qs">
                  ವಿಳಾಸ
                </h2>
                <p className="mt-1 font-content">
                  ಸೌತ್ ಎಂಡ್ ಸರ್ಕಲ್, ೨೬, ಪಟ್ಟಲಮ್ಮ ದೇವಸ್ಥಾನ ರಸ್ತೆ, ಬಸವನಗುಡಿ,
                  ಬೆಂಗಳೂರು, ಕರ್ನಾಟಕ ೫೬೦೦೦೪
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
        <Share pinmedia="https://res.cloudinary.com/garbhagudiivf/image/upload/v1643277102/Locations/1201x501_SE_sziwh5.jpg" />
        <h1 className="text-center text-2xl md:text-4xl font-heading py-8 font-bold mx-auto">
          ವರ್ಚುವಲ್ ಪ್ರವಾಸ
        </h1>
        <ul className="mx-auto space-y-0 grid grid-cols-1 sm:gap-x-10 py-8 px-2 lg:grid-cols-3 max-w-7xl">
          <li>
            <div>
              <div className="bg-gray-300 rounded-3xl overflow-hidden p-5 relative h-[24rem] mx-auto mt-4">
                <iframe
                  width="100%"
                  height="100%"
                  className="absolute inset-0"
                  frameBorder="0"
                  loading="lazy"
                  title="map"
                  scrolling="no"
                  src="https://www.google.com/maps/embed?pb=!4v1641898232400!6m8!1m7!1sCAoSLEFGMVFpcE13MXhaWTZ6ek5fU0hoemJuNG8tOTNTeEp5QnRMQnQxQnQtWGJ6!2m2!1d12.93756359941876!2d77.57952192929133!3f229.55198337324956!4f1.395388453448362!5f1.311466258877413"
                ></iframe>
              </div>
            </div>
          </li>
          <li>
            <div>
              <div className="bg-gray-300 rounded-3xl overflow-hidden p-5 relative h-[24rem] mx-auto mt-4">
                <iframe
                  width="100%"
                  height="100%"
                  className="absolute inset-0"
                  frameBorder="0"
                  loading="lazy"
                  title="map"
                  scrolling="no"
                  src="https://www.google.com/maps/embed?pb=!4v1641898353015!6m8!1m7!1sCAoSLEFGMVFpcFBqOGRpWmRjVGpXam5tdkYxbE10VlJBaElXWUNDb1dIaXB0Ukxz!2m2!1d12.93756918010595!2d77.57955920508027!3f216.09!4f-19.17!5f0.5970117501821992"
                ></iframe>
              </div>
            </div>
          </li>
          <li>
            <div>
              <div className="bg-gray-300 rounded-3xl overflow-hidden p-5 relative h-[24rem] mx-auto mt-4">
                <iframe
                  width="100%"
                  height="100%"
                  className="absolute inset-0"
                  frameBorder="0"
                  loading="lazy"
                  title="map"
                  scrolling="no"
                  src="https://www.google.com/maps/embed?pb=!4v1641898390219!6m8!1m7!1sCAoSLEFGMVFpcE5iaGVsRUppXy1tbmFIUVE1eUItS1BjS0R1d2FwVUs0anY0WXRp!2m2!1d12.93758987251972!2d77.57952480693757!3f155.05!4f-20.659999999999997!5f0.5970117501821992"
                ></iframe>
              </div>
            </div>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Jayanagar;

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
