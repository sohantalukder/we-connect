module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    '@realm/babel-plugin',
    ['@babel/plugin-proposal-decorators', {legacy: true}],
    'react-native-reanimated/plugin',
  ],
  env: {
    production: {
      plugins: ['react-native-paper/babel'],
    },
  },
};
