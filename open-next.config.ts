import { defineCloudflareConfig } from '@opennextjs/cloudflare';

export default defineCloudflareConfig({
  // This ensures the worker handles the main request and 
  // falls back to static assets only when needed.
  default: {
    runtime: "cloudflare-nodejs",
  }
});
