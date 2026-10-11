import { defineConfig } from 'astro/config';

// 1. Replace "username" with your GitHub username.
// 2. User site (username.github.io repo): keep base as '/'.
//    Project site (any other repo name): set base to '/your-repo-name/'.
export default defineConfig({
  site: 'https://username.github.io',
  base: '/',
});
