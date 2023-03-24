/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["images.unsplash.com", "wembleypark.com"],
  },
  env: {
    myCustomEnvironment: "home pages envirement",
  }, //access through process.env.myCustomEnvironment
  // basePath: "/my-repo",
  async rewrites() {
    return [
      {
        source: "/",
        destination: "https://www.google.com",
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/about-us",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/",
        headers: [
          {
            key: "x-index",
            value: "index page",
          },
        ],
      },
      {
        source: "/about-us",
        headers: [
          {
            key: "x-about",
            value: "about us",
          },
        ],
      },
    ];
  },
  devIndicators: {
    buildActivityPosition: "bottom-right",
  },
  distDir: "build",
};

module.exports = nextConfig;
