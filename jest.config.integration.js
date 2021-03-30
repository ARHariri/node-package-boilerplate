const config = require("./jest.config");

config.testPathIgnorePatterns = config.testPathIgnorePatterns
  .filter((path) => !/\/tests/.test(path))
  .concat("/src/");

module.exports = config;
