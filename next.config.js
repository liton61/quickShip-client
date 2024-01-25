/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['lh3.googleusercontent.com'],
        remotePatterns: [
            { hostname: 'i.ibb.co' },

        ],
    }
}

module.exports = nextConfig
