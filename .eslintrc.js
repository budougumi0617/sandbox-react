module.exports = {
  'extends': [
    'eslint:recommended',
    'plugin:flowtype/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'prettier/flowtype',
    'prettier/react'
  ],
  'env': {
    'browser': true
  },
  'plugins': ['react', 'flowtype', 'prettier', 'jsx-a11y'],
  'rules': {
    'prettier/prettier': [
      'error',
      {
        'singleQuote': true
      }
    ],
    'yoda': 0,
    'no-unused-vars': 1,
    'react/prefer-stateless-function': 0,
    'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx']  }],
  },
  'globals': {
    '$': false,
    'describe': true,
    'it': true,
    'test': true,
    'expect': true
  }
}
