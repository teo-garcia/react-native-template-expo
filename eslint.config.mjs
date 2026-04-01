// eslint-disable-next-line simple-import-sort/imports
import { defineConfig } from 'eslint/config'
import shared from '@teo-garcia/eslint-config-shared'
import sharedReactNative from '@teo-garcia/eslint-config-shared/react-native'

export default defineConfig([
  ...shared,
  ...sharedReactNative,
  {
    ignores: [
      '.expo/**',
      'android/**',
      'ios/**',
      'dist/**',
      'node_modules/**',
      // CommonJS configs — Metro, Babel, and Tailwind require CJS syntax;
      // cannot use ESM here regardless of the unicorn/prefer-module rule.
      'babel.config.js',
      'metro.config.js',
    ],
  },
])
