const tsConfigForTest = require('./src/test/ts/tsconfig.json');

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testRegex: '(src/test/ts/.*|(\\.|/)(test|spec))\\.tsx?$',
  globals:{
    "ts-jest":{
      tsConfig:tsConfigForTest
    }
  }
};