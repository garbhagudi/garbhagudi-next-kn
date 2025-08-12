const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    dangerouslyAllowSVG: true,
    unoptimized: true,
    domains: [
      "res.cloudinary.com",
      "media.graphassets.com",
      "avatars.dicebear.com",
    ],
  },

  async headers() {
    return [
      {
        source: "/:all*(svg|jpg|png|webp)",
        locale: false,
        headers: [
          {
            key: "cache-control",
            value: "public, max-age=9999999999, must-revalidate",
          },
        ],
      },
    ];
  },

  async rewrites() {
    return [
      {
        source: "/public/contact.html",
        destination: "/src/pages/api/contact.tsx",
      },
      {
        source: "/public/thank-you.html",
        destination: "/src/pages/api/thank-you.tsx",
      },
    ];
  },

  async redirects() {
    return [
      {
        source: "/features/paripoorna-2022",
        destination: "/features/paripoorna",
        permanent: true,
      },
      {
        source: "/doctors/[slug]",
        destination: "/fertility-experts/[slug]",
        permanent: true,
      },
      {
        source: "/about/executive-team/[slug]",
        destination: "/about/overview",
        permanent: true,
      },
      {
        source: "/doctors/dr-asha-s-vijay",
        destination: "/fertility-experts/dr-asha-s-vijay",
        permanent: true,
      },
      {
        source: "/doctors/dr-chaithra-s-k",
        destination: "/fertility-experts",
        permanent: true,
      },
      {
        source: "/doctors/dr-maheshwari",
        destination: "/fertility-experts",
        permanent: true,
      },
      {
        source: "/features/[slug]",
        destination: "/",
        permanent: true,
      },
      {
        source: "/features/ಐವಿಎಫ್‍ನ ಯಶಸ್ಸಿನ ಮಟ್ಟಗಳು",
        destination: "/features/success-rates-of-ivf",
        permanent: true,
      },
      {
        source: "/features/ಕೈಗೆಟುಕುವ ಚಿಕಿತ್ಸೆಗಳು",
        destination: "/features/affordable-treatments",
        permanent: true,
      },
      {
        source: "/features/ಸಮಗ್ರ ಮಾರ್ಗ",
        destination: "/features/holistic-approach",
        permanent: true,
      },
      {
        source: "/fertility-",
        destination: "/resources/diagnosis",
        permanent: true,
      },
      {
        source: "/resources/causes/[slug]",
        destination: "/resources/causes",
        permanent: true,
      },
      {
        source: "/treatments/intracytoplasmic-sperm-injection-icsi",
        destination:
          "/resources/treatments/intracytoplasmic-sperm-injection-icsi",
        permanent: true,
      },
      {
        source: "/treatments/intra-uterine-insemination-iui",
        destination: "/resources/treatments/intra-uterine-insemination-iui",
        permanent: true,
      },
      {
        source: "/treatments/in-vitro-fertilization-ivf",
        destination: "/resources/treatments/in-vitro-fertilization-ivf",
        permanent: true,
      },
      {
        source: "/treatments/pesa-and-tesa",
        destination: "/resources/treatments/pesa-and-tesa",
        permanent: true,
      },
      {
        source: "/features/ಹಣಕಾಸು ನೆರವು ಆಯ್ಕೆಗಳು",
        destination: "/features/financing-options",
        permanent: true,
      },
      {
        source: "/features/ವಿಶ್ವ ದರ್ಜೆಯ ಫರ್ಟಿಲಿಟಿ ಆರೈಕೆ",
        destination: "/",
        permanent: true,
      },
      {
        source: "/doctors/undefined",
        destination: "/fertility-experts",
        permanent: true,
      },
      {
        source: "/doctors/dr-priyanka-rani",
        destination: "/fertility-experts/dr-priyanka-rani",
        permanent: true,
      },
      {
        source: "/doctors/dr-nikitha-murthy-bs",
        destination: "/fertility-experts/dr-nikitha-murthy-bs",
        permanent: true,
      },
      {
        source: "/doctors/dr-aparna-n",
        destination: "/fertility-experts/dr-aparna-n",
        permanent: true,
      },
      {
        source: "/doctors/dr-anitha-a-manoj",
        destination: "/fertility-experts/dr-anitha-a-manoj",
        permanent: true,
      },
      {
        source: "/about/vision-and-mission",
        destination: "/about/overview",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
