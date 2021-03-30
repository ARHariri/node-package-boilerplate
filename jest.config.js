/* eslint-disable @typescript-eslint/no-var-requires */
const getJestMappersFromTSConfig = require("tsconfig-paths-jest-mapper");
const moduleNameMapper = getJestMappersFromTSConfig();

module.exports = {
  moduleNameMapper,
  setupFilesAfterEnv: ["jest-extended"],
  moduleFileExtensions: ["ts", "js"],
  testEnvironment: "node",
  // all integration tests go to /test directory
  testPathIgnorePatterns: ["/node_modules/", "/tests/"],
  testRegex: "\\.test\\.ts$",
  globals: {
    "ts-jest": {
      babelConfig: true,
    },
  },
  testRunner: "jest-circus/runner",
  transform: {
    "^.+\\.ts?$": "ts-jest",
  },
  watchPlugins: [
    [
      "jest-watch-typeahead/filename",
      {
        // Override jest default filtering by filename regex pattern
        key: "p",
        promot: "filter by a filename regex pattern",
      },
    ],
    [
      "jest-watch-typeahead/testname",
      {
        // Override jest default filtering by test name regex pattern
        key: "t",
        promot: "filter by a test name regex pattern",
      },
    ],
  ],
  cacheDirectory: "/tmp/jest-cache",
};
