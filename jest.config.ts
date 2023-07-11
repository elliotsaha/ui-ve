import type { Config } from "jest";

const config: Config = {
  transform: {
    "\\.css\\.ts$": "@vanilla-extract/jest-transform",
  },
  testPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/dist/"],
  preset: "ts-jest",
  verbose: true,
  collectCoverage: true,
  collectCoverageFrom: [
    "<rootDir>/src/components/**/*.{js,jsx,ts,tsx}",
    "!<rootDir>/src/components/**/*.stories.{js,jsx,ts,tsx}",
    "!<rootDir>/src/components/**/index.{js,jsx,ts,tsx}",
  ],
  coverageDirectory: "<rootDir>/coverage/jest",
  testEnvironment: "jest-environment-jsdom",
};

export default config;
