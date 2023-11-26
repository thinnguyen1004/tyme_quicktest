/* eslint-disable no-undef */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: process.env.VITE_PORT || 3000,
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
