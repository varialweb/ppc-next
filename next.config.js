module.exports = {
  reactStrictMode: true,
  webpack: (config, { dev, isServer }) => {
    Object.assign(config.resolve.alias, {
      react: 'preact/compat',
      'react-dom/test-utils': 'preact/test-utils',
      'react-dom': 'preact/compat',
    });

    return config;
  },
  images: {
    domains: ['d35tzt7i3ppzs4.cloudfront.net'],
  }
}
