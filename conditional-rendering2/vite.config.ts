/// <reference types="vitest" />
/// <reference types="vite/client" />
// Configure Vitest (https://vitest.dev/config/)

import { defineConfig } from 'vite'
import react from "@vitejs/plugin-react"

export default defineConfig({
    plugins: [react()],
    test: {
        /* for example, use global to avoid globals imports (describe, test, expect): */
         globals: true,
        environment: 'jsdom',
        css: true,
        setupFiles: "./src/setup.ts"
    },
})