/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'play-lh.googleusercontent.com' },
      { protocol: 'https', hostname: 'is1-ssl.mzstatic.com' },
      { protocol: 'https', hostname: 'badge-scanner-five.vercel.app' },
      { protocol: 'https', hostname: 'shrug-person-78902957.figma.site' },
    ],
  },
}

export default nextConfig
