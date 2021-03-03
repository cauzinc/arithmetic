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
    semi: 0,
    'max-len': 0,
    'consistent-return': 0,
    'no-plusplus': 0,
    'import/prefer-default-export': 0,
    'no-console': 0,
    'import/extensions': 0,
    'no-param-reassign': 1,
  },
};
