import tseslint from 'typescript-eslint';
import eslintPluginPlaywright from 'eslint-plugin-playwright';

/** @type {import("eslint").Linter.FlatConfig} */
export default [
  ...tseslint.configs.recommended,
  {
    files: ['**/*.ts'],
    languageOptions: {
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        project: './tsconfig.json',
      },
    },
    plugins: {
      playwright: eslintPluginPlaywright,
    },
    rules: {
      // Custom rules
      semi: ['error', 'always'],
      quotes: ['error', 'single'],
      '@typescript-eslint/no-unused-vars': ['warn'],
      '@typescript-eslint/explicit-function-return-type': 'off',
    },
  },
  {
    // Playwright-specific rules
    files: ['**/*.spec.ts', '**/*.test.ts'],
    plugins: {
      playwright: eslintPluginPlaywright,
    },
    rules: {
      ...eslintPluginPlaywright.configs.recommended.rules,
    },
  },
];
