/** @type {import('next').NextConfig} */
const nextConfig = (phase) => {
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
