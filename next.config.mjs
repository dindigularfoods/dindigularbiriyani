/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // 2. Place remotePatterns INSIDE here
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**", // Allows all domains
            },
        ],
    },
};

export default nextConfig;
