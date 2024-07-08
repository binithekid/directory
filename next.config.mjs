// next.config.mjs
import path from "path";

const nextConfig = {
  reactStrictMode: true,

  webpack: (config, { isServer }) => {
    // Resolve '@' alias
    config.resolve.alias["@"] = path.resolve(__dirname);

    // Important: return the modified config
    return config;
  },
};

export default nextConfig;
