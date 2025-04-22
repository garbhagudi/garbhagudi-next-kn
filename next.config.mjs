const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    dangerouslyAllowSVG: true,
    unoptimized: true,
    domains: [
      'res.cloudinary.com',
      'media.graphassets.com',
      'avatars.dicebear.com',
    ],
  },

  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|png|webp)',
        locale: false,
        headers: [
          {
            key: 'cache-control',
            value: 'public, max-age=9999999999, must-revalidate',
          },
        ],
      },
    ];
  },

  async rewrites() {
    return [
      {
        source: '/public/contact.html',
        destination: '/src/pages/api/contact.tsx',
      },
      {
        source: '/public/thank-you.html',
        destination: '/src/pages/api/thank-you.tsx',
      },
    ];
  },

  async redirects() {
    return [
      {
        source: '/features/paripoorna',
        destination: '/features/paripoorna-2022',
        permanent: true,
      },
      {
        source: '/doctors/[slug]',
        destination: '/fertility-experts/[slug]',
        permanent: true,
      },
      {
        source: '/doctors/dr-chaithra-s-k',
        destination: '/fertility-experts',
        permanent: true,
      },
      {
        source: '/doctors/dr-maheshwari',
        destination: '/fertility-experts',
        permanent: true,
      },
      {
        source: '/features/[slug]',
        destination: '/features',
        permanent: true,
      },
      {
        source: '/features/ಐವಿಎಫ್‍ನ ಯಶಸ್ಸಿನ ಮಟ್ಟಗಳು',
        destination: '/features/success-rates-of-ivf',
        permanent: true,
      },
      {
        source: '/features/ಕೈಗೆಟುಕುವ ಚಿಕಿತ್ಸೆಗಳು',
        destination: '/features/affordable-treatments',
        permanent: true,
      },
      {
        source: '/features/ಸಮಗ್ರ ಮಾರ್ಗ',
        destination: '/features/holistic-approach',
        permanent: true,
      },
      {
        source: '/fertility-',
        destination: '/resources/diagnosis',
        permanent: true,
      },
      {
        source: '/resources/causes/[slug]',
        destination: '/resources/causes',
        permanent: true,
      },
      {
        source: '/treatments/intracytoplasmic-sperm-injection-icsi',
        destination: '/treatments/icsi-treatment-in-bangalore',
        permanent: true,
      },
      {
        source: '/treatments/intra-uterine-insemination-iui',
        destination: '/treatments/iui-treatment-in-bangalore',
        permanent: true,
      },
      {
        source: '/treatments/in-vitro-fertilization-ivf',
        destination: '/treatments/ivf-treatment-in-bangalore',
        permanent: true,
      },
      {
        source: '/treatments/pesa-and-tesa',
        destination: '/treatments/pesa-and-tesa',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
