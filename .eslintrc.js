module.exports = {
  root: true,
  extends: ['prettier', 'prettier/vue', 'plugin:nuxt/recommended'],
  plugins: ['nuxt'],
  // add your custom rules here
  rules: {
    'nuxt/no-cjs-in-config': 'off'
  }
}
