/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    CONTENTFUL_SPACE_ID: process.env.SUPABASE_URL,
    CONTENTFUL_ACCESS_TOKEN: process.env.SUPABASE_KEY,
  },
}

module.exports = nextConfig
