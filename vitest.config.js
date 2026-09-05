import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    coverage: {
      provider: 'v8',
      reporter: ['text', 'lcov'],
      reportsDirectory: 'coverage',
    },
    environment: 'node',
    exclude: ['**/node_modules/**', '**/dist/**'],
    globals: true,
    include: ['test/**/*.test.js', 'src/**/*.test.ts'],
  },
})
