const { mergeConfig } = require('vite')
const path = require('path')

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/theming',
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-vite',
  },
  features: {
    storyStoreV7: true,
  },
  /*   async viteFinal(config) {
    const { config: userConfig } = await loadConfigFromFile(
      path.resolve(__dirname, '../vite.config.ts')
    )

    return mergeConfig(config, {
      ...userConfig,
    })
  }, */
  async viteFinal(config) {
    return mergeConfig(config, {
      css: {
        preprocessorOptions: {
          scss: {
            additionalData: `@import "../src/styles/_index.scss";`,
          },
        },
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, './src'),
        },
      },
    })
  },
}
