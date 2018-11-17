module.exports = {
  rules: {
    // Set variable declarations on
    'init-declarations': 'error',

    // Set JSDoc validation on
    'jsdoc/check-param-names': 'error',
    'jsdoc/check-tag-names': 'error',
    'jsdoc/check-types': 'error',
    'jsdoc/newline-after-description': 'error',
    'jsdoc/no-undefined-types': 'error',
    'jsdoc/require-param-name': 'error',
    'jsdoc/require-param-type': 'error',
    'jsdoc/require-returns-type': 'error',
    'jsdoc/valid-types': 'error',
  },
  plugins: [
    'jsdoc',
  ],
};
