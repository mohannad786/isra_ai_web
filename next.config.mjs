/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [],
    },
    // Disable strict mode for smoother animations
    reactStrictMode: false,
    // Temporarily ignore ESLint during builds to avoid CLI option incompatibility on Vercel
    eslint: {
        ignoreDuringBuilds: true,
    },
};

export default nextConfig;
