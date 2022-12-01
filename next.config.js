const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
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

  // async redirects() {
  //   return [
  //     {
  //       source: "/locations/south-end-circle",
  //       destination: "/locations/jayanagar",
  //       permanent: true,
  //     },
  //     {
  //       source: "/locations/fertility-experts",
  //       destination: "/fertility-experts",
  //       permanent: true,
  //     },
  //     {
  //       source: "/resources/treatments",
  //       destination: "/treatments",
  //       permanent: true,
  //     },
  //     {
  //       source: "/resources/treatments/:slug",
  //       destination: "/treatments/:slug",
  //       permanent: true,
  //     },
  //     {
  //       source: "/doctors/:slug",
  //       destination: "/fertility-experts/:slug",
  //       permanent: true,
  //     },
  //     {
  //       source: "/kn",
  //       destination: "https://kannada.garbhagudi.com",
  //       permanent: true,
  //     },
  //     {
  //       source: "/features/paripoorna",
  //       destination: "/features/paripoorna-2022",
  //       permanent: true,
  //     },
  //   ];
  // },
};

module.exports = nextConfig;
