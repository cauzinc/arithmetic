module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'no-plusplus': 0,
    'import/prefer-default-export': 0,
    'no-console': 0,
    'import/extensions': 0,
    'no-param-reassign': 1,
  },
};
