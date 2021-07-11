module.exports = {
  root: true,
  extends: '@react-native-community',
  env: {
    jest: true,
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
  plugins: ['detox'],
};
