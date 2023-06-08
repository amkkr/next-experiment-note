import type { Config } from "@jest/types";
// eslint-disable-next-line import/no-extraneous-dependencies
import { pathsToModuleNameMapper } from "ts-jest";
import nextJest from "next/jest";
import { compilerOptions } from "./tsconfig.json";

const tsPathsMapper = pathsToModuleNameMapper(compilerOptions.paths, {
  prefix: "<rootDir>/",
});

const isCi = process.env.CI === "true";

const createJestConfig = nextJest({
  dir: "./",
});
const config: Config.InitialOptions = {
  roots: ["<rootDir>/"],
  moduleNameMapper: tsPathsMapper,
  testMatch: [
    "**/__tests__/?(*.)+(test).[jt]s?(x)",
  ],
  testEnvironment: "jest-environment-jsdom",
  transformIgnorePatterns: [`/node_modules/(?!react-medium-image-zoom)`],
  silent: isCi,
  maxWorkers: isCi ? 2 : "49%",
};

const asyncConfig = createJestConfig(config);
export default async () => {
  const awaitedConfig = await asyncConfig();
  awaitedConfig.transformIgnorePatterns = [`/node_modules/(?!react-medium-image-zoom)`];

  return awaitedConfig;
};
