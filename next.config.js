/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ['*.dev.coze.site'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*',
        pathname: '/**',
      },
    ],
  },
  // 关键：将 coze-coding-dev-sdk 标记为服务端外部包，避免 webpack bundling 导致 __webpack_require__.add 缺失
  serverExternalPackages: ['coze-coding-dev-sdk'],
};

module.exports = nextConfig;
