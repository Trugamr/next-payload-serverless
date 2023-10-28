const path = require('path')
const { withPayload } = require('@payloadcms/next-payload')

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    webpackBuildWorker: true,
  },
}

const payloadPaths = {
  adminRoute: '/admin',
  cssPath: undefined,
  configPath: path.resolve(__dirname, './payload/config.ts'),
  payloadPath: path.resolve(process.cwd(), './payload/client.ts'),
}

module.exports = withPayload(nextConfig, payloadPaths)
