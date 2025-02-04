import { dirname } from 'path';

import { FlatCompat } from '@eslint/eslintrc';
import pluginQuery from '@tanstack/eslint-plugin-query';
import configPrettier from 'eslint-config-prettier';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  ...pluginQuery.configs['flat/recommended'],
  configPrettier,
  {
    plugins: {
      'simple-import-sort': simpleImportSort,
    },

    rules: {
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-empty-function': 'warn',
      '@typescript-eslint/consistent-type-imports': 'warn',

      'react/jsx-boolean-value': ['warn', 'never'],
      'react/jsx-no-useless-fragment': 'warn',
      'react/self-closing-comp': 'warn',
      'simple-import-sort/imports': 'warn',
      'simple-import-sort/exports': 'warn',

      'import/no-unresolved': 'error',
      'import/newline-after-import': ['warn', { count: 2 }],

      'react-hooks/exhaustive-deps': 'warn',
      '@next/next/no-img-element': 'warn',

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
