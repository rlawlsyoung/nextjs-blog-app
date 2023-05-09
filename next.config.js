import { PHASE_DEVELOPMENT_SERVER } from "next/dist/shared/lib/constants";

/** @type {import('next').NextConfig} */
const nextConfig = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    // 개발 모드일 때 (npm run dev)
    return {
      reactStrictMode: true,
      env: {
        mongodb_username: "rlawlsyoung",
        mongodb_password: "1q2w3e4r",
        mongodb_clustername: "udemycluster",
        mongodb_database: "my-site",
      },
    };
  }

  return {
    reactStrictMode: true,
    env: {
      mongodb_username: "rlawlsyoung",
      mongodb_password: "1q2w3e4r",
      mongodb_clustername: "udemycluster",
      mongodb_database: "my-site",
    },
  };
};

module.exports = nextConfig;
