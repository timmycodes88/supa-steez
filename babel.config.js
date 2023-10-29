module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      '@babel/plugin-proposal-export-namespace-from',
      [
        'module-resolver',
        {
          alias: {
            '@features': './features',
            '@assets': './assets',
            '@components': './components',
            '@hooks': './hooks',
            '@utils': './utils',
            '@constants': './constants',
          },
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      ],
      'react-native-reanimated/plugin',
      require.resolve('expo-router/babel'),
    ],
  }
}
