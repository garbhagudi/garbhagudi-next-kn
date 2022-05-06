module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com"],
  },
  rewrite: async () => [
    {
      source: "/public/contact.html",
      destination: "/src/pages/api/contact.tsx",
    },
    {
      source: "/public/contact.html",
      destination: "/src/pages/api/contact.tsx",
    },
  ],
  // async redirects() {
  //   return [
  //     {
  //       source: "/kn",
  //       destination: "https://garbhagudi.com",
  //       permanent: true,
  //     },
  //   ];
  // },
};

// const withPWA = require("next-pwa");

// module.exports = withPWA({
//   pwa: {
//     dest: "public",
//     register: true,
//     skipWaiting: true,
//   },
// });
