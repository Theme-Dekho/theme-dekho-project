// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/backend/:path*",
        destination:
          "https://theme-dekho-backend.onrender.com/:path*",
      },
    ];
  },
};

export default nextConfig;