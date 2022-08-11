module.exports = {
  plugins: ["prettier"],
  extends: ["react-app", "prettier"],
  rules: {
    "prettier/prettier": "error",
    "react-hooks/exhaustive-deps": "off",
  },
};
