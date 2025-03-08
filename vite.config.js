import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://ieee-enrollments-backend.vercel.app",
        changeOrigin: true,
        secure: false,
        ws: true,
      },
    },
  },
});
