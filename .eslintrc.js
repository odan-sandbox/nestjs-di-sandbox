module.exports = {
    env: {
      browser: true,
      node: true
    },
    extends: [
      "eslint:recommended",
      "plugin:@typescript-eslint/eslint-recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:prettier/recommended",
      "prettier/@typescript-eslint"
    ],
    plugins: [
      "@typescript-eslint"
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
      sourceType: "module"
    },
    rules: {
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/no-parameter-properties": "off"
    }
  }