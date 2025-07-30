/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        // hostname: '*.anota.ai', // Domínio das imagens da API
      },
    ],
  },
}

export default nextConfig
