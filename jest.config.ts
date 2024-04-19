module.exports = {
  preset: "ts-jest",
  testEnvironment: "jest-environment-jsdom",
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.scss$': 'jest-scss-transform',
  },
  setupFilesAfterEnv: ["<rootDir>/setupTests.ts"]
}
