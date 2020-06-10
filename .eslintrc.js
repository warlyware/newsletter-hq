module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  // add your custom rules here
  rules: {
    'vue/max-attributes-per-line': 0,
    'vue/html-indent': 0,
    'vue/html-closing-bracket-newline': 0,
    'space-before-function-paren': 0
  }
}
