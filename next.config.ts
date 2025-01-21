import nextI18NextConfig from "./next-i18next.config";

const nextConfig = {
  ...nextI18NextConfig,
  compiler: {
    emotion: true,
  },
};

export default nextConfig;