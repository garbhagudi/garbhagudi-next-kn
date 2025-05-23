import { Popover, Transition, Tab } from '@headlessui/react';
import { HiChevronDown } from 'react-icons/hi';
import { Fragment } from 'react';
import Link from 'next/link';
import {
  Contact,
  Language,
  Location,
  AboutUs,
  Resources,
  ValueAddedServices,
  Treatments,
} from './headerData';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export function About() {
  return (
    <Popover className='relative'>
      {({ close }) => (
        <>
          <Popover.Button
            className={`
                 ${
                   close
                     ? 'w-screen text-left sm:w-full outline-none'
                     : 'text-opacity-90 outline-none'
                 }
                 `}
          >
            <div className='px-2 pt-3 pb-2'>
              ನಮ್ಮ ಬಗ್ಗೆ <HiChevronDown className='inline-block' />
            </div>
          </Popover.Button>
          <Transition
            as={Fragment}
            enter='transition ease-out duration-200'
            enterFrom='opacity-0 translate-y-1'
            enterTo='opacity-100 translate-y-0'
            leave='transition ease-in duration-150'
            leaveFrom='opacity-100 translate-y-0'
            leaveTo='opacity-0 translate-y-1'
          >
            <Popover.Panel className='absolute z-10 w-screen outline-none max-w-md px-4 transform -translate-x-1/2 mt-3 lg:mt-7 left-1/2 sm:px-0 lg:max-w-xl'>
              <div className='overflow-hidden shadow-lg rounded-lg ring-1 ring-black ring-opacity-5'>
                <div className='relative grid grid-cols-2 gap-8 p-5 bg-white lg:grid-cols-2'>
                  {AboutUs.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className='flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-pink-100 focus:outline-none'
                    >
                      <div className='flex items-center justify-center flex-shrink-0 w-10 h-10 text-white sm:h-12 sm:w-12'>
                        <img src={item.icon} alt={item.name} />
                      </div>
                      <div className='ml-4'>
                        <p className='text-sm font-medium text-gray-900'>
                          {item.name}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}

export function WhyGarbhaGudi() {
  return (
    <Popover className='relative'>
      {({ close }) => (
        <>
          <Popover.Button
            className={`
                 ${
                   close
                     ? 'w-screen text-left sm:w-full outline-none'
                     : 'text-opacity-90 outline-none'
                 }
                 `}
          >
            <div className='px-2 pt-3 pb-2'>
              ಗರ್ಭಗುಡಿ ಏಕೆ?
              <HiChevronDown className='inline-block' />
            </div>
          </Popover.Button>
          <Transition
            as={Fragment}
            enter='transition ease-out duration-200'
            enterFrom='opacity-0 translate-y-1'
            enterTo='opacity-100 translate-y-0'
            leave='transition ease-in duration-150'
            leaveFrom='opacity-100 translate-y-0'
            leaveTo='opacity-0 translate-y-1'
          >
            <Popover.Panel className='absolute z-10 w-screen max-w-lg px-4 transform -translate-x-1/2 mt-3 lg:mt-7 left-1/2 sm:px-0 lg:max-w-3xl'>
              <div className='overflow-hidden shadow-lg rounded-lg ring-1 ring-black ring-opacity-5'>
                <div className='relative grid grid-cols-2 gap-8 p-5 bg-white lg:grid-cols-3'>
                  {ValueAddedServices.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className='flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-pink-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50'
                    >
                      <div className='flex items-center justify-center flex-shrink-0 w-10 h-10 text-white sm:h-12 sm:w-12'>
                        <img src={item.icon} alt={item.name} />
                      </div>
                      <div className='ml-4'>
                        <p className='text-sm font-medium text-gray-900'>
                          {item.name}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}

export function KnowledgeCenter() {
  return (
    <Popover className='relative'>
      {({ close }) => (
        <>
          <Popover.Button
            className={`
                 ${
                   close
                     ? 'w-screen text-left sm:w-full outline-none'
                     : 'text-opacity-90 outline-none'
                 }
                 `}
          >
            <div className='px-2 pt-3 pb-2'>
              ಸಂಪನ್ಮೂಲಗಳು <HiChevronDown className='inline-block' />
            </div>
          </Popover.Button>
          <Transition
            as={Fragment}
            enter='transition ease-out duration-200'
            enterFrom='opacity-0 translate-y-1'
            enterTo='opacity-100 translate-y-0'
            leave='transition ease-in duration-150'
            leaveFrom='opacity-100 translate-y-0'
            leaveTo='opacity-0 translate-y-1'
          >
            <Popover.Panel className='absolute z-10 w-screen max-w-xl px-4 transform -translate-x-1/2 mt-3 lg:mt-7 left-1/2 sm:px-0 lg:max-w-xl'>
              <div className='overflow-hidden shadow-lg rounded-lg ring-1 ring-black ring-opacity-5'>
                <div className='relative grid grid-cols-2 gap-8 p-5 bg-white'>
                  {Resources.map((item) => (
                    <Link key={item.name} href={item.href} passHref>
                      <div className='flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-pink-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50'>
                        <div className='flex items-center justify-center flex-shrink-0 w-10 h-10 text-white sm:h-12 sm:w-12'>
                          <img src={item.icon} alt={item.name} />
                        </div>
                        <div className='ml-4'>
                          <p className='text-sm font-medium text-gray-900'>
                            {item.name}
                          </p>
                          <p className='text-xs text-gray-500'>
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}

export function ContactUs() {
  return (
    <Popover className='relative'>
      {({ close }) => (
        <>
          <Popover.Button
            className={`
                 ${
                   close
                     ? 'w-screen text-left sm:w-full outline-none'
                     : 'text-opacity-90 outline-none'
                 }
                 `}
          >
            <div className='px-2 pt-3 pb-2'>
              ಸಂಪರ್ಕಿಸಿ <HiChevronDown className='inline-block' />
            </div>
          </Popover.Button>
          <Transition
            as={Fragment}
            enter='transition ease-out duration-200'
            enterFrom='opacity-0 translate-y-1'
            enterTo='opacity-100 translate-y-0'
            leave='transition ease-in duration-150'
            leaveFrom='opacity-100 translate-y-0'
            leaveTo='opacity-0 translate-y-1'
          >
            <Popover.Panel className='absolute z-10 px-4 transform -translate-x-1/2 w-96 mt-3 lg:mt-7 left-1/2 sm:px-0 lg:max-w-xl'>
              <div className='overflow-hidden shadow-lg rounded-lg ring-1 ring-black ring-opacity-5'>
                <div className='relative grid gap-8 p-5 bg-white lg:grid-cols-1'>
                  {Contact.map((item) => (
                    <Link key={item.name} href={item.href} passHref>
                      <div
                        onClick={() => close()}
                        className='flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-pink-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50'
                      >
                        <div className='flex items-center justify-center flex-shrink-0 w-10 h-10 text-white sm:h-12 sm:w-12'>
                          <img src={item.icon} alt={item.name} />
                        </div>
                        <div className='ml-4'>
                          <p className='text-sm font-medium text-gray-900'>
                            {item.name}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}

export function Locations() {
  return (
    <Popover className='relative'>
      {({ close }) => (
        <>
          <Popover.Button
            className={`
                 ${
                   close
                     ? 'w-screen text-left sm:w-full outline-none'
                     : 'text-opacity-90 outline-none'
                 }
                 `}
          >
            <div className='px-2 pt-3 pb-2'>
              ಶಾಖೆಗಳು <HiChevronDown className='inline-block' />
            </div>
          </Popover.Button>
          <Transition
            as={Fragment}
            enter='transition ease-out duration-200'
            enterFrom='opacity-0 translate-y-1'
            enterTo='opacity-100 translate-y-0'
            leave='transition ease-in duration-150'
            leaveFrom='opacity-100 translate-y-0'
            leaveTo='opacity-0 translate-y-1'
          >
            <Popover.Panel className='absolute z-10 px-4 w-screen transform mt-3 lg:mt-7 -translate-x-1/2 left-1/2 sm:px-0 lg:max-w-lg'>
              <div className='overflow-hidden shadow-lg rounded-lg ring-1 ring-black ring-opacity-5'>
                <div className='relative grid gap-8 p-5 bg-white grid-cols-2 lg:grid-cols-2'>
                  {Location.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className='flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-pink-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50'
                    >
                      <div className='flex items-center justify-center bg-brandPink rounded-lg flex-shrink-0 w-10 h-10 text-white sm:h-12 sm:w-12 text-base text-center lg:text-2xl'>
                        <div className='mt-1 text-center flex items-center justify-center flex-col'>
                          {item.icon}{' '}
                          <div className='text-xs text-center'>
                            {item.short}
                          </div>
                        </div>
                      </div>
                      <div className='ml-4'>
                        <p className='text-sm font-medium text-gray-900'>
                          {item.name}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}

export function Languages() {
  return (
    <Popover className='relative'>
      {({ close }) => (
        <>
          <Popover.Button
            className={`
                 ${
                   close
                     ? 'w-screen text-left sm:w-full outline-none'
                     : 'text-opacity-90 outline-none'
                 }
                 `}
          >
            <div className='px-2 pt-3 pb-2'>
              ಭಾಷೆ <HiChevronDown className='inline-block' />
            </div>
          </Popover.Button>
          <Transition
            as={Fragment}
            enter='transition ease-out duration-200'
            enterFrom='opacity-0 translate-y-1'
            enterTo='opacity-100 translate-y-0'
            leave='transition ease-in duration-150'
            leaveFrom='opacity-100 translate-y-0'
            leaveTo='opacity-0 translate-y-1'
          >
            <Popover.Panel className='absolute z-10 w-32 px-4 mt-3 lg:mt-7 transform -translate-x-1/2 left-1/2 sm:px-0 lg:max-w-xl'>
              <div className='overflow-hidden shadow-lg rounded-lg ring-1 ring-black ring-opacity-5'>
                <div className='relative grid gap-8 p-5 bg-white lg:grid-cols-1'>
                  {Language.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className='flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-pink-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50'
                    >
                      <div className='ml-4'>
                        <p className='text-sm font-medium text-gray-900'>
                          {item.name}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}

export function TreatmentOptions() {
  return (
    <Popover className='relative'>
      {({ close }) => (
        <>
          <Popover.Button
            className={`
                 ${
                   close
                     ? 'w-screen text-left sm:w-full outline-none'
                     : 'text-opacity-90 outline-none'
                 }
                 `}
          >
            <div className='px-2 pt-3 pb-2'>
              ಚಿಕಿತ್ಸೆಗಳು <HiChevronDown className='inline-block' />
            </div>
          </Popover.Button>
          <Transition
            as={Fragment}
            enter='transition ease-out duration-200'
            enterFrom='opacity-0 translate-y-1'
            enterTo='opacity-100 translate-y-0'
            leave='transition ease-in duration-150'
            leaveFrom='opacity-100 translate-y-0'
            leaveTo='opacity-0 translate-y-1'
          >
            <Popover.Panel className='absolute z-10 px-4 mt-3 lg:mt-7 transform -translate-x-1/2 w-screen max-w-xl left-1/2 sm:px-0 lg:max-w-xl'>
              <div className='overflow-hidden shadow-lg rounded-lg ring-1 ring-black ring-opacity-5 bg-white'>
                <Tab.Group>
                  <Tab.List className='flex items-center justify-between bg-brandPink text-white font-content font-bold px-3 lg:px-12 py-1.5 lg:py-2 rounded-t-lg'>
                    <Tab
                      className={({ selected }) =>
                        classNames(
                          'w-full pt-2 pb-1 text-sm text-brandPink rounded-lg',
                          'focus:outline-none',
                          selected
                            ? 'bg-gray-100 ring-2 ring-brandPink2 shadow'
                            : 'text-gray-100 hover:bg-brandPink3 hover:text-white'
                        )
                      }
                    >
                      ಸ್ತ್ರೀ ಬಂಜೆತನ
                    </Tab>
                    <Tab
                      className={({ selected }) =>
                        classNames(
                          'w-full pt-2 pb-1 text-sm text-brandPink rounded-lg',
                          'focus:outline-none',
                          selected
                            ? 'bg-gray-100 ring-2 ring-brandPink2 shadow'
                            : 'text-gray-100 hover:bg-brandPink3 hover:text-white'
                        )
                      }
                    >
                      ಪುರುಷ ಬಂಜೆತನ
                    </Tab>
                    <Tab
                      className={({ selected }) =>
                        classNames(
                          'w-full pt-2 pb-1 text-sm text-brandPink rounded-lg',
                          'focus:outline-none',
                          selected
                            ? 'bg-gray-100 ring-2 ring-brandPink2 shadow'
                            : 'text-gray-100 hover:bg-brandPink3 hover:text-white'
                        )
                      }
                    >
                      ಮುಂದುವರಿದ ಆಯ್ಕೆಗಳು
                    </Tab>
                  </Tab.List>
                  <Tab.Panels className='px-2 my-2 text-black transition-all ease-out duration-500'>
                    <Tab.Panel>
                      <div className='grid grid-cols-3 text-center'>
                        {Treatments.female.map((items) => (
                          <Link href={items.slug} key={items.id}>
                            <div className='flex flex-col items-center justify-center hover:bg-pink-100 py-2 rounded-xl'>
                              <img
                                src={items.icon.url}
                                alt={items.title}
                                className='w-10 h-10 mx-auto'
                              />
                              <div className='font-content text-sm font-medium pt-2'>
                                {items.title}
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </Tab.Panel>
                    <Tab.Panel>
                      <div className='grid grid-cols-3 text-center'>
                        {Treatments.male.map((items) => (
                          <Link href={items.slug} key={items.id}>
                            <div className='flex flex-col items-center justify-center hover:bg-pink-100 py-2 rounded-xl'>
                              <img
                                src={items.icon.url}
                                alt={items.title}
                                className='w-10 h-10 mx-auto'
                              />
                              <div className='font-content text-sm font-medium pt-2'>
                                {items.title}
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </Tab.Panel>
                    <Tab.Panel>
                      <div className='grid grid-cols-3 text-center'>
                        {Treatments.advanced.map((items) => (
                          <Link href={items.slug} key={items.id}>
                            <div className='flex flex-col items-center justify-center hover:bg-pink-100 py-2 rounded-xl'>
                              <img
                                src={items.icon.url}
                                alt={items.title}
                                className='w-10 h-10 mx-auto'
                              />
                              <div className='font-content text-sm font-medium pt-2'>
                                {items.title}
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </Tab.Panel>
                  </Tab.Panels>
                </Tab.Group>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}
