import { defineConfig, oesterAdapter, staticAdapter } from '@waldjs/cli'

// Oester zet OESTER in de build: daar schrijft de site naar .oester/output, elders naar dist.
export default defineConfig({
  adapter: process.env.OESTER ? oesterAdapter() : staticAdapter(),
})
