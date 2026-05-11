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
  // 关键：将 coze-coding-dev-sdk 标记为服务端外部包
  // 同时配合 webpack externals 双重保险
  serverExternalPackages: ['coze-coding-dev-sdk'],
  webpack: (config, { isServer }) => {
    if (isServer) {
      if (Array.isArray(config.externals)) {
        config.externals.push('coze-coding-dev-sdk');
      } else if (typeof config.externals === 'function') {
        const originalExternals = config.externals;
        config.externals = (ctx, callback) => {
          if (ctx.request === 'coze-coding-dev-sdk') {
            return callback();
          }
          return originalExternals(ctx, callback);
        };
      } else {
        config.externals = [config.externals, 'coze-coding-dev-sdk'].filter(Boolean);
      }
    }
    return config;
  },
};

module.exports = nextConfig;
