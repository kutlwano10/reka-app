import withPWA from 'next-pwa';

const nextConfig = withPWA({
  dest: 'public', // PWA files destination
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development', // Disable in development mode
});

export default nextConfig;
