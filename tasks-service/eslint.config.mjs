// @ts-check
import eslint from '@eslint/js';
import parser from '@typescript-eslint/parser';
import stylistic from '@stylistic/eslint-plugin';

export default [
  {
    files: ['**/*.{mjs,cjs,js,ts,tsx,jsx,json}'],
    languageOptions: {
      ecmaVersion: 2020,
      parser,
      sourceType: 'module'
    },
    ...eslint.configs.recommended,
    plugins: {
      '@stylistic': stylistic
    },
    rules: {
      'semi': 'error',
      'comma-dangle': 'error',
      '@stylistic/indent': ['error', 2]
    }
  }
];