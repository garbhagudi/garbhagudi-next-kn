import React, { useState } from 'react';
import { Transition } from '@headlessui/react';
import Link from 'next/link';
import { HiOutlineMenuAlt3, HiX } from 'react-icons/hi';
import {
  About,
  WhyGarbhaGudi,
  TreatmentOptions,
  KnowledgeCenter,
  ContactUs,
  Locations,
  Languages,
} from 'components/header/popover';
import LanguageSelect from 'components/languageSelect';
import Logo from 'components/assets/logo';

const menu = [
  {
    id: 1,
    option: <TreatmentOptions />,
  },
  {
    id: 2,
    option: <About />,
  },
  {
    id: 3,
    option: <WhyGarbhaGudi />,
  },
  {
    id: 4,
    option: <KnowledgeCenter />,
  },
  {
    id: 5,
    option: <ContactUs />,
  },
  {
    id: 6,
    option: <Locations />,
  },
  {
    id: 7,
    option: <Languages />,
  },
];

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='sticky top-0 z-50 bg-white shadow-xl'>
      <nav className='shadow-2xl'>
        <nav className='px-2 lg:px-6 lg:py-2'>
          <div className='flex justify-between items-center mx-auto max-w-screen-xl'>
            <Link href='/' className='hidden xl:flex items-center'>
              <Logo />
            </Link>
            <Link href='/' className='flex items-center xl:hidden'>
              <img
                className='w-16 h-full '
                src='https://res.cloudinary.com/garbhagudiivf/image/upload/v1659164257/logos/GG_Vertical_Logo_nrcl5h.svg'
                alt='logo'
              />
            </Link>
            <div className='flex items-center lg:order-2'>
              <Link
                href='https://consult.bestdocapp.com/home/GARBHAGUDI'
                target={'_blank'}
                rel='noreferrer'
                className='px-3 py-2 text-xs xl:text-base font-semibold text-white cursor-pointer bg-brandPink rounded-lg font-tiro hover:bg-brandPink3'
              >
                ಬುಕ್ ಮಾಡಿ
              </Link>
              <div className='flex items-center justify-center ml-2 -mr-2 xl:hidden'>
                <div className='z-10 mr-4'>
                  <LanguageSelect />
                </div>
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  type='button'
                  className='inline-flex mr-1 items-center justify-center p-2 text-gray-200 bg-gray-900 rounded-full hover:text-white hover:bg-gray-800 focus:outline-none'
                  aria-controls='mobile-menu'
                  aria-expanded='false'
                >
                  <div className='sr-only'>Open main menu</div>
                  {!isOpen ? (
                    <HiOutlineMenuAlt3 className='block w-6 h-6' />
                  ) : (
                    <HiX className='block w-6 h-6' />
                  )}
                </button>
              </div>
            </div>
            <div
              className='hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1'
              id='desktop-Menu'
            >
              <div className='py-2 flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0'>
                <div className='hidden xl:block'>
                  <div className='flex items-baseline space-x-4'>
                    {menu.map((items) => (
                      <div
                        key={items.id}
                        className='text-base font-bold text-gray-800 hover:bg-brandPink hover:text-white rounded-lg font-tiro transition-all ease-in duration-200'
                      >
                        {items.option}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <Transition
          show={isOpen}
          enter='transition ease-out duration-100 transform'
          enterFrom='opacity-0 scale-95'
          enterTo='opacity-100 scale-100'
          leave='transition ease-in duration-75 transform'
          leaveFrom='opacity-100 scale-100'
          leaveTo='opacity-0 scale-95'
        >
          <div className='mt-2 xl:hidden pb-2 bg-white' id='mobile-menu'>
            <div className='px-2'>
              {menu.map((items) => (
                <div
                  key={items.id}
                  className='text-sm rounded-md font-semibold text-brandDark hover:bg-brandPink hover:text-white font-tiro'
                >
                  <div>{items.option}</div>
                </div>
              ))}
              <Link
                href='https://consult.bestdocapp.com/home/GARBHAGUDI'
                target={'_blank'}
                rel='noreferrer'
                onClick={() => setIsOpen(!isOpen)}
                className='block px-2 py-2 text-opacity-90 text-sm rounded-md font-semibold cursor-pointer text-brandDark hover:bg-brandPink hover:text-white font-tiro'
              >
                ಬುಕ್ ಮಾಡಿ
              </Link>
            </div>
          </div>
        </Transition>
      </nav>
    </div>
  );
};

export default Nav;
