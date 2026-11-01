// filepath: /Users/kevinsimon/Documents/kevindsimon/next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // docs/ is the published site. Dev and preview builds set NEXT_DIST_DIR so they never touch it.
  distDir: process.env.NEXT_DIST_DIR || 'docs',
};
module.exports = nextConfig;
