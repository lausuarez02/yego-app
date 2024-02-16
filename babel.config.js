module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    "react-native-reanimated/plugin",
    [
      'module-resolver',
      {
        alias: {
          src: './src',
          '@static': './static/images',
          '@assets': './src/assets',
          '@components': './src/components',
          '@constants': './src/constants',
          '@helpers': './src/helpers',
          '@hooks': './src/hooks',
          '@models': './src/models',
          '@navigation': './src/navigation',
          '@redux': './src/redux',
          '@screens': './src/screens',
          '@services': './src/services',
          '@theme': './src/theme',
          '@utils': './src/utils',
        },
      },
    ],
  ],
};
