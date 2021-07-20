const { defaults } = require("jest-config");

module.exports = {
  verbose: true,
  collectCoverage: true,
  collectCoverageFrom: [
    "./src/**/*.ts",
    "!./src/main.ts",
    "!./src/polyfills.ts",
    "!./src/**/*.module.ts",
    "!./src/environments/**/*",
  ],
};
