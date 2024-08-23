// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     images: {
//         domains: [
//           'www.shutterstock.com',
//           'cdn.pixabay.com',
//           'static.toiimg.com',
//           'unsplash.com',
//           'images.unsplash.com',
//           'png.pngtree.com',
//           'encrypted-tbn0.gstatic.com'
//         ],
//       },
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        MONGODB_URI: process.env.MONGODB_URI,
      },
  images: {
      remotePatterns: [
        {
            protocol: 'https',
            hostname: '**',
          },
      ],
  },
};

export default nextConfig;

