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

// 개인 블로그 앱이기 때문에 환경변수를 git ignore에 따로 등록하지 않았습니다.
