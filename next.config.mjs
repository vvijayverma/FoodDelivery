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
    async rewrites() {
        return [
          {
            source: '/api/:path*',
            destination: 'http://localhost:3000/api/:path*'
          }
        ]
      },
    env: {
        MONGODB_URI: process.env.MONGODB_URI,
      },
  images: {
      remotePatterns: [
          {
              protocol: 'https',
              hostname: 'www.shutterstock.com',
              port: '',
              pathname: '/**',
          },
          {
              protocol: 'https',
              hostname: 'cdn.pixabay.com',
              port: '',
              pathname: '/**',
          },
          {
              protocol: 'https',
              hostname: 'static.toiimg.com',
              port: '',
              pathname: '/**',
          },
          {
              protocol: 'https',
              hostname: 'unsplash.com',
              port: '',
              pathname: '/**',
          },
          {
              protocol: 'https',
              hostname: 'images.unsplash.com',
              port: '',
              pathname: '/**',
          },
          {
              protocol: 'https',
              hostname: 'png.pngtree.com',
              port: '',
              pathname: '/**',
          },
          {
              protocol: 'https',
              hostname: 'encrypted-tbn0.gstatic.com',
              port: '',
              pathname: '/**',
          },
      ],
  },
};

export default nextConfig;

