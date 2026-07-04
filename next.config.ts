import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    /** @todo get svgr plugin to work */
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.greenguideapp.com',
            },
        ],
    },
};

export default nextConfig;
