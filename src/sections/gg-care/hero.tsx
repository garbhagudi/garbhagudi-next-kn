import { HiChatAlt, HiPhone, HiCalendar } from 'react-icons/hi';

const supportLinks = [
  {
    name: 'ಚಾಟ್ ಬೆಂಬಲ',
    href: '#',
    description:
      'ಯಾವುದೇ ಸ್ಥಳದಿಂದ ಬೇಕಾದರೂ ನಮ್ಮ ತಂಡದೊAದಿಗೆ ಆನ್‌ಲೈನ್‌ನಲ್ಲಿ ಚಾಟ್ ಮಾಡಿ. ನಿಮ್ಮ ಮನೆಯ ಅನುಕೂಲಕರ ಸೌಕರ್ಯದಿಂದ ನಾವು ನಿಮಗೆ ತಡೆಯಿಲ್ಲದ ಮತ್ತು ತೊಂದರೆಯಿಲ್ಲದ ಆನ್‌ಲೈನ್ ಚಾಟ್ ಅನುಭವವನ್ನು ಪೂರೈಸುತ್ತೇವೆ. ಈಗ ಸರಿಯಾದ ನೆರವು ಪಡೆಯಿರಿ!',
    icon: HiChatAlt,
    ctaAction: 'ಚ್ಯಾಟ್ ಮಾಡಿ ',
    ctaLink:
      'https://salesiq.zoho.com/signaturesupport.ls?widgetcode=93210c756ea31b2224df734860e5d813b081008ce54deb21426241464ccb8de2e6558490d76d66086d0b48b1ed4abff0',
  },
  {
    name: 'ಕರೆ ಬೆಂಬಲ',
    href: '#',
    description:
      'ನಿಮ್ಮ ಪ್ರಶ್ನೆಗಳು, ಕಾಳಜಿಗಳು ಅಥವಾ ಸವಾಲುಗಳೊಂದಿಗೆ ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ. ಯಾವುದೇ ಸಮಯದಲ್ಲಿ ನಿಮಗೆ ಸಹಾಯ ಮಾಡಲು ನಾವು ಸಂತೋಷಿಸುತ್ತೇವೆ ಮತ್ತು ನಾವು ಯಾವಾಗಲೂ ನಿಮಗಾಗಿ ವಿಷಯಗಳನ್ನು ಸುಲಭವಾಗಿಸಲು ಪ್ರಯತ್ನಿಸುತ್ತೇವೆ!',
    icon: HiPhone,
    ctaAction: 'ಕರೆ ಮಾಡಿ',
    ctaLink: 'tel:+919108910832',
  },
  {
    name: 'ನೇಮಕಾತಿ ಕಾದಿರಿಸಿ ',
    href: '#',
    description:
      'ಈಗ ನಿಮ್ಮ ಹತ್ತಿರದ ಯಾವುದೇ ಸ್ಥಳದಲ್ಲಿರುವ ಗರ್ಭಗುಡಿ ಐವಿಎಫ್ ಕೇಂದ್ರದಲ್ಲಿ ನೇಮಕಾತಿ ಅನ್ನು ಬುಕ್ ಮಾಡಿ ಮತ್ತು ನಮ್ಮ ತಜ್ಞರಿಂದ ಅತ್ಯುತ್ತಮ ಫರ್ಟಿಲಿಟಿ ಚಿಕಿತ್ಸೆಯನ್ನು ಪಡೆಯಿರಿ!',
    icon: HiCalendar,
    ctaAction: 'ನೇಮಕಾತಿ ಕಾದಿರಿಸಿ ',
    ctaLink: '/contact/enquiry',
  },
];

const Hero = () => {
  return (
    <div className='bg-white'>
      {/* Header */}
      <div className='relative pb-32 bg-gray-800'>
        <div className='absolute inset-0'>
          <img
            className='w-full h-full object-cover'
            src='https://res.cloudinary.com/garbhagudiivf/image/upload/v1644049097/Banner/GG_Care_Web_Banner-6_iyxanu.webp'
            alt=''
          />
          <div
            className='absolute inset-0 bg-gray-400 mix-blend-multiply'
            aria-hidden='true'
          />
        </div>
        <div className='relative max-w-7xl mx-auto py-24 px-4 xl:py-56 sm:px-6 lg:px-8'></div>
      </div>

      {/* Overlapping cards */}
      <section
        className='md:-mt-12 -mt-8 max-w-7xl mx-auto relative z-10 pb-32 px-4 sm:px-6 lg:px-8'
        aria-labelledby='contact-heading'
      >
        <h2 className='sr-only' id='contact-heading'>
          Contact us
        </h2>
        <div className='grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8'>
          {supportLinks.map((link) => (
            <div
              key={link.name}
              className='flex flex-col bg-white rounded-2xl shadow-xl'
            >
              <div className='flex-1 relative pt-16 px-6 pb-8 md:px-8'>
                <div className='absolute top-0 p-5 inline-block bg-brandPink3 rounded-xl shadow-lg transform -translate-y-1/2'>
                  <link.icon
                    className='h-6 w-6 text-white'
                    aria-hidden='true'
                  />
                </div>
                <h3 className='text-xl font-medium text-gray-900 font-heading'>
                  {link.name}
                </h3>
                <p className='mt-4 text-base text-gray-500 font-content'>
                  {link.description}
                </p>
              </div>
              <button className='px-4  py-2 bg-brandPink3 rounded-b-2xl font-content text-white font-semibold'>
                <a href={link.ctaLink} target='_blank' rel='noreferrer'>
                  {link.ctaAction}
                </a>
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Hero;
