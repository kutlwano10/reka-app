import withPWA from "next-pwa";

const nextConfig = withPWA({
  dest: "public", // Destination folder for PWA assets
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development", // Disable PWA in development
});

export default nextConfig;
