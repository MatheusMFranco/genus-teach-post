module.exports = {
  $schema: './node_modules/@stryker-mutator/core/schema/stryker-schema.json',
  mutate: ['src/**/*.ts?(x)', '!src/**/*.test.ts?(x)', '!src/index.tsx'],
  mutator: {
    excludedMutations: ['ArrayDeclaration'], //React useEffect issue
  },
  testRunner: 'jest',
  reporters: ['progress', 'clear-text', 'html'],
  coverageAnalysis: 'off',
  tsconfigFile: 'tsconfig.json',
  checkers: ['typescript'],
  ignoreStatic: false,
  warnings: { slow: false },
  testFiles: ['src/**/*.test.ts?(x)'],
  tempDirName: 'stryker-tmp',
  jest: {
    projectType: 'create-react-app',
  },
};
