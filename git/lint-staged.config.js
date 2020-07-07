exports.lintMD = {
  "*.md": ["remark . -o --"],
};

module.exports = {
  "*.{js,jsx,ts,tsx}": ["eslint --fix", "prettier --write"],
  "*.css": ["stylelint --fix"],
  "*.json": ["prettier --write"],
};
