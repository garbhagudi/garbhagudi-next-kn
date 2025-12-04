import React from "react";
import { RichText } from "@graphcms/rich-text-react-renderer";
import Head from "next/head";
import BreadCrumbs from "components/breadcrumbs";
import Link from "next/link";
import { gql } from "@apollo/client";
import apolloClient from "lib/apollo-graphcms";
import { useRouter } from "next/router";
import Share from "components/share";
import { SiGooglemaps } from "react-icons/si";

export const getStaticProps = async ({ params }) => {
  const { data } = await apolloClient.query({
    query: gql`
      query ($slug: String!) {
        doctor(where: { slug: $slug }) {
          id
          name
          bio {
            raw
            text
          }
          location {
            title
            slug
          }
          bookAnAppointment
          slug
          languages
          image {
            url
          }
          qualification
          designation
          medicalRegNo
        }
      }
    `,
    variables: {
      slug: params.slug,
    },
  });
  if (data?.error || !data.doctor) {
    return {
      redirect: {
        destination: "/fertility-experts",
        permanent: true,
      },
    };
  }
  return {
    props: {
      doctor: data.doctor,
    },
    revalidate: 180,
  };
};

export async function getStaticPaths() {
  const { data } = await apolloClient.query({
    query: gql`
      {
        doctors {
          slug
          name
        }
      }
    `,
  });

  return {
    paths: data.doctors.map(({ slug }) => ({ params: { slug } })),
    fallback: true,
  };
}

