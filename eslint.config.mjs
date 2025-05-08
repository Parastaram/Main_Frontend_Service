import { defineConfig } from '@fullstacksjs/eslint-config';

export default defineConfig({
  node: true,
  esm: true,
  next: true,
  rules: {
    'no-console': 'error',
    'no-empty-function': 'error',
  },
});
