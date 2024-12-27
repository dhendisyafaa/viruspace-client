import type { NextConfig } from "next";
import nextPwa from "next-pwa";

const nextConfig: NextConfig = {
  /* config options here */
};

const withPWA = nextPwa({
  dest: "public",
  register: true,
});

const config = withPWA({
  ...nextConfig,
});

export default config;
