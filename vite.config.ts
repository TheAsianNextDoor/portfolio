/// <reference types="vitest" />
/// <reference types="vite/client" />

import { readFileSync } from 'fs';
import path from 'path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';
import EnvironmentPlugin from 'vite-plugin-environment';
import sassDts from 'vite-plugin-sass-dts';
import tsconfigPaths from 'vite-tsconfig-paths';

const configJson = readFileSync('./codequality/coverage-rules.json', 'utf-8');
const coverageConfig = JSON.parse(configJson);

interface CoverageRule {
  displayName: string;
  metricKey: string;
  value: string;
  comparator: string;
}

const getCoverage = (ruleObj: CoverageRule[], keyName: string) => {
  const item = ruleObj.find((obj) => obj.metricKey === keyName);
  return item ? Number(item.value) : 100;
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    tsconfigPaths(),
    react(),
    EnvironmentPlugin('all', { prefix: 'WEB_' }),
    checker({
      typescript: true,
      eslint: {
        lintCommand: 'eslint --no-ignore "./**/*.{ts,tsx}"',
      },
    }),

    // @ts-ignore must use default because module is cjs and we are in esm
    sassDts.default({ enabledMode: 'development' }),
  ],
  server: {
    hmr: true,
    open: true,
    port: 3000,
  },
  css: {
    modules: {
      scopeBehaviour: 'local',
      localsConvention: 'dashes',
    },
  },
  build: {
    outDir: path.join(__dirname, 'dist'),
    chunkSizeWarningLimit: 1000,
    minify: 'esbuild',
    emptyOutDir: true,
  },
  test: {
    environment: 'jsdom',
    clearMocks: true,
    globals: true,
    setupFiles: ['./configs/test/setupTests.js'],
    coverage: {
      reporter: ['text-summary'],
      reportsDirectory: 'coverage',
      branches: getCoverage(coverageConfig.rules, 'BranchCoverage'),
      functions: getCoverage(coverageConfig.rules, 'MethodCoverage'),
      lines: getCoverage(coverageConfig.rules, 'LineCoverage'),
      statements: getCoverage(coverageConfig.rules, 'StatementCoverage'),
    },
  },
});
