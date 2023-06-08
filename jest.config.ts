import type { Config } from "jest";
import nextJest from "next/jest";

const esModules = ["react-medium-image-zoom"].join("|");
const createJestConfig = nextJest({
  dir: "./",
});
const config: Config = {
  preset: "ts-jest",
  roots: ["<rootDir>/src"],
  moduleDirectories: ["node_modules", "src"],
  transformIgnorePatterns: [
    `/node_modules/(?!${esModules})`
  ],
  testEnvironment: "jest-environment-jsdom",
}

const asyncConfig = createJestConfig(config);
export default async () => {
  const awaitedConfig = await asyncConfig();
  awaitedConfig.transformIgnorePatterns = [`/node_modules/(?!${esModules})`];

  return awaitedConfig;
};
