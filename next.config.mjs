const isProd = process.env.NODE_ENV === "production"

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "angelrobertmarquez.com",
        port: "",
        pathname: "/ryp/**",
      },
    ],
    unoptimized: true,
  },
  // use for hosted builds
  // trailingSlash: true,
  // output: "export",

  //use for subdomain hosted
  // assetPrefix: isProd ? "/ryp/" : undefined,
  // assetPrefix: "/ryp/",
  // basePath: "/ryp",
}

export default nextConfig
