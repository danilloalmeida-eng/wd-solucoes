import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  distDir: process.env.NODE_ENV === 'development' ? '.next-preview' : '.next-build',
  turbopack: {
    root: projectRoot,
  },
  images: {
    unoptimized: true, // Required for static export
  }
};

export default nextConfig;