const Doctor = ({ doctor }) => {
  const router = useRouter();

  const title = `${doctor?.name} - ಫಲವತ್ತತೆ ತಜ್ಞರು | ಗರ್ಭಗುಡಿ ಐವಿಎಫ್ ಕೇಂದ್ರ`;

  if (router.isFallback) {
    return (
      <div className="flex h-screen justify-center text-brandPink text-content animate-ping items-center">
        Loading...
      </div>
    );
  }
  return (
    <div>
      <Head>
        {/* Primary Tags */}

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{title}</title>
        <meta name="title" content={title} />
        <meta name="description" content={doctor?.bio?.text.slice(0, 180)} />

        {/* Open Graph / Facebook */}

        <meta property="og:title" content={title} />
        <meta property="og:site_name" content="GarbhaGudi IVF Centre" />
        <meta property="og:url" content="https://garbhagudi.com" />
        <meta
          property="og:description"
          content={doctor?.bio?.text.slice(0, 180)}
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={doctor?.image.url} />

        {/* Twitter*/}

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@garbhagudiivf" />
        <meta name="twitter:title" content={title} />
        <meta
          name="twitter:description"
          content={doctor?.bio?.text.slice(0, 180)}
        />
        <meta name="twitter:image" content={doctor?.image.url} />
      </Head>
      <BreadCrumbs
        text1={"Our Fertility Experts"}
        link1="/locations/fertility-experts"
        text2={doctor?.name}
        link2="#"
        link3={""}
        text3={""}
        link4={""}
        text4={""}
      />
      <main className="profile-page">
        <section className="block relative" style={{ height: "500px" }}>
          <div
            className="bg-center bg-cover h-full w-full absolute top-0"
            style={{
              backgroundImage:
                "url('https://res.cloudinary.com/garbhagudiivf/image/upload/v1643286880/Banner/Behind_Doctors_fssazq.jpg')",
            }}
          >
            <span
              id="blackOverlay"
              className="bg-black h-full w-full absolute opacity-30"
            ></span>
          </div>
          <div
            className="w-full absolute bottom-0 left-0 overflow-hidden pointer-events-none right-0 top-auto"
            style={{ height: "70px" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-gray-300 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </section>
        <section className="bg-gray-300 py-16 relative">
          <div className="container md:px-4 mx-auto">
            <div className="flex flex-col bg-white rounded-3xl shadow-xl w-full -mt-64 break-words mb-6 min-w-0 relative">
              <div className="md:px-6 px-2" key={doctor.id}>
                <div className="flex flex-wrap justify-center">
                  <div className="flex justify-center w-full lg:order-2 lg:w-3/12 px-4">
                    <div className="relative">
                      <img
                        alt={doctor.name}
                        src={doctor.image.url}
                        className="align-middle border-none h-auto rounded-full shadow-xl -m-16 -ml-20 -mt-44 lg:-ml-16 max-w-xs mb-4"
                      />
                    </div>
                  </div>
                </div>
                <div className="text-center font-heading mt-12">
                  <h1 className="text-4xl text-gray-800 font-semibold leading-normal mb-2">
                    {doctor.name}
                  </h1>
                  <div className="text-brandPink2 text-xl font-content font-semibold leading-normal mb-2 mt-0">
                    {doctor.qualification}
                  </div>
                  <div className="text-gray-700 text-lg font-content mb-2">
                    {doctor.designation}
                  </div>
                  <div className="text-gray-700 text-lg font-content mb-2">
                    ವೈದ್ಯಕೀಯ ನೋಂದಣಿ ಸಂಖ್ಯೆ (ಕೆಎಂಸಿ) :{" "}
                    <span className="font-bold underline">
                      {doctor?.medicalRegNo}
                    </span>
                  </div>
                  <div className="text-gray-700 text-lg font-content mb-2">
                    ತಿಳಿದಿರುವ ಭಾಷೆಗಳು:{" "}
                    <span className="font-bold underline">
                      {doctor?.languages}
                    </span>
                  </div>
                  <div>
                    <button className="bg-brandPink rounded-md text-white font-content font-semibold hover:bg-brandPink3 mt-6 pt-3 px-4 py-2">
                      <a href="tel:+919108910832" hrefLang="en-us">
                        ನಮಗೆ ಕರೆ ಮಾಡಿ
                      </a>
                    </button>
                  </div>
                  {doctor?.slug === "dr-asha-s-vijay" ? (
                    <div>
                      <button className="mt-6 rounded-md bg-brandPink px-4 py-2 font-content font-bold text-white hover:bg-brandPink3">
                        <a
                          href={
                            doctor?.bookAnAppointment ||
                            `/contact/enquiry?pageVisit=/fertility-experts/${doctor?.slug}`
                          }
                          hrefLang="en-us"
                        >
                          ನೇಮಕಾತಿಯನ್ನು ಕಾಯ್ದಿರಿಸಿ
                        </a>
                      </button>
                    </div>
                  ) : (
                    doctor?.location?.length > 0 && (
                      <section className="text-gray-600 antialiased font-content mt-8 overflow-hidden">
                        <div className="flex flex-col h-full justify-center">
                          <div className="bg-white border border-pink-200 rounded-2xl shadow-xl w-full max-w-3xl mx-auto">
                            <header className="px-5 py-2">
                              <h2 className="text-gray-800 font-semibold">
                                ನಿಮ್ಮ ನೇಮಕಾತಿಯನ್ನು ಕಾಯ್ದಿರಿಸಿ
                              </h2>
                            </header>
                            <div className="">
                              <div className="overflow-x-auto">
                                <table className="table-auto w-full">
                                  <thead className="bg-brandPink text-brandDark text-sm font-bold uppercase">
                                    <tr>
                                      <th className="p-2 whitespace-nowrap">
                                        <div className="text-left font-bold ml-1">
                                          ಶಾಖೆ
                                        </div>
                                      </th>
                                      <th className="p-2 whitespace-nowrap">
                                        <div className="text-left font-bold">
                                          ಆವರಣದಲ್ಲಿ
                                        </div>
                                      </th>
                                      <th className="p-2 whitespace-nowrap">
                                        <div className="text-left font-bold">
                                          ಆನ್ಲೈನ್
                                        </div>
                                      </th>
                                    </tr>
                                  </thead>
                                  <tbody className="text-sm divide-pink-100 divide-y">
                                    {doctor?.location?.map(
                                      (
                                        loc: { title: string; slug: string },
                                        index: number
                                      ) => {
                                        return (
                                          <tr key={index}>
                                            <td className="p-2 whitespace-nowrap">
                                              <div className="flex items-center">
                                                <div className="flex justify-center text-gray-800 font-medium items-center">
                                                  <div className="flex-shrink-0 h-10 w-10 mr-2">
                                                    <SiGooglemaps className="text-2xl" />
                                                  </div>
                                                  <Link
                                                    href={`/locations/${loc?.slug}`}
                                                    passHref
                                                  >
                                                    <span className="cursor-pointer">
                                                      {loc?.title}
                                                    </span>
                                                  </Link>
                                                </div>
                                              </div>
                                            </td>

                                            <td className="p-2 whitespace-nowrap">
                                              <div className="text-brandPink2 text-left font-medium">
                                                <button>
                                                  <a
                                                    href={
                                                      doctor?.bookAnAppointment ||
                                                      `/contact/enquiry?pageVisit=/fertility-experts/${doctor?.slug}`
                                                    }
                                                    className="text-brandPink font-semibold hover:underline"
                                                    hrefLang="en-us"
                                                    rel="noreferrer"
                                                  >
                                                    ಬುಕ್ ಮಾಡಿ
                                                  </a>
                                                </button>
                                              </div>
                                            </td>
                                            <td className="p-2 whitespace-nowrap">
                                              <div className="text-left">
                                                <button>
                                                  <a
                                                    href={
                                                      doctor?.bookAnAppointment ||
                                                      `/contact/enquiry?pageVisit=/fertility-experts/${doctor?.slug}`
                                                    }
                                                    className="text-brandPink font-semibold hover:underline"
                                                    hrefLang="en-us"
                                                    rel="noreferrer"
                                                  >
                                                    ಬುಕ್ ಮಾಡಿ
                                                  </a>
                                                </button>
                                              </div>
                                            </td>
                                          </tr>
                                        );
                                      }
                                    )}
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                        <p className="text-xs mt-5">
                          * ನೇಮಕಾತಿಗಳು ವೈದ್ಯರ ಲಭ್ಯತೆಗೆ ಒಳಪಟ್ಟಿರುತ್ತವೆ. ದಯವಿಟ್ಟು,
                          ನೀವು ಈಗಾಗಲೇ ಗರ್ಭಗುಡಿಗೆ ಭೇಟಿ ನೀಡಿದ್ದರೆ ನಿಮ್ಮ ನೋಂದಾಯಿತ
                          ಸಂಖ್ಯೆಯನ್ನು ನೀವು ನೀಡಿದ್ದೀರಿ ಎಂದು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಿ.
                        </p>
                      </section>
                    )
                  )}
                </div>
                <div className="border-gray-300 border-t mt-10 py-10">
                  <div className="flex justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                      <div className="text-gray-800 mb-4 prose">
                        <RichText content={doctor?.bio?.raw?.children} />
                      </div>
                    </div>
                  </div>
                  <Share pinmedia={doctor?.image?.url} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Doctor;
