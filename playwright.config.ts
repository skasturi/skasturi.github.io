import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  use: {
    baseURL: 'http://localhost:49152',
    screenshot: 'only-on-failure',
  },
  webServer: {
    command: 'bundle exec jekyll build && python3 -m http.server 49152 --directory _site',
    url: 'http://localhost:49152',
    reuseExistingServer: !process.env.CI,
    timeout: 60000,
  },
});
