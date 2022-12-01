import React from "react";
import { gql, GraphQLClient } from "graphql-request";
import Link from "next/link";
import Head from "next/head";
import BreadCrumbs from "components/breadcrumbs";
import Share from "components/share";

const KalyanNagar = ({ doctors }) => {
  return (
    <div>
      <Head>
        {/* Primary Tags */}

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>
          ಗರ್ಭಗುಡಿ ಐವಿಎಫ್ ಸೆಂಟರ್ , ಕಲ್ಯಾಣ್ ನಗರ | ಭಾರತದ ಅತ್ಯುತ್ತಮ ಐವಿಎಫ್ ಮತ್ತು
          ಫಲವತ್ತತೆ ಆಸ್ಪತ್ರೆ
        </title>
        <meta
          name="title"
          content="ಗರ್ಭಗುಡಿ ಐವಿಎಫ್ ಸೆಂಟರ್ , ಕಲ್ಯಾಣ್ ನಗರ | ಭಾರತದ ಅತ್ಯುತ್ತಮ ಐವಿಎಫ್ ಮತ್ತು ಫಲವತ್ತತೆ ಆಸ್ಪತ್ರೆ"
        />
        <meta
          name="description"
          content="ಗರ್ಭಗುಡಿ ಒಂದು ಖ್ಯಾತ ಐವಿಎಫ್ ಕೇಂದ್ರವಾಗಿದ್ದು, ಸಂತಾನೋತ್ಪತ್ತಿ ಸಮಸ್ಯೆಯ
          ಎಲ್ಲಾ ಕಾರಣಗಳನ್ನು ಪರಿಹರಿಸಲು ಬಹುತೇಕ ಪ್ರತಿ ದಂಪತಿಗಳಿಗೆ ಚಿಕಿತ್ಸೆಯ
          ಆಯ್ಕೆಯನ್ನು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಲು ನೆರವಿನ ಸಂತಾನೋತ್ಪತ್ತಿ ತಂತ್ರಗಳ ಸಂಪೂರ್ಣ
          ಶ್ರೇಣಿಯನ್ನು ಸಾದರಪಡಿಸುತ್ತದೆ"
        />

        {/* Open Graph / Facebook */}

        <meta
          property="og:title"
          content="ಗರ್ಭಗುಡಿ ಐವಿಎಫ್ ಸೆಂಟರ್ , ಕಲ್ಯಾಣ್ ನಗರ | ಭಾರತದ ಅತ್ಯುತ್ತಮ ಐವಿಎಫ್ ಮತ್ತು ಫಲವತ್ತತೆ ಆಸ್ಪತ್ರೆ"
        />
        <meta property="og:site_name" content="GarbhaGudi IVF Centre" />
        <meta property="og:url" content="https://garbhagudi.com" />
        <meta
          property="og:description"
          content="ಗರ್ಭಗುಡಿ ಒಂದು ಖ್ಯಾತ ಐವಿಎಫ್ ಕೇಂದ್ರವಾಗಿದ್ದು, ಸಂತಾನೋತ್ಪತ್ತಿ ಸಮಸ್ಯೆಯ
          ಎಲ್ಲಾ ಕಾರಣಗಳನ್ನು ಪರಿಹರಿಸಲು ಬಹುತೇಕ ಪ್ರತಿ ದಂಪತಿಗಳಿಗೆ ಚಿಕಿತ್ಸೆಯ
          ಆಯ್ಕೆಯನ್ನು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಲು ನೆರವಿನ ಸಂತಾನೋತ್ಪತ್ತಿ ತಂತ್ರಗಳ ಸಂಪೂರ್ಣ
          ಶ್ರೇಣಿಯನ್ನು ಸಾದರಪಡಿಸುತ್ತದೆ"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/garbhagudiivf/image/upload/v1643277077/Locations/1280x500_KN_irhw7p.jpg"
        />

        {/* Twitter*/}

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@garbhagudiivf" />
        <meta
          name="twitter:title"
          content="GarbhaGudi IVF Centre, Kalyan Nagar | Best IVF & Fertility Hospital in
          India"
        />
        <meta
          name="twitter:description"
          content="GarbhaGudi is a place where dreams come alive, hopes never fade, and possibilities never end. We ceaselessly work to help you cherish the golden moment of holding your little bundles of joy."
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/garbhagudiivf/image/upload/v1643277077/Locations/1280x500_KN_irhw7p.jpg"
        />
      </Head>
      <BreadCrumbs
        text1="Locations"
        link1="/locations/fertility-experts"
        text2="Kalyan Nagar"
        link2="#"
        link3={""}
        text3={""}
        link4={""}
        text4={""}
      />
      <section className="text-gray-600 body-font relative max-w-7xl mx-auto">
        <h1 className="text-center text-2xl md:text-4xl font-heading pt-8 font-bold">
          ಕಲ್ಯಾಣ್ ನಗರ
        </h1>
        <div>
          <img
            src="https://res.cloudinary.com/garbhagudiivf/image/upload/v1643277077/Locations/1280x500_KN_irhw7p.jpg"
            alt="banner"
            className="rounded-xl mt-4"
          />
          <p className="my-10 text-md sm:text-lg font-content mx-auto px-6 sm:px-0">
            ಗರ್ಭಗುಡಿ ಒಂದು ಖ್ಯಾತ ಐವಿಎಫ್ ಕೇಂದ್ರವಾಗಿದ್ದು, ಸಂತಾನೋತ್ಪತ್ತಿ ಸಮಸ್ಯೆಯ
            ಎಲ್ಲಾ ಕಾರಣಗಳನ್ನು ಪರಿಹರಿಸಲು ಬಹುತೇಕ ಪ್ರತಿ ದಂಪತಿಗಳಿಗೆ ಚಿಕಿತ್ಸೆಯ
            ಆಯ್ಕೆಯನ್ನು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಲು ನೆರವಿನ ಸಂತಾನೋತ್ಪತ್ತಿ ತಂತ್ರಗಳ ಸಂಪೂರ್ಣ
            ಶ್ರೇಣಿಯನ್ನು ಸಾದರಪಡಿಸುತ್ತದೆ. ನಮ್ಮ ವೈದ್ಯರು ಐವಿಎಫ್‌ನಲ್ಲಿ ಅಪಾರ ಅನುಭವ
            ಹೊಂದಿರುವ ಪ್ರಸಿದ್ಧ ಸ್ತ್ರೀರೋಗತಜ್ಞರು, ಮತ್ತು ನಾವು ತರಬೇತಿ ಪಡೆದ ಮತ್ತು
            ಅನುಭವಿ ಭ್ರೂಣಶಾಸ್ತ್ರಜ್ಞರ ಆಂತರಿಕ ತಂಡವನ್ನು ಹೊಂದಿದ್ದೇವೆ. ಐಸಿಎಸ್‌ಐ ಮತ್ತು
            ಹೆಚ್ಚಿನವುಗಳಂತಹ ಉನ್ನತೀಕರಿಸಿದ ಭ್ರೂಣಶಾಸ್ತ್ರದ ಸೇವೆಗಳನ್ನು ಒದಗಿಸಲು ಇದು
            ನಮಗೆ ಸಹಾಯ ಮಾಡುತ್ತದೆ. ನಮ್ಮ ಭ್ರೂಣಶಾಸ್ತ್ರ ಪ್ರಯೋಗಾಲಯದಲ್ಲಿ ನಾವು ಉತ್ತಮ
            ಅಭ್ಯಾಸಗಳನ್ನು ಅನುಸರಿಸುತ್ತೇವೆ. ತಂತ್ರಜ್ಞಾನಗಳು ಮತ್ತು ಸಿಬ್ಬಂದಿಗಳು
            ಅತ್ಯುತ್ತಮ ಫಲಿತಾಂಶಗಳ ಖಾತ್ರಿಮಾಡಿಕೊಳ್ಳಲು ಪ್ರಯೋಗಾಲಯದ ನಿಯತಾಂಕಗಳನ್ನು
            ಸತತವಾಗಿ ಮೇಲ್ವಿಚಾರಣೆ ಮಾಡುತ್ತಾರೆ. ಅದರ ಅಸಾಧಾರಣ ಗುಣಮಟ್ಟದ ಚಿಕಿತ್ಸೆ, ಸಮಂಜಸ
            ವೆಚ್ಚಗಳು ಮತ್ತು ಆತಿಥ್ಯದಿಂದಾಗಿ ಕೇಂದ್ರವು ಗಮನಾರ್ಹ ಯಶಸ್ಸಿನ ಮಟ್ಟ ಸಾಧಿಸಿದೆ.
            ಸಂತಾನೋತ್ಪತ್ತಿ ಸಮಸ್ಯೆ ಮತ್ತು ಇತರ ಸಂತಾನೋತ್ಪತ್ತಿ ಆರೋಗ್ಯ ಸಮಸ್ಯೆಗಳನ್ನು
            ಎದುರಿಸುತ್ತಿರುವ ರೋಗಿಗಳಿಗೆ ಸಾಟಿಯಿಲ್ಲದ ಆರೈಕೆಯನ್ನು ಪೂರೈಸಲು ನಾವು
            ಬದ್ಧರಾಗಿದ್ದೇವೆ. ನಮ್ಮ ತಜ್ಞರು ಮತ್ತು ಸಿಬ್ಬಂದಿ ನಿಮಗೆ ಹೆಚ್ಚಿನ ಮಟ್ಟದ ಕಾಳಜಿ
            ಮತ್ತು ಸಹಾನುಭೂತಿಯನ್ನು ಪೂರೈಸುವುದಕ್ಕಾಗಿ ಸಮರ್ಪಿತ ಮನೋಭಾವ ಹೊಂದಿರುತ್ತಾರೆ.
            ಗರ್ಭಗುಡಿ ಬಹು ಶಾಖೆಗಳೊಂದಿಗೆ ಪ್ರತಿ ರೋಗಿಗೆ ಅತ್ಯುತ್ತಮ ಸಂಪರ್ಕ ಮತ್ತು
            ಉತ್ಕೃಷ್ಟ ಆರೈಕೆಯನ್ನು ಸಾದರಪಡಿಸಲು ಮತ್ತು ರಾಷ್ಟ್ರದ ಎಲ್ಲೆಡೆ ಮತ್ತಷ್ಟು
            ವಿಸ್ತರಿಸಲು ಯೋಜಿಸಿದೆ.
          </p>
        </div>
        <div className="py-6 flex flex-wrap lg:flex-nowrap inset-0 ">
          <div className="lg:w-1/2 md:w-full bg-white flex flex-col md:ml-auto w-full pb-8 md:mt-0 min-h-max">
            <p className="text-center font-qs text-2xl font-semibold mb-10 mt-7 lg:mt-0">
              ಕಲ್ಯಾಣ್ ನಗರದಲ್ಲಿರುವ ಫಲವತ್ತತೆ ತಜ್ಞರು
            </p>
            <div className="mx-auto space-y-0 grid grid-cols-2 sm:gap-y-10 sm:gap-x-32 sm:space-y-0 lg:grid-cols-2 lg:max-w-7xl col-span-full">
              {doctors.map((item) => {
                if (item.location?.includes("KalyanNagar")) {
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
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7774.402186224549!2d77.64597804814905!3d13.022862590006048!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xfb184afa11ae1fdd!2sGarbhaGudi%20IVF%20Centre%2C%20Kalyan%20Nagar.!5e0!3m2!1sen!2sin!4v1641899203760!5m2!1sen!2sin"
            ></iframe>
            <div className="bg-white relative flex flex-wrap py-6 rounded-3xl shadow-3xl">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-sm font-qs">
                  ವಿಳಾಸ
                </h2>
                <p className="mt-1 font-content">
                  ಪಾರ್ಕ್ ಲ್ಯಾಂಡಿAಗ್, ೫ಎಸಿ-೭೦೯, ಹೊರವರ್ತುಲ ರಸ್ತೆ, ಬಾಲಚಂದ್ರ ಲೇಔಟ್,
                  ಎಚ್‌ಆರ್‌ಬಿಆರ್ ಲೇಔಟ್ ೨ನೇ ಬ್ಲಾಕ್, ಚೆಳೆಕರೆ, ಎಕ್‌ಟೆನ್ಷನ್,
                  ಬೆಂಗಳೂರು, ಕರ್ನಾಟಕ ೫೬೦೦೪೩
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
        <Share pinmedia="https://res.cloudinary.com/garbhagudiivf/image/upload/v1643277077/Locations/1280x500_KN_irhw7p.jpg" />
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
                  src="https://www.google.com/maps/embed?pb=!4v1641899255604!6m8!1m7!1sCAoSLEFGMVFpcE00ZXNBYVQzZklveUJ2c2Y1aExRMG4xMklYcHFuNkVnVzZ4US1m!2m2!1d13.0244657460505!2d77.64408899883404!3f237.31!4f-23.989999999999995!5f0.5970117501821992"
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
                  src="https://www.google.com/maps/embed?pb=!4v1641899338533!6m8!1m7!1sCAoSLEFGMVFpcFBWMkhtQk1zTnNvTDRneDVld1BxNjBNZEthd1gtSl9ndm50NjRK!2m2!1d13.02447078843926!2d77.64401920791784!3f76.42!4f-14.329999999999998!5f0.5970117501821992"
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
                  src="https://www.google.com/maps/embed?pb=!4v1641899398114!6m8!1m7!1sCAoSLEFGMVFpcFBURFhkZnVIQWhZWEJOVlFPYUotck0wVXUtdGZrRFNrVnBFMlpD!2m2!1d13.02444002159439!2d77.64405567715198!3f355.9080810546875!4f0!5f0.7820865974627469"
                ></iframe>
              </div>
            </div>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default KalyanNagar;

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
