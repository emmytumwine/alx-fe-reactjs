import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'

export default [
<<<<<<< HEAD
<<<<<<< HEAD
  { ignores: ['dist'] },
  {
    files: ['**/*.{js,jsx}'],
=======
  {
    files: ['**/*.{js,jsx}'],
    ignores: ['dist'],
>>>>>>> 86ac60da8c29cee95f9a5bc9f489366ae106b6fa
=======
  { ignores: ['dist'] },
  {
    files: ['**/*.{js,jsx}'],
>>>>>>> eaf2e2f (Recipe Form)
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    settings: { react: { version: '18.3' } },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      'react/jsx-no-target-blank': 'off',
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
]
