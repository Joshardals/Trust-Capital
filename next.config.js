/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/signup', // Specify the route
        headers: [
          {
            key: 'Content-Security-Policy',
            value: 'upgrade-insecure-requests',
          },
          {
            key: 'viewport',
            value: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0',
          },
          // other headers if needed
        ],
      },
    ];
  },
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'assets.coingecko.com', 
          },
        ],
      },
}

module.exports = nextConfig
