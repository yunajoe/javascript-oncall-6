module.exports = {
  env: {
    node: true,
    browser: true,
    es2021: true,
  },
  extends: ["airbnb-base"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    // Airbnb 규칙 중 일부를 재정의
    "no-console": "off",
    quotes: "off",
    "class-methods-use-this": "off",
    "import/extensions": "off",
  },
};
