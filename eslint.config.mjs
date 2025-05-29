import globals from 'globals';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import js from '@eslint/js';
import {FlatCompat} from '@eslint/eslintrc';
import typescriptParser from '@typescript-eslint/parser';
import typescriptPlugin from '@typescript-eslint/eslint-plugin';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all
});

export default [
  // Base configuration
  {
    ignores: ['dist/*.js'],
  },

  // Extend chartjs config
  ...compat.extends('chartjs'),

  // Common configuration for JavaScript files
  {
    files: ['**/*.js'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      ecmaVersion: 2022,
      sourceType: 'module',
    },
    rules: {
      complexity: [1, 15],
    },
  },

  // TypeScript specific configuration
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: 'module',
        project: './tsconfig.json',
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      '@typescript-eslint': typescriptPlugin,
    },
    rules: {
      complexity: [1, 15],
      // Disable no-unused-vars for TypeScript files
      'no-unused-vars': 'off',
      // Use the TypeScript-specific version with better handling of type parameters
      '@typescript-eslint/no-unused-vars': ['error', {
        // Allow unused parameters in function type definitions
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        // Ignore variables used in type definitions
        ignoreRestSiblings: true,
        // Don't check parameters of functions used as type definitions
        args: 'none'
      }],
      // Disable no-shadow for TypeScript files
      'no-shadow': 'off',
      // Use the TypeScript-specific version
      '@typescript-eslint/no-shadow': ['error']
    },
  },

  // Allow console logs in scripts directory
  {
    files: ['scripts/**/*.js'],
    rules: {
      'no-console': 'off',
      'no-process-exit': 'off'
    }
  }
];
