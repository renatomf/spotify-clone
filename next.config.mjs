/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "wohyrvhbgtyfhilqsxhp.supabase.co",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
