import withPWA from "next-pwa";

const nextConfig = withPWA({
  dest: "public", // Destination folder for PWA assets
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development", // Disable PWA in development

  images: {
    domains: ["res.cloudinary.com"], // Allow external images from Cloudinary
  },
});

export default nextConfig;
