/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images : {
  remotePatterns : [
    {
      protocol : "https",
      hostname : "ipfs.crossbell.io"
    }
  ]
    
  }
}

module.exports = nextConfig
