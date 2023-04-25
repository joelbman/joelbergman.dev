/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/cv',
        destination: '/Joel_Bergman_CV.pdf',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
