module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:storybook/recommended",
  ],
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "no-console": ["warn", { allow: ["warn"] }],
    semi: ["error", "never"],
    "comma-dangle": ["error", "never"],
    quotes: [
      "error",
      "single",
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],
    "jsx-quotes": ["error", "prefer-double"],
    indent: ["error", 2],
    "no-trailing-spaces": "error",
    "@typescript-eslint/no-misused-promises": [
      "error",
      {
        checksVoidReturn: false,
      },
    ],
  },
};
