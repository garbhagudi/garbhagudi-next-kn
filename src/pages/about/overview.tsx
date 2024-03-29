import React from 'react';
import Header from 'sections/about/header';
import CoreVision from 'sections/about/coreVision';
import graphcms from 'lib/graphcms';
import Link from 'next/link';
import Head from 'next/head';
// import BreadCrumbs from "components/breadcrumbs";

const Overview = ({ directors }) => {
  return (
    <div>
      <Head>
        {/* Primary Tags */}

        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>ನಮ್ಮ ಬಗ್ಗೆ | ಗರ್ಭಗುಡಿ</title>
        <meta name='title' content=' ಗರ್ಭಗುಡಿ ಐವಿಎಫ್ ಕೇಂದ್ರ' />
        <meta
          name='description'
          content='
          ಗರ್ಭಗುಡಿ ಹೊಸ ಪೀಳಿಗೆಯ ಬಂಜೆತನ ಚಿಕಿತ್ಸಾ ಆಸ್ಪತ್ರೆಗಳ ಸರಣಿಯಾಗಿದ್ದು, ಅತ್ಯಾಧುನಿಕ ಮೂಲಸೌಕರ್ಯ ಮತ್ತು ಅತ್ಯಾಧುನಿಕ ತಂತ್ರಜ್ಞಾನವನ್ನು ಹೊಂದಿರುವ ಬಂಜೆತನದ ಈ ನಿರಂತರವಾಗಿ ಹೆಚ್ಚುತ್ತಿರುವ ಸಮಸ್ಯೆಯನ್ನು ಪರಿಹರಿಸಲು.'
        />

        {/* Open Graph / Facebook */}

        <meta property='og:title' content='About | ಗರ್ಭಗುಡಿ ಐವಿಎಫ್ ಕೇಂದ್ರ' />
        <meta property='og:site_name' content='GarbhaGudi IVF Centre' />
        <meta property='og:url' content='https://garbhagudi.com' />
        <meta
          property='og:description'
          content='GarbhaGudi is a chain of new generation infertility treatment hospitals equipped with state-of-the-art infrastructure and cutting-edge technology to address this ever-increasing problem of infertility.'
        />
        <meta property='og:type' content='website' />
        <meta
          property='og:image'
          content='https://res.cloudinary.com/garbhagudiivf/image/upload/v1643802154/SEO/OG_images_Home_pct8yc.jpg'
        />

        {/* Twitter*/}

        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@garbhagudiivf' />
        <meta name='twitter:title' content='About | ಗರ್ಭಗುಡಿ ಐವಿಎಫ್ ಕೇಂದ್ರ' />
        <meta
          name='twitter:description'
          content='GarbhaGudi is a chain of new generation infertility treatment hospitals equipped with state-of-the-art infrastructure and cutting-edge technology to address this ever-increasing problem of infertility.'
        />
        <meta
          name='twitter:image'
          content='https://res.cloudinary.com/garbhagudiivf/image/upload/v1643802154/SEO/OG_images_Home_pct8yc.jpg'
        />
      </Head>
      {/* <BreadCrumbs
        text1="About"
        link1="/about/overview"
        link2={""}
        text2={""}
        link3={""}
        text3={""}
        link4={""}
        text4={""}
      /> */}
      <Header />
      <div className='bg-white'>
        <div className='mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24'>
          <div className='space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0'>
            <div className='space-y-5 sm:space-y-4'>
              <h2 className='text-4xl tracking-tight sm:text-5xl md:text-6xl font-heading font-bold text-brandliteGray'>
                ಸಂಸ್ಥಾಪಕರು ಮತ್ತು ನಿರ್ದೇಶಕರು
              </h2>
            </div>
            <div className='lg:col-span-2'>
              <ul className='space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:gap-x-8'>
                {directors.map((item) => (
                  <li key={item.id}>
                    <Link href={`/about/executive-team/${item.slug}`} passHref>
                      <div className='space-y-4'>
                        <div className='aspect-square'>
                          <img
                            className='object-fit shadow-2xl rounded-3xl w-96 h-96'
                            src={item.image.url}
                            alt={item.name}
                          />
                        </div>
                        <div className='text-lg leading-6 font-medium space-y-2'>
                          <h3 className='text-2xl font-semibold font-heading text-brandDark'>
                            {item.name}
                          </h3>
                          <p className='font-content font-semibold text-brandPink text-sm'>
                            {item.details}
                          </p>
                        </div>
                        <div className='text-lg'>
                          <p className='text-gray-500 font-content'>
                            {`${item.description.slice(0, 160)}...`}
                          </p>
                          <p className='mt-3 text-brandPurple underline text-sm hover:text-brandPink cursor-pointer font-content'>
                            ಮತ್ತಷ್ಟು ಓದಿ {'>'}{' '}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <CoreVision />
        </div>
      </div>
    </div>
  );
};

export default Overview;

export const getServerSideProps = async () => {
  const { directors } = await graphcms.request(`
    query {
      directors {
        name
        details
        slug
        image {
          url
        }
        id
        description
      }
    }
  `);
  return {
    props: {
      directors,
    },
  };
};
