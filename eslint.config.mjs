import { dirname } from 'path';

import { FlatCompat } from '@eslint/eslintrc';
import eslint from '@eslint/js';
import pluginQuery from '@tanstack/eslint-plugin-query';
import configPrettier from 'eslint-config-prettier';
import reactPlugin from 'eslint-plugin-react';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import tseslint from 'typescript-eslint';
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  eslint.configs.recommended,
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  ...tseslint.configs.recommended,
  ...pluginQuery.configs['flat/recommended'],
  configPrettier,
  {
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      'simple-import-sort': simpleImportSort,
      react: reactPlugin,
    },

    rules: {
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-empty-function': 'warn',
      '@typescript-eslint/consistent-type-imports': 'warn',

      'react/jsx-boolean-value': ['warn', 'never'],
      'react/jsx-no-useless-fragment': 'warn',
      'react/self-closing-comp': 'warn',
      'react-hooks/exhaustive-deps': 'warn',

      
      '@next/next/no-img-element': 'warn',
      
      'import/no-unresolved': 'error',
      'import/newline-after-import': ['warn', { count: 2 }],
      'simple-import-sort/exports': 'warn',
      'simple-import-sort/imports': [
        'warn',
        {
          groups: [
            ['^node:.*', '^(fs|path|crypto)$'],

            ['^react$', '^@?\\w'],

            ['^@/'],

            ['^\\.\\./', '^\\./'],

            ['^.+\\.s?css$', '^.+\\.(png|jpg|svg)$'],

            ['^\\.'],
          ],
        },
      ],
    },
  },
];

export default eslintConfig;
