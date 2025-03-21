import React from 'react';
import Link from 'next/link';
import { RichText } from '@graphcms/rich-text-react-renderer';

const MapSection = ({ maplink, address, description, doctors, title }) => {
  return (
    <div className='px-3'>
      <div className='text-gray-600 body-font max-w-7xl mx-auto relative'>
        <div className='flex flex-wrap inset-0 lg:flex-nowrap py-6'>
          <div className='flex bg-gray-300 h-[42rem] justify-start p-2 rounded-3xl w-full items-end lg:p-10 lg:w-1/2 md:ml-auto overflow-hidden relative'>
            <iframe
              width='100%'
              height='100%'
              className='absolute inset-0'
              loading='lazy'
              title='map'
              src={maplink}
            ></iframe>
            <div className='flex flex-wrap bg-white rounded-3xl shadow-3xl py-6 relative'>
              <div className='lg:w-1/2 px-6'>
                <div className='text-gray-900 text-xs font-qs font-semibold title-font tracking-widest'>
                  ವಿಳಾಸ
                </div>
                <p className='text-sm font-content mt-1'>{address}</p>
              </div>
              <div className='lg:mt-0 lg:w-1/2 mt-4 px-6'>
                <div className='text-gray-900 text-xs font-qs font-semibold tracking-widest'>
                  ಇಮೇಲ್
                </div>
                <div className='text-indigo-500 leading-relaxed'>
                  <Link
                    href='mailto:dreams@garbhagudi.com'
                    className='text-brandPink text-sm font-qs'
                  >
                    dreams@garbhagudi.com
                  </Link>
                </div>
                <div className='text-gray-900 text-xs font-qs font-semibold mt-4 tracking-widest'>
                  ದೂರವಾಣಿ
                </div>
                <p className='text-sm font-qs leading-relaxed'>
                  <Link href='tel:+919108910832'>+91 9108 9108 32</Link>
                </p>
                <div className='text-gray-900 text-xs font-qs font-semibold mt-4 tracking-widest'>
                  WhatsApp
                </div>
                <p className='text-sm font-qs leading-relaxed'>
                  <Link
                    href='https://wa.me/918884183338?text=Hi.'
                    target='_blank'
                    rel='noreferrer'
                  >
                    +91 8884 1833 38
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className='flex flex-col font-content items-center lg:w-1/2 px-6'>
            <h2 className='text-xl font-bold font-heading lg:text-2xl py-3'>
              ಗರ್ಭಗುಡಿ IVF ಕೇಂದ್ರ, {title}
            </h2>
            <RichText content={description} />
          </div>
        </div>
        <div className='flex flex-col bg-white w-full md:mt-0 pb-8'>
          <h2 className='text-2xl text-center font-heading font-semibold lg:mt-0 py-10'>
            {title} ನಲ್ಲಿ ಫಲವತ್ತತೆ ತಜ್ಞರು
          </h2>
          <div className='col-span-full grid grid-cols-2 lg:grid-cols-4 lg:max-w-7xl mx-auto sm:gap-x-32 sm:gap-y-10 sm:space-y-0 space-y-0'>
            {doctors?.map((item: any) => {
              return (
                <div
                  className='rounded-xl text-center duration-500 hover:shadow-2xl mb-2 transition-all'
                  key={item?.id}
                >
                  <Link href={`/fertility-experts/${item?.slug}`} passHref>
                    <div>
                      <div className='space-y-4'>
                        <img
                          className='h-40 rounded-full w-40 mt-4 mx-auto my-auto'
                          src={item?.image?.url}
                          alt={item?.imageAlt}
                        />
                        <div className='space-y-4'>
                          <div className='text-lg font-medium leading-6 space-y-1'>
                            <h3 className='text-brandDark font-content'>
                              {item?.name}
                            </h3>
                            <p className='text-brandPurple text-sm font-content'>
                              {item?.qualification}
                            </p>
                            <p className='text-brandPink text-sm font-content'>
                              {item?.designation}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapSection;
