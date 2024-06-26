/** @type {import('next').NextConfig} */
const nextConfig = {
    assetPrefix: '/',
    webpack: (config) => {
        config.resolve.fallback = {fs: false, net: false, tls: false};
        return config;
    },
    output: "export"

};

export default nextConfig;
