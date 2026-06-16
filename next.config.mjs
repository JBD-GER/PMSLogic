/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "pmslogic.com"
          }
        ],
        destination: "https://www.pmslogic.com/:path*",
        permanent: true
      },
      {
        source: "/pmsai",
        destination: "/funktionen#pmsai",
        permanent: true
      },
      {
        source: "/hotelsoftware-kleine-hotels",
        destination: "/hotelsoftware-hotelanlagen",
        permanent: true
      }
    ];
  }
};

export default nextConfig;
