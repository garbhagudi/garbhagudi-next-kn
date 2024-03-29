import React from 'react';
import { RichText } from '@graphcms/rich-text-react-renderer';
import Head from 'next/head';
import BreadCrumbs from 'components/breadcrumbs';
import Link from 'next/link';
import { gql } from '@apollo/client';
import apolloClient from 'lib/apollo-graphcms';
import { useRouter } from 'next/router';
import Share from 'components/share';
import { SiGooglemaps } from 'react-icons/si';

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
          slug
          languages
          image {
            url
          }
          qualification
          designation
          medicalRegNo
          hanumanthaNagarOnline
          hanumanthaNagarPhysical
          kalyanNagarOnline
          kalyanNagarPhysical
          jayanagarOnline
          jayanagarPhysical
          electronicCityOnline
          electronicCityPhysical
          marathahalliOnline
          marathahalliPhysical
          newBelRoadOnline
          newBelRoadPhysical
          nagarbhaviOnline
          nagarbhaviPhysical
        }
      }
    `,
    variables: {
      slug: params.slug,
    },
  });

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
      <div className='h-screen text-brandPink flex items-center justify-center text-content animate-ping'>
        Loading...
      </div>
    );
  }
  return (
    <div>
      <Head>
        {/* Primary Tags */}

        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>{title}</title>
        <meta name='title' content={title} />
        <meta name='description' content={doctor?.bio?.text.slice(0, 180)} />

        {/* Open Graph / Facebook */}

        <meta property='og:title' content={title} />
        <meta property='og:site_name' content='GarbhaGudi IVF Centre' />
        <meta property='og:url' content='https://garbhagudi.com' />
        <meta
          property='og:description'
          content={doctor?.bio?.text.slice(0, 180)}
        />
        <meta property='og:type' content='website' />
        <meta property='og:image' content={doctor?.image.url} />

        {/* Twitter*/}

        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@garbhagudiivf' />
        <meta name='twitter:title' content={title} />
        <meta
          name='twitter:description'
          content={doctor?.bio?.text.slice(0, 180)}
        />
        <meta name='twitter:image' content={doctor?.image.url} />
      </Head>
      <BreadCrumbs
        text1={'Our Fertility Experts'}
        link1='/locations/fertility-experts'
        text2={doctor?.name}
        link2='#'
        link3={''}
        text3={''}
        link4={''}
        text4={''}
      />
      <main className='profile-page'>
        <section className='relative block' style={{ height: '500px' }}>
          <div
            className='absolute top-0 w-full h-full bg-center bg-cover'
            style={{
              backgroundImage:
                "url('https://res.cloudinary.com/garbhagudiivf/image/upload/v1643286880/Banner/Behind_Doctors_fssazq.jpg')",
            }}
          >
            <span
              id='blackOverlay'
              className='w-full h-full absolute opacity-30 bg-black'
            ></span>
          </div>
          <div
            className='top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden'
            style={{ height: '70px' }}
          >
            <svg
              className='absolute bottom-0 overflow-hidden'
              xmlns='http://www.w3.org/2000/svg'
              preserveAspectRatio='none'
              version='1.1'
              viewBox='0 0 2560 100'
              x='0'
              y='0'
            >
              <polygon
                className='text-gray-300 fill-current'
                points='2560 0 2560 100 0 100'
              ></polygon>
            </svg>
          </div>
        </section>
        <section className='relative py-16 bg-gray-300'>
          <div className='container mx-auto md:px-4'>
            <div className='relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-3xl -mt-64'>
              <div className='px-2 md:px-6' key={doctor.id}>
                <div className='flex flex-wrap justify-center'>
                  <div className='w-full lg:w-3/12 px-4 lg:order-2 flex justify-center'>
                    <div className='relative'>
                      <img
                        alt={doctor.name}
                        src={doctor.image.url}
                        className='shadow-xl rounded-full max-w-xs h-auto align-middle border-none -m-16 -mt-44 -ml-20 mb-4 lg:-ml-16 '
                      />
                    </div>
                  </div>
                </div>
                <div className='text-center mt-12 font-heading'>
                  <h1 className='text-4xl font-semibold leading-normal mb-2 text-gray-800'>
                    {doctor.name}
                  </h1>
                  <div className='leading-normal mt-0 mb-2 font-content text-brandPink2 font-semibold text-xl'>
                    {doctor.qualification}
                  </div>
                  <div className='mb-2 text-gray-700 font-content text-lg'>
                    {doctor.designation}
                  </div>
                  <div className='mb-2 text-gray-700 font-content text-lg'>
                    ವೈದ್ಯಕೀಯ ನೋಂದಣಿ ಸಂಖ್ಯೆ (ಕೆಎಂಸಿ) :{' '}
                    <span className='font-bold underline'>
                      {doctor?.medicalRegNo}
                    </span>
                  </div>
                  <div className='mb-2 text-gray-700 font-content text-lg'>
                    ತಿಳಿದಿರುವ ಭಾಷೆಗಳು:{' '}
                    <span className='font-bold underline'>
                      {doctor?.languages}
                    </span>
                  </div>
                  <div>
                    <button className='px-4 py-2 pt-3 bg-brandPink hover:bg-brandPink3 text-white font-semibold font-content rounded-md mt-6'>
                      <a href='tel:+918880000909' hrefLang='en-us'>
                        ನಮಗೆ ಕರೆ ಮಾಡಿ
                      </a>
                    </button>
                  </div>
                  {(doctor?.hanumanthaNagarPhysical ||
                    doctor?.kalyanNagarPhysical ||
                    doctor?.jayanagarPhysical ||
                    doctor?.electronicCityPhysical ||
                    doctor?.marathahalliPhysical ||
                    doctor?.newBelRoadPhysical ||
                    doctor?.nagarbhaviPhysical) && (
                    <section className='antialiased text-gray-600 mt-8 font-content overflow-hidden'>
                      <div className='flex flex-col justify-center h-full'>
                        <div className='w-full max-w-3xl mx-auto bg-white shadow-xl rounded-2xl border border-pink-200'>
                          <header className='px-5 py-2'>
                            <h2 className='font-semibold text-gray-800'>
                              ನಿಮ್ಮ ನೇಮಕಾತಿಯನ್ನು ಕಾಯ್ದಿರಿಸಿ
                            </h2>
                          </header>
                          <div className=''>
                            <div className='overflow-x-auto'>
                              <table className='table-auto w-full'>
                                <thead className='text-sm font-bold uppercase text-brandDark bg-brandPink'>
                                  <tr>
                                    <th className='p-2 whitespace-nowrap '>
                                      <div className='font-bold text-left ml-1'>
                                        ಶಾಖೆ
                                      </div>
                                    </th>
                                    <th className='p-2 whitespace-nowrap'>
                                      <div className='font-bold text-left'>
                                        ಆವರಣದಲ್ಲಿ
                                      </div>
                                    </th>
                                    <th className='p-2 whitespace-nowrap'>
                                      <div className='font-bold text-left'>
                                        ಆನ್ಲೈನ್
                                      </div>
                                    </th>
                                  </tr>
                                </thead>
                                <tbody className='text-sm divide-y divide-pink-100'>
                                  {doctor.hanumanthaNagarOnline &&
                                    doctor.hanumanthaNagarPhysical && (
                                      <tr>
                                        <td className='p-2 whitespace-nowrap'>
                                          <div className='flex items-center'>
                                            <div className='font-medium text-gray-800 flex items-center justify-center'>
                                              <div className='w-10 h-10 flex-shrink-0 mr-2'>
                                                <img
                                                  className='rounded-sm'
                                                  src='https://res.cloudinary.com/garbhagudiivf/image/upload/v1643351546/Icons/Locations/Hanumanthanagar_ykripm.svg'
                                                  width='40'
                                                  height='40'
                                                  alt='Alex Shatov'
                                                />
                                              </div>
                                              <Link
                                                href='/locations/hanumanthanagar'
                                                passHref
                                              >
                                                <span className='cursor-pointer'>
                                                  ಹನುಮಂತನಗರ
                                                </span>
                                              </Link>
                                            </div>
                                          </div>
                                        </td>

                                        <td className='p-2 whitespace-nowrap'>
                                          <div className='text-left font-medium text-brandPink2'>
                                            <button>
                                              <a
                                                href={
                                                  doctor.hanumanthaNagarPhysical
                                                }
                                                className='font-semibold text-brandPink hover:underline'
                                                hrefLang='en-us'
                                                target='_blank'
                                                rel='noreferrer'
                                              >
                                                ಬುಕ್ ಮಾಡಿ
                                              </a>
                                            </button>
                                          </div>
                                        </td>
                                        <td className='p-2 whitespace-nowrap'>
                                          <div className='text-left'>
                                            <button>
                                              <a
                                                href={
                                                  doctor.hanumanthaNagarOnline
                                                }
                                                className='font-semibold text-brandPink hover:underline'
                                                target='_blank'
                                                hrefLang='en-us'
                                                rel='noreferrer'
                                              >
                                                ಬುಕ್ ಮಾಡಿ
                                              </a>
                                            </button>
                                          </div>
                                        </td>
                                      </tr>
                                    )}
                                  {doctor.kalyanNagarOnline &&
                                    doctor.kalyanNagarPhysical && (
                                      <tr>
                                        <td className='p-2 whitespace-nowrap'>
                                          <div className='flex items-center'>
                                            <div className='font-medium text-gray-800'>
                                              <div className='font-medium text-gray-800 flex items-center justify-center'>
                                                <div className='w-10 h-10 flex-shrink-0 mr-2 sm:mr-3'>
                                                  <img
                                                    className='rounded-sm'
                                                    src='https://res.cloudinary.com/garbhagudiivf/image/upload/v1643351546/Icons/Locations/Kalyan_Nagar_ivtier.svg'
                                                    width='40'
                                                    height='40'
                                                    alt='Alex Shatov'
                                                  />
                                                </div>
                                                <Link
                                                  href='/locations/kalyan-nagar'
                                                  passHref
                                                >
                                                  <span className='cursor-pointer'>
                                                    ಕಲ್ಯಾಣ್ ನಗರ
                                                  </span>
                                                </Link>
                                              </div>
                                            </div>
                                          </div>
                                        </td>

                                        <td className='p-2 whitespace-nowrap'>
                                          <div className='text-left'>
                                            <button>
                                              <a
                                                href={
                                                  doctor.kalyanNagarPhysical
                                                }
                                                className='font-semibold text-brandPink hover:underline'
                                                target='_blank'
                                                hrefLang='en-us'
                                                rel='noreferrer'
                                              >
                                                ಬುಕ್ ಮಾಡಿ
                                              </a>
                                            </button>
                                          </div>
                                        </td>
                                        <td className='p-2 whitespace-nowrap'>
                                          <div className='text-black font-semibold text-left'>
                                            <button>
                                              <a
                                                href={doctor.kalyanNagarOnline}
                                                target='_blank'
                                                hrefLang='en-us'
                                                rel='noreferrer'
                                                className='font-semibold text-brandPink hover:underline'
                                              >
                                                ಬುಕ್ ಮಾಡಿ
                                              </a>
                                            </button>
                                          </div>
                                        </td>
                                      </tr>
                                    )}
                                  {doctor.jayanagarOnline &&
                                    doctor.jayanagarPhysical && (
                                      <tr>
                                        <td className='p-2 whitespace-nowrap'>
                                          <div className='flex items-center'>
                                            <div className='font-medium text-gray-800'>
                                              <div className='font-medium text-gray-800 flex items-center justify-center'>
                                                <div className='w-10 h-10 flex-shrink-0 mr-2 sm:mr-3 '>
                                                  <img
                                                    className='rounded-sm'
                                                    src='https://res.cloudinary.com/garbhagudiivf/image/upload/v1643351530/Icons/Locations/South_End_Circle_l3ffwj.svg'
                                                    width='40'
                                                    height='40'
                                                    alt='Alex Shatov'
                                                  />
                                                </div>
                                                <Link
                                                  href='/locations/south-end-circle'
                                                  passHref
                                                >
                                                  <span className='cursor-pointer'>
                                                    ಜಯನಗರ
                                                  </span>
                                                </Link>
                                              </div>
                                            </div>
                                          </div>
                                        </td>

                                        <td className='p-2 whitespace-nowrap'>
                                          <div className='text-left font-medium text-brandPink2'>
                                            <button>
                                              <a
                                                href={doctor.jayanagarPhysical}
                                                className='font-semibold text-brandPink hover:underline'
                                                target='_blank'
                                                hrefLang='en-us'
                                                rel='noreferrer'
                                              >
                                                ಬುಕ್ ಮಾಡಿ
                                              </a>
                                            </button>
                                          </div>
                                        </td>
                                        <td className='p-2 whitespace-nowrap'>
                                          <div className='text-left'>
                                            <button>
                                              <a
                                                href={doctor.jayanagarOnline}
                                                className='font-semibold text-brandPink hover:underline'
                                                target='_blank'
                                                hrefLang='en-us'
                                                rel='noreferrer'
                                              >
                                                ಬುಕ್ ಮಾಡಿ
                                              </a>
                                            </button>
                                          </div>
                                        </td>
                                      </tr>
                                    )}
                                  {doctor.electronicCityOnline &&
                                    doctor.electronicCityPhysical && (
                                      <tr>
                                        <td className='p-2 whitespace-nowrap'>
                                          <div className='flex items-center'>
                                            <div className='font-medium text-gray-800'>
                                              <div className='font-medium text-gray-800 flex items-center justify-center'>
                                                <div className='w-10 h-10 flex-shrink-0 mr-2 sm:mr-3 '>
                                                  <img
                                                    className='rounded-sm'
                                                    src='https://res.cloudinary.com/garbhagudiivf/image/upload/v1643351530/Icons/Locations/Electronic_City_xntwob.svg'
                                                    width='40'
                                                    height='40'
                                                    alt='Electronic City'
                                                  />
                                                </div>
                                                <Link
                                                  href='/locations/south-end-circle'
                                                  passHref
                                                >
                                                  <span className='cursor-pointer'>
                                                    ಇಲೆಕ್ಟ್ರಾನಿಕ್ ಸಿಟಿ
                                                  </span>
                                                </Link>
                                              </div>
                                            </div>
                                          </div>
                                        </td>

                                        <td className='p-2 whitespace-nowrap'>
                                          <div className='text-left font-medium text-brandPink2'>
                                            <button>
                                              <a
                                                href={
                                                  doctor.electronicCityPhysical
                                                }
                                                target='_blank'
                                                rel='noreferrer'
                                                hrefLang='en-us'
                                                className='font-semibold text-brandPink hover:underline'
                                              >
                                                ಬುಕ್ ಮಾಡಿ
                                              </a>
                                            </button>
                                          </div>
                                        </td>
                                        <td className='p-2 whitespace-nowrap'>
                                          <div className='text-left'>
                                            <button>
                                              <a
                                                href={
                                                  doctor.electronicCityOnline
                                                }
                                                className='font-semibold text-brandPink hover:underline'
                                                target='_blank'
                                                hrefLang='en-us'
                                                rel='noreferrer'
                                              >
                                                ಬುಕ್ ಮಾಡಿ
                                              </a>
                                            </button>
                                          </div>
                                        </td>
                                      </tr>
                                    )}
                                  {doctor.marathahalliOnline &&
                                    doctor.marathahalliPhysical && (
                                      <tr>
                                        <td className='p-2 whitespace-nowrap'>
                                          <div className='flex items-center'>
                                            <div className='font-medium text-gray-800 flex items-center justify-center'>
                                              <div className='w-10 h-10 flex-shrink-0 mr-2 sm:mr-3 '>
                                                <img
                                                  className='rounded-sm'
                                                  src='https://res.cloudinary.com/garbhagudiivf/image/upload/v1643351530/Icons/Locations/Marathahalli_p99ljc.svg'
                                                  width='40'
                                                  height='40'
                                                  alt='Alex Shatov'
                                                />
                                              </div>
                                              <Link
                                                href='/locations/south-end-circle'
                                                passHref
                                              >
                                                <span className='cursor-pointer'>
                                                  ಮಾರತಹಳ್ಳಿ
                                                </span>
                                              </Link>
                                            </div>
                                          </div>
                                        </td>

                                        <td className='p-2 whitespace-nowrap'>
                                          <div className='text-left font-medium text-brandPink2'>
                                            <button>
                                              <a
                                                href={
                                                  doctor.marathahalliPhysical
                                                }
                                                target='_blank'
                                                rel='noreferrer'
                                                hrefLang='en-us'
                                                className='text-left font-medium text-brandPink2 hover:underline'
                                              >
                                                ಬುಕ್ ಮಾಡಿ
                                              </a>
                                            </button>
                                          </div>
                                        </td>
                                        <td className='p-2 whitespace-nowrap'>
                                          <div className='text-left'>
                                            <button>
                                              <a
                                                href={doctor.marathahalliOnline}
                                                className='text-left font-medium text-brandPink2 hover:underline'
                                                target='_blank'
                                                hrefLang='en-us'
                                                rel='noreferrer'
                                              >
                                                ಬುಕ್ ಮಾಡಿ
                                              </a>
                                            </button>
                                          </div>
                                        </td>
                                      </tr>
                                    )}
                                  {(doctor.newBelRoadOnline ||
                                    doctor.newBelRoadPhysical) && (
                                    <tr>
                                      <td className='p-2 whitespace-nowrap'>
                                        <div className='flex items-center'>
                                          <div className='font-medium text-gray-800 flex items-center justify-center'>
                                            <div className='w-10 h-10 bg-brandPink flex items-center justify-center mr-2 sm:mr-3 text-white rounded-lg'>
                                              <SiGooglemaps className='text-2xl' />
                                            </div>
                                            <Link
                                              href='/locations/new-bel-road'
                                              passHref
                                            >
                                              <span className='cursor-pointer'>
                                                ನ್ಯೂ ಬೆಲ್ ರೋಡ್
                                              </span>
                                            </Link>
                                          </div>
                                        </div>
                                      </td>

                                      {doctor?.newBelRoadPhysical && (
                                        <td className='p-2 whitespace-nowrap'>
                                          <div className='text-left font-medium text-brandPink2'>
                                            <button>
                                              <a
                                                href={doctor.newBelRoadPhysical}
                                                target='_blank'
                                                rel='noreferrer'
                                                hrefLang='en-us'
                                                className='text-left font-medium text-brandPink2 hover:underline'
                                              >
                                                ಬುಕ್ ಮಾಡಿ
                                              </a>
                                            </button>
                                          </div>
                                        </td>
                                      )}
                                      {doctor?.newBelRoadOnline && (
                                        <td className='p-2 whitespace-nowrap'>
                                          <div className='text-left'>
                                            <button>
                                              <a
                                                href={doctor.newBelRoadOnline}
                                                className='text-left font-medium text-brandPink2 hover:underline'
                                                target='_blank'
                                                hrefLang='en-us'
                                                rel='noreferrer'
                                              >
                                                ಬುಕ್ ಮಾಡಿ
                                              </a>
                                            </button>
                                          </div>
                                        </td>
                                      )}
                                    </tr>
                                  )}
                                  {(doctor.nagarbhaviOnline ||
                                    doctor.nagarbhaviPhysical) && (
                                    <tr>
                                      <td className='p-2 whitespace-nowrap'>
                                        <div className='flex items-center'>
                                          <div className='font-medium text-gray-800 flex items-center justify-center'>
                                            <div className='w-10 h-10 bg-brandPink flex items-center justify-center mr-2 sm:mr-3 text-white rounded-lg'>
                                              <SiGooglemaps className='text-2xl' />
                                            </div>
                                            <Link
                                              href='/locations/nagarabhavi'
                                              passHref
                                            >
                                              <span className='cursor-pointer'>
                                                ನಾಗರಭಾವಿ
                                              </span>
                                            </Link>
                                          </div>
                                        </div>
                                      </td>

                                      {doctor?.nagarbhaviPhysical && (
                                        <td className='p-2 whitespace-nowrap'>
                                          <div className='text-left font-medium text-brandPink2'>
                                            <button>
                                              <a
                                                href={doctor.nagarbhaviPhysical}
                                                target='_blank'
                                                rel='noreferrer'
                                                hrefLang='en-us'
                                                className='text-left font-medium text-brandPink2 hover:underline'
                                              >
                                                ಬುಕ್ ಮಾಡಿ
                                              </a>
                                            </button>
                                          </div>
                                        </td>
                                      )}
                                      {doctor?.nagarbhaviOnline && (
                                        <td className='p-2 whitespace-nowrap'>
                                          <div className='text-left'>
                                            <button>
                                              <a
                                                href={doctor.nagarbhaviOnline}
                                                className='text-left font-medium text-brandPink2 hover:underline'
                                                target='_blank'
                                                hrefLang='en-us'
                                                rel='noreferrer'
                                              >
                                                ಬುಕ್ ಮಾಡಿ
                                              </a>
                                            </button>
                                          </div>
                                        </td>
                                      )}
                                    </tr>
                                  )}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p className='text-xs mt-5'>
                        * ನೇಮಕಾತಿಗಳು ವೈದ್ಯರ ಲಭ್ಯತೆಗೆ ಒಳಪಟ್ಟಿರುತ್ತವೆ. ದಯವಿಟ್ಟು,
                        ನೀವು ಈಗಾಗಲೇ ಗರ್ಭಗುಡಿಗೆ ಭೇಟಿ ನೀಡಿದ್ದರೆ ನಿಮ್ಮ ನೋಂದಾಯಿತ
                        ಸಂಖ್ಯೆಯನ್ನು ನೀವು ನೀಡಿದ್ದೀರಿ ಎಂದು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಿ.
                      </p>
                    </section>
                  )}
                </div>
                <div className='mt-10 py-10 border-t border-gray-300'>
                  <div className='flex justify-center'>
                    <div className='w-full lg:w-9/12 px-4'>
                      <div className='mb-4 text-gray-800 prose'>
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
