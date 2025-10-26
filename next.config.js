/** @type {import('next').NextConfig} */
const { withPayload } = require("@payloadcms/next/withPayload");

const nextConfig = {
  images: {
    domains: ["localhost"],
  },
  serverExternalPackages: ["mongoose"],
};

module.exports = withPayload(nextConfig);
