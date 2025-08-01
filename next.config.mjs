/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (isServer) {
      // 서버 측에서는 canvas 모듈을 비워둡니다
      config.externals.push({
        canvas: "commonjs canvas",
      });
    }

    return config;
  },
};

export default nextConfig;
