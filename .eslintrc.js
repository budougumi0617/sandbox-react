module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:flowtype/recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "prettier/flowtype",
    "prettier/react"
  ],
  env: {
    browser: true
  },
  plugins: ["react", "flowtype", "prettier", "jsx-a11y"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        singleQuote: true,
        printWidth: 100
      }
    ],
    yoda: 0,
    "no-unused-vars": 1,
    "react/prefer-stateless-function": 0,
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "jsx-a11y/href-no-hash": "off",
    "jsx-a11y/anchor-is-valid": ["warn", { aspects: ["invalidHref"] }]
  },
  globals: {
    $: false,
    describe: true,
    it: true,
    test: true,
    expect: true,
    process: true
  }
};
