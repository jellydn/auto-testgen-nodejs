import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    hookTimeout: 30000, // Increase timeout to 30000ms (30 seconds)
    globals: true,
  },
});
