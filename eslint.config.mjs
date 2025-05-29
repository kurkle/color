import globals from 'globals';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import js from '@eslint/js';
import {FlatCompat} from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all
});

export default [{
  ignores: ['dist/*.js'],
}, ...compat.extends('chartjs'), {
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
}, {
  // Allow console logs in scripts directory
  files: ['scripts/**/*.js'],
  rules: {
    'no-console': 'off',
    'no-process-exit': 'off'
  }
}];
