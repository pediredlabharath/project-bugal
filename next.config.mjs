/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: [
    'http://localhost:3002',
    'http://192.168.1.38:3002',
    'http://192.168.1.100:3002'
  ]
};

export default nextConfig;
