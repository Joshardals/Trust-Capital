/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    const commonHeaders = [
      {
        key: 'Content-Security-Policy',
        value: 'upgrade-insecure-requests',
      },
      {
        key: 'viewport',
        value: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0',
      },
      // add other common headers if needed
    ];
  
    return [
      {
        source: '/signup',
        headers: commonHeaders,
      },
      {
        source: '/login',
        headers: commonHeaders,
      },
      // add more routes as needed
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
