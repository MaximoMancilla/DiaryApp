/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'i.pinimg.com',
          },
          {
            protocol:'https',
            hostname: 'cdn-icons-png.flaticon.com',
          }
        ],
      },
}

module.exports = nextConfig
