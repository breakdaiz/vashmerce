module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'airbnb',
  ],
  parser: 'babel-eslint',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    "no-console": 2,
    "indent": 2,
    "semi": ["error", "always"], 
    "react/jsx-filename-extension": [1, {"extensions": [".js", ".jsx"]}],
    "no-unused-vars": ["error", { "vars": "all", "args": "after-used", "ignoreRestSiblings": false }],
    "react/jsx-one-expression-per-line": 0,
    "react/prop-types" : 0,
    "import/no-named-as-default": 0,
    "react/jsx-max-props-per-line": [ 1, { "maximum": 2, "when": "multiline" }]
  },
};
