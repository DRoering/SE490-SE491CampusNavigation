require("dotenv").config();
const tasks = (arr) => arr.join(" && ");

module.exports = {
  hooks: {
    "pre-commit": tasks([
      "./scripts/skip-auto-format-and-linting || lint-staged",
    ]),
  },
};
